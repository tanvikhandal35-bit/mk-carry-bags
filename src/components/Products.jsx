import { useState } from 'react'

const allProducts = [
  // Non-Woven & Custom Printed Bags
  {
    id: 1, category: 'woven-bags', name: 'Custom Printed Non-Woven Bag',
    printedPrice: 24.0, unprintedPrice: 20.0, price: 24.0, moq: 200,
    unit: 'per piece', badge: 'Bestseller', badgeColor: 'bg-amber-500',
    img: '/belrose_bag.jpg', rating: 4.8, reviews: 234,
    tags: ['Custom Logo', 'Non-Woven', 'Commercial'],
    sizes: ['Medium', 'Large', 'Custom'],
    colors: ['Gold & White', 'Custom Print'],
  },
  {
    id: 2, category: 'woven-bags', name: 'Non-Woven Wedding Bag',
    printedPrice: 18.0, unprintedPrice: 15.0, price: 18.0, moq: 200,
    unit: 'per piece', badge: 'New', badgeColor: 'bg-teal-500',
    img: '/wedding_bag.png', rating: 4.9, reviews: 89,
    tags: ['Wedding Bag', 'Custom Print', 'Reusable'],
    sizes: ['Medium', 'Large', 'Custom'],
    colors: ['Orange', 'Yellow', 'Red', 'Pink'],
  },
  {
    id: 3, category: 'woven-bags', name: 'Metallic Gold Luxury Bag',
    printedPrice: 24.0, unprintedPrice: 20.0, price: 24.0, moq: 150,
    unit: 'per piece', badge: 'Luxury', badgeColor: 'bg-amber-600',
    img: '/gold_belrose_bag.png', rating: 5.0, reviews: 112,
    tags: ['Metallic Gold', 'Luxury Finish', 'Ultra Premium'],
    sizes: ['Medium', 'Large', 'Jumbo'],
    colors: ['Metallic Gold', 'Shiny Finish'],
  },
  // Garments & Retail Bags
  {
    id: 4, category: 'polythene-bags', name: 'Printed Garments D-Cut Bag',
    printedPrice: 6.5, unprintedPrice: 5.5, price: 6.5, moq: 500,
    unit: 'per piece', badge: 'Bulk Deal', badgeColor: 'bg-purple-500',
    img: '/nayan_bag.png', rating: 4.6, reviews: 412,
    tags: ['Custom Print', 'Garments Wear', 'D-Cut'],
    sizes: ['10x14', '12x16', '14x18', '16x20'],
    colors: ['Beige Gold', 'White', 'Custom'],
  },
  {
    id: 5, category: 'polythene-bags', name: 'Safa & Sherwani Traditional Bag',
    printedPrice: 22.0, unprintedPrice: 18.0, price: 22.0, moq: 500,
    unit: 'per piece', badge: 'Bestseller', badgeColor: 'bg-amber-500',
    img: '/rooprang_bag.png', rating: 4.7, reviews: 321,
    tags: ['Traditional Print', 'Heavy Duty', 'Ethnic'],
    sizes: ['Small', 'Medium', 'Large', 'XL'],
    colors: ['Yellow', 'Red', 'Custom Print'],
  },
  {
    id: 6, category: 'polythene-bags', name: 'Custom Marriage Non-Woven Bag',
    printedPrice: 20.0, unprintedPrice: 16.0, price: 20.0, moq: 300,
    unit: 'per piece', badge: 'Popular', badgeColor: 'bg-blue-500',
    img: '/wedding_bag.png', rating: 4.8, reviews: 198,
    tags: ['Marriage Print', 'Orange Gold', 'Reusable'],
    sizes: ['Medium', 'Large', 'XL'],
    colors: ['Orange', 'Yellow', 'Red'],
  },
  // Non-Woven D-Cut & Garments Bags
  {
    id: 7, category: 'woven-bags', name: 'Designer Garments D-Cut Bag',
    printedPrice: 18.0, unprintedPrice: 14.0, price: 18.0, moq: 200,
    unit: 'per piece', badge: 'Popular', badgeColor: 'bg-green-600',
    img: '/nayan_bag.png', rating: 4.9, reviews: 276,
    tags: ['Garments Bag', 'D-Cut Handle', 'Peacock Print'],
    sizes: ['Standard', 'Large'],
    colors: ['Beige Gold', 'Custom Print'],
  },
  {
    id: 8, category: 'woven-bags', name: 'Safa & Sherwani House Bag',
    printedPrice: 24.0, unprintedPrice: 19.0, price: 24.0, moq: 200,
    unit: 'per piece', badge: 'Ethnic', badgeColor: 'bg-red-600',
    img: '/rooprang_bag.png', rating: 4.8, reviews: 143,
    tags: ['Traditional', 'Boutique Print', 'Heavy Duty'],
    sizes: ['Medium', 'Large'],
    colors: ['Yellow & Red', 'Custom Print'],
  },
]

