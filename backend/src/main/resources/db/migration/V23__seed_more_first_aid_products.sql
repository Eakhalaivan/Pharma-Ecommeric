-- Flyway Migration V23: Seed additional first-aid products (Gauze Pads, Savlon Liquid, Medical Tape, Burn Cream, Ice Pack)

-- 1. Insert Gauze Pads
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Gauze Pads',
  'Sterile Gauze Sponge',
  'Johnson & Johnson',
  'first-aid',
  'Box',
  '3005',
  12.00,
  20,
  'Sterile 100% cotton gauze pads, ideal for cleaning wounds, applying ointment, or dressing minor burns, scrapes, and cuts. Highly breathable and absorbent design.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  60.00,
  4.70,
  145,
  TRUE
);

-- 2. Seed stock for Gauze Pads
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA04', '2030-06-30', 150, 60.00, 99.00 FROM medicines WHERE name = 'Gauze Pads';


-- 3. Insert Savlon Liquid
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Savlon Liquid',
  'Chlorhexidine Gluconate & Cetrimide',
  'ITC Limited',
  'first-aid',
  'Bottle',
  '3004',
  12.00,
  10,
  'Savlon Antiseptic Liquid provides highly effective protection against germs and infections. Widely used for first aid, cuts, grazes, insect bites, and minor burns.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  40.00,
  4.80,
  310,
  TRUE
);

-- 4. Seed stock for Savlon Liquid
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA05', '2029-12-31', 120, 40.00, 59.00 FROM medicines WHERE name = 'Savlon Liquid';


-- 5. Insert Medical Tape
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Medical Tape',
  'Micropore Surgical Tape',
  '3M',
  'first-aid',
  'Roll',
  '3005',
  12.00,
  15,
  'Hypoallergenic micropore surgical paper tape. Easy to tear, extremely breathable, and gentle to sensitive skin while holding wound dressings and bandages securely.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  30.00,
  4.50,
  95,
  TRUE
);

-- 6. Seed stock for Medical Tape
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA06', '2031-03-31', 180, 30.00, 49.00 FROM medicines WHERE name = 'Medical Tape';


-- 7. Insert Burn Cream
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Burn Cream',
  'Silver Sulfadiazine Cream',
  'Cipla',
  'first-aid',
  'Tube',
  '3004',
  12.00,
  10,
  'Soothing antiseptic and antibacterial cream specially formulated for minor burns, scalds, and cuts. Offers rapid cooling relief, protects against infection, and speeds healing.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  50.00,
  4.75,
  120,
  TRUE
);

-- 8. Seed stock for Burn Cream
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA07', '2029-08-31', 100, 50.00, 79.00 FROM medicines WHERE name = 'Burn Cream';


-- 9. Insert Ice Pack
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Ice Pack',
  'Instant Cold Gel Pack',
  'Dynarex',
  'first-aid',
  'Pack',
  '3824',
  12.00,
  12,
  'Premium reusable cooling gel ice pack for immediate relief of pain, swelling, sprains, muscle strains, headaches, and toothaches. Conforms to the body even when frozen.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  75.00,
  4.65,
  165,
  TRUE
);

-- 10. Seed stock for Ice Pack
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA08', '2030-05-31', 110, 75.00, 120.00 FROM medicines WHERE name = 'Ice Pack';
