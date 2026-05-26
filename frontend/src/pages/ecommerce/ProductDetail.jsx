import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Minus, Plus, ArrowLeft, Star, Package, AlertTriangle, BookOpen, Building2, ShieldCheck, Activity } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useInventory } from '../../context/InventoryContext';

import doloImg from '../../assets/dolo-650-paracetamol-tablets.jpeg';
import panImg from '../../assets/by0HgtuN4v-pantop_40mg_tablet_15s_0_1.avif';
import crocinImg from '../../assets/paracetamol-500mg-tablets-.jpeg';
import crocin500Img from '../../assets/Crocin 500.jpg';
import cetrizineImg from '../../assets/cetirizine-tablets-317.jpg';
import amoxImg from '../../assets/amoxycillin-250mg-cap.jpg';
import azithImg from '../../assets/azithromycin-500-mg-tablet.jpg';
import ibupImg from '../../assets/ibuprofen-400-mg-bp-tablets.jpg';
import metfImg from '../../assets/Metformin_500mg_Tablets.jpg';
import enoImg from '../../assets/eno-fruit-salt-lemon-flavour-5-g-sachet-quick-pantry.jpg';
import enoOrangeImg from '../../assets/eno-orange.webp';
import coughImg from '../../assets/MUCUS_COUGH_Honey_and_lemon_ireland_-_PACK_SHOT_v3__1_.webp';
import cofsilsImg from '../../assets/medicated_cough.jpg';
import childColdImg from '../../assets/childrens-cold-flu-syrup.jpg';
import multiImg from '../../assets/women-multivitamin-50-tabs-1.jpg';
import bandageImg from '../../assets/bandage.jpg';
import cottonRollImg from '../../assets/cotton roll.jpg';
import gauzePadsImg from '../../assets/gauze pads.jpg';
import savlonLiquidImg from '../../assets/Savlon Liquid.jpg';
import medicalTapeImg from '../../assets/Medical Tape.jpeg';
import burnCreamImg from '../../assets/Burn Cream.jpg';
import icePackImg from '../../assets/Ice Pack.jpg';
import painReliefSprayImg from '../../assets/Pain Relief Spray.jpg';
import firstAidBoxImg from '../../assets/First Aid Box.jpg';
import cprMaskImg from '../../assets/CPR Mask .jpg';
import handSanitizerImg from '../../assets/Hand Sanitizer.jpg';
import woundDressingPadImg from '../../assets/Wound Dressing Pad.jpg';
import vicksImg from '../../assets/vicks vaporub.jpg';
import antisepticImg from '../../assets/Antiseptic Liquid.jpeg';
import thermometerImg from '../../assets/Digital Thermometer.jpg';
import bpImg from '../../assets/Blood Pressure Monitor.jpg';
import weighingScaleImg from '../../assets/Weighing Scale .jpg';
import nebulizerImg from '../../assets/Nebulizer.jpg';
import backSupportBeltImg from '../../assets/Back Support Belt.jpeg';
import cervicalPillowImg from '../../assets/Cervical Pillow.jpeg';
import kneeSupportBeltImg from '../../assets/Knee Support Belt.jpeg';
import ecgMonitorImg from '../../assets/ECG Monitor.jpg';
import vitCImg from '../../assets/Vitamin C 1000mg chewable.jpg';
import vitCCapsulesImg from '../../assets/Vitamin C Capsules .jpg';
import vitD3CapsulesImg from '../../assets/Vitamin D3 Capsules .jpg';
import zincSupplementsImg from '../../assets/Zinc Supplements.jpg';
import omega3CapsulesImg from '../../assets/Omega 3 Capsules .png';
import multiCapsulesImg from '../../assets/Multivitamin Capsules.jpeg';
import codLiverOilImg from '../../assets/Cod Liver Oil.jpeg';
import antioxidantCapsulesImg from '../../assets/Antioxidant Capsules.jpeg';
import electrolytePowderImg from '../../assets/Electrolyte Powder.jpeg';
import wheyProteinImg from '../../assets/Whey Protein.jpg';
import collagenPowderImg from '../../assets/Collagen Powder .jpg';
import proteinPowderImg from '../../assets/Protein Powder.jpeg';
import creamImg from '../../assets/51SJEUEt1NL.jpg';
import faceWashImg from '../../assets/Face Wash.jpeg';
import acneRemovalCreamImg from '../../assets/Acne Removal Cream.jpeg';
import coconutOilCreamImg from '../../assets/Coconut Oil Cream.jpeg';
import charcoalFaceWashImg from '../../assets/Charcoal Face Wash.jpeg';
import neemFaceWashImg from '../../assets/Neem Face Wash.jpeg';
import underEyeCreamImg from '../../assets/Under Eye Cream.jpeg';
import calamineLotionImg from '../../assets/Calamine Lotion.jpg';
import lipBalmImg from '../../assets/Lip Balm .jpg';
import footCreamImg from '../../assets/Foot Cream.jpeg';
import babyLotionImg from '../../assets/Baby Lotion.jpeg';
import aloeImg from '../../assets/61WuoxOsAbL._AC_UF1000,1000_QL80_.jpg';
import benadrylSyrupImg from '../../assets/Benadryl Syrup.jpeg';
import ascorilSyrupImg from '../../assets/Ascoril Syrup.jpeg';
import corexSyrupImg from '../../assets/Corex Syrup.jpg';
import zincovitSyrupImg from '../../assets/Zincovit Syrup.jpeg';
import crocinSyrupImg from '../../assets/Crocin Syrup.jpeg';
import digeneSyrupImg from '../../assets/Digene Syrup.jpg';
import gelusilSyrupImg from '../../assets/Gelusil Syrup.jpeg';
import dexorangeSyrupImg from '../../assets/Dexorange Syrup.jpeg';
import glucoseSyrupImg from '../../assets/Glucose Syrup.jpg';
import ironTonicSyrupImg from '../../assets/Iron Tonic Syrup.jpg';
import omepImg from '../../assets/Omeprazole 20.jpg';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop';

