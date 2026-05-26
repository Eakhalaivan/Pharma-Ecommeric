-- Flyway Migration V26: Seed additional wellness and protein products under vitamins (Antioxidant Capsules, Electrolyte Powder, Whey Protein, Collagen Powder, Protein Powder)

-- 1. Insert Antioxidant Capsules
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Antioxidant Capsules',
  'Multivitamins & Antioxidant Complex',
  'HealthKart',
  'vitamins',
  'Bottle',
  '2936',
  18.00,
  15,
  'Premium daily antioxidant capsules formulated to fight free radicals, enhance cellular vitality, support cardiovascular function, and promote youthful skin glow.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  220.00,
  4.70,
  180,
  TRUE
);

-- 2. Seed stock for Antioxidant Capsules
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT09', '2030-07-31', 130, 220.00, 349.00 FROM medicines WHERE name = 'Antioxidant Capsules';


-- 3. Insert Electrolyte Powder
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Electrolyte Powder',
  'Oral Rehydration Salts with Zinc',
  'Fast&Up',
  'vitamins',
  'Box',
  '3004',
  18.00,
  10,
  'Instant hydration electrolyte powder. Loaded with essential minerals and zinc to rapidly replenish lost fluids, boost muscular endurance, and prevent cramps.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  150.00,
  4.80,
  210,
  TRUE
);

-- 4. Seed stock for Electrolyte Powder
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT10', '2030-02-28', 140, 150.00, 249.00 FROM medicines WHERE name = 'Electrolyte Powder';


-- 5. Insert Whey Protein
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Whey Protein',
  'Whey Protein Isolate & Concentrate',
  'Optimum Nutrition',
  'vitamins',
  'Tub',
  '2106',
  18.00,
  8,
  'Premium gold standard whey protein powder. Delivers 24g of pure fast-digesting protein per serving. Perfect for muscle building, rapid post-workout recovery, and nutritional strength.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  2400.00,
  4.90,
  520,
  TRUE
);

-- 6. Seed stock for Whey Protein
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT11', '2029-12-31', 80, 2400.00, 3499.00 FROM medicines WHERE name = 'Whey Protein';


-- 7. Insert Collagen Powder
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Collagen Powder',
  'Hydrolyzed Collagen Peptides',
  'Oziva',
  'vitamins',
  'Jar',
  '2106',
  18.00,
  10,
  'Hydrolyzed marine collagen peptides powder. Supports skin elasticity, minimizes fine lines, strengthens nails, promotes hair thickness, and maintains optimal joint health.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  650.00,
  4.75,
  160,
  TRUE
);

-- 8. Seed stock for Collagen Powder
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT12', '2029-05-31', 100, 650.00, 999.00 FROM medicines WHERE name = 'Collagen Powder';


-- 9. Insert Protein Powder
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Protein Powder',
  'Plant Based Vegan Protein',
  'MuscleBlaze',
  'vitamins',
  'Jar',
  '2106',
  18.00,
  12,
  'All-natural plant protein powder containing organic pea and brown rice protein isolates. Provides clean vegan nutrition, smooth texture, and balanced amino acid profile.',
  'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  FALSE,
  950.00,
  4.65,
  280,
  TRUE
);

-- 10. Seed stock for Protein Powder
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT13', '2029-10-31', 110, 950.00, 1499.00 FROM medicines WHERE name = 'Protein Powder';
