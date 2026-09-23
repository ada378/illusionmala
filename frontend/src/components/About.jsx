import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="bg-ivory-50 text-royal-900 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-14 bg-gradient-to-b from-amber-500/10 to-ivory-50 border-b border-ivory-200">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
          <span className="text-saffron-700 text-xs font-bold tracking-widest uppercase">Sacred Heritage & Tradition</span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-royal-950">
            About <span className="text-saffron-700">Illusion Mala</span>
          </h1>
          <p className="text-royal-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-normal">
            Preserving ancient Vedic wisdom to bring authentic, high-vibration Gudiya Anda Mala into modern lives for spiritual healing and prosperity.
          </p>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-saffron-700 text-xs font-bold tracking-widest uppercase">Our Spiritual Journey</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal-950 leading-tight">
                Where Ancient Wisdom Meets <br />
                <span className="text-saffron-700">Modern E-Commerce</span>
              </h2>
              
              <p className="text-royal-700 text-xs md:text-sm leading-relaxed">
                At <strong className="text-saffron-800">Illusion Mala</strong>, we are committed to sharing authentic spiritual tools that carry genuine cosmic energy. The <strong className="text-saffron-800">Gudiya Anda Mala</strong> is a rare sacred item cherished by seekers, business leaders, and practitioners for centuries.
              </p>
              
              <p className="text-royal-700 text-xs md:text-sm leading-relaxed">
                Every single mala in our catalog is hand-assembled by traditional artisans and passes through sacred energization rites — cleansed in holy Ganga Jal, anointed with natural essential oils, and sanctified with Vedic mantras.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="bg-white border border-ivory-200 p-4 rounded-2xl text-center shadow-sm">
                  <p className="font-serif text-3xl font-extrabold text-saffron-800">100%</p>
                  <p className="text-xs text-royal-600 font-bold mt-1">Natural Certified Beads</p>
                </div>
                <div className="bg-white border border-ivory-200 p-4 rounded-2xl text-center shadow-sm">
                  <p className="font-serif text-3xl font-extrabold text-saffron-800">1,200+</p>
                  <p className="text-xs text-royal-600 font-bold mt-1">Satisfied Devotees</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-saffron-400 to-amber-300 opacity-30 blur-lg rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-ivory-200 bg-white shadow-warm-lg">
                <img 
                  src="https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800" 
                  alt="About Illusion Mala" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 border border-ivory-200 backdrop-blur-md text-xs text-saffron-800 font-serif font-bold text-center shadow-md">
                  ✨ "Handcrafted with Reverence • Energized with Mantras"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white border-t border-b border-ivory-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-saffron-700 text-xs font-bold tracking-widest uppercase">Pillars of Trust</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal-950">
              Our Core <span className="text-saffron-700">Spiritual Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-ivory-50 border border-ivory-200 p-6 rounded-2xl text-center space-y-3 shadow-sm hover:border-saffron-300 transition">
              <div className="w-14 h-14 rounded-2xl bg-saffron-100 text-saffron-800 text-2xl flex items-center justify-center mx-auto">
                🙏
              </div>
              <h3 className="font-serif text-lg font-bold text-royal-950">Pure Authenticity</h3>
              <p className="text-royal-600 text-xs leading-relaxed">
                We strictly guarantee 100% natural Gudiya Anda Malas accompanied by official certificate documentation.
              </p>
            </div>

            <div className="bg-ivory-50 border border-ivory-200 p-6 rounded-2xl text-center space-y-3 shadow-sm hover:border-saffron-300 transition">
              <div className="w-14 h-14 rounded-2xl bg-saffron-100 text-saffron-800 text-2xl flex items-center justify-center mx-auto">
                🔥
              </div>
              <h3 className="font-serif text-lg font-bold text-royal-950">Vedic Energization</h3>
              <p className="text-royal-600 text-xs leading-relaxed">
                Each product undergoes meticulous cleansing and mantra activation prior to dispatch for highest vibration.
              </p>
            </div>

            <div className="bg-ivory-50 border border-ivory-200 p-6 rounded-2xl text-center space-y-3 shadow-sm hover:border-saffron-300 transition">
              <div className="w-14 h-14 rounded-2xl bg-saffron-100 text-saffron-800 text-2xl flex items-center justify-center mx-auto">
                💖
              </div>
              <h3 className="font-serif text-lg font-bold text-royal-950">Hotline Support</h3>
              <p className="text-royal-600 text-xs leading-relaxed">
                We guide you on how to wear, store, and chant with your mala through our hotline (8739002047).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-saffron-800 via-amber-700 to-saffron-700 text-center">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 55%), radial-gradient(circle at 75% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)'}} />
        <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-5">
          <span className="inline-block bg-white/20 text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/30">
            Our Sacred Promise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Start Your Journey To <br />
            <span className="text-amber-200">Peace &amp; Wealth</span>
          </h2>
          <p className="text-amber-100 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Explore our sacred collection or consult our spiritual advisor directly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link to="/products" className="bg-white text-saffron-800 hover:bg-ivory-100 font-extrabold px-8 py-3.5 rounded-xl shadow-warm-lg transition-all hover:scale-105 text-sm">
              🛒 Browse Sacred Products
            </Link>
            <a href="tel:8739002047" className="bg-transparent text-white hover:bg-white/10 border-2 border-white/60 hover:border-white font-extrabold px-8 py-3.5 rounded-xl transition-all hover:scale-105 text-sm">
              📞 Call Hotline: 8739002047
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About


