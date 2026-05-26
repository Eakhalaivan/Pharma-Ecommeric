-- Flyway Migration V21: Fix legacy medicine images, descriptions, ratings, prices and add stocks for Eno

-- 1. Update Paracetamol 500mg (id: 1)
UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
  description = 'Paracetamol 500mg tablets are widely trusted for rapid relief of mild to moderate pain and lowering high temperature (fever). Safe and effective for headaches, toothaches, and cold symptoms.',
  prescription_required = FALSE,
  avg_rating = 4.50,
  review_count = 120,
  purchase_price = 1.50
WHERE id = 1;

-- 2. Update Amoxicillin 250mg (id: 2)
UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&auto=format&fit=crop&q=80',
  description = 'Amoxicillin 250mg is a broad-spectrum penicillin-type antibiotic that fights bacteria in your body. It is commonly prescribed for ear, nose, throat, skin, and urinary tract infections.',
  prescription_required = TRUE,
  avg_rating = 4.40,
  review_count = 65,
  purchase_price = 4.00
WHERE id = 2;

-- 3. Update Cofsils Cough Syrup (id: 3)
UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop&q=80',
  description = 'Cofsils Cough Syrup provides quick, triple-action relief from sore throat, dry cough, and chest congestion. Soothes irritated mucosal lining and eases breathing.',
  prescription_required = FALSE,
  avg_rating = 4.60,
  review_count = 140,
  purchase_price = 45.00
WHERE id = 3;

-- 4. Update Eno (id: 14) and set to first-aid category
UPDATE medicines 
SET 
  category = 'first-aid',
  image = 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&auto=format&fit=crop&q=80',
  description = 'Eno Fruit Salt is an effervescent antacid powder that dissolves quickly in water to provide instant relief from acidity, heartburn, gas, and stomach sourness in just 6 seconds.',
  prescription_required = FALSE,
  avg_rating = 4.70,
  review_count = 310,
  purchase_price = 6.00
WHERE id = 14;

-- 5. Update duplicate Eno (id: 30001) and set to first-aid category
UPDATE medicines 
SET 
  category = 'first-aid',
  image = 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&auto=format&fit=crop&q=80',
  description = 'Eno Fruit Salt is an effervescent antacid powder that dissolves quickly in water to provide instant relief from acidity, heartburn, gas, and stomach sourness in just 6 seconds.',
  prescription_required = FALSE,
  avg_rating = 4.70,
  review_count = 310,
  purchase_price = 6.00
WHERE id = 30001;

-- 6. Insert stocks for Eno (id: 14) if they don't already exist
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT 14, 'BTCH-ENO01', '2028-12-31', 300, 6.00, 10.00
FROM dual
WHERE NOT EXISTS (SELECT 1 FROM medicine_stocks WHERE medicine_id = 14);

-- 7. Insert stocks for duplicate Eno (id: 30001) if they don't already exist
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT 30001, 'BTCH-ENO02', '2028-12-31', 300, 6.00, 10.00
FROM dual
WHERE NOT EXISTS (SELECT 1 FROM medicine_stocks WHERE medicine_id = 30001);
