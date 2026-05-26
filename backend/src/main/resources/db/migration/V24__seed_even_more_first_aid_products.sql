-- Flyway Migration V24: Seed additional first-aid products (Pain Relief Spray, First Aid Box, CPR Mask, Hand Sanitizer, Wound Dressing Pad)

-- 1. Insert Pain Relief Spray
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Pain Relief Spray',
  'Diclofenac Diethylamine',
  'Volini',
  'first-aid',
  'Can',
  '3004',
  12.00,
  15,
  'Quick-action pain relief spray that penetrates deeply to relieve muscle aches, backaches, joint pains, and sports injuries instantly.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  90.00,
  4.60,
  240,
  TRUE
);

-- 2. Seed stock for Pain Relief Spray
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA09', '2030-08-31', 130, 90.00, 139.00 FROM medicines WHERE name = 'Pain Relief Spray';


-- 3. Insert First Aid Box
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'First Aid Box',
  'First Aid Kit container',
  'Milton',
  'first-aid',
  'Box',
  '3005',
  18.00,
  5,
  'Compact and durable wall-mountable first aid box with multiple compartments to store all your essential medicines, bandages, and medical items securely.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  180.00,
  4.85,
  110,
  TRUE
);

-- 4. Seed stock for First Aid Box
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA10', '2035-12-31', 60, 180.00, 299.00 FROM medicines WHERE name = 'First Aid Box';


-- 5. Insert CPR Mask
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'CPR Mask',
  'CPR Face Shield',
  'Ambu',
  'first-aid',
  'Piece',
  '9019',
  12.00,
  8,
  'High-quality CPR face shield mask with one-way valve to prevent direct contact during mouth-to-mouth resuscitation. Essential for first-aid emergency responders.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  110.00,
  4.70,
  75,
  TRUE
);

-- 6. Seed stock for CPR Mask
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA11', '2031-10-31', 90, 110.00, 175.00 FROM medicines WHERE name = 'CPR Mask';


-- 7. Insert Hand Sanitizer
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Hand Sanitizer',
  'Isopropyl Alcohol 70%',
  'Dettol',
  'first-aid',
  'Bottle',
  '3808',
  18.00,
  20,
  '70% alcohol-based instant hand sanitizer gel that kills 99.9% of germs without water. Specially formulated with moisturizers to keep hands soft.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  45.00,
  4.80,
  380,
  TRUE
);

-- 8. Seed stock for Hand Sanitizer
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA12', '2029-05-31', 250, 45.00, 75.00 FROM medicines WHERE name = 'Hand Sanitizer';


-- 9. Insert Wound Dressing Pad
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Wound Dressing Pad',
  'Sterile Wound Dressing',
  'Romsons',
  'first-aid',
  'Box',
  '3005',
  12.00,
  15,
  'Highly absorbent, non-adherent sterile wound dressing pad designed for clean protection of larger cuts, abrasions, and postsurgical wounds.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  70.00,
  4.65,
  115,
  TRUE
);

-- 10. Seed stock for Wound Dressing Pad
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA13', '2030-11-30', 140, 70.00, 110.00 FROM medicines WHERE name = 'Wound Dressing Pad';