const getLocalAssetImage = (name, id) => {
  const nameLower = (name || '').toLowerCase();
  
  if (nameLower.includes('benadryl')) return benadrylSyrupImg;
  if (nameLower.includes('ascoril')) return ascorilSyrupImg;
  if (nameLower.includes('corex')) return corexSyrupImg;
  if (nameLower.includes('zincovit')) return zincovitSyrupImg;
  if (nameLower.includes('crocin syrup')) return crocinSyrupImg;
  if (nameLower.includes('digene')) return digeneSyrupImg;
  if (nameLower.includes('gelusil')) return gelusilSyrupImg;
  if (nameLower.includes('dexorange')) return dexorangeSyrupImg;
  if (nameLower.includes('glucose syrup') || nameLower.includes('glucose')) return glucoseSyrupImg;
  if (nameLower.includes('iron tonic')) return ironTonicSyrupImg;
  if (nameLower.includes('crocin')) return crocin500Img;
  if (nameLower.includes('dolo')) return doloImg;
  if (nameLower.includes('paracetamol')) return crocinImg;
  if (nameLower.includes('pan 40') || nameLower.includes('pantop')) return panImg;
  if (nameLower.includes('omeprazole')) return omepImg;
  if (nameLower.includes('cetri')) return cetrizineImg;
  if (nameLower.includes('amoxi')) return amoxImg;
  if (nameLower.includes('azith')) return azithImg;
  if (nameLower.includes('ibuprofen')) return ibupImg;
  if (nameLower.includes('metformin')) return metfImg;
  if (nameLower.includes('eno')) {
    if (id === 30001 || String(id) === '30001' || nameLower.includes('orange')) {
      return enoOrangeImg;
    }
    return enoImg;
  }
  if (nameLower.includes('cofsils')) return cofsilsImg;
  if (nameLower.includes('children') || nameLower.includes('cold & flu') || nameLower.includes('cold and flu')) return childColdImg;
  if (nameLower.includes('cough') || nameLower.includes('syrup')) return coughImg;
  
  // Skincare specific checks (must precede generic vitamin, oil, or cream checks)
  if (nameLower.includes('charcoal face wash') || nameLower.includes('charcoal')) return charcoalFaceWashImg;
  if (nameLower.includes('neem face wash') || nameLower.includes('neem')) return neemFaceWashImg;
  if (nameLower.includes('face wash')) return faceWashImg;
  if (nameLower.includes('acne removal cream') || nameLower.includes('acne')) return acneRemovalCreamImg;
  if (nameLower.includes('coconut oil cream') || nameLower.includes('coconut oil') || nameLower.includes('cocount oil cream') || nameLower.includes('cocount oil')) return coconutOilCreamImg;
  if (nameLower.includes('under eye cream') || nameLower.includes('under eye')) return underEyeCreamImg;
  if (nameLower.includes('foot cream') || nameLower.includes('foot')) return footCreamImg;
  if (nameLower.includes('calamine lotion') || nameLower.includes('calamine')) return calamineLotionImg;
  if (nameLower.includes('lip balm') || nameLower.includes('lip')) return lipBalmImg;
  if (nameLower.includes('baby lotion') || nameLower.includes('baby')) return babyLotionImg;

  if (nameLower.includes('antioxidant')) return antioxidantCapsulesImg;
  if (nameLower.includes('electrolyte')) return electrolytePowderImg;
  if (nameLower.includes('whey protein') || nameLower.includes('whey')) return wheyProteinImg;
  if (nameLower.includes('collagen')) return collagenPowderImg;
  if (nameLower.includes('protein powder') || nameLower.includes('protein')) return proteinPowderImg;
  if (nameLower.includes('vitamin c capsules') || nameLower.includes('vitamin c capsule')) return vitCCapsulesImg;
  if (nameLower.includes('vitamin d3') || nameLower.includes('d3')) return vitD3CapsulesImg;
  if (nameLower.includes('zinc')) return zincSupplementsImg;
  if (nameLower.includes('omega 3') || nameLower.includes('omega-3')) return omega3CapsulesImg;
  if (nameLower.includes('multivitamin capsules') || nameLower.includes('multivitamin capsule')) return multiCapsulesImg;
  if (nameLower.includes('cod liver') || nameLower.includes('cod liver oil')) return codLiverOilImg;
  if (nameLower.includes('vitamin c') || nameLower.includes('chewable')) return vitCImg;
  if (nameLower.includes('vitamin') || nameLower.includes('multivitamin') || nameLower.includes('omega') || nameLower.includes('oil')) return multiImg;
  if (nameLower.includes('first aid box')) return firstAidBoxImg;
  if (nameLower.includes('pain relief spray') || nameLower.includes('relief spray') || nameLower.includes('pain spray')) return painReliefSprayImg;
  if (nameLower.includes('cpr')) return cprMaskImg;
  if (nameLower.includes('sanitizer')) return handSanitizerImg;
  if (nameLower.includes('wound dressing') || nameLower.includes('dressing pad')) return woundDressingPadImg;
  if (nameLower.includes('bandage') || nameLower.includes('first aid') || nameLower.includes('kit')) return bandageImg;
  if (nameLower.includes('cotton roll') || nameLower.includes('cotton')) return cottonRollImg;
  if (nameLower.includes('gauze')) return gauzePadsImg;
  if (nameLower.includes('savlon')) return savlonLiquidImg;
  if (nameLower.includes('medical tape') || nameLower.includes('tape')) return medicalTapeImg;
  if (nameLower.includes('burn cream')) return burnCreamImg;
  if (nameLower.includes('ice pack')) return icePackImg;
  if (nameLower.includes('vicks') || nameLower.includes('vaporub')) return vicksImg;
  if (nameLower.includes('antiseptic') || nameLower.includes('dettol')) return antisepticImg;
  if (nameLower.includes('weighing') || nameLower.includes('scale')) return weighingScaleImg;
  if (nameLower.includes('nebulizer')) return nebulizerImg;
  if (nameLower.includes('back support') || nameLower.includes('back belt')) return backSupportBeltImg;
  if (nameLower.includes('cervical') || nameLower.includes('pillow')) return cervicalPillowImg;
  if (nameLower.includes('knee support') || nameLower.includes('knee belt')) return kneeSupportBeltImg;
  if (nameLower.includes('ecg')) return ecgMonitorImg;
  if (nameLower.includes('thermometer')) return thermometerImg;
  if (nameLower.includes('blood pressure') || nameLower.includes('bp monitor') || nameLower.includes('pressure monitor')) return bpImg;
  if (nameLower.includes('moisturiz') || nameLower.includes('cream') || nameLower.includes('spf')) return creamImg;
  if (nameLower.includes('aloe') || nameLower.includes('soothing aloe')) return aloeImg;
  
  return null;
  
  return null;
};

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [imageError, setImageError] = useState(false);

  const { products } = useInventory();
  const product = products.find((p) => String(p.id) === String(id));
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
        <p className="text-gray-500 mb-6">The product you're looking for doesn't exist.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const getFallbackImage = (cat, nam) => {
    const nameLower = (nam || '').toLowerCase();
    const categoryLower = (cat || '').toLowerCase();
    
    // 1. Precise Name-based matching first
    if (nameLower.includes('thermometer')) {
      return 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('blood pressure') || nameLower.includes('bp monitor') || nameLower.includes('pressure monitor')) {
      return 'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('aloe vera') || nameLower.includes('aloe')) {
      return 'https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('moisturiz') || nameLower.includes('cream') || nameLower.includes('gel') || nameLower.includes('skincare')) {
      return 'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('cough') || nameLower.includes('syrup') || nameLower.includes('cofsils') || nameLower.includes('drops') || nameLower.includes('liquid')) {
      return 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('vitamin c') || nameLower.includes('fish oil') || nameLower.includes('omega') || nameLower.includes('chewable')) {
      return 'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('multivitamin') || nameLower.includes('vitamin') || nameLower.includes('complex')) {
      return 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('bandage') || nameLower.includes('first aid') || nameLower.includes('kit') || nameLower.includes('antiseptic')) {
      return 'https://images.unsplash.com/photo-1603398938378-e54eab446edd?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('eno') || nameLower.includes('antacid') || nameLower.includes('powder')) {
      return 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('paracetamol') || nameLower.includes('dolo') || nameLower.includes('crocin') || nameLower.includes('ibuprofen')) {
      return 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80';
    }
    if (nameLower.includes('amoxicillin') || nameLower.includes('azithromycin') || nameLower.includes('metformin') || nameLower.includes('omeprazole') || nameLower.includes('tablet') || nameLower.includes('capsule')) {
      return 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&auto=format&fit=crop&q=80';
    }
    
    // 2. Category-based fallback
    if (categoryLower.includes('tablet') || categoryLower.includes('capsule') || categoryLower.includes('pill')) {
      return 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80';
    }
    if (categoryLower.includes('syrup') || categoryLower.includes('liquid')) {
      return 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop&q=80';
    }
    if (categoryLower.includes('device') || categoryLower.includes('equipment')) {
      return 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80';
    }
    if (categoryLower.includes('skin')) {
      return 'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=600&auto=format&fit=crop&q=80';
    }
    if (categoryLower.includes('vitamin')) {
      return 'https://images.unsplash.com/photo-1616679911721-fe6e41400591?w=600&auto=format&fit=crop&q=80';
    }
    return 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80';
  };

  const localImage = getLocalAssetImage(product.name, product.id);
  const imageSrc = localImage && !imageError ? localImage : (product.image && !imageError ? product.image : getFallbackImage(product.category, product.name));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  const tabs = [
    { id: 'description', label: 'Description', icon: BookOpen },
    { id: 'usage', label: 'Usage', icon: Package },
    { id: 'sideEffects', label: 'Side Effects', icon: AlertTriangle },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 overflow-hidden flex items-center justify-center">
            <img
              src={imageSrc}
              alt={product.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          {discount > 0 && (
            <span className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1.5 rounded-xl shadow-md">
              -{discount}% OFF
            </span>
          )}
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary/70 mb-2">
            {product.category}
          </span>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">{product.rating} ({product.reviews} reviews)</span>
          </div>

          {/* Price Section */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
            )}
            {discount > 0 && (
              <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg">
                Save ₹{(product.originalPrice - product.price).toFixed(2)}
              </span>
            )}
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 rounded-xl">
              <Building2 className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Manufacturer</p>
                <p className="text-xs font-semibold text-gray-700">{product.manufacturer}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 rounded-xl">
              <Package className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Pack Size</p>
                <p className="text-xs font-semibold text-gray-700">{product.packSize}</p>
              </div>
            </div>
          </div>

          {/* Stock Status Integration */}
          <div className="mb-6">
            {product.stockCount === 0 ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-gray-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-gray-100">
                <Package className="w-3.5 h-3.5" /> Out of Stock
              </span>
            ) : product.stockCount < 10 ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-orange-100">
                <Activity className="w-3.5 h-3.5" /> Only {product.stockCount} left in stock
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                <ShieldCheck className="w-3.5 h-3.5" /> In Stock
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex items-center bg-gray-50 rounded-2xl border border-gray-100 p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={product.stockCount === 0}
                className="w-12 h-12 flex items-center justify-center text-secondary hover:text-primary transition-colors disabled:opacity-30"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="w-12 text-center font-black text-secondary">{product.stockCount === 0 ? 0 : quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                disabled={product.stockCount === 0 || quantity >= product.stockCount}
                className="w-12 h-12 flex items-center justify-center text-secondary hover:text-primary transition-colors disabled:opacity-30"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              disabled={product.stockCount === 0}
              className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl ${
                product.stockCount > 0 
                  ? 'bg-primary text-white hover:bg-primary-dark hover:-translate-y-1 shadow-primary/20 cursor-pointer' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
              }`}
            >
              <ShoppingCart className="w-5 h-5" /> 
              {product.stockCount > 0 ? 'Add to Cart' : 'Currently Unavailable'}
            </button>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-100 pt-6">
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-600 leading-relaxed p-2">
              {activeTab === 'description' && product.description}
              {activeTab === 'usage' && product.usage}
              {activeTab === 'sideEffects' && product.sideEffects}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
