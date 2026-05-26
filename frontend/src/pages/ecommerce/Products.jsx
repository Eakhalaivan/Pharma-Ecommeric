import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../../components/ecommerce/ProductCard';
import FilterSidebar from '../../components/ecommerce/FilterSidebar';
import { useInventory } from '../../context/InventoryContext';

export default function Products() {
  const { products, loading, error } = useInventory();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [localSearch, setLocalSearch] = useState(searchParams.get('search') || '');

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('default');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (localSearch) {
      const searchLower = localSearch.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(searchLower)) ||
          (p.description && p.description.toLowerCase().includes(searchLower)) ||
          (p.category && p.category.toLowerCase().includes(searchLower))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => {
        if (!p.category) return false;
        const pCat = p.category.toLowerCase();
        const sCat = selectedCategory.toLowerCase();
        
        const cleanPCat = pCat.replace(/[\s-_]/g, '');
        const cleanSCat = sCat.replace(/[\s-_]/g, '');
        
        // Direct match of cleaned strings
        if (cleanPCat === cleanSCat || cleanPCat.includes(cleanSCat) || cleanSCat.includes(cleanPCat)) {
          return true;
        }
        
        // Tablets matches Tablet, Capsule, Capsule strips, etc.
        if (sCat === 'tablets') {
          return pCat.includes('tablet') || pCat.includes('capsule') || pCat.includes('strip');
        }
        // Syrups matches Syrup, Bottle, Drops, etc.
        if (sCat === 'syrups') {
          return pCat.includes('syrup') || pCat.includes('liquid');
        }
        // Devices matches Device, Equipment, Monitor, etc.
        if (sCat === 'devices') {
          return pCat.includes('device') || pCat.includes('equipment') || pCat.includes('monitor') || pCat.includes('thermometer') || pCat.includes('oximeter');
        }
        
        // Strip trailing 's' to match plural vs singular
        const pCatSingle = cleanPCat.replace(/s$/, '');
        const sCatSingle = cleanSCat.replace(/s$/, '');
        return pCatSingle.includes(sCatSingle) || sCatSingle.includes(pCatSingle);
      });
    }

    // Availability filter
    if (showInStockOnly === 'in') {
      filtered = filtered.filter((p) => {
        const stockCount = p.stockCount !== undefined ? p.stockCount : (p.totalStock !== undefined ? p.totalStock : (p.stockQuantity !== undefined ? p.stockQuantity : 0));
        return p.inStock !== undefined ? p.inStock : (stockCount > 0);
      });
    } else if (showInStockOnly === 'out') {
      filtered = filtered.filter((p) => {
        const stockCount = p.stockCount !== undefined ? p.stockCount : (p.totalStock !== undefined ? p.totalStock : (p.stockQuantity !== undefined ? p.stockQuantity : 0));
        const isAvailable = p.inStock !== undefined ? p.inStock : (stockCount > 0);
        return !isAvailable;
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, showInStockOnly, localSearch, products]);

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto min-h-screen">
      {/* Header & Global Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-black text-secondary tracking-tight mb-2 uppercase">Drug Catalog</h1>
          <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">
            {filteredProducts.length} items identified in central repository
          </p>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-2xl">
           <div className="relative flex-1 group">
             <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
             <input 
               type="text" 
               placeholder="Search medicine, category, or manufacturer..." 
               value={localSearch}
               onChange={(e) => setLocalSearch(e.target.value)}
               className="w-full pl-14 pr-12 py-4 bg-white/40 backdrop-blur-md border border-white/20 rounded-[32px] text-sm font-bold shadow-sm focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all placeholder:text-gray-300"
             />
             {localSearch && (
               <button
                 onClick={() => setLocalSearch('')}
                 className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg font-bold cursor-pointer"
               >
                 ×
               </button>
             )}
           </div>
           <button 
             onClick={() => setFilterOpen(true)}
             className="lg:hidden w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-secondary shadow-sm"
           >
              <SlidersHorizontal className="w-5 h-5" />
           </button>
        </div>
      </div>

      <div className="flex gap-12">
        {/* Sidebar Filters */}
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showInStockOnly={showInStockOnly}
          setShowInStockOnly={setShowInStockOnly}
          isOpen={filterOpen}
          setIsOpen={setFilterOpen}
          localSearch={localSearch}
          setLocalSearch={setLocalSearch}
        />

        {/* Inventory Grid */}
        <div className="flex-1">
          {error ? (
            <div className="flex flex-col items-center justify-center py-32 text-center bg-red-50/40 backdrop-blur-md rounded-[40px] border border-red-200/20 shadow-sm">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-300">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-red-600 mb-2">ERROR LOADING PRODUCTS</h3>
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest max-w-xs mb-4">
                {error}
              </p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Retry
              </button>
            </div>
          ) : loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="aspect-[4/3] bg-gray-100 rounded-[40px] animate-pulse" />
               ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                   <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center bg-white/40 backdrop-blur-md rounded-[40px] border border-white/20 shadow-sm border-dashed">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-300">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-secondary mb-2">NO MATCHING DRUGS FOUND</h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest max-w-xs">
                Adjust your filters or try searching for a more generic clinical term.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
