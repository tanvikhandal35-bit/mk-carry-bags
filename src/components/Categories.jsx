const categories = [
  {
    id: 'carry-bags',
    name: 'Carry Bags',
    icon: '🛍️',
    count: '80+ Products',
    desc: 'Marriage, non-woven, custom printed',
    color: 'from-teal-500 to-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    img: '/wedding_bag.png',
  },
  {
    id: 'polythene-bags',
    name: 'Printed Polythenes',
    icon: '🎨',
    count: '60+ Products',
    desc: 'D-Cut garments, traditional prints',
    color: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    img: '/nayan_bag.png',
  },
  {
    id: 'woven-bags',
    name: 'Non-Woven Bags',
    icon: '♻️',
    count: '45+ Products',
    desc: 'Reusable, eco-friendly, commercial',
    color: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    img: '/belrose_bag.jpg',
  },
  {
    id: 'custom-print',
    name: 'Custom Printing',
    icon: '🖨️',
    count: 'Unlimited Designs',
    desc: 'Metallic gold print, boutique branding',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    img: '/gold_belrose_bag.png',
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Categories
          </span>
          <h2 className="section-title mb-4">
            Har Zaroorat Ke Liye
            <span className="text-gradient"> Perfect Bag</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Carry bags, polythene bags, non-woven bags — sabhi types ki bags ek hi platform par. 
            Wholesale prices mein premium quality.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <a
              key={cat.id}
              href={`#products`}
              id={`category-${cat.id}`}
              className={`group card border ${cat.border} cursor-pointer`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="absolute top-3 left-3">
                  <span className="text-3xl">{cat.icon}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                  {cat.count}
                </div>
              </div>

              {/* Content */}
              <div className={`p-4 ${cat.bg}`}>
                <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-teal-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
                <div className="mt-3 flex items-center text-teal-600 text-sm font-semibold">
                  Explore
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
