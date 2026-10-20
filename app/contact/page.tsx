"use client";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          Contact Us
        </h1>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          At Frontier Technologies, we are dedicated to providing cutting-edge technological hardware and turnkey solutions tailored to your operational demands.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Information Cards */}
        <div className="space-y-8">
          <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-b border-white/10 pb-4">
              Reach Out to Our Team
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We welcome inquiries from industrial partners, government agencies, commercial enterprises, and emergency response teams across Bangladesh. Connect with our dedicated experts to discuss your technical specifications, request a product quotation, or arrange an in-person demonstration.
            </p>

            <div className="space-y-5 text-sm pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 font-bold">
                  📍
                </div>
                <div>
                  <h3 className="text-xs text-gray-500 font-semibold uppercase">Office Address</h3>
                  <p className="text-white font-medium mt-0.5">
                    Home 71, ECB Chattar, Mirpur, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 font-bold">
                  📞
                </div>
                <div>
                  <h3 className="text-xs text-gray-500 font-semibold uppercase">Phone / Mobile</h3>
                  <p className="text-white font-medium mt-0.5">+880 1410638365</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 font-bold">
                  ✉️
                </div>
                <div>
                  <h3 className="text-xs text-gray-500 font-semibold uppercase">Email Address</h3>
                  <p className="text-white font-medium mt-0.5">frontier.technologies@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 font-bold">
                  🕒
                </div>
                <div>
                  <h3 className="text-xs text-gray-500 font-semibold uppercase">Business Hours</h3>
                  <p className="text-white font-medium mt-0.5">
                    Sunday – Thursday: 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">Friday – Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Visit Our Office</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Situated conveniently at ECB Chattar in Mirpur, Dhaka, our team of 10 to 15 technology specialists is always available to discuss how our products and engineering solutions can elevate your safety, surveillance, and operational standards. Stop by our office or contact us today to start the conversation.
            </p>
          </div>
        </div>

        {/* Contact Inquiry Form */}
        <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
            Send Us a Message
          </h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+880 1XXXXXXX"
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                Solution or Product Interest
              </label>
              <select className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-blue-500">
                <option>Thermal Cameras (Fluke)</option>
                <option>Drones &amp; Aerial Systems (DJI)</option>
                <option>Radio Communications (ICOM)</option>
                <option>Fireman Safety &amp; Firefighting Solutions</option>
                <option>Surveillance &amp; Security Systems</option>
                <option>Emergency Supplies &amp; Safety Equipment</option>
                <option>General Consultation / Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                Message / Specifications
              </label>
              <textarea
                rows={4}
                placeholder="Describe your operational requirement or request a quotation..."
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl hover:bg-gray-200 transition-all mt-2"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}