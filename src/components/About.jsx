const features = [
  { icon: '🏆', title: 'Premium Quality', desc: 'ISO certified manufacturing process with strict quality control.' },
  { icon: '💰', title: 'Best Wholesale Price', desc: 'Direct manufacturer se kharidkar save karo middleman costs.' },
  { icon: '🎨', title: 'Custom Printing', desc: 'Apna logo aur design print karwao — CMYK full color printing.' },
  { icon: '🚚', title: 'Pan India Delivery', desc: 'Express and standard delivery options available across India.' },
  { icon: '♻️', title: 'Eco-Friendly Options', desc: 'Biodegradable aur recycled material bags available.' },
  { icon: '🤝', title: '24/7 Support', desc: 'Dedicated account manager aur customer support team.' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              About M.K. Carry Bags
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              India Ka Trusted
              <span className="text-gradient"> Packaging Partner</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              15+ saalon se hum India ke businesses ko premium quality carry bags aur printed polythene bags 
              supply kar rahe hain. Shilp Colony, Jhotwara, Jaipur se shuru hua humara safar aaj poore India tak pahunch gaya hai.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Hamare paas state-of-the-art manufacturing unit aur retail outlet hai jahan se hum wholesale aur custom orders deliver karte hain. Custom printing se lekar bulk orders tak — sab kuch ek hi jagah.
            </p>

            {/* Timeline */}
            <div className="flex items-center gap-8">
              {[
                { year: '2009', label: 'Founded' },
                { year: '2015', label: 'Custom Printing' },
                { year: '2020', label: 'Pan India' },
                { year: '2026', label: 'Modern Store' },
              ].map((item, idx) => (
                <div key={idx} className="text-center relative">
                  <div className="text-xl font-black text-teal-600">{item.year}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Storefront Image Card */}
          <div className="relative">
            {/* Glow/Shadow background */}
            <div className="absolute inset-0 bg-teal-500/10 rounded-3xl blur-2xl transform scale-105" />
            
            <div className="relative bg-white rounded-3xl border border-gray-100 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10]">
                <img
                  src="/storefront.png"
                  alt="M.K. Carry Bags Storefront"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-6 left-6 bg-teal-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                📍 Jaipur Outlet
              </div>
              
              <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-lg">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Hamari Dukaan</p>
                <h4 className="font-bold text-gray-800 text-base mt-0.5">M.K. Carry Bags, Jhotwara, Jaipur</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-600">
                  <span className="flex items-center gap-1 font-semibold text-teal-700">
                    📞 +91 92140 55553
                  </span>
                  <span className="flex items-center gap-1">
                    🟢 Available on WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 border-t border-gray-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Hamari Khasiyat</h3>
            <p className="text-gray-500 text-sm mt-2">Kyun hum hain India ke trusted packaging partner</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-teal-50/30 border border-teal-500/5 hover:bg-teal-50 transition-all duration-300 group">
                <div className="text-2xl w-12 h-12 flex-shrink-0 flex items-center justify-center bg-teal-100 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <span>{f.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-base">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
