import { useState, useEffect } from 'react'

export default function MyOrdersModal({ isOpen, onClose }) {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (isOpen) {
      const savedOrders = localStorage.getItem('mk_my_orders')
      if (savedOrders) {
        try {
          setOrders(JSON.parse(savedOrders))
        } catch (err) {
          console.error('Failed to parse orders:', err)
          setOrders([])
        }
      } else {
        setOrders([])
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
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
              <span className="text-xl">📦</span>
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>My Orders</h3>
              <p className="text-xs text-teal-200">Recent quote requests</p>
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
          {orders.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12">
              <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-4 text-4xl">
                📭
              </div>
              <h4 className="font-bold text-gray-700 text-lg mb-1">No Orders Yet</h4>
              <p className="text-xs text-gray-500 max-w-xs mb-6">
                You haven't submitted any quote requests or orders from this device.
              </p>
              <button
                onClick={() => {
                  onClose()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary text-sm px-6 py-2.5"
              >
                Request a Quote
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.slice().reverse().map((order, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200/80 rounded-2xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{order.productName || 'Order Request'}</h4>
                      <p className="text-xs text-gray-500">{new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      Processing
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm mt-3 border-t border-gray-200 pt-3">
                    <div>
                      <span className="text-gray-500 text-xs block">Quantity</span>
                      <span className="font-medium text-gray-800">{order.qty} pcs</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs block">Print Type</span>
                      <span className="font-medium text-gray-800">{order.printType === 'plain' ? 'Plain' : 'Printed'}</span>
                    </div>
                  </div>
                  
                  {order.message && (
                    <div className="mt-3 bg-white p-2 rounded-lg border border-gray-100 text-xs text-gray-600 italic">
                      "{order.message}"
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {orders.length > 0 && (
          <div className="p-5 border-t border-gray-200 bg-white">
            <p className="text-xs text-center text-gray-500 mb-3">
              We usually respond within 24 hours via call or WhatsApp.
            </p>
            <a
              href="https://wa.me/919166508949?text=Hello!%20I%20want%20to%20check%20my%20order%20status."
              target="_blank"
              rel="noreferrer"
              className="btn-accent w-full py-2.5 text-center text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>💬</span> WhatsApp Support
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
