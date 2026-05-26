package com.pharmadesk.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;

import java.math.BigDecimal;

@Entity
@Table(name = "medicines")
@SQLDelete(sql = "UPDATE medicines SET is_deleted = true WHERE id=?")
@SQLRestriction("is_deleted=false")
public class Medicine extends BaseEntity {

    @NotBlank(message = "Medicine name is required")
    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String barcode;

    @Column(name = "generic_name")
    private String genericName;

    private String manufacturer;
    private String category;
    private String unit;

    @Column(name = "hsn_code")
    private String hsnCode;

    @NotNull(message = "Tax percentage is required")
    @Column(name = "tax_percentage")
    private BigDecimal taxPercentage = BigDecimal.ZERO;

    @Column(name = "reorder_level")
    @JsonProperty("reorderLevel")
    private Integer reorderLevel = 10;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String image;

    @Column(name = "prescription_required")
    private boolean prescriptionRequired = false;

    @Column(name = "purchase_price")
    private BigDecimal purchasePrice = BigDecimal.ZERO;

    @Column(name = "avg_rating")
    private Double avgRating = 0.0;

    @Column(name = "review_count")
    private Integer reviewCount = 0;

    @Column(name = "is_active")
    private boolean isActive = true;


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
    public Integer getReorderLevel() { return reorderLevel; }
    public void setReorderLevel(Integer reorderLevel) { this.reorderLevel = reorderLevel; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
    public boolean isPrescriptionRequired() { return prescriptionRequired; }
    public void setPrescriptionRequired(boolean prescriptionRequired) { this.prescriptionRequired = prescriptionRequired; }
    public BigDecimal getPurchasePrice() { return purchasePrice; }
    public void setPurchasePrice(BigDecimal purchasePrice) { this.purchasePrice = purchasePrice; }
    public Double getAvgRating() { return avgRating; }
    public void setAvgRating(Double avgRating) { this.avgRating = avgRating; }
    public Integer getReviewCount() { return reviewCount; }
    public void setReviewCount(Integer reviewCount) { this.reviewCount = reviewCount; }
    public boolean isActive() { return isActive; }
    public void setActive(boolean active) { isActive = active; }
}
