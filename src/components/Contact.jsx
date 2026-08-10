import { useState } from 'react'

const faqs = [
  {
    q: 'Minimum order quantity kitni hai?',
    a: 'Carry bags ke liye MOQ 200 pieces hai, polythene bags ke liye 500 pieces, aur custom printed bags ke liye 100 pieces hai.',
  },
  {
    q: 'Delivery kitne din mein milegi?',
    a: 'Regular orders 3-5 working days mein deliver hote hain. Custom printed bags ke liye 7-10 working days lagte hain. Express delivery bhi available hai.',
  },
  {
    q: 'Kya sample order milega?',
    a: 'Haan, paid samples available hain. Sample cost bulk order mein adjust ho jaati hai.',
  },
  {
    q: 'Custom printing ke liye konse file formats chahiye?',
    a: 'AI, PDF, CDR, PNG (300 DPI), JPG — sab acceptable hain. Design team free mein file check karegi.',
  },
  {
    q: 'Pan India delivery available hai?',
    a: 'Haan, hum poore India mein deliver karte hain. Delhi, Mumbai, Bangalore, Chennai, Kolkata — sabhi cities cover hain.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', product: '', qty: '', message: ''
  })
  const [openFaq, setOpenFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
        setForm({ name: '', phone: '', email: '', product: '', qty: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(data.message || 'Kuch problem ho gayi. Dobara try karo.')
      }
    } catch {
      setError('Server se connect nahi ho paya. Thodi der baad try karo ya WhatsApp karo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="section-title mb-4">
            Quote Ya Order <span className="text-gradient">Mangwao</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Form bharo ya directly call karo. 24 ghante mein response guaranteed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Quote Request Form</h3>

            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-semibold text-green-800">Request Submit Ho Gaya!</p>
                  <p className="text-green-600 text-sm">24 ghante mein humari team contact karegi.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="font-semibold text-red-800">Submission Failed</p>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              </div>
            )}

            <form id="quote-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
                  <input
                    id="form-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Aapka naam"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    id="form-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXXXXXXX"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Type *</label>
                  <select
                    id="form-product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select karo</option>
                    <option value="carry-bags">Carry Bags</option>
                    <option value="polythene">Printed Polythene</option>
                    <option value="non-woven">Non-Woven Bags</option>
                    <option value="custom-print">Custom Printing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity *</label>
                  <input
                    id="form-qty"
                    name="qty"
                    value={form.qty}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 1000 pieces"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                <textarea
                  id="form-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Size, color, custom print requirements..."
                  className="input-field resize-none"
                />
              </div>

              <button
                id="form-submit-btn"
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Bhej rahe hain...
                  </>
                ) : (
                  '🚀 Quote Request Bhejo'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info + FAQ */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Mukul Khandelwal */}
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">MK</div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Mukul Khandelwal</p>
                    <p className="text-teal-600 text-xs">Owner</p>
                  </div>
                </div>
                <a href="tel:+919166508949" className="flex items-center gap-2 text-gray-700 text-sm font-semibold hover:text-teal-700 transition-colors">
                  <span className="text-lg">📞</span> +91 91665 08949
                </a>
                <a href="https://wa.me/919166508949" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-green-600 text-xs font-medium mt-1 hover:text-green-700 transition-colors">
                  <span>💬</span> WhatsApp karo
                </a>
              </div>

              {/* Bharat Khandelwal */}
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-sm">BK</div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Bharat Khandelwal</p>
                    <p className="text-teal-600 text-xs">Owner</p>
                  </div>
                </div>
                <a href="tel:+919214055553" className="flex items-center gap-2 text-gray-700 text-sm font-semibold hover:text-teal-700 transition-colors">
                  <span className="text-lg">📞</span> +91 92140 55553
                </a>
                <a href="https://wa.me/919214055553" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-green-600 text-xs font-medium mt-1 hover:text-green-700 transition-colors">
                  <span>💬</span> WhatsApp karo
                </a>
              </div>

              {/* Address */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 hover:shadow-md transition-all duration-200">
                <span className="text-2xl">📍</span>
                <p className="font-semibold text-gray-800 mt-2">Hamare Paas Aao</p>
                <p className="text-gray-700 text-sm font-medium leading-snug">
                  Shilp Colony, Near Jodhpur Sweets,<br />
                  Khatipura Road, Jhotwara, Jaipur
                </p>
                <p className="text-gray-500 text-xs mt-1">Mon–Sat: 9am – 6pm</p>
              </div>

              {/* Email */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 hover:shadow-md transition-all duration-200">
                <span className="text-2xl">📧</span>
                <p className="font-semibold text-gray-800 mt-2">Email Karo</p>
                <a href="mailto:hello@mkcarrybags.in" className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">
                  hello@mkcarrybags.in
                </a>
                <p className="text-gray-500 text-xs mt-1">Reply within 2 hours</p>
              </div>

            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} id={`faq-${idx}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-200 hover:border-teal-200">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-teal-50/50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 text-sm pr-4">{faq.q}</span>
                      <svg className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300 transform-gpu ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`grid transition-all duration-300 ease-out transform-gpu ${openFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
