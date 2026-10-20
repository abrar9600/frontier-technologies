"use me"
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 nav-glass transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold tracking-wider text-white uppercase flex items-center gap-2">
          <span className="text-blue-500 font-extrabold">FRONTIER</span> TECHNOLOGIES
        </Link>

        {/* 5 Primary Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Contact CTA Button */}
        <div>
          <Link 
            href="/contact" 
            className="hidden sm:inline-block bg-white text-black text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}