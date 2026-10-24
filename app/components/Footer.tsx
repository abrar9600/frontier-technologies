import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/10 pt-16 pb-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Company Summary */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-white tracking-wider uppercase">
            Frontier Technologies
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Your trusted partner in advanced technology and safety solutions. Located in Mirpur, Dhaka, we specialize in sourcing and integrating world-class thermal cameras, UAV drone systems, and tactical radio communications.
          </p>
        </div>

        {/* Page Shortcuts */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Direct Contact Info */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest">Contact Info</h4>
          <p className="text-gray-300">Home 71, ECB Chattar, Mirpur, Dhaka, Bangladesh</p>
          <p className="text-gray-300">
            <span className="text-gray-500">Phone:</span> +880 1348749147
          </p>
          <p className="text-gray-300">
            <span className="text-gray-500">Email:</span> contact.frontiertechbd@gmail.com
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2026 Frontier Technologies. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Dhaka, Bangladesh</p>
      </div>
    </footer>
  );
}
