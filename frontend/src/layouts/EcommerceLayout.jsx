import { Outlet } from 'react-router-dom';
import EcommerceNavbar from '../components/ecommerce/EcommerceNavbar';
import Footer from '../components/ecommerce/Footer';

export default function EcommerceLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800 selection:bg-primary/10 selection:text-primary">
      {/* Dynamic Glassmorphic Navbar */}
      <EcommerceNavbar />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Structured Public Footer */}
      <Footer />
    </div>
  );
}
