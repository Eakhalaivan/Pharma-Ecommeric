package com.pharmadesk.backend.pharmacy.controller;

import com.pharmadesk.backend.model.Medicine;
import com.pharmadesk.backend.model.MedicineStock;
import com.pharmadesk.backend.pharmacy.repository.MedicineRepository;
import com.pharmadesk.backend.pharmacy.repository.MedicineStockRepository;
import com.pharmadesk.backend.pharmacy.dto.ApiResponse;
import com.pharmadesk.backend.pharmacy.dto.MedicineDTO;
import com.pharmadesk.backend.pharmacy.mapper.MedicineMapper;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class MedicineController {

    private final MedicineRepository medicineRepository;
    private final MedicineStockRepository stockRepository;
    private final MedicineMapper medicineMapper;
    private final com.pharmadesk.backend.service.EmailService emailService;
    private final com.pharmadesk.backend.repository.UserRepository userRepository;

    public MedicineController(MedicineRepository medicineRepository, 
                              MedicineStockRepository stockRepository, 
                              MedicineMapper medicineMapper,
                              com.pharmadesk.backend.service.EmailService emailService,
                              com.pharmadesk.backend.repository.UserRepository userRepository) {
        this.medicineRepository = medicineRepository;
        this.stockRepository = stockRepository;
        this.medicineMapper = medicineMapper;
        this.emailService = emailService;
        this.userRepository = userRepository;
    }

    /**
     * Helper method to enrich a Medicine entity to a fully-populated MedicineDTO
     * containing both PMS fields and calculated stock/e-commerce fields.
     */
    private MedicineDTO enrichMedicineDTO(Medicine medicine) {
        MedicineDTO dto = medicineMapper.toDto(medicine);
        
        // Sum stock quantity across non-expired, active batches
        Integer stock = stockRepository.sumAvailableByMedicineId(medicine.getId());
        dto.setTotalStock(stock != null ? stock : 0);
        
        // Retrieve selling price from nearest expiry batch
        List<BigDecimal> prices = stockRepository.findSellingRatesByMedicine(medicine.getId());
        if (prices != null && !prices.isEmpty()) {
            dto.setCurrentSellingPrice(prices.get(0));
        } else {
            dto.setCurrentSellingPrice(medicine.getPurchasePrice() != null ? 
                medicine.getPurchasePrice().multiply(BigDecimal.valueOf(1.3)) : BigDecimal.ZERO);
        }
        
        // Find batch number and expiry date from soonest-to-expire batch for E-Commerce React compatibility
        List<MedicineStock> stocks = stockRepository.findByMedicineIdAndDeletedFalse(medicine.getId());
        if (stocks != null && !stocks.isEmpty()) {
            MedicineStock soonest = stocks.stream()
                .filter(s -> s.getExpiryDate() != null && s.getExpiryDate().isAfter(LocalDate.now().minusDays(1)))
                .min(Comparator.comparing(MedicineStock::getExpiryDate))
                .orElse(null);
            if (soonest != null) {
                dto.setExpiryDate(soonest.getExpiryDate());
                dto.setBatchNumber(soonest.getBatchNumber());
            }
        }
        
        return dto;
    }

    // ==========================================
    // PMS ENDPOINTS (Base: /api/pharmacy)
    // ==========================================

    @GetMapping("/api/pharmacy/medicines")
    public ResponseEntity<ApiResponse<List<MedicineDTO>>> getAllMedicines() {
        List<MedicineDTO> dtos = medicineRepository.findAll().stream()
                .map(this::enrichMedicineDTO)
                .toList();
        return ResponseEntity.ok(ApiResponse.success(dtos, "Medicines fetched successfully"));
    }

    @PreAuthorize("hasAnyRole('SYSTEM_ADMIN','PHARMACY_STAFF')")
    @PostMapping("/api/pharmacy/medicines")
    public ResponseEntity<ApiResponse<Medicine>> createMedicine(@Valid @RequestBody Medicine medicine) {
        if (medicine.getBarcode() == null || medicine.getBarcode().isBlank()) {
            medicine.setBarcode(UUID.randomUUID().toString().substring(0, 8));
        }
        Medicine saved = medicineRepository.save(medicine);
        return ResponseEntity.ok(ApiResponse.success(saved, "Medicine added successfully"));
    }

    @PreAuthorize("hasAnyRole('SYSTEM_ADMIN','PHARMACY_STAFF')")
    @PutMapping("/api/pharmacy/medicines/{id}")
    public ResponseEntity<ApiResponse<MedicineDTO>> updateMedicine(@PathVariable Long id, @Valid @RequestBody Medicine medicineData) {
        return medicineRepository.findById(id).map(medicine -> {
            medicine.setName(medicineData.getName());
            medicine.setGenericName(medicineData.getGenericName());
            medicine.setManufacturer(medicineData.getManufacturer());
            medicine.setCategory(medicineData.getCategory());
            medicine.setUnit(medicineData.getUnit());
            medicine.setHsnCode(medicineData.getHsnCode());
            medicine.setTaxPercentage(medicineData.getTaxPercentage());
            medicine.setReorderLevel(medicineData.getReorderLevel());
            
            // Merged E-Commerce fields
            medicine.setDescription(medicineData.getDescription());
            medicine.setImage(medicineData.getImage());
            medicine.setPrescriptionRequired(medicineData.isPrescriptionRequired());
            medicine.setPurchasePrice(medicineData.getPurchasePrice());
            medicine.setActive(medicineData.isActive());
            
            Medicine updated = medicineRepository.save(medicine);
            return ResponseEntity.ok(ApiResponse.success(enrichMedicineDTO(updated), "Medicine updated successfully"));
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/api/pharmacy/medicines/search")
    public ResponseEntity<List<MedicineDTO>> searchMedicines(@RequestParam String name) {
        List<MedicineDTO> dtos = medicineRepository.findByNameContainingIgnoreCase(name).stream()
                .map(this::enrichMedicineDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }

    // ==========================================
    // E-COMMERCE ENDPOINTS (Base: /api/v1/medicines)
    // ==========================================

    @GetMapping("/api/v1/medicines")
    public ResponseEntity<Page<MedicineDTO>> getAllEcommerceMedicines(Pageable pageable) {
        Page<Medicine> medicines = medicineRepository.findAll(pageable);
        List<MedicineDTO> dtos = medicines.stream()
                .map(this::enrichMedicineDTO)
                .toList();
        return ResponseEntity.ok(new PageImpl<>(dtos, pageable, medicines.getTotalElements()));
    }

    @GetMapping("/api/v1/medicines/{id}")
    public ResponseEntity<MedicineDTO> getEcommerceMedicineById(@PathVariable Long id) {
        return medicineRepository.findById(id)
                .map(this::enrichMedicineDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/api/v1/medicines/low-stock")
    public ResponseEntity<List<MedicineDTO>> getEcommerceLowStockMedicines() {
        List<MedicineDTO> dtos = medicineRepository.findAll().stream()
                .map(this::enrichMedicineDTO)
                .filter(dto -> dto.getStockCount() < dto.getLowStockThreshold())
                .toList();
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/api/v1/medicines/search")
    public ResponseEntity<List<MedicineDTO>> searchEcommerceMedicines(@RequestParam String name) {
        List<MedicineDTO> dtos = medicineRepository.findByNameContainingIgnoreCase(name).stream()
                .map(this::enrichMedicineDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }

    @PostMapping("/api/v1/medicines")
    public ResponseEntity<MedicineDTO> createEcommerceMedicine(@Valid @RequestBody MedicineDTO dto) {
        Medicine medicine = new Medicine();
        medicine.setName(dto.getName());
        medicine.setDescription(dto.getDescription());
        medicine.setImage(dto.getImage());
        medicine.setPrescriptionRequired(dto.isPrescriptionRequired());
        medicine.setCategory(dto.getCategory());
        medicine.setManufacturer(dto.getManufacturer());
        medicine.setReorderLevel(dto.getLowStockThreshold() > 0 ? dto.getLowStockThreshold() : 10);
        medicine.setPurchasePrice(BigDecimal.valueOf(dto.getPrice() * 0.7));
        medicine.setTaxPercentage(BigDecimal.valueOf(18.0)); // Default standard GST
        medicine.setBarcode(dto.getBarcode() != null && !dto.getBarcode().isBlank() ? 
            dto.getBarcode() : UUID.randomUUID().toString().substring(0, 8));
        medicine.setActive(dto.isActive());
        
        Medicine saved = medicineRepository.save(medicine);
        
        // Save initial stock batch if stockCount > 0
        if (dto.getStockCount() > 0) {
            MedicineStock stock = new MedicineStock();
            stock.setMedicine(saved);
            stock.setBatchNumber(dto.getBatchNumber() != null && !dto.getBatchNumber().isBlank() ? 
                dto.getBatchNumber() : "BATCH-01");
            stock.setExpiryDate(dto.getExpiryDate() != null ? dto.getExpiryDate() : LocalDate.now().plusYears(1));
            stock.setQuantityAvailable(dto.getStockCount());
            stock.setSellingRate(BigDecimal.valueOf(dto.getPrice()));
            stock.setPurchaseRate(BigDecimal.valueOf(dto.getPrice() * 0.7));
            stockRepository.save(stock);
        }
        
        return new ResponseEntity<>(enrichMedicineDTO(saved), HttpStatus.CREATED);
    }

    @PutMapping("/api/v1/medicines/{id}")
    public ResponseEntity<MedicineDTO> updateEcommerceMedicine(@PathVariable Long id, @Valid @RequestBody MedicineDTO dto) {
        return medicineRepository.findById(id).map(medicine -> {
            medicine.setName(dto.getName());
            medicine.setDescription(dto.getDescription());
            medicine.setImage(dto.getImage());
            medicine.setPrescriptionRequired(dto.isPrescriptionRequired());
            medicine.setCategory(dto.getCategory());
            medicine.setManufacturer(dto.getManufacturer());
            medicine.setReorderLevel(dto.getLowStockThreshold() > 0 ? dto.getLowStockThreshold() : 10);
            if (dto.getPrice() > 0) {
                medicine.setPurchasePrice(BigDecimal.valueOf(dto.getPrice() * 0.7));
            }
            medicine.setActive(dto.isActive());
            Medicine saved = medicineRepository.save(medicine);
            
            // Check if we should update or add stock
            List<MedicineStock> stocks = stockRepository.findByMedicineIdAndDeletedFalse(saved.getId());
            if (stocks != null && !stocks.isEmpty()) {
                MedicineStock soonest = stocks.stream()
                    .filter(s -> s.getExpiryDate() != null && s.getExpiryDate().isAfter(LocalDate.now().minusDays(1)))
                    .min(Comparator.comparing(MedicineStock::getExpiryDate))
                    .orElse(null);
                
                if (soonest != null) {
                    soonest.setQuantityAvailable(dto.getStockCount());
                    if (dto.getPrice() > 0) {
                        soonest.setSellingRate(BigDecimal.valueOf(dto.getPrice()));
                        soonest.setPurchaseRate(BigDecimal.valueOf(dto.getPrice() * 0.7));
                    }
                    if (dto.getBatchNumber() != null && !dto.getBatchNumber().isBlank()) {
                        soonest.setBatchNumber(dto.getBatchNumber());
                    }
                    if (dto.getExpiryDate() != null) {
                        soonest.setExpiryDate(dto.getExpiryDate());
                    }
                    stockRepository.save(soonest);
                } else {
                    MedicineStock stock = new MedicineStock();
                    stock.setMedicine(saved);
                    stock.setBatchNumber(dto.getBatchNumber() != null && !dto.getBatchNumber().isBlank() ? 
                        dto.getBatchNumber() : "BATCH-01");
                    stock.setExpiryDate(dto.getExpiryDate() != null ? dto.getExpiryDate() : LocalDate.now().plusYears(1));
                    stock.setQuantityAvailable(dto.getStockCount());
                    stock.setSellingRate(BigDecimal.valueOf(dto.getPrice()));
                    stock.setPurchaseRate(BigDecimal.valueOf(dto.getPrice() * 0.7));
                    stockRepository.save(stock);
                }
            } else {
                MedicineStock stock = new MedicineStock();
                stock.setMedicine(saved);
                stock.setBatchNumber(dto.getBatchNumber() != null && !dto.getBatchNumber().isBlank() ? 
                    dto.getBatchNumber() : "BATCH-01");
                stock.setExpiryDate(dto.getExpiryDate() != null ? dto.getExpiryDate() : LocalDate.now().plusYears(1));
                stock.setQuantityAvailable(dto.getStockCount());
                stock.setSellingRate(BigDecimal.valueOf(dto.getPrice()));
                stock.setPurchaseRate(BigDecimal.valueOf(dto.getPrice() * 0.7));
                stockRepository.save(stock);
            }
            
            return ResponseEntity.ok(enrichMedicineDTO(saved));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/api/v1/medicines/{id}")
    public ResponseEntity<Void> deleteEcommerceMedicine(@PathVariable Long id) {
        return medicineRepository.findById(id).map(medicine -> {
            medicineRepository.delete(medicine);
            return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        }).orElse(ResponseEntity.notFound().build());
    }

    // ==========================================
    // BATCH / STOCK ENDPOINTS (Base: /api/pharmacy)
    // ==========================================

    @GetMapping("/api/pharmacy/stocks/search")
    public ResponseEntity<List<MedicineStock>> searchStocks(@RequestParam String name) {
        return ResponseEntity.ok(stockRepository.findByMedicineNameContainingIgnoreCase(name));
    }

    @GetMapping("/api/pharmacy/stocks/barcode/{barcode}")
    public ResponseEntity<ApiResponse<MedicineStock>> getStockByBarcode(@PathVariable String barcode) {
        return medicineRepository.findByBarcode(barcode)
                .flatMap(medicine -> stockRepository.findByMedicineId(medicine.getId()).stream()
                        .filter(s -> s.getQuantityAvailable() > 0)
                        .findFirst())
                .map(stock -> ResponseEntity.ok(ApiResponse.success(stock, "Stock found")))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/api/pharmacy/stocks")
    public ResponseEntity<ApiResponse<List<MedicineStock>>> getAllStocks() {
        return ResponseEntity.ok(ApiResponse.success(stockRepository.findAll(), "Stocks fetched successfully"));
    }

    @PreAuthorize("hasAnyRole('SYSTEM_ADMIN','PHARMACY_STAFF')")
    @PostMapping("/api/pharmacy/stocks")
    public ResponseEntity<ApiResponse<MedicineStock>> addStock(@Valid @RequestBody MedicineStock stock) {
        if (stock.getMedicine() != null && stock.getMedicine().getId() != null) {
            Medicine medicine = medicineRepository.findById(stock.getMedicine().getId())
                    .orElseThrow(() -> new RuntimeException("Medicine not found"));
            stock.setMedicine(medicine);
        }
        MedicineStock saved = stockRepository.save(stock);
        return ResponseEntity.ok(ApiResponse.success(saved, "Stock updated successfully"));
    }
}
