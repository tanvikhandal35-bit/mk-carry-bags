import { useState, useEffect } from 'react'

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '200+', label: 'Bag Varieties' },
  { value: '15+', label: 'Years Experience' },
  { value: '24hr', label: 'Fast Delivery' },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      badge: '🛍️ India\'s #1 Carry Bag Supplier',
      title: 'Premium Quality',
      highlight: 'Carry Bags',
      subtitle: '& Printed Polythenes',
      desc: 'Bulk orders se lekar custom printing tak — har tarah ki packaging solution ek hi jagah. Best quality, best price guarantee.',
      cta: 'Shop Now',
      cta2: 'Custom Print Order',
      bg: 'from-teal-900 via-teal-800 to-teal-600',
    },
    {
      badge: '🎨 Custom Printing Available',
      title: 'Your Brand',
      highlight: 'Our Bags',
      subtitle: 'Custom Logo Printing',
      desc: 'Apna logo aur design print karwao — minimum 100 pieces se order karo. CMYK full color printing with premium finish.',
      cta: 'Design Now',
      cta2: 'View Samples',
      bg: 'from-slate-900 via-teal-900 to-teal-700',
    },
    {
      badge: '♻️ Eco-Friendly Options',
      title: 'Go Green With',
      highlight: 'Eco Bags',
      subtitle: 'Sustainable Packaging',
      desc: 'Biodegradable aur recycled material se bani carry bags. Environment-friendly choice for modern businesses.',
      cta: 'Explore Eco Range',
      cta2: 'Learn More',
      bg: 'from-emerald-950 via-emerald-900 to-teal-700',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section id="home" className={`relative w-full min-h-screen lg:h-screen bg-gradient-to-br ${slide.bg} overflow-hidden transition-all duration-700 flex flex-col justify-center`}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 sm:pt-40 lg:pt-36 pb-10 my-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium mb-4 text-amber-300">
              {slide.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {slide.title}
              <br />
              <span className="text-amber-400">{slide.highlight}</span>
              <br />
              <span className="text-lg sm:text-xl md:text-2xl font-light text-teal-200">{slide.subtitle}</span>
            </h1>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              {slide.desc}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
              <a href="#products" id="hero-shop-btn" className="btn-accent text-sm sm:text-base px-6 py-3">
                {slide.cta}
                <svg className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#custom-print" id="hero-custom-btn" className="btn-secondary border-white/50 text-white hover:bg-white hover:text-teal-700 text-sm sm:text-base px-6 py-3">
                {slide.cta2}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-2.5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">{stat.value}</div>
                  <div className="text-[11px] sm:text-xs text-gray-300 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-lg">
              {/* Glow ring */}
              <div className="absolute inset-0 bg-teal-400/20 rounded-3xl blur-2xl scale-105 animate-pulse-glow" />
              <img
                src="/hero_banner.png"
                alt="Premium Carry Bags Collection"
                fetchpriority="high"
                decoding="async"
                className="relative z-10 w-full h-[380px] xl:h-[440px] rounded-3xl shadow-2xl animate-float object-cover transform-gpu"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl flex items-center gap-3 border border-white/40">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">ISO 9001 Certified</p>
                  <p className="font-bold text-gray-800 text-sm">Quality Assured</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            id={`hero-slide-${i}`}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/60'
            } h-2`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white/50 flex flex-col items-center gap-1 animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-xs">Scroll</span>
      </div>
    </section>
  )
}
