-- Flyway Migration V29: Seed additional syrup products (Benadryl Syrup, Ascoril Syrup, Corex Syrup, Zincovit Syrup, Crocin Syrup, Digene Syrup, Gelusil Syrup, Dexorange Syrup, Glucose Syrup, Iron Tonic Syrup)

-- 1. Insert Benadryl Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Benadryl Syrup',
  'Diphenhydramine Hydrochloride',
  'Johnson & Johnson',
  'syrups',
  'Bottle',
  '3004',
  12.00,
  15,
  'Fast and effective relief from dry cough, throat irritation, runny nose, and sneezing. Relieves congestion for peaceful sleep.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  80.00,
  4.70,
  340,
  TRUE
);

-- 2. Seed stock for Benadryl Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR03', '2030-05-31', 180, 80.00, 129.00 FROM medicines WHERE name = 'Benadryl Syrup';


-- 3. Insert Ascoril Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Ascoril Syrup',
  'Terbutaline / Ambroxol / Guaiphenesin',
  'Glenmark',
  'syrups',
  'Bottle',
  '3004',
  12.00,
  10,
  'Expectorant cough syrup that thins mucus, dilates airways, and eases chest congestion for productive wet cough relief.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  75.00,
  4.65,
  210,
  TRUE
);

-- 4. Seed stock for Ascoril Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR04', '2030-10-31', 130, 75.00, 115.00 FROM medicines WHERE name = 'Ascoril Syrup';


-- 5. Insert Corex Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Corex Syrup',
  'Chlorpheniramine Maleate & Dextromethorphan',
  'Pfizer',
  'syrups',
  'Bottle',
  '3004',
  12.00,
  12,
  'Effective syrup formulated to target severe dry cough and common cold symptoms. Suppresses cough reflexes and relieves allergies.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  90.00,
  4.55,
  195,
  TRUE
);

-- 6. Seed stock for Corex Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR05', '2030-03-31', 140, 90.00, 139.00 FROM medicines WHERE name = 'Corex Syrup';


-- 7. Insert Zincovit Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Zincovit Syrup',
  'Multivitamins, Minerals & Zinc Syrup',
  'Apex Laboratories',
  'syrups',
  'Bottle',
  '2936',
  18.00,
  20,
  'Highly popular nutritional supplement syrup containing essential vitamins, minerals, and zinc to boost immunity, support recovery, and counter nutritional deficiencies.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  110.00,
  4.80,
  420,
  TRUE
);

-- 8. Seed stock for Zincovit Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR06', '2029-12-31', 250, 110.00, 165.00 FROM medicines WHERE name = 'Zincovit Syrup';


-- 9. Insert Crocin Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Crocin Syrup',
  'Paracetamol Pediatric Suspension',
  'GlaxoSmithKline',
  'syrups',
  'Bottle',
  '3004',
  12.00,
  15,
  'Pediatric paracetamol suspension syrup. Fast-acting pain and fever relief for children, in a pleasant mixed fruit flavor.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  40.00,
  4.75,
  310,
  TRUE
);

-- 10. Seed stock for Crocin Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR07', '2029-08-31', 180, 40.00, 60.00 FROM medicines WHERE name = 'Crocin Syrup';


-- 11. Insert Digene Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Digene Syrup',
  'Active Antacid & Antigas Gel',
  'Abbott',
  'syrups',
  'Bottle',
  '3004',
  12.00,
  15,
  'Soothes acidity, heartburn, gas, and stomach discomfort. Fast-acting scientific formula that provides instant cooling relief, in a refreshing mint flavor.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  95.00,
  4.85,
  510,
  TRUE
);

-- 12. Seed stock for Digene Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR08', '2030-01-31', 210, 95.00, 145.00 FROM medicines WHERE name = 'Digene Syrup';


-- 13. Insert Gelusil Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Gelusil Syrup',
  'Aluminum Hydroxide / Magnesium Hydroxide / Simethicone',
  'Pfizer',
  'syrups',
  'Bottle',
  '3004',
  12.00,
  15,
  'Quick relief liquid antacid and anti-flatulent. Neutralizes excess stomach acid to cure indigestion, bloating, and heartburn, in a pleasant liquid form.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  80.00,
  4.70,
  260,
  TRUE
);

-- 14. Seed stock for Gelusil Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR09', '2031-11-30', 160, 80.00, 119.00 FROM medicines WHERE name = 'Gelusil Syrup';


-- 15. Insert Dexorange Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Dexorange Syrup',
  'Ferric Ammonium Citrate / Vitamin B12 / Folic Acid',
  'Franco-Indian',
  'syrups',
  'Bottle',
  '3004',
  12.00,
  15,
  'Highly effective hematinic syrup to treat iron deficiency, anemia, and general weakness. Boosts red blood cell production and energy levels.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  115.00,
  4.75,
  380,
  TRUE
);

-- 16. Seed stock for Dexorange Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR10', '2030-08-31', 200, 115.00, 175.00 FROM medicines WHERE name = 'Dexorange Syrup';


-- 17. Insert Glucose Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Glucose Syrup',
  'Liquid Glucose Energy Supplement',
  'Glucon-D',
  'syrups',
  'Bottle',
  '1702',
  18.00,
  12,
  'Instant energy-boosting liquid glucose syrup. Quickly replenishes blood sugar, fights fatigue, and restores physical vitality during sports or physical exhaustion.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  65.00,
  4.60,
  180,
  TRUE
);

-- 18. Seed stock for Glucose Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR11', '2030-04-30', 150, 65.00, 99.00 FROM medicines WHERE name = 'Glucose Syrup';


-- 19. Insert Iron Tonic Syrup
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Iron Tonic Syrup',
  'Iron and Multivitamin Tonic',
  'Cipla',
  'syrups',
  'Bottle',
  '3004',
  12.00,
  15,
  'Rich nourishing iron tonic. Helps build stamina, prevents fatigue, keeps the immune system healthy, and optimizes hemoglobin levels.',
  'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80',
  FALSE,
  100.00,
  4.65,
  195,
  TRUE
);

-- 20. Seed stock for Iron Tonic Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR12', '2031-01-31', 130, 100.00, 149.00 FROM medicines WHERE name = 'Iron Tonic Syrup';
