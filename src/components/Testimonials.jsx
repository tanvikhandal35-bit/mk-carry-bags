const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Owner, Kumar Garments, Delhi',
    rating: 5,
    text: 'M.K. Carry Bags se bahut achha experience raha. Quality top-notch hai aur delivery time par mili. Custom printing bhi ekdum perfect thi. 2 saal se order kar raha hoon.',
    avatar: 'R',
    color: 'bg-teal-600',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Founder, Priya Boutique, Mumbai',
    rating: 5,
    text: 'Meri boutique ke liye custom printed bags order kiye — exactly vaise bane jaise maine design diya tha. Customers bhi bahut pasand karte hain.',
    avatar: 'P',
    color: 'bg-purple-600',
  },
  {
    id: 3,
    name: 'Amit Singh',
    role: 'Wholesale Dealer, Jaipur',
    rating: 5,
    text: 'Bulk orders ke liye yahan se best deal milti hai. Price competitive hai aur quality consistent rehti hai. Highly recommended!',
    avatar: 'A',
    color: 'bg-amber-600',
  },
  {
    id: 4,
    name: 'Sunita Patel',
    role: 'Supermarket Owner, Ahmedabad',
    rating: 4,
    text: 'HDPE carry bags bulk mein order kiye, ekdum sahi rahi. Next order custom print ke saath karna chahti hoon.',
    avatar: 'S',
    color: 'bg-emerald-600',
  },
]

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-4 h-4 ${s <= n ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 relative overflow-hidden">
      {/* BG decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/20">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Hamare Customers Kya Kehte Hain
          </h2>
          <p className="text-teal-200 text-lg">50,000+ satisfied customers across India</p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} id={`testimonial-${t.id}`} className="glass rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1">
              {/* Quote icon */}
              <div className="text-4xl text-white/20 font-serif leading-none mb-3">"</div>

              <p className="text-white/85 text-sm leading-relaxed mb-4">{t.text}</p>

              <Stars n={t.rating} />

              <div className="flex items-center gap-3 mt-4">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-teal-300 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Overall Rating', value: '4.9/5' },
              { label: 'Total Reviews', value: '2,840+' },
              { label: 'Repeat Customers', value: '78%' },
              { label: 'On-time Delivery', value: '96%' },
            ].map(item => (
              <div key={item.label}>
                <p className="text-3xl font-black text-amber-400">{item.value}</p>
                <p className="text-teal-200 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
