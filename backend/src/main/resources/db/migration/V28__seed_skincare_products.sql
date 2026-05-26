-- Flyway Migration V28: Seed additional skincare products (Face Wash, Acne Removal Cream, Coconut Oil Cream, Charcoal Face Wash, Neem Face Wash, Under Eye Cream, Calamine Lotion, Lip Balm, Foot Cream, Baby Lotion)

-- 1. Insert Face Wash
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Face Wash',
  'Daily Gentle Face Wash',
  'Cetaphil',
  'skincare',
  'Tube',
  '3304',
  18.00,
  15,
  'Dermatologist-tested gentle face wash that deep cleanses skin, removes dirt, oil, and impurities without stripping natural skin moisture.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  180.00,
  4.65,
  310,
  TRUE
);

-- 2. Seed stock for Face Wash
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK03', '2030-05-31', 150, 180.00, 299.00 FROM medicines WHERE name = 'Face Wash';


-- 3. Insert Acne Removal Cream
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Acne Removal Cream',
  'Benzoyl Peroxide 2.5%',
  'Galderma',
  'skincare',
  'Tube',
  '3004',
  12.00,
  10,
  'Highly effective spot treatment acne removal cream. Formulated with 2.5% benzoyl peroxide to clear breakouts, reduce redness, and prevent future acne.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  120.00,
  4.75,
  220,
  TRUE
);

-- 4. Seed stock for Acne Removal Cream
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK04', '2029-08-31', 110, 120.00, 189.00 FROM medicines WHERE name = 'Acne Removal Cream';


-- 5. Insert Coconut Oil Cream
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Coconut Oil Cream',
  'Extra Virgin Coconut Oil Moisturizer',
  'Parachute',
  'skincare',
  'Tub',
  '3304',
  18.00,
  15,
  'Rich deeply nourishing coconut oil cream. Made with pure cold-pressed extra virgin coconut oil to repair extremely dry skin, soften rough spots, and lock in moisture.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  80.00,
  4.60,
  140,
  TRUE
);

-- 6. Seed stock for Coconut Oil Cream
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK05', '2031-03-31', 130, 80.00, 129.00 FROM medicines WHERE name = 'Coconut Oil Cream';


-- 7. Insert Charcoal Face Wash
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Charcoal Face Wash',
  'Activated Charcoal Deep Cleanser',
  'Ponds',
  'skincare',
  'Tube',
  '3304',
  18.00,
  12,
  'Activated charcoal deep purifying face wash. Acts like a magnet to extract deep-seated pollutants, blackheads, excess oil, and environmental toxins.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  110.00,
  4.70,
  250,
  TRUE
);

-- 8. Seed stock for Charcoal Face Wash
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK06', '2030-01-31', 160, 110.00, 179.00 FROM medicines WHERE name = 'Charcoal Face Wash';


-- 9. Insert Neem Face Wash
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Neem Face Wash',
  'Purifying Neem Face Wash',
  'Himalaya',
  'skincare',
  'Tube',
  '3304',
  18.00,
  20,
  'Clinically proven clarifying neem face wash. Enriched with neem and turmeric to combat pimple-causing bacteria, soothe skin irritation, and regulate oil balance.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  75.00,
  4.80,
  480,
  TRUE
);

-- 10. Seed stock for Neem Face Wash
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK07', '2030-06-30', 220, 75.00, 119.00 FROM medicines WHERE name = 'Neem Face Wash';


-- 11. Insert Under Eye Cream
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Under Eye Cream',
  'Dark Circle Correcting Cream',
  'Biotique',
  'skincare',
  'Tube',
  '3304',
  18.00,
  10,
  'Advanced dark circle correcting under eye cream. Packed with peptides and cucumber extracts to visibly reduce puffiness, brighten tired eyes, and diminish fine lines.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  140.00,
  4.55,
  165,
  TRUE
);

-- 12. Seed stock for Under Eye Cream
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK08', '2029-12-31', 90, 140.00, 220.00 FROM medicines WHERE name = 'Under Eye Cream';


-- 13. Insert Calamine Lotion
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Calamine Lotion',
  'Soothing Calamine Lotion',
  'Lacto Calamine',
  'skincare',
  'Bottle',
  '3004',
  12.00,
  12,
  'Classic soothing calamine lotion. Instantly calms skin allergies, insect bites, prickly heat rash, sunburns, and controls excess oil secretion for acne-prone skin.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  90.00,
  4.70,
  280,
  TRUE
);

-- 14. Seed stock for Calamine Lotion
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK09', '2031-05-31', 140, 90.00, 149.00 FROM medicines WHERE name = 'Calamine Lotion';


-- 15. Insert Lip Balm
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Lip Balm',
  'Hydrating Lip Balm',
  'Nivea',
  'skincare',
  'Piece',
  '3304',
  18.00,
  25,
  'Intensely hydrating lip balm. Enriched with natural oils and shea butter to prevent chapping, provide 24-hour moisture, and keep lips beautifully soft.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  45.00,
  4.75,
  350,
  TRUE
);

-- 16. Seed stock for Lip Balm
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK10', '2030-10-31', 200, 45.00, 79.00 FROM medicines WHERE name = 'Lip Balm';


-- 17. Insert Foot Cream
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Foot Cream',
  'Cracked Heel Repair Cream',
  'Krack',
  'skincare',
  'Tube',
  '3304',
  18.00,
  12,
  'Deeply moisturizing cracked heel repair foot cream. Formulated with healing herbs to repair rough, dry, and cracked feet in just 5 days, making them ultra soft.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  60.00,
  4.60,
  190,
  TRUE
);

-- 18. Seed stock for Foot Cream
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK11', '2030-08-31', 150, 60.00, 99.00 FROM medicines WHERE name = 'Foot Cream';


-- 19. Insert Baby Lotion
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Baby Lotion',
  'Gentle Nourishing Baby Lotion',
  'Johnsons Baby',
  'skincare',
  'Bottle',
  '3304',
  18.00,
  15,
  'Clinically proven mild nourishing baby lotion. Formulated with coconut oil to gently hydrate baby skin, keeping it soft, smooth, and healthy for 24 hours.',
  'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80',
  FALSE,
  130.00,
  4.80,
  410,
  TRUE
);

-- 20. Seed stock for Baby Lotion
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SK12', '2031-11-30', 120, 130.00, 199.00 FROM medicines WHERE name = 'Baby Lotion';
