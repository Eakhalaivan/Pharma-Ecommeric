import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, LogIn, LayoutDashboard, ShieldAlert, Pill, User, Mail, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function EcommerceNavbar() {
  const { cartCount } = useCart();
  const { user, isAuthenticated, loginAsCustomer, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleCustomerLogin = (e) => {
    e.preventDefault();
    if (!customerName || !customerEmail) {
      toast.error('Please enter your name and email');
      return;
    }
    loginAsCustomer(customerName, customerEmail);
    toast.success(`Welcome back, ${customerName}!`);
    setLoginModalOpen(false);
    setCustomerName('');
    setCustomerEmail('');
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Medicines', path: '/products' },
    { label: 'Lab Tests', path: '/lab-tests' },
    { label: 'Consult Doctor', path: '/consultations' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 h-20 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm px-6 lg:px-12 flex items-center justify-between transition-all">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
          <Pill className="w-5 h-5 text-white" />
        </div>
        <div>
          <span className="text-lg font-black text-secondary uppercase tracking-tighter leading-none block">
            Pharma<span className="text-primary italic">Desk</span>
          </span>
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block leading-none">
            E-Commerce Store
          </span>
        </div>
      </Link>

      {/* Nav links */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.label}
              to={link.path}
              className={`text-xs font-black uppercase tracking-widest hover:text-primary transition-colors ${
                isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary/70'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5">
        {/* Shopping Cart Badge */}
        <Link
          to="/cart"
          className="relative p-3 bg-white border border-gray-100 hover:border-primary/20 hover:text-primary rounded-2xl shadow-sm transition-all"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-md animate-bounce">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </Link>

        {/* Auth Swapper */}
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            {/* ONLY show PMS Portal link for corporate staff (NOT customer) */}
            {!user?.isCustomer && (
              <Link
                to="/pms"
                className="flex items-center gap-2 px-5 py-3 bg-[#0f172a] hover:bg-[#0f172a]/90 text-white rounded-2xl text-[10px] font-black uppercase tracking-wider transition-all shadow-md shadow-[#0f172a]/15"
              >
                <LayoutDashboard className="w-4 h-4 text-primary" />
                PMS Portal
              </Link>
            )}
            
            {user?.isCustomer && (
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl shadow-sm">
                Customer
              </span>
            )}
            
            <div className="flex items-center gap-2.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-black text-white shadow-inner">
                {user?.name ? user.name.slice(0, 2).toUpperCase() : 'US'}
              </div>
              <button
                onClick={handleLogout}
                className="text-[9px] font-black text-rose-500 uppercase tracking-widest hover:underline px-1 cursor-pointer"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {/* Admin Portal Button */}
            <Link
              to="/login"
              className="flex items-center gap-2 px-5 py-3 border border-[#c6a872]/45 hover:bg-[#c6a872]/5 text-[#ab8a4c] rounded-2xl text-[10px] font-black uppercase tracking-wider transition-all shadow-sm"
              title="DRHMS Staff & Admin Portal"
            >
              <ShieldAlert className="w-4 h-4" />
              Admin Portal
            </Link>

            {/* E-Commerce Sign In */}
            <button
              onClick={() => setLoginModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-2xl text-xs font-black uppercase tracking-[0.15em] transition-all shadow-lg shadow-primary/20 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
          </div>
        )}
      </div>

      {/* Customer Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-secondary/40 backdrop-blur-sm"
            onClick={() => setLoginModalOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-md bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl z-10">
            {/* Close Button */}
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer animate-fade-in"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                <Pill className="w-7 h-7 animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-secondary uppercase tracking-wide">
                Customer Sign In
              </h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                Access your PharmaDesk E-Store Account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleCustomerLogin} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-secondary outline-none focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-secondary outline-none focus:bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md shadow-primary/25 cursor-pointer mt-2"
              >
                Sign In As Customer
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
