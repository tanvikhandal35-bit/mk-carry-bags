import { useState, useEffect } from 'react'
import './index.css'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import CartDrawer from './components/CartDrawer'
import SearchModal from './components/SearchModal'
import ProductModal from './components/ProductModal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products, { allProducts } from './components/Products'
import CustomPrint from './components/CustomPrint'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MyOrdersModal from './components/MyOrdersModal'

// Floating WhatsApp Button with Badge
function WhatsAppBtn() {
  return (
    <a
      id="whatsapp-float-btn"
      href="https://wa.me/919166508949?text=Hello! I want to order carry bags from MK Carry Bags."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  )
}

// Back to Top Button
function BackToTopBtn() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-white/90 backdrop-blur-md text-teal-800 rounded-full flex items-center justify-center shadow-lg border border-teal-100 hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-in"
      title="Back to Top"
      aria-label="Back to Top"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}

// Offer Banner
function OfferBanner({ scrolled }) {
  return (
    <div className={`text-white text-center py-2 text-xs sm:text-sm font-medium border-b transition-all duration-500 px-2 truncate ${
      scrolled
        ? 'bg-teal-950/90 backdrop-blur-md border-teal-800/80'
        : 'bg-teal-950/30 backdrop-blur-sm border-white/10'
    }`}>
      🎉 <strong className="text-amber-400">SPECIAL OFFER:</strong> Bulk order par 30% discount + Free Delivery! &nbsp;
      <a href="#contact" className="underline font-bold hover:text-amber-300 transition-colors inline-block">
        Abhi Quote Lao →
      </a>
    </div>
  )
}

// Fixed header wrapper that stacks OfferBanner + Navbar
function StickyHeader({ cartCount, onOpenCart, onOpenSearch, onOpenMyOrders }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'shadow-lg shadow-teal-950/10' : ''
    }`}>
      <OfferBanner scrolled={scrolled} />
      <Navbar cartCount={cartCount} onOpenCart={onOpenCart} onOpenSearch={onOpenSearch} onOpenMyOrders={onOpenMyOrders} />
    </header>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cartItems, setCartItems] = useState([
    { id: 1, qty: 200, isPrinted: true, selectedPrice: 24 },
    { id: 2, qty: 200, isPrinted: true, selectedPrice: 18 },
    { id: 4, qty: 500, isPrinted: true, selectedPrice: 6.5 },
  ])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMyOrdersOpen, setIsMyOrdersOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleAddToCart = (productId, qty = 200, isPrinted = true, selectedPrice = null) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === productId && item.isPrinted === isPrinted)
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex] = { ...updated[existingIndex], qty: updated[existingIndex].qty + qty }
        return updated
      }
      return [...prev, { id: productId, qty, isPrinted, selectedPrice }]
    })
  }

  const handleUpdateQty = (productId, newQty) => {
    setCartItems((prev) => prev.map((item) => (item.id === productId ? { ...item, qty: newQty } : item)))
  }

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-900">
      {/* Preloader */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Sticky Header */}
      <StickyHeader
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMyOrders={() => setIsMyOrdersOpen(true)}
      />

      {/* Hero section at top (100vh) behind transparent navbar */}
      <Hero />

      <Categories />
      <Products
        allProducts={allProducts}
        cartItems={cartItems}
        onAddToCart={(id, qty, isPrinted, selectedPrice) => handleAddToCart(id, qty, isPrinted, selectedPrice)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />
      <CustomPrint />
      <Testimonials />
      <About />
      <Contact />
      <Footer />

      {/* Modals & Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        allProducts={allProducts}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={allProducts}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      <ProductModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(id, qty, isPrinted, unitPrice) => handleAddToCart(id, qty, isPrinted, unitPrice)}
      />

      <MyOrdersModal
        isOpen={isMyOrdersOpen}
        onClose={() => setIsMyOrdersOpen(false)}
      />

      {/* Floating Action Buttons */}
      <WhatsAppBtn />
      <BackToTopBtn />
    </div>
  )
}

export default App
