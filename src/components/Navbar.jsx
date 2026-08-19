import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#categories', label: 'Categories' },
  { href: '#custom-print', label: 'Custom Print' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ cartCount = 0, onOpenCart, onOpenSearch, onOpenMyOrders }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`relative w-full transition-all duration-500 transform-gpu ${
      scrolled
        ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-teal-900/10 border-b border-gray-200/60'
        : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-md group-hover:shadow-teal-300 transition-all duration-300 flex-shrink-0 border border-white/20">
              <img src="/mk_logo.png" alt="MK Carry Bags Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-teal-800' : 'text-white'}`}
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                MK <span className="text-amber-400">Carry Bags</span>
              </span>
              <p className={`text-[10px] font-medium transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-teal-200'}`}>
                Premium Packaging Solutions
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noreferrer" : undefined}
                className={`text-sm font-medium transition-all duration-200 hover:text-amber-400 relative group ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
            
            <button
              onClick={onOpenMyOrders}
              className={`text-sm font-medium transition-all duration-200 hover:text-amber-400 relative group ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              My Orders
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search */}
            <button
              id="nav-search-btn"
              onClick={onOpenSearch}
              className={`flex items-center gap-2 text-xs sm:text-sm px-3 py-2 rounded-xl transition-all duration-200 active:scale-95 ${
                scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white/80 hover:bg-white/10'
              }`}
              title="Search products"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Cart */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              className={`relative p-2 rounded-xl transition-all duration-200 active:scale-95 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              title="Open shopping cart"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7m-7 0a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Get Quote CTA */}
            <a
              href="#contact"
              id="nav-quote-btn"
              className="hidden md:block btn-accent text-sm px-4 py-2"
            >
              Get Quote
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="nav-menu-toggle"
              aria-label="Toggle menu"
              className={`md:hidden p-2 rounded-xl transition-all duration-200 active:scale-95 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 py-4 flex flex-col gap-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium py-2.5 px-4 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-all duration-200 flex items-center justify-between"
            >
              {link.label}
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenMyOrders();
            }}
            className="text-gray-700 font-medium py-2.5 px-4 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-all duration-200 flex items-center justify-between"
          >
            My Orders
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-accent text-center mt-2 py-3"
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

