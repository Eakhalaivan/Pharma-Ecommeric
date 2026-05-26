-- Flyway Migration V19: Seed Medicine E-commerce Images, Descriptions, and Specifications

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
  description = 'Dolo 650 Tablet is a widely trusted antipyretic and analgesic medication. It is highly effective for relieving mild to moderate pain, including headache, body ache, toothache, and lowering high body temperature during fever.',
  prescription_required = false,
  avg_rating = 4.80,
  review_count = 142,
  purchase_price = 10.00
WHERE name = 'Dolo 650';

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1631549916768-4119b2e55c26?w=600&auto=format&fit=crop&q=80',
  description = 'Pan 40 Tablet is a premium gastro-protective proton pump inhibitor. It effectively reduces the amount of acid produced in your stomach, treating acid reflux, heartburn, gastroesophageal reflux disease (GERD), and peptic ulcer disease.',
  prescription_required = true,
  avg_rating = 4.60,
  review_count = 88,
  purchase_price = 8.00
WHERE name = 'Pan 40';

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1607619275048-24722480f876?w=600&auto=format&fit=crop&q=80',
  description = 'Crocin 500 Tablet is a fast-acting analgesic and antipyretic formulation. It target-releases paracetamol to provide rapid relief from pain and fever, ensuring gentle action on the stomach while delivering reliable therapeutic efficacy.',
  prescription_required = false,
  avg_rating = 4.70,
  review_count = 205,
  purchase_price = 5.00
WHERE name = 'Crocin 500';

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop&q=80',
  description = 'Cetrizine is a non-drowsy second-generation antihistamine designed for premium, long-lasting relief from seasonal allergies, hay fever, allergic rhinitis, and hives. It blocks histamine receptors to stop sneezing, runny nose, and itchy eyes.',
  prescription_required = false,
  avg_rating = 4.50,
  review_count = 94,
  purchase_price = 2.00
WHERE name = 'Cetrizine';

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&auto=format&fit=crop&q=80',
  description = 'Amoxicillin 500 is a broad-spectrum penicillin-type antibiotic. It works by halting the growth of bacterial cell walls, effectively treating a wide range of bacterial infections including respiratory tract infections, tonsillitis, and middle ear infections.',
  prescription_required = true,
  avg_rating = 4.90,
  review_count = 312,
  purchase_price = 20.00
WHERE name = 'Amoxicillin 500';

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop&q=80',
  description = 'Azithromycin 500 is a powerful macrolide antibiotic. It stops bacterial protein synthesis, making it highly effective as a short, high-compliance course for bacterial infections of the lungs, sinuses, skin, and throat.',
  prescription_required = true,
  avg_rating = 4.80,
  review_count = 178,
  purchase_price = 50.00
WHERE name = 'Azithromycin 500';

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1607619275048-24722480f876?w=600&auto=format&fit=crop&q=80',
  description = 'Ibuprofen 400 is a high-grade nonsteroidal anti-inflammatory drug (NSAID). It provides potent anti-inflammatory, analgesic, and antipyretic action to treat pain associated with arthritis, muscle strains, backaches, and dental pain.',
  prescription_required = false,
  avg_rating = 4.70,
  review_count = 120,
  purchase_price = 4.00
WHERE name = 'Ibuprofen 400';

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80',
  description = 'Metformin 500 is the gold-standard oral biguanide anti-diabetic medication. It improves insulin sensitivity, increases glucose uptake, and decreases hepatic glucose production, providing optimal glycemic control for Type 2 Diabetes.',
  prescription_required = true,
  avg_rating = 4.90,
  review_count = 410,
  purchase_price = 3.00
WHERE name = 'Metformin 500';

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1547853760-184b2612767e?w=600&auto=format&fit=crop&q=80',
  description = 'Omeprazole 20 is an advanced delayed-release proton pump inhibitor capsule. It provides robust, day-long acid control to promote healing of erosive esophagitis, manage active duodenal ulcers, and suppress acid reflux symptoms.',
  prescription_required = false,
  avg_rating = 4.60,
  review_count = 155,
  purchase_price = 6.00
WHERE name = 'Omeprazole 20';

UPDATE medicines 
SET 
  image = 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=600&auto=format&fit=crop&q=80',
  description = 'Vicks Vaporub is a classic time-tested therapeutic ointment. Formulated with menthol, camphor, and eucalyptus oil, it releases warming vapors upon application to relieve cough, nasal congestion, and minor muscle aches from common colds.',
  prescription_required = false,
  avg_rating = 4.80,
  review_count = 520,
  purchase_price = 40.00
WHERE name = 'Vicks Vaporub';
