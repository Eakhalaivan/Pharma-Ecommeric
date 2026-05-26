package com.pharmadesk.backend.pharmacy.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public class MedicineDTO {
    // Identity & Core Fields
    private Long id;
    private String name;
    private String barcode;
    private String genericName;
    private String manufacturer;
    private String category;
    private String unit;
    private String hsnCode;
    private BigDecimal taxPercentage;
    private BigDecimal gstPercent;
    private Integer reorderLevel;

    // E-Commerce specific fields
    private String description;
    private String image;
    private boolean prescriptionRequired;
    private Double avgRating = 0.0;
    private Integer reviewCount = 0;
    private boolean isActive = true;

    // Computed / stock-derived fields
    private Integer totalStock = 0;
    private boolean inStock = false;
    private BigDecimal currentSellingPrice = BigDecimal.ZERO;
    private BigDecimal purchasePrice = BigDecimal.ZERO;

    // PMS Legacy / compatibility
    private Integer currentStock = 0;

    // Compatibility fields for E-Commerce React frontend
    private double price = 0.0;
    private int stockCount = 0;
    private double rating = 0.0;
    private int reviews = 0;
    private int lowStockThreshold = 10;
    private LocalDate expiryDate;
    private String batchNumber;

    // Standard Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getBarcode() { return barcode; }
    public void setBarcode(String barcode) { this.barcode = barcode; }

    public String getGenericName() { return genericName; }
    public void setGenericName(String genericName) { this.genericName = genericName; }

    public String getManufacturer() { return manufacturer; }
    public void setManufacturer(String manufacturer) { this.manufacturer = manufacturer; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }

    public String getHsnCode() { return hsnCode; }
    public void setHsnCode(String hsnCode) { this.hsnCode = hsnCode; }

    public BigDecimal getTaxPercentage() { return taxPercentage; }
    public void setTaxPercentage(BigDecimal taxPercentage) { this.taxPercentage = taxPercentage; }

    public BigDecimal getGstPercent() { return gstPercent; }
    public void setGstPercent(BigDecimal gstPercent) { this.gstPercent = gstPercent; }

    public Integer getReorderLevel() { return reorderLevel; }
    public void setReorderLevel(Integer reorderLevel) { 
        this.reorderLevel = reorderLevel; 
        if (reorderLevel != null) {
            this.lowStockThreshold = reorderLevel;
        }
    }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public boolean isPrescriptionRequired() { return prescriptionRequired; }
    public void setPrescriptionRequired(boolean prescriptionRequired) { this.prescriptionRequired = prescriptionRequired; }

    public Double getAvgRating() { return avgRating; }
    public void setAvgRating(Double avgRating) { 
        this.avgRating = avgRating; 
        if (avgRating != null) {
            this.rating = avgRating;
        }
    }

    public Integer getReviewCount() { return reviewCount; }
    public void setReviewCount(Integer reviewCount) { 
        this.reviewCount = reviewCount; 
        if (reviewCount != null) {
            this.reviews = reviewCount;
        }
    }

    public boolean isActive() { return isActive; }
    public void setActive(boolean active) { isActive = active; }

    public Integer getTotalStock() { return totalStock; }
    public void setTotalStock(Integer totalStock) { 
        this.totalStock = totalStock; 
        this.currentStock = totalStock;
        this.stockCount = totalStock != null ? totalStock : 0;
        this.inStock = totalStock != null && totalStock > 0;
    }

    public boolean isInStock() { return inStock; }
    public void setInStock(boolean inStock) { this.inStock = inStock; }

    public BigDecimal getCurrentSellingPrice() { return currentSellingPrice; }
    public void setCurrentSellingPrice(BigDecimal currentSellingPrice) { 
        this.currentSellingPrice = currentSellingPrice; 
        if (currentSellingPrice != null) {
            this.price = currentSellingPrice.doubleValue();
        }
    }

    public BigDecimal getPurchasePrice() { return purchasePrice; }
    public void setPurchasePrice(BigDecimal purchasePrice) { this.purchasePrice = purchasePrice; }

    public Integer getCurrentStock() { return currentStock; }
    public void setCurrentStock(Integer currentStock) { 
        this.currentStock = currentStock; 
        if (currentStock != null) {
            this.totalStock = currentStock;
            this.stockCount = currentStock;
            this.inStock = currentStock > 0;
        }
    }

    // Compatibility fields getters and setters
    public double getPrice() { return price; }
    public void setPrice(double price) { 
        this.price = price; 
        this.currentSellingPrice = BigDecimal.valueOf(price);
    }

    public int getStockCount() { return stockCount; }
    public void setStockCount(int stockCount) { 
        this.stockCount = stockCount; 
        this.totalStock = stockCount;
        this.currentStock = stockCount;
        this.inStock = stockCount > 0;
    }

    public double getRating() { return rating; }
    public void setRating(double rating) { 
        this.rating = rating; 
        this.avgRating = rating;
    }

    public int getReviews() { return reviews; }
    public void setReviews(int reviews) { 
        this.reviews = reviews; 
        this.reviewCount = reviews;
    }

    public int getLowStockThreshold() { return lowStockThreshold; }
    public void setLowStockThreshold(int lowStockThreshold) { 
        this.lowStockThreshold = lowStockThreshold; 
        this.reorderLevel = lowStockThreshold;
    }

    public LocalDate getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDate expiryDate) { this.expiryDate = expiryDate; }

    public String getBatchNumber() { return batchNumber; }
    public void setBatchNumber(String batchNumber) { this.batchNumber = batchNumber; }
}

class StockDTO {
    private Long id;
    private String batchNumber;
    private LocalDate expiryDate;
    private Integer quantityAvailable;
    private BigDecimal sellingRate;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getBatchNumber() { return batchNumber; }
    public void setBatchNumber(String batchNumber) { this.batchNumber = batchNumber; }
    public LocalDate getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDate expiryDate) { this.expiryDate = expiryDate; }
    public Integer getQuantityAvailable() { return quantityAvailable; }
    public void setQuantityAvailable(Integer quantityAvailable) { this.quantityAvailable = quantityAvailable; }
    public BigDecimal getSellingRate() { return sellingRate; }
    public void setSellingRate(BigDecimal sellingRate) { this.sellingRate = sellingRate; }
}
