-- Flyway Migration V20: Seed additional categories and fix mismatch

-- 1. Normalize existing medicines category names to match the frontend expected categories
UPDATE medicines SET category = 'tablets' WHERE category IN ('Antipyretic', 'Antacid', 'Analgesic', 'Antiallergic', 'Antibiotic', 'Antidiabetic', 'Painkiller');
UPDATE medicines SET category = 'first-aid' WHERE name = 'Vicks Vaporub';

-- 2. Insert new medicines into the database representing the other categories (syrups, devices, skincare, vitamins, first-aid)
-- Syrups
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active) VALUES
('Cough Syrup (Honey & Lemon)', 'Dextromethorphan', 'Dabur', 'syrups', 'Bottle', '3004', 12.00, 10, 'Fast-acting cough relief syrup with the natural goodness of honey and lemon. Formulated to soothe throat irritation and suppress dry, tickly coughs for comfortable breathing.', 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=80', FALSE, 60.00, 4.70, 112, TRUE),
('Childrens Cold & Flu Syrup', 'Paracetamol/Chlorpheniramine', 'Abbott', 'syrups', 'Bottle', '3004', 12.00, 10, 'Specially formulated, berry-flavored syrup for gentle relief from cold and flu symptoms in children, including fever, runny nose, and sneezing.', 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop&q=80', FALSE, 75.00, 4.50, 85, TRUE);

-- Devices
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active) VALUES
('Digital Thermometer', 'Infrared Thermometer', 'Omron', 'devices', 'Piece', '9025', 18.00, 10, 'High-precision digital thermometer providing oral, rectal, or underarm readings in just 10 seconds. Features a digital LCD display and a fever alert alarm.', 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80', FALSE, 150.00, 4.80, 240, TRUE),
('Blood Pressure Monitor', 'BP Monitor', 'Omron', 'devices', 'Piece', '9018', 18.00, 10, 'Fully automatic, premium upper arm blood pressure monitor. Uses Intellisense technology for comfortable, accurate inflation and precise reading of systolic, diastolic pressures, and pulse rate.', 'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80', FALSE, 1200.00, 4.90, 310, TRUE);

-- Skin Care
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active) VALUES
('Moisturizing Cream SPF 30', 'Sunscreen Lotion', 'Cetaphil', 'skincare', 'Tube', '3304', 18.00, 10, 'Dermatologist-recommended daily facial moisturizer with SPF 30. Broad-spectrum protection against UVA/UVB rays. Non-comedogenic, fragrance-free formula suitable for sensitive skin.', 'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80', FALSE, 250.00, 4.60, 190, TRUE),
('Soothing Aloe Vera Gel', 'Aloe Vera Extract', 'PatSystem', 'skincare', 'Tub', '3304', 18.00, 10, 'Pure 100% organic Aloe Vera Gel for cooling, moisturizing, and soothing irritated skin. Ideal for sunburns, minor cuts, insect bites, and dry skin hydration.', 'https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=600&auto=format&fit=crop&q=80', FALSE, 110.00, 4.70, 320, TRUE);

-- Vitamins
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active) VALUES
('Vitamin C 1000mg chewable', 'Ascorbic Acid', 'GNC', 'vitamins', 'Bottle', '2936', 18.00, 10, 'High-potency Vitamin C chewable tablets designed for daily immune system support. Enhanced with citrus bioflavonoids and rose hips for high absorption and antioxidant protection.', 'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80', FALSE, 180.00, 4.80, 415, TRUE),
('Daily Multivitamin Women', 'Multivitamin Complex', 'Centrum', 'vitamins', 'Bottle', '2936', 18.00, 10, 'Complete daily multivitamin formulated specifically for women. Supports energy, immunity, metabolism, and bone health with a balanced blend of key micronutrients.', 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80', FALSE, 220.00, 4.70, 180, TRUE);

-- First Aid (Additional)
INSERT INTO medicines (name, generic_name, manufacturer, category, unit, hsn_code, tax_percentage, reorder_level, description, image, prescription_required, purchase_price, avg_rating, review_count, is_active) VALUES
('Antiseptic Liquid', 'Chlorhexidine Gluconate', 'Dettol', 'first-aid', 'Bottle', '3808', 18.00, 10, 'Highly effective antiseptic disinfectant liquid for first aid, medical sanitation, and personal hygiene. Kills 99.9% of bacteria and viruses to prevent infection in cuts and scratches.', 'https://images.unsplash.com/photo-1584515979956-d9b6e5d09982?w=600&auto=format&fit=crop&q=80', FALSE, 80.00, 4.90, 620, TRUE),
('Sterile Bandage Kit', 'Bandage & Gauze', 'Johnson & Johnson', 'first-aid', 'Box', '3005', 12.00, 10, 'Comprehensive professional sterile first aid dressing kit. Contains assorted sizes of flexible fabric adhesive bandages, non-stick pads, and medical tape for all minor wound care needs.', 'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80', FALSE, 120.00, 4.80, 275, TRUE);

-- 3. Seed Stocks for the new medicines so they show up with quantity and prices!
-- Cough Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR01', '2028-05-31', 120, 60.00, 89.00 FROM medicines WHERE name = 'Cough Syrup (Honey & Lemon)';

-- Childrens Cold Syrup
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SYR02', '2027-11-30', 90, 75.00, 109.00 FROM medicines WHERE name = 'Childrens Cold & Flu Syrup';

-- Digital Thermometer
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-DEV01', '2029-12-31', 45, 150.00, 249.00 FROM medicines WHERE name = 'Digital Thermometer';

-- BP Monitor
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-DEV02', '2030-06-30', 25, 1200.00, 1899.00 FROM medicines WHERE name = 'Blood Pressure Monitor';

-- Moisturizing Cream
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SKN01', '2027-08-31', 60, 250.00, 379.00 FROM medicines WHERE name = 'Moisturizing Cream SPF 30';

-- Aloe Vera Gel
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-SKN02', '2028-04-30', 150, 110.00, 169.00 FROM medicines WHERE name = 'Soothing Aloe Vera Gel';

-- Vitamin C
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT01', '2028-10-31', 200, 180.00, 269.00 FROM medicines WHERE name = 'Vitamin C 1000mg chewable';

-- Daily Multivitamin
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-VIT02', '2027-12-31', 110, 220.00, 329.00 FROM medicines WHERE name = 'Daily Multivitamin Women';

-- Antiseptic Liquid
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA01', '2029-03-31', 180, 80.00, 119.00 FROM medicines WHERE name = 'Antiseptic Liquid';

-- Sterile Bandage Kit
INSERT INTO medicine_stocks (medicine_id, batch_number, expiry_date, quantity_available, purchase_rate, selling_rate)
SELECT id, 'BTCH-FA02', '2029-08-31', 140, 120.00, 179.00 FROM medicines WHERE name = 'Sterile Bandage Kit';
