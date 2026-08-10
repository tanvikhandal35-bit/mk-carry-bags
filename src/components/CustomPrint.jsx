const steps = [
  {
    step: '01',
    icon: '🎨',
    title: 'Design Upload Karo',
    desc: 'Apna logo, artwork ya design file upload karo. AI, PDF, PNG, JPG — sab formats accepted.',
    color: 'bg-teal-100 border-teal-300 text-teal-700',
  },
  {
    step: '02',
    icon: '📐',
    title: 'Size & Quantity Choose Karo',
    desc: 'Bag ka size, quantity aur material choose karo. Minimum 100 pieces se order karo.',
    color: 'bg-purple-100 border-purple-300 text-purple-700',
  },
  {
    step: '03',
    icon: '🖨️',
    title: 'Printing Shuru',
    desc: 'State-of-the-art CMYK printing machines se tumhara design bags par print hota hai.',
    color: 'bg-amber-100 border-amber-300 text-amber-700',
  },
  {
    step: '04',
    icon: '🚚',
    title: 'Delivery at Doorstep',
    desc: 'Pan India delivery within 5-7 working days. Bulk orders ke liye express shipping available.',
    color: 'bg-green-100 border-green-300 text-green-700',
  },
]

const printingSpecs = [
  { label: 'Printing Method', value: 'Flexo / Offset / Digital' },
  { label: 'Colors', value: 'CMYK Full Color + Pantone' },
  { label: 'Minimum Order', value: '100 Pieces' },
  { label: 'Lead Time', value: '5-7 Working Days' },
  { label: 'File Formats', value: 'AI, PDF, CDR, PNG, JPG' },
  { label: 'Finish Options', value: 'Matte / Gloss / Soft Touch' },
  { label: 'Sample Available', value: 'Yes (paid sample)' },
  { label: 'Packaging', value: 'Box/Carton as per qty' },
]

export default function CustomPrint() {
  return (
    <section id="custom-print" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Custom Printing Service
          </span>
          <h2 className="section-title mb-4">
            Apna Brand <span className="text-gradient">Print Karwao</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Har business ke liye custom branded bags. Logo se lekar full design tak — 
            tumhari pehchaan tumhari packaging mein.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image Container Card */}
          <div className="relative bg-white rounded-3xl border border-gray-100 p-4 shadow-xl overflow-hidden">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-amber-50/40 via-gray-50 to-teal-50/20 flex items-center justify-center p-2 min-h-[320px] sm:min-h-[380px]">
              <img
                src="/gold_belrose_bag.png"
                alt="Custom Printing Service"
                className="w-full h-auto max-h-[380px] object-contain rounded-xl drop-shadow-md"
              />
            </div>
            
            {/* Printing Specifications Inside Container */}
            <div className="mt-4 bg-teal-900 text-white rounded-2xl p-4 shadow-md">
              <h4 className="font-bold text-amber-400 mb-3 text-sm flex items-center gap-2">
                <span>⚙️</span> Printing Specifications
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {printingSpecs.slice(0, 4).map(spec => (
                  <div key={spec.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5">
                    <span className="text-teal-200 block text-[11px] font-medium">{spec.label}</span>
                    <span className="font-semibold text-white text-xs mt-0.5 block">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="pt-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Kaise Kaam Karta Hai?</h3>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={step.step} className="flex gap-4 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl border-2 ${step.color} flex items-center justify-center text-xl font-black transition-transform group-hover:scale-110 duration-200`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400">Step {step.step}</span>
                      {idx < steps.length - 1 && (
                        <div className="flex-1 h-px bg-gray-100" />
                      )}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" id="start-custom-order" className="btn-accent inline-flex items-center gap-2 mt-8">
              <span>🎨</span> Custom Order Start Karo
            </a>
          </div>
        </div>

        {/* All Specs */}
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 border border-teal-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Complete Printing Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {printingSpecs.map(spec => (
              <div key={spec.label} className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">{spec.label}</p>
                <p className="font-bold text-gray-800 text-sm">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
