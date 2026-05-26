-- Flyway Migration V18: Merge E-Commerce Medicine Columns and Seed Unified Roles

ALTER TABLE medicines
  ADD COLUMN description TEXT NULL,
  ADD COLUMN image VARCHAR(500) NULL,
  ADD COLUMN prescription_required BOOLEAN DEFAULT FALSE,
  ADD COLUMN purchase_price DECIMAL(10,2) DEFAULT 0.00,
  ADD COLUMN avg_rating DECIMAL(3,2) DEFAULT 0.00,
  ADD COLUMN review_count INT DEFAULT 0,
  ADD COLUMN is_active BOOLEAN DEFAULT TRUE;

-- Seed E-Commerce/Hospital Unified Roles
INSERT INTO roles (name, is_system_default, permissions_json, is_deleted, color)
SELECT * FROM (SELECT 'MEDICINE_MANAGER', TRUE, '["INVENTORY", "INDENT", "RETURNS", "STOCK_MANAGEMENT"]', FALSE, '') AS tmp
WHERE NOT EXISTS (SELECT name FROM roles WHERE name = 'MEDICINE_MANAGER') LIMIT 1;

INSERT INTO roles (name, is_system_default, permissions_json, is_deleted, color)
SELECT * FROM (SELECT 'STOCK_VIEWER', TRUE, '["INVENTORY", "STOCK_MANAGEMENT"]', FALSE, '') AS tmp
WHERE NOT EXISTS (SELECT name FROM roles WHERE name = 'STOCK_VIEWER') LIMIT 1;

INSERT INTO roles (name, is_system_default, permissions_json, is_deleted, color)
SELECT * FROM (SELECT 'BILLING_VIEWER', TRUE, '["BILLING", "INVOICES"]', FALSE, '') AS tmp
WHERE NOT EXISTS (SELECT name FROM roles WHERE name = 'BILLING_VIEWER') LIMIT 1;
