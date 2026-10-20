import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
          Who We Are
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
          Welcome to Frontier Technologies
        </h1>
        <p className="text-xl font-light text-gray-300">
          Your Trusted Partner in Advanced Technology &amp; Safety Solutions
        </p>
      </div>

      {/* Main Introduction Card */}
      <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-8 sm:p-12 space-y-6">
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          Located in the heart of ECB Chattar, Mirpur, Dhaka, Frontier Technologies is a premier, specialized technology provider in Bangladesh. Powered by a dedicated and agile team of 10 to 15 industry experts, we bridge the gap between world-class engineering innovations and local operational needs. We specialize in sourcing, delivering, and integrating state-of-the-art products and tailored technological solutions for commercial, industrial, maritime, and public safety sectors.
        </p>
      </div>

      {/* World-Class Product Offerings */}
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
            World-Class Product Offerings
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            We take pride in offering authentic, top-tier equipment from global leaders to ensure accuracy, durability, and performance in critical environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              Thermal Cameras
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precise thermal monitoring and predictive maintenance are essential for industrial efficiency and safety. Our portfolio features industry-leading thermography instruments, including the Fluke Ti480 PRO, the Fluke Ti400, and the accessible yet powerful Fluke TS75+ Thermal Camera.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              Drones &amp; Aerial Systems
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              As aerial data collection and surveillance become integral to modern enterprise, we supply the complete spectrum of DJI innovation. Our selection ranges from compact aerial platforms like the DJI Mini 4, DJI Air 3, and triple-camera DJI Mavic 3 Pro, to specialized heavy-duty systems under DJI Enterprise and precision-driven agricultural platforms from DJI Agriculture.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              Radio Communications
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uncompromising voice communication is vital for security and hazardous operations. We provide heavy-duty ICOM land-mobile and marine transceivers, including the trusted ICOM IC-F26, the feature-packed ICOM IC-F4021T, and the intrinsically safe ICOM IC-M87 ATEX Safe Marine walkie-talkie designed for explosive or maritime environments.
            </p>
          </div>
        </div>
      </div>

      {/* Specialized Turnkey Solutions */}
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
            Specialized Turnkey Solutions
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            At Frontier Technologies, we do more than supply hardware—we design and deploy comprehensive end-to-end solutions customized to your operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 space-y-2">
            <h4 className="text-base font-semibold text-white">Thermal Imaging &amp; Night Vision Systems</h4>
            <p className="text-xs text-gray-400">Comprehensive setups for industrial thermal diagnostics, night vision monitoring, and continuous thermal facility oversight.</p>
          </div>
          <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 space-y-2">
            <h4 className="text-base font-semibold text-white">UAV &amp; Aerial Inspection Solutions</h4>
            <p className="text-xs text-gray-400">Integrated drone systems tailored for mapping, agricultural spraying, infrastructure inspections, and aerial search operations.</p>
          </div>
          <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 space-y-2">
            <h4 className="text-base font-semibold text-white">Fire Safety &amp; Firefighting Solutions</h4>
            <p className="text-xs text-gray-400">Specialized firefighting thermal imaging and robust fireman safety equipment engineered to protect life and property under extreme conditions.</p>
          </div>
          <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 space-y-2">
            <h4 className="text-base font-semibold text-white">Surveillance &amp; Security Systems</h4>
            <p className="text-xs text-gray-400">Advanced multi-layered monitoring and surveillance solutions built to safeguard key critical infrastructure.</p>
          </div>
          <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 space-y-2">
            <h4 className="text-base font-semibold text-white">Emergency Supplies &amp; Safety Equipment</h4>
            <p className="text-xs text-gray-400">Comprehensive arrays of safety gear, emergency provisioning, and protective equipment ready for rapid deployment.</p>
          </div>
          <div className="bg-zinc-950 border border-white/5 rounded-xl p-5 space-y-2">
            <h4 className="text-base font-semibold text-white">Radio Communications Networks</h4>
            <p className="text-xs text-gray-400">Seamless, secure, and clear wireless communication infrastructures tailored for field teams, security agencies, and marine vessels.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-zinc-900 via-slate-950 to-black border border-blue-500/30 rounded-3xl p-8 sm:p-12 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider text-center">
          Why Choose Frontier Technologies?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-400">Expert Consulting &amp; Support</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our compact, highly trained team offers personalized attention, ensuring you get the exact hardware and system architecture for your specific challenge.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-400">Quality Assurance</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We partner directly with leading international brands to deliver genuine products meeting global standards.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-400">Strategic Local Presence</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Conveniently situated at ECB Chattar in Mirpur, Dhaka, we provide rapid support, maintenance, and consultation across Bangladesh.
            </p>
          </div>
        </div>
        <div className="text-center pt-6">
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold text-sm px-8 py-3 rounded-full hover:bg-gray-200 transition-all uppercase tracking-wider"
          >
            Connect With Our Experts
          </Link>
        </div>
      </div>

    </div>
  );
}