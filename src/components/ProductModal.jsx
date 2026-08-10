import { useState, useEffect } from 'react'

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('Standard')
  const [selectedColor, setSelectedColor] = useState('Default')
  const [quantity, setQuantity] = useState(200)
  const [isPrinted, setIsPrinted] = useState(true)

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] || 'Standard')
      setSelectedColor(product.colors?.[0] || 'Default')
      setQuantity(product.moq || 200)
      setIsPrinted(product.selectedIsPrinted !== undefined ? product.selectedIsPrinted : true)
    }
  }, [product])

  if (!isOpen || !product) return null

  const unitPrice = isPrinted
    ? (product.printedPrice || product.price)
    : (product.unprintedPrice || (product.price - 4))

  const totalPrice = unitPrice * quantity

  const handleWhatsAppOrder = () => {
    const printLabel = isPrinted ? 'With Custom Print' : 'Plain (Without Print)'
    const text = `Hello MK Carry Bags! I am interested in ordering:\n- Product: ${product.name}\n- Print Type: ${printLabel}\n- Price/pc: ₹${unitPrice}\n- Size: ${selectedSize}\n- Quantity: ${quantity} pcs\n- Total Estimated Price: ₹${totalPrice.toLocaleString()}\n\nPlease confirm availability and delivery timeframe.`
    window.open(`https://wa.me/919166508949?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden animate-scale-in border border-gray-100 max-h-[90vh] flex flex-col md:flex-row transform-gpu">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 shadow-md hover:scale-105 transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product Image Section */}
        <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[260px] md:min-h-[380px] flex items-center justify-center p-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl shadow-md max-h-[340px]"
          />
          <span className={`absolute top-4 left-4 ${product.badgeColor || 'bg-teal-600'} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
            {product.badge || 'Popular'}
          </span>
        </div>

        {/* Details & Customization Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-2">
              {product.tags?.map((t) => (
                <span key={t} className="text-[11px] bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {product.name}
            </h3>

            {/* Print Type Option Selector */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Print Option Choose Karo:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setIsPrinted(true)}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                    isPrinted
                      ? 'border-amber-500 bg-amber-500 text-white shadow-sm'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-amber-400'
                  }`}
                >
                  <span className="block text-sm mb-0.5">🎨 With Print</span>
                  <span className={isPrinted ? 'text-amber-100 font-normal' : 'text-gray-500 font-normal'}>₹{product.printedPrice || product.price} / pc</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPrinted(false)}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                    !isPrinted
                      ? 'border-teal-600 bg-teal-600 text-white shadow-sm'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-teal-400'
                  }`}
                >
                  <span className="block text-sm mb-0.5">📦 Plain (No Print)</span>
                  <span className={!isPrinted ? 'text-teal-100 font-normal' : 'text-gray-500 font-normal'}>₹{product.unprintedPrice || (product.price - 4)} / pc</span>
                </button>
              </div>
            </div>

            {/* Price & Rating */}
            <div className="flex items-baseline gap-3 mb-4 bg-teal-50/60 p-3 rounded-2xl border border-teal-100">
              <div>
                <span className="text-3xl font-black text-teal-800">₹{unitPrice}</span>
                <span className="text-xs text-gray-500 ml-1">{product.unit || 'per piece'}</span>
                <span className="block text-[11px] font-bold text-teal-700 mt-0.5">
                  {isPrinted ? '✓ Custom Logo Printed' : '✓ Plain Unprinted Stock'}
                </span>
              </div>
              <span className="ml-auto text-xs text-amber-700 font-bold bg-amber-100 px-2.5 py-1 rounded-lg">
                MOQ: {product.moq} pcs
              </span>
            </div>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Size Choose Karo:</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        selectedSize === size
                          ? 'border-teal-600 bg-teal-600 text-white shadow-sm'
                          : 'border-gray-200 text-gray-700 hover:border-teal-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Quantity (Pieces):</label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50 overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(product.moq || 50, q - 50))}
                    className="px-3.5 py-2 text-gray-700 hover:bg-gray-200 font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 font-bold text-gray-800 text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 50)}
                    className="px-3.5 py-2 text-gray-700 hover:bg-gray-200 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
                <div className="text-right flex-1">
                  <span className="text-xs text-gray-400 block">Total Cost:</span>
                  <span className="text-lg font-black text-gray-800">₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                onAddToCart(product.id, quantity, isPrinted, unitPrice)
                onClose()
              }}
              className="btn-primary w-full text-sm py-3 font-bold shadow-md shadow-teal-600/20"
            >
              🛒 Cart Mein Add Karo
            </button>
            <button
              onClick={handleWhatsAppOrder}
              className="btn-accent w-full text-sm py-3 font-bold flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
            >
              <span>💬</span> Direct WhatsApp Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
