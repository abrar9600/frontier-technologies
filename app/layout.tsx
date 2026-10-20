import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Frontier Technologies | Advanced Tech & Safety Solutions',
  description: 'Premier technology provider in Dhaka, Bangladesh specializing in Thermal Imaging, Drones, and Radio Communications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-100 bg-[#0a0a0c]">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}