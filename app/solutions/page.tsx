import Link from "next/link";

const solutionsList = [
  {
    title: "Thermal Imaging Systems",
    category: "Industrial & Predictive Monitoring",
    description:
      "Comprehensive setups for continuous thermal facility oversight, high-voltage electrical inspections, mechanical hotspot detection, and industrial preventive maintenance.",
  },
  {
    title: "Drones & Unmanned Aerial Vehicle (UAV) Solutions",
    category: "Aerial Mapping & Surveillance",
    description:
      "Integrated drone systems tailored for topological mapping, agricultural precision spraying, high-altitude infrastructure inspections, and aerial search operations.",
  },
  {
    title: "Fireman Safety Solutions",
    category: "Public Safety & Life Protection",
    description:
      "Heavy-duty protective personal equipment (PPE), hazard detectors, and intrinsically safe gear engineered specifically to shield emergency responders in high-temperature environments.",
  },
  {
    title: "Fire Fighting Thermal Imaging",
    category: "Vision Through Smoke & Darkness",
    description:
      "Specialized thermography gear designed for firefighters to navigate smoke-filled structures, quickly pinpoint thermal seats of fire, and locate trapped victims.",
  },
  {
    title: "Night Vision Technology",
    category: "Tactical & Maritime Oversight",
    description:
      "High-precision electro-optical systems and low-light amplification tech engineered for border control, nocturnal security patrols, maritime operations, and tactical teams.",
  },
  {
    title: "Surveillance Systems",
    category: "Infrastructure Security",
    description:
      "Advanced multi-layered perimeter defense, smart monitoring cameras, and central control management solutions built to safeguard key national and commercial assets.",
  },
  {
    title: "Emergency Supplies",
    category: "Rapid Deployment & Disaster Relief",
    description:
      "Comprehensive emergency provisioning kits, portable tactical shelters, emergency lighting systems, and rapid-response gear ready for crisis deployment across Bangladesh.",
  },
  {
    title: "Safety Equipment Solutions",
    category: "Commercial & Industrial Hazards",
    description:
      "Complete occupational safety gear tailored for industrial manufacturing plants, hazardous chemical handling, maritime ports, and high-risk construction zones.",
  },
  {
    title: "Radio Communications Networks",
    category: "Secure Field Communications",
    description:
      "Seamless, secure, and clear wireless communication infrastructures—incorporating land-mobile, marine, and ATEX intrinsically safe handheld transceivers for mission-critical teams.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          Specialized Turnkey Solutions
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          At Frontier Technologies, we design, configure, and deploy end-to-end technological systems engineered for public safety, industrial diagnostics, and enterprise operations.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutionsList.map((solution, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/50 hover:bg-zinc-900/90 transition-all group"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block">
                {solution.category}
              </span>
              <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {solution.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs font-semibold text-white bg-white/10 hover:bg-white hover:text-black px-5 py-2.5 rounded-full transition-all uppercase tracking-wider"
              >
                Consult an Expert &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-zinc-900 via-blue-950 to-black border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for a Tailored Engineering Architecture?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Our team of 10 to 15 technology specialists works directly with your operational leaders to deliver integrated hardware and deployment strategies.
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-white text-black font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-gray-200 transition-all uppercase tracking-wider whitespace-nowrap"
        >
          Discuss Your Project
        </Link>
      </div>
    </div>
  );
}