import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

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
  if (nameLower.includes('crocin')) return crocinImg;
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
  if (nameLower.includes('vicks') || nameLower.includes('vaporub')) return vicksImg;
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
};

const CartPlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M3 3h2l.4 2M5.4 5h15.2c.4 0 .7.3.6.7l-1.6 8c-.1.4-.4.7-.8.7H9.2c-.4 0-.8-.3-.8-.7L6 5.4M9 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8v6M9 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function ProductCard({ product }) {
  const { items, addToCart, updateQuantity } = useCart();
  const [imageError, setImageError] = useState(false);

  // Field mappings with secure robust fallbacks
  const name = product.name || 'Premium Medicine';
  const genericName = product.genericName || product.generic || 'Formula Active Compound';
  const categoryName = (product.category || 'General').toUpperCase();
  const unitText = product.unit || product.packSize || product.dosage || 'Tablet · 10s';
  const price = product.currentSellingPrice !== undefined ? product.currentSellingPrice : (product.price || 0);

  const stockCount = product.stockCount !== undefined ? product.stockCount : (product.totalStock !== undefined ? product.totalStock : (product.stockQuantity !== undefined ? product.stockQuantity : 0));
  const isAvailable = product.inStock !== undefined ? product.inStock : (stockCount > 0);
  const isLowStock = isAvailable && (stockCount <= 10);

  // Safe boolean cast to prevent rendering '0' in JSX
  const isFeatured = !!(product.featured === true || (product.rating && product.rating >= 4.7));

  // Get high-quality category-specific beautiful Unsplash images as fallbacks
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

  const localImage = getLocalAssetImage(name, product.id);
  const imageSrc = localImage && !imageError ? localImage : (product.image && !imageError ? product.image : getFallbackImage(categoryName, name));


  const getDetailPath = () => {
    return `/products/${product.id}`;
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAvailable) {
      addToCart(product);
    }
  };

  // Helper to render customized modern geometric gold SVGs matching medicine form
  const renderMedicineIcon = (cat, nam) => {
    const categoryLower = cat.toLowerCase();
    const nameLower = nam.toLowerCase();

    if (categoryLower.includes('tablet') || nameLower.includes('tablet') || categoryLower.includes('pill') || nameLower.includes('pill')) {
      // 1. Sleek luxury diagonal-cut golden tablet disk
      return (
        <svg width="55" height="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#c6a872] opacity-85 filter drop-shadow-[0_0_12px_rgba(198,168,114,0.25)]">
          <circle cx="32" cy="32" r="22" stroke="#c6a872" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="32" cy="32" r="17" stroke="#c6a872" strokeWidth="2.5" />
          <line x1="22.5" y1="41.5" x2="41.5" y2="22.5" stroke="#c6a872" strokeWidth="2" strokeLinecap="round" />
          <circle cx="27" cy="27" r="1.5" fill="#c6a872" />
          <circle cx="37" cy="37" r="1.5" fill="#c6a872" />
        </svg>
      );
    } else if (categoryLower.includes('syrup') || nameLower.includes('syrup') || categoryLower.includes('liquid') || nameLower.includes('drops') || nameLower.includes('suspension')) {
      // 2. High-end minimal geometric syrup bottle/vial
      return (
        <svg width="55" height="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#c6a872] opacity-85 filter drop-shadow-[0_0_12px_rgba(198,168,114,0.25)]">
          <path d="M32 8 L48 18 L48 46 L32 56 L16 46 L16 18 Z" stroke="#c6a872" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="25" y="24" width="14" height="22" rx="3.5" stroke="#c6a872" strokeWidth="2.5" />
          <path d="M29 24V18H35V24" stroke="#c6a872" strokeWidth="2" strokeLinejoin="round" />
          <path d="M32 14V18" stroke="#c6a872" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="35" r="2" fill="#c6a872" />
          <line x1="29" y1="30" x2="35" y2="30" stroke="#c6a872" strokeWidth="1.5" />
        </svg>
      );
    } else if (categoryLower.includes('device') || categoryLower.includes('equipment') || nameLower.includes('monitor') || nameLower.includes('thermometer') || nameLower.includes('oximeter')) {
      // 3. Modern precision geometric equipment crosshair/radar
      return (
        <svg width="55" height="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#c6a872] opacity-85 filter drop-shadow-[0_0_12px_rgba(198,168,114,0.25)]">
          <circle cx="32" cy="32" r="21" stroke="#c6a872" strokeWidth="1" />
          <path d="M32 14V50M14 32H50" stroke="#c6a872" strokeWidth="0.75" strokeDasharray="3 3" />
          <rect x="24" y="24" width="16" height="16" rx="3" stroke="#c6a872" strokeWidth="2.5" />
          <path d="M28 32H36" stroke="#c6a872" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    } else {
      // 4. Ultra-clean premium tilted medical capsule (default)
      return (
        <svg width="55" height="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#c6a872] opacity-85 filter drop-shadow-[0_0_12px_rgba(198,168,114,0.25)]">
          <circle cx="32" cy="32" r="22" stroke="#c6a872" strokeWidth="1" strokeDasharray="3 3" />
          <g transform="rotate(-45 32 32)">
            <rect x="23" y="16" width="18" height="32" rx="9" stroke="#c6a872" strokeWidth="2.5" />
            <line x1="23" y1="32" x2="41" y2="32" stroke="#c6a872" strokeWidth="2" />
            <circle cx="32" cy="24" r="1.5" fill="#c6a872" />
            <line x1="30" y1="40" x2="34" y2="40" stroke="#c6a872" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>
      );
    }
  };

  const cartItem = items ? items.find(item => item.id === product.id) : null;
  const inCart = !!cartItem;
  const qty = cartItem ? cartItem.quantity : 0;

  const stockText = isAvailable ? (isLowStock ? 'LOW STOCK' : 'IN STOCK') : 'OUT OF STOCK';
  const stockBadgeColor = isAvailable
    ? (isLowStock ? 'bg-[#ffdad6] text-[#93000a]' : 'bg-[#8df5e4]/50 text-[#005048]')
    : 'bg-[#717782]/20 text-[#717782]';

  return (
    <div className="group bg-white border border-[#CFD8DC] p-6 hover:border-[#005596] transition-all duration-300 flex flex-col h-full rounded-[20px]">
      {/* 1. IMAGE ZONE */}
      <Link to={getDetailPath()} className="block relative h-64 mb-6 bg-white flex items-center justify-center overflow-hidden rounded-[12px]">
        <img
          src={imageSrc}
          alt={name}
          onError={() => setImageError(true)}
          className="object-contain h-48 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`${stockBadgeColor} px-3 py-1 rounded-full text-xs font-bold tracking-wider`}>
            {stockText}
          </span>
        </div>
      </Link>

      {/* 2. BRAND & RATING ROW */}
      <div className="flex justify-between items-start mb-2">
        <Link to={getDetailPath()} className="hover:text-[#005596] transition-colors">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-[#0f1c2c] leading-tight">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 flex-shrink-0 mt-1 select-none">
          <Star className="w-4 h-4 text-[#006b5f] fill-[#006b5f]" />
          <span className="font-bold text-sm text-[#414751]">
            {(product.rating || 4.5).toFixed(1)}
          </span>
        </div>
      </div>

      {/* 3. Rx REQUIREMENT INDICATOR */}
      {!!product.prescriptionRequired && (
        <div className="flex items-center gap-1.5 mb-4 text-[#ba1a1a] text-xs font-bold">
          <span className="text-sm">📋</span> Rx Required
        </div>
      )}

      {/* 4. DESCRIPTION */}
      <p className="text-[#414751] font-sans text-sm mb-6 line-clamp-2 leading-relaxed">
        {product.description || 'Fast-acting clinical formulation developed under regulatory compliance standards.'}
      </p>

      {/* 5. FOOTER PRICE & CTA */}
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#CFD8DC]/30">
        <div>
          <span className="text-[#414751] text-[10px] uppercase block font-bold tracking-wider">Price</span>
          <span className="text-[#005596] font-bold text-xl">
            ₹{price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center">
          {!isAvailable ? (
            <button
              disabled
              className="bg-[#717782] text-white px-5 py-2.5 rounded-full cursor-not-allowed text-xs font-bold"
            >
              Notify Me
            </button>
          ) : inCart ? (
            <div className="flex items-center bg-[#eef4ff] rounded-full border border-[#c1c7d3] p-0.5 overflow-hidden transition-all duration-300">
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); updateQuantity(product.id, qty - 1, stockCount); }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#005596] hover:bg-white active:scale-75 transition-all"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center text-xs font-bold text-[#0f1c2c] select-none">{qty}</span>
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); updateQuantity(product.id, qty + 1, stockCount); }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#005596] hover:bg-white active:scale-75 transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-[#0f1c2c] hover:bg-[#005596] text-white p-3 rounded-[12px] transition-colors flex items-center justify-center active:scale-90"
            >
              <CartPlusIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
