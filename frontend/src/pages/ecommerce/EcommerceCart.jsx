import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, ArrowRight, Trash2, Printer, 
  CheckCircle2, Calendar, User, Phone, MapPin, Mail, 
  IndianRupee, CreditCard, ChevronRight, AlertCircle, 
  Plus, Minus
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useInventory } from '../../context/InventoryContext';

export default function EcommerceCart() {
  const { items, cartTotal, clearCart, updateQuantity, removeFromCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', email: '', address: '' });
  const [invoiceData, setInvoiceData] = useState(null);

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    setLoading(true);
    
    try {
      const isFreeShipping = cartTotal >= 1000;
      const shippingCharge = isFreeShipping ? 0 : 99;
      const gstAmount = cartTotal * 0.12;
      const totalAmount = cartTotal + gstAmount + shippingCharge;

      const orderData = {
        customerId: customerInfo.name || "Online Patient",
        subtotal: cartTotal,
        taxAmount: gstAmount,
        discountAmount: 0,
        totalAmount: totalAmount,
        paymentMethod: "CARD",
        paymentStatus: "PENDING",
        items: items.map(item => ({
          medicine: { id: item.id },
          medicineName: item.name,
          quantity: item.quantity,
          unitPrice: item.price,
          totalPrice: item.price * item.quantity
        }))
      };

      console.log('Placing online order:', orderData);
      
      const response = await fetch('/api/v1/invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      let savedInvoice = { invoiceNumber: `ORD-${Date.now()}`, createdAt: new Date().toISOString() };
      if (response.ok) {
        savedInvoice = await response.json();
      }

      setInvoiceData({
        ...orderData,
        customerPhone: customerInfo.phone,
        customerEmail: customerInfo.email,
        customerAddress: customerInfo.address,
        invoiceNumber: savedInvoice.invoiceNumber,
        date: new Date(savedInvoice.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
      });
      
      setIsOrdered(true);
      clearCart();
    } catch (err) {
      console.error('Failed to create online order:', err);
      // Fallback
      setInvoiceData({
        customerId: customerInfo.name || "Online Patient",
        customerPhone: customerInfo.phone,
        customerEmail: customerInfo.email,
        customerAddress: customerInfo.address,
        items: items,
        subtotal: cartTotal,
        taxAmount: cartTotal * 0.12,
        totalAmount: cartTotal * 1.12 + (cartTotal >= 1000 ? 0 : 99),
        invoiceNumber: `LOCAL-ORD-${Date.now()}`,
        date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
      });
      setIsOrdered(true);
      clearCart();
    } finally {
      setLoading(false);
    }
  };

  if (isOrdered) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center bg-white/60 backdrop-blur-xl border border-white/20 p-10 rounded-[40px] shadow-2xl"
        >
          <div className="w-24 h-24 bg-emerald-50 rounded-[40px] flex items-center justify-center mx-auto mb-8 relative">
             <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="bg-emerald-500 rounded-[30px] p-3 shadow-xl shadow-emerald-200"
             >
               <CheckCircle2 className="w-12 h-12 text-white" />
             </motion.div>
          </div>
          <h2 className="text-3xl font-black text-secondary mb-2 tracking-tighter uppercase">Order Placed Successfully!</h2>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs mb-8">Ref: {invoiceData?.invoiceNumber}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left bg-white/40 p-6 rounded-3xl border border-white/20">
             <ReceiptInfo icon={User} label="PATIENT NAME" value={invoiceData?.customerId} />
             <ReceiptInfo icon={Calendar} label="DATE" value={invoiceData?.date} />
             <ReceiptInfo icon={IndianRupee} label="GRAND TOTAL" value={`₹${invoiceData?.totalAmount.toFixed(2)}`} />
             <ReceiptInfo icon={MapPin} label="DELIVERY ADDRESS" value={invoiceData?.customerAddress || "Home Delivery"} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="flex-1 bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-wider text-xs hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Continue Shopping <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto min-h-screen">
      <div className="mb-12">
        <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mb-2">E-Commerce Storefront</p>
        <h1 className="text-4xl font-black text-secondary tracking-tight">Your Shopping Cart</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart items list */}
        <div className="lg:col-span-2 space-y-8">
          {items.length > 0 ? (
            <div className="bg-white/60 backdrop-blur-md rounded-[40px] border border-white/20 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/40 text-[10px] text-gray-400 font-black uppercase tracking-widest border-b border-gray-100">
                      <th className="px-8 py-6">MEDICINE INFO</th>
                      <th className="px-8 py-6 text-center">QUANTITY</th>
                      <th className="px-8 py-6 text-right">UNIT PRICE</th>
                      <th className="px-8 py-6 text-right">TOTAL</th>
                      <th className="px-8 py-6"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {items.map((item) => (
                      <tr key={item.id} className="hover:bg-white/40 transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                             <div className="w-16 h-16 rounded-2xl bg-gray-100 overflow-hidden border border-gray-100 shrink-0">
                                <img src={item.image} className="w-full h-full object-cover" />
                             </div>
                             <div>
                                <p className="text-sm font-black text-secondary">{item.name}</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.manufacturer}</p>
                                <span className="inline-block mt-2 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded">
                                  Genuine
                                </span>
                             </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center justify-center gap-3 bg-gray-100/60 rounded-xl p-1.5 w-max mx-auto border border-gray-200/20">
                             <button 
                               onClick={() => updateQuantity(item.id, item.quantity - 1, item.stockCount)} 
                               className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-xs font-black shadow-sm hover:text-primary transition-all disabled:opacity-20"
                               disabled={item.quantity <= 1}
                             >
                               <Minus className="w-3 h-3" />
                             </button>
                             <span className="text-sm font-black text-secondary w-6 text-center">{item.quantity}</span>
                             <button 
                               onClick={() => updateQuantity(item.id, item.quantity + 1, item.stockCount)} 
                               className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-xs font-black shadow-sm hover:text-primary transition-all disabled:opacity-20"
                               disabled={item.quantity >= item.stockCount}
                             >
                               <Plus className="w-3 h-3" />
                             </button>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-right text-sm font-bold text-gray-500">₹{item.price.toFixed(2)}</td>
                        <td className="px-8 py-6 text-right text-sm font-black text-secondary">₹{(item.price * item.quantity).toFixed(2)}</td>
                        <td className="px-8 py-6 text-right">
                           <button 
                             onClick={() => removeFromCart(item.id)} 
                             className="p-2.5 text-gray-300 hover:text-rose-500 transition-all rounded-xl hover:bg-rose-50 cursor-pointer"
                           >
                              <Trash2 className="w-4 h-4" />
                           </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
             <div className="bg-white/60 backdrop-blur-md rounded-[40px] border border-white/20 border-dashed p-24 text-center">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200">
                   <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-secondary mb-2 uppercase">Your Cart is Empty</h3>
                <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-10">Add genuine medicines to your cart first</p>
                <Link to="/products" className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                   BROWSE PRODUCTS <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          )}
        </div>

        {/* Checkout Form & Calculations */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">
            {/* Delivery Form */}
            <form onSubmit={handleCheckout} className="bg-white/60 backdrop-blur-md rounded-[40px] border border-white/20 shadow-xl p-8 space-y-6">
               <h4 className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" /> Delivery details
               </h4>
               <div className="space-y-4">
                  <div className="space-y-1">
                     <label className="text-[10px] text-gray-400 font-black uppercase tracking-widest">PATIENT NAME *</label>
                     <input 
                       type="text" 
                       required
                       placeholder="Enter full name" 
                       value={customerInfo.name}
                       onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                       className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-primary/20 outline-none text-sm font-bold transition-all"
                     />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] text-gray-400 font-black uppercase tracking-widest">CONTACT NUMBER *</label>
                     <input 
                       type="tel" 
                       required
                       placeholder="+91 00000 00000" 
                       value={customerInfo.phone}
                       onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                       className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-primary/20 outline-none text-sm font-bold transition-all"
                     />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] text-gray-400 font-black uppercase tracking-widest">EMAIL ADDRESS</label>
                     <input 
                       type="email" 
                       placeholder="patient@example.com" 
                       value={customerInfo.email}
                       onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                       className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-primary/20 outline-none text-sm font-bold transition-all"
                     />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] text-gray-400 font-black uppercase tracking-widest">DELIVERY ADDRESS *</label>
                     <textarea 
                       required
                       rows="3"
                       placeholder="Enter complete postal address" 
                       value={customerInfo.address}
                       onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                       className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-primary/20 outline-none text-sm font-bold transition-all resize-none"
                     />
                  </div>
               </div>

               {/* Calculations Summary */}
               <div className="bg-[#0f172a] text-white rounded-3xl p-6 mt-8">
                  <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">ORDER SUMMARY</h4>
                  
                  <div className="space-y-4 mb-6 border-b border-white/5 pb-6">
                     <CalculationRow label="ITEMS TOTAL" value={`₹${cartTotal.toFixed(2)}`} />
                     <CalculationRow label="GST (12%)" value={`₹${(cartTotal * 0.12).toFixed(2)}`} />
                     <CalculationRow label="DELIVERY FEE" value={cartTotal >= 1000 ? "FREE" : "₹99.00"} />
                  </div>

                  <div className="flex justify-between items-end mb-8">
                     <p className="text-[10px] font-black tracking-widest text-white/40">GRAND TOTAL</p>
                     <p className="text-3xl font-black tracking-tighter">
                       ₹{(cartTotal + (cartTotal * 0.12) + (cartTotal >= 1000 ? 0 : 99)).toFixed(2)}
                     </p>
                  </div>

                  <button 
                    type="submit"
                    disabled={items.length === 0 || loading}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-30 disabled:scale-100 cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>PLACE SECURE ORDER <ChevronRight className="w-4 h-4" /></>
                    )}
                  </button>
               </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReceiptInfo({ icon: Icon, label, value }) {
  return (
    <div className="bg-white border border-gray-50 p-4 rounded-2xl">
       <div className="flex items-center gap-2 mb-2 text-gray-400">
          <Icon className="w-3.5 h-3.5" />
          <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
       </div>
       <p className="text-sm font-black text-secondary truncate">{value}</p>
    </div>
  );
}

function CalculationRow({ label, value }) {
  return (
    <div className="flex justify-between items-center">
       <span className="text-[9px] font-black tracking-widest text-white/50">{label}</span>
       <span className="text-xs font-black">{value}</span>
    </div>
  );
}
