-- Flyway Migration V25: Seed additional vitamin products (Vitamin C Capsules, Vitamin D3 Capsules, Zinc Supplements, Omega 3 Capsules, Multivitamin Capsules, Cod Liver Oil)

-- 1. Insert Vitamin C Capsules
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Vitamin C Capsules',
  'Ascorbic Acid 500mg',
  'Himalaya',
  'vitamins',
  'Bottle',
  '2936',
  18.00,
  15,
  'Premium 100% natural Vitamin C capsules, enriched with Amla and Rosehip extracts. Strong antioxidant support to boost daily immunity, promote skin health, and aid iron absorption.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  150.00,
  4.75,
  320,
  TRUE
);

-- 2. Seed stock for Vitamin C Capsules
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT03', '2030-05-31', 180, 150.00, 220.00 FROM medicines WHERE name = 'Vitamin C Capsules';


-- 3. Insert Vitamin D3 Capsules
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Vitamin D3 Capsules',
  'Cholecalciferol 60000 IU',
  'Cadila',
  'vitamins',
  'Bottle',
  '2936',
  18.00,
  12,
  'Weekly high-potency Vitamin D3 (Cholecalciferol) 60K capsules. Essential for strong bones, teeth, muscle function, and robust immune system performance.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  120.00,
  4.80,
  215,
  TRUE
);

-- 4. Seed stock for Vitamin D3 Capsules
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT04', '2030-10-31', 140, 120.00, 179.00 FROM medicines WHERE name = 'Vitamin D3 Capsules';


-- 5. Insert Zinc Supplements
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Zinc Supplements',
  'Zinc Gluconate 50mg',
  'HealthKart',
  'vitamins',
  'Bottle',
  '2936',
  18.00,
  15,
  'High absorption zinc gluconate supplements to support cellular metabolism, immune system response, healthy skin texture, and accelerate wound healing.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  110.00,
  4.60,
  135,
  TRUE
);

-- 6. Seed stock for Zinc Supplements
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT05', '2030-03-31', 160, 110.00, 159.00 FROM medicines WHERE name = 'Zinc Supplements';


-- 7. Insert Omega 3 Capsules
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Omega 3 Capsules',
  'Fish Oil 1000mg',
  'WOW Life Science',
  'vitamins',
  'Bottle',
  '1504',
  18.00,
  15,
  'Premium Omega 3 fish oil softgels containing rich EPA and DHA. Supports cardiovascular wellness, cognitive brain function, joint flexibility, and healthy eyes.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  250.00,
  4.70,
  290,
  TRUE
);

-- 8. Seed stock for Omega 3 Capsules
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT06', '2029-12-31', 120, 250.00, 399.00 FROM medicines WHERE name = 'Omega 3 Capsules';


-- 9. Insert Multivitamin Capsules
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Multivitamin Capsules',
  'Multivitamins & Minerals Complex',
  'Revital',
  'vitamins',
  'Bottle',
  '2936',
  18.00,
  20,
  'Daily comprehensive multivitamin capsules for men and women, enhanced with ginseng and essential amino acids. Boosts daily energy, stamina, and overall vitality.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  180.00,
  4.65,
  340,
  TRUE
);

-- 10. Seed stock for Multivitamin Capsules
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT07', '2029-08-31', 220, 180.00, 269.00 FROM medicines WHERE name = 'Multivitamin Capsules';


-- 11. Insert Cod Liver Oil
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Cod Liver Oil',
  'Cod Liver Oil with Vitamin A & D',
  'Seven Seas',
  'vitamins',
  'Bottle',
  '1504',
  18.00,
  15,
  'Pure cod liver oil capsules enriched with natural Vitamins A and D. Supports normal immune system function, keeps skin healthy, and contributes to strong bones and teeth.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  220.00,
  4.80,
  420,
  TRUE
);

-- 12. Seed stock for Cod Liver Oil
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT08', '2030-01-31', 150, 220.00, 320.00 FROM medicines WHERE name = 'Cod Liver Oil';
