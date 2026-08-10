import { useState } from 'react'

export default function SearchModal({ isOpen, onClose, products, onSelectProduct }) {
  const [query, setQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  if (!isOpen) return null

  const filteredProducts = products.filter((p) => {
    const matchesQuery =
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    const matchesCat = categoryFilter === 'all' || p.category === categoryFilter
    return matchesQuery && matchesCat
  })

  return (
    <div className="fixed inset-0 z-[95] flex items-start justify-center pt-16 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden animate-scale-in border border-white/20 transform-gpu">
        {/* Search Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 bg-gray-50/80 flex items-center gap-3">
          <svg className="w-6 h-6 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            autoFocus
            placeholder="Search carry bags, polythenes, wedding bags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 font-medium text-base sm:text-lg focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs bg-gray-200 text-gray-600 rounded-full px-2 py-1 hover:bg-gray-300 transition-colors"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Quick Category Chips */}
        <div className="px-6 py-3 border-b border-gray-100 bg-white flex flex-wrap gap-2 text-xs">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'woven-bags', label: '♻️ Non-Woven' },
            { id: 'polythene-bags', label: '🎨 Polythenes' },
            { id: 'custom-print', label: '🖨️ Custom Print' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                categoryFilter === cat.id
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <p className="text-3xl mb-2">🔍</p>
              <p className="font-semibold text-gray-700 text-sm">Koi product nahi mila</p>
              <p className="text-xs text-gray-500 mt-1">Dusra keyword try karo ya category filter change karo.</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product)
                  onClose()
                }}
                className="flex items-center gap-4 p-3 rounded-2xl border border-gray-100 hover:border-teal-300 hover:bg-teal-50/50 cursor-pointer transition-all duration-200 group"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-xl border border-gray-200 flex-shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                    <span className="text-xs text-gray-400">MOQ: {product.moq} pcs</span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm truncate group-hover:text-teal-700 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-500 truncate">
                    {product.tags.join(' • ')}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-lg font-black text-teal-700">₹{product.price}</span>
                  <span className="text-[10px] text-gray-400 block">/ piece</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
