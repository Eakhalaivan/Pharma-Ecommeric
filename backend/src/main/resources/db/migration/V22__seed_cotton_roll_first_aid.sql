-- Flyway Migration V22: Seed Cotton Roll product in first-aid category

-- 1. Insert Cotton Roll medicine
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active)
VALUES (
  'Cotton Roll',
  'Absorbent Cotton',
  'Romsons',
  'first-aid',
  'Roll',
  '3005',
  12.00,
  15,
  'Premium quality 100% pure absorbent cotton roll for wound dressing, cleaning, and first aid use. Soft, non-irritating, highly absorbent and lint-free. Ideal for medical and personal hygiene care.',
  'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80',
  FALSE,
  45.00,
  4.60,
  180,
  TRUE
);

-- 2. Seed stock for Cotton Roll
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA03', '2030-01-31', 200, 45.00, 69.00 FROM medicines WHERE name = 'Cotton Roll';
