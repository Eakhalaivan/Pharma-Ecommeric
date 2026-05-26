-- Flyway Migration V27: Seed additional device products (Weighing Scale, Nebulizer, Back Support Belt, Cervical Pillow, Knee Support Belt, ECG Monitor)

-- 1. Insert Weighing Scale
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Weighing Scale',
  'Digital Body Weight Scale',
  'HealthSense',
  'devices',
  'Piece',
  '8423',
  18.00,
  10,
  'High-precision digital body weighing scale with step-on technology, large backlit LCD display, and durable tempered glass platform.',
  'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80',
  FALSE,
  450.00,
  4.65,
  180,
  TRUE
);

-- 2. Seed stock for Weighing Scale
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-DEV03', '2035-12-31', 120, 450.00, 799.00 FROM medicines WHERE name = 'Weighing Scale';


-- 3. Insert Nebulizer
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Nebulizer',
  'Compressor Nebulizer',
  'Omron',
  'devices',
  'Piece',
  '9019',
  12.00,
  8,
  'Highly effective compressor nebulizer machine for kids and adults. Offers efficient medication delivery, low noise level, and easy one-button operation.',
  'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80',
  FALSE,
  950.00,
  4.80,
  230,
  TRUE
);

-- 4. Seed stock for Nebulizer
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-DEV04', '2032-10-31', 90, 950.00, 1499.00 FROM medicines WHERE name = 'Nebulizer';


-- 5. Insert Back Support Belt
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Back Support Belt',
  'Lumbosacral Orthosis Belt',
  'Flamingo',
  'devices',
  'Piece',
  '9021',
  12.00,
  15,
  'Ergonomically designed lumbosacral back support belt. Provides excellent immobilization and compression for backache, spinal disorders, and postural fatigue.',
  'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80',
  FALSE,
  350.00,
  4.70,
  145,
  TRUE
);

-- 6. Seed stock for Back Support Belt
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-DEV05', '2031-06-30', 150, 350.00, 599.00 FROM medicines WHERE name = 'Back Support Belt';


-- 7. Insert Cervical Pillow
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Cervical Pillow',
  'Orthopedic Cervical Contour Pillow',
  'The Sleep Company',
  'devices',
  'Piece',
  '9404',
  18.00,
  10,
  'Orthopedic cervical contour memory foam pillow. Designed to maintain the natural curvature of the neck, reducing stiffness, neck pain, and shoulder tension.',
  'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80',
  FALSE,
  600.00,
  4.60,
  190,
  TRUE
);

-- 8. Seed stock for Cervical Pillow
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-DEV06', '2030-08-31', 100, 600.00, 999.00 FROM medicines WHERE name = 'Cervical Pillow';


-- 9. Insert Knee Support Belt
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Knee Support Belt',
  'Neoprene Knee Support Sleeve',
  'Vissco',
  'devices',
  'Piece',
  '9021',
  12.00,
  15,
  'Premium neoprene knee support sleeve with open patella design. Provides optimal compression, warmth, and stabilization for arthritis, sprains, and sports injuries.',
  'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80',
  FALSE,
  250.00,
  4.75,
  280,
  TRUE
);

-- 10. Seed stock for Knee Support Belt
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-DEV07', '2031-03-31', 170, 250.00, 449.00 FROM medicines WHERE name = 'Knee Support Belt';


-- 11. Insert ECG Monitor
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'ECG Monitor',
  'Portable Handheld ECG/EKG Monitor',
  'SanketLife',
  'devices',
  'Piece',
  '9018',
  18.00,
  5,
  'Portable, pocket-sized medical grade handheld ECG/EKG monitor. Captures clinical-grade heart rhythm diagnostics in just 30 seconds. Connects seamlessly with smartphones.',
  'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80',
  FALSE,
  4500.00,
  4.85,
  85,
  TRUE
);

-- 12. Seed stock for ECG Monitor
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-DEV08', '2033-05-31', 40, 4500.00, 6999.00 FROM medicines WHERE name = 'ECG Monitor';
