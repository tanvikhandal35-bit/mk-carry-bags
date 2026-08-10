import { useMemo } from 'react'

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, allProducts }) {
  const detailedCart = useMemo(() => {
    return cartItems.map((item) => {
      const product = allProducts.find((p) => p.id === item.id) || {
        name: 'Carry Bag Product',
        printedPrice: 24,
        unprintedPrice: 20,
        price: 24,
        unit: 'per piece',
        img: '/wedding_bag.png',
        moq: 200,
      }

      const isPrinted = item.isPrinted !== undefined ? item.isPrinted : true
      const unitPrice = item.selectedPrice || (isPrinted ? (product.printedPrice || product.price) : (product.unprintedPrice || (product.price - 4)))

      return {
        ...product,
        cartItemId: `${item.id}-${isPrinted ? 'printed' : 'plain'}`,
        isPrinted,
        unitPrice,
        qty: item.qty || product.moq || 100,
      }
    })
  }, [cartItems, allProducts])

  const totalAmount = useMemo(() => {
    return detailedCart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0)
  }, [detailedCart])

  const generateWhatsAppMessage = () => {
    if (detailedCart.length === 0) return ''
    let msg = `Hello MK Carry Bags! I would like to place an order for:\n\n`
    detailedCart.forEach((item, index) => {
      const printLabel = item.isPrinted ? 'With Print' : 'Plain (Without Print)'
      msg += `${index + 1}. ${item.name} (${printLabel}) - ${item.qty} pcs @ ₹${item.unitPrice}/pc = ₹${(item.unitPrice * item.qty).toLocaleString()}\n`
    })
    msg += `\nTotal Estimated Amount: ₹${totalAmount.toLocaleString()}\n`
    msg += `Please send me payment & delivery details.`
    return encodeURIComponent(msg)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[90] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col animate-slide-up transform-gpu">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-teal-800 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Shopping Cart</h3>
              <p className="text-xs text-teal-200">{detailedCart.length} item(s) selected</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {detailedCart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12">
              <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-4 text-4xl">
                🛍️
              </div>
              <h4 className="font-bold text-gray-700 text-lg mb-1">Aapka Cart Khali Hai</h4>
              <p className="text-xs text-gray-500 max-w-xs mb-6">
                Products browse karo aur apne pasand ke carry bags cart mein add karo.
              </p>
              <button
                onClick={onClose}
                className="btn-primary text-sm px-6 py-2.5"
              >
                Products Dekho
              </button>
            </div>
          ) : (
            detailedCart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-gray-50 border border-gray-200/80 rounded-2xl relative group hover:bg-teal-50/40 transition-colors"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl border border-gray-200 flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm leading-snug line-clamp-1">{item.name}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.isPrinted ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'}`}>
                        {item.isPrinted ? '🎨 With Print' : '📦 Plain'}
                      </span>
                      <p className="text-xs text-teal-700 font-bold">
                        ₹{item.unitPrice} <span className="text-[10px] text-gray-400 font-normal">/ piece</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => onUpdateQty(item.id, Math.max((item.moq || 50), item.qty - 50))}
                        className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 text-xs font-bold transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-gray-800">{item.qty}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 50)}
                        className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 text-xs font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {detailedCart.length > 0 && (
          <div className="p-5 border-t border-gray-200 bg-white space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Estimated Total:</span>
              <span className="text-xl font-black text-teal-800">₹{totalAmount.toLocaleString()}</span>
            </div>
            <p className="text-[11px] text-gray-400">
              * Final pricing may vary based on exact print customization & shipping location.
            </p>

            <a
              href={`https://wa.me/919166508949?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noreferrer"
              className="btn-accent w-full py-3 text-center text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <span>💬</span> WhatsApp Par Order Karo
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className="btn-secondary w-full py-2.5 text-center text-xs font-bold block"
            >
              Custom Quote Request Karo
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