const filters = [
  { id: 'all', label: 'All Products' },
  { id: 'carry-bags', label: '🛍️ Carry Bags' },
  { id: 'polythene-bags', label: '🎨 Polythene Bags' },
  { id: 'woven-bags', label: '♻️ Non-Woven' },
  { id: 'custom-print', label: '🖨️ Custom Print' },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export { allProducts }

export default function Products({ onSelectProduct, onAddToCart, cartItems = [] }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [wishlist, setWishlist] = useState([])
  const [printTypes, setPrintTypes] = useState({}) // { [productId]: 'printed' | 'unprinted' }

  const cartProductIds = cartItems.map((item) => typeof item === 'object' ? item.id : item)

  const filtered = activeFilter === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeFilter)

  const toggleWishlist = (e, id) => {
    e.stopPropagation()
    setWishlist(prev => prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id])
  }

  const setPrintType = (productId, type) => {
    setPrintTypes(prev => ({ ...prev, [productId]: type }))
  }

  const handleCartClick = (e, product) => {
    e.stopPropagation()
    const isPrinted = (printTypes[product.id] || 'printed') === 'printed'
    const selectedPrice = isPrinted ? product.printedPrice : product.unprintedPrice
    if (onAddToCart) {
      onAddToCart(product.id, product.moq, isPrinted, selectedPrice)
    }
  }

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="section-title mb-4">
            Top Selling <span className="text-gradient">Products</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose with print or plain (without print) at wholesale prices. Bulk order par special discount milega.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map(f => (
            <button
              key={f.id}
              id={`filter-${f.id}`}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform-gpu active:scale-95 ${
                activeFilter === f.id
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const isPrinted = (printTypes[product.id] || 'printed') === 'printed'
            const currentPrice = isPrinted ? product.printedPrice : product.unprintedPrice

            return (
              <div
                key={product.id}
                id={`product-${product.id}`}
                onClick={() => onSelectProduct && onSelectProduct({ ...product, selectedIsPrinted: isPrinted })}
                className="card group cursor-pointer hover:border-teal-300 border border-transparent transition-all"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52 bg-gray-100">
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
                  />
                  {/* Badge */}
                  <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm`}>
                    {product.badge}
                  </span>
                  {/* Quick view overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/90 backdrop-blur-md text-teal-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      🔍 Quick View
                    </span>
                  </div>
                  {/* Wishlist */}
                  <button
                    id={`wishlist-${product.id}`}
                    onClick={(e) => toggleWishlist(e, product.id)}
                    aria-label="Wishlist"
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform z-10"
                  >
                    <svg className={`w-4 h-4 transition-colors ${wishlist.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-teal-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={product.rating} />
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>

                  {/* Print Selector Buttons */}
                  <div className="my-2.5 p-1 bg-gray-100/90 rounded-xl flex gap-1 border border-gray-200/60">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setPrintType(product.id, 'printed')
                      }}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center ${
                        isPrinted
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
                      }`}
                    >
                      🎨 With Print
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setPrintType(product.id, 'unprinted')
                      }}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center ${
                        !isPrinted
                          ? 'bg-teal-700 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
                      }`}
                    >
                      📦 Plain (No Print)
                    </button>
                  </div>

                  {/* Price */}
                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <span className="text-2xl font-black text-teal-700">₹{currentPrice}</span>
                      <span className="text-xs text-gray-400 ml-1">{product.unit}</span>
                      <span className="block text-[10px] font-semibold text-gray-500">
                        {isPrinted ? 'Custom Printed' : 'Plain / Without Print'}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Min. Order</p>
                      <p className="text-sm font-bold text-amber-600">{product.moq} pcs</p>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.sizes.slice(0, 3).map(size => (
                      <span key={size} className="text-xs border border-gray-200 text-gray-600 px-2 py-0.5 rounded-lg hover:border-teal-400 hover:text-teal-600 cursor-pointer transition-colors">
                        {size}
                      </span>
                    ))}
                    {product.sizes.length > 3 && (
                      <span className="text-xs text-gray-400">+{product.sizes.length - 3}</span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      id={`add-cart-${product.id}`}
                      onClick={(e) => handleCartClick(e, product)}
                      className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${
                        cartProductIds.includes(product.id)
                          ? 'bg-teal-600 text-white shadow-md'
                          : 'bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white'
                      }`}
                    >
                      {cartProductIds.includes(product.id) ? '✓ In Cart' : 'Add to Cart'}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onSelectProduct && onSelectProduct({ ...product, selectedIsPrinted: isPrinted })
                      }}
                      id={`quote-${product.id}`}
                      className="px-3 py-2 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-500 hover:text-white text-sm font-semibold transition-all duration-200 active:scale-95"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a href="#contact" id="view-all-btn" className="btn-primary inline-flex items-center gap-2">
            View All Products
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
