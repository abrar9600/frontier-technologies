import Link from "next/link";

const thermalCameras = [
  {
    name: "Fluke Ti480 PRO Infrared Camera",
    tagline: "High-Performance 640 x 480 Thermal Resolution",
    description:
      "Engineered for industrial thermography experts. Features MultiSharp Focus to capture clear, accurate images focused throughout the field of view, and LaserSharp Auto Focus for instant target precision.",
    link: "https://www.fluke.com/en-us/product/thermal-cameras/ti480-pro?srsltid=AU7gw4V8HvWgqe4BO9ex6RE3iy7z_oWphHun4dy0A3CT_hd4n0tt6d27",
  },
  {
    name: "Fluke Ti400",
    tagline: "Advanced Predictive Maintenance Camera",
    description:
      "Delivers high thermal sensitivity and high-resolution imaging for early electrical and mechanical troubleshooting. Equipped with integrated laser distance measurement and SmartView software compatibility.",
    link: "https://www.fluke.com/en-us/product/thermal-cameras/ti400?srsltid=AU7gw4WmYsNWdc_8zLMecT0bFRD-_I1LKObjSMI8kITZHQLadLVqsD5G",
  },
  {
    name: "Fluke TiS75+ Thermal Camera",
    tagline: "Accessible & Rugged Thermal Inspection",
    description:
      "Durable entry-to-mid range thermal camera with 384 x 288 resolution. Designed with built-in asset tagging, voice annotation, and ISOFUSION visual blending to simplify routine maintenance scans.",
    link: "https://www.fluke.com/en-us/product/thermal-cameras/tis75plus?srsltid=AU7gw4XDsxtUWD7T4Vnaskw74BK8Tv6yKrFAXBiXFExAA3P-oHp-TG-8",
  },
];

const drones = [
  {
    name: "DJI Mavic 3 Pro",
    tagline: "Triple-Lens Flagship Aerial System",
    description:
      "Features a 4/3 CMOS Hasselblad camera along with dual tele cameras. Offers 43-minute maximum flight time, omnidirectional obstacle sensing, and 15km HD video transmission.",
    link: "https://www.dji.com/mavic-3-pro",
  },
  {
    name: "DJI Air 3",
    tagline: "Dual-Primary Camera Compact Drone",
    description:
      "Boasts a 1/1.3-inch CMOS medium tele camera and 1/1.3-inch CMOS wide-angle camera. Delivers 46-minute flight time and 4K/60fps HDR video capture.",
    link: "https://www.dji.com/air-3",
  },
  {
    name: "DJI Mini 4 Pro",
    tagline: "Under-249g Mini Aerial Platform",
    description:
      "Ultra-lightweight yet ultra-capable. Features omnidirectional obstacle sensing, 4K/60fps HDR video, and active tracking for high-portability inspections.",
    link: "https://www.dji.com/mini-4-pro",
  },
  {
    name: "DJI Enterprise Systems",
    tagline: "Heavy-Duty Public Safety & Inspection Solutions",
    description:
      "Industrial unmanned aerial platforms built for thermal mapping, search & rescue, infrastructure inspection, and public safety operations.",
    link: "https://enterprise.dji.com/",
  },
  {
    name: "DJI Agriculture Platforms",
    tagline: "Precision Crop Protection & Spraying Drones",
    description:
      "Advanced agricultural drones engineered for crop spraying, aerial mapping, soil analysis, and automated field monitoring.",
    link: "https://ag.dji.com/",
  },
];

const walkieTalkies = [
  {
    name: "ICOM IC-F26 / IC-F16 Series",
    tagline: "Heavy-Duty Commercial Handheld Radio",
    description:
      "Rugged, dependable land-mobile transceivers engineered for harsh job sites. Delivers crystal-clear audio, durable chassis, and simplified intuitive controls.",
    link: "https://www.icomjapan.com/lineup/products/IC-F16/",
  },
  {
    name: "ICOM IC-F4021T",
    tagline: "Feature-Packed Trunked & Tactical Transceiver",
    description:
      "Equipped with a full DTMF keypad, multiple signaling channels, and extended battery endurance tailored for commercial and public security operations.",
    link: "https://www.ameradio.com/product/260321/description.html?srsltid=AU7gw4Uj4mzQglKrwNrGOKDTaCfPT_lgOcKEpi-BWGqxBBgnFprPBqmL",
  },
  {
    name: "ICOM IC-M87 ATEX Safe Marine",
    tagline: "Intrinsically Safe Explosive-Proof Radio",
    description:
      "Built for hazardous marine and oil-and-gas environments. Meets international ATEX safety standards with IPX7 waterproof rating.",
    link: "https://www.icomjapan.com/lineup/products/IC-M87/",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          World-Class Products
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Explore our range of authentic, high-grade hardware sourced directly from world leaders in thermography, aviation, and tactical communications.
        </p>
      </div>

      {/* 1. Thermal Cameras Section */}
      <section id="thermal" className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
            Thermal Cameras
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {thermalCameras.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                  {item.tagline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-white bg-white/10 hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all"
                >
                  Official Product Specs &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Drones Section */}
      <section id="drones" className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
            Drones & Aerial Systems
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drones.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                  {item.tagline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-white bg-white/10 hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all"
                >
                  Official Product Specs &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Walkie Talkies Section */}
      <section id="radios" className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
            Radio Communications & Walkie Talkies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {walkieTalkies.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                  {item.tagline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-white bg-white/10 hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all"
                >
                  Official Product Specs &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Banner */}
      <div className="bg-gradient-to-r from-blue-900/40 via-zinc-900 to-black border border-blue-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Need a Custom Equipment Quotation?
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Our technical specialists at Frontier Technologies can assist you with selecting the right models and configuring integrated turnkey packages.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-black font-semibold text-sm px-8 py-3 rounded-full hover:bg-gray-200 transition-all uppercase tracking-wider"
        >
          Contact Our Sales Team
        </Link>
      </div>
    </div>
  );
}