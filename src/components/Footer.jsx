export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <img src="/mk_logo.png" alt="MK Carry Bags Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  MK <span className="text-amber-400">Carry Bags</span>
                </span>
                <p className="text-[10px] text-gray-400">Premium Packaging Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              India ka sabse trusted carry bag aur printed polythene supplier. 
              15+ years of excellence in packaging solutions.
            </p>
            <div className="flex gap-3">
              {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
                <button key={i} className="w-9 h-9 bg-white/10 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors text-sm">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'Categories', 'Custom Print', 'About Us', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-1">
                    <span className="text-teal-600">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              {[
                'Kraft Paper Carry Bags',
                'LDPE Printed Polythene',
                'HDPE Carry Bags',
                'Non-Woven Tote Bags',
                'PP Woven Bags',
                'Custom Printed Bags',
                'Zip Lock Bags',
                'Gift Bags',
              ].map(p => (
                <li key={p}>
                  <a href="#products" className="text-gray-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-1">
                    <span className="text-teal-600">›</span> {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <span className="text-teal-400 mt-0.5">📍</span> Shilp Colony, Near Jodhpur Sweets, Khatipura Road, Jhotwara, Jaipur
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-teal-400">📞</span> +91 91665 08949
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-teal-400">📞</span> +91 92140 55553
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-teal-400">📧</span> hello@mkcarrybags.in
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-teal-400">🕐</span> Mon–Sat: 9am – 6pm
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="font-bold text-white mb-2 text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <input
                id="footer-newsletter"
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
              />
              <button id="footer-subscribe-btn" className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 rounded-xl text-sm font-medium transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 MK Carry Bags. All rights reserved. Made with ❤️ in India 🇮🇳
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Return Policy'].map(item => (
              <a key={item} href="#" className="text-gray-500 hover:text-teal-400 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
