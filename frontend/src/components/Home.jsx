import { Link } from 'react-router-dom'

function Home({ products = [], addToCart, openRazorpayCheckout }) {
  // Use passed products or fallback to default top 3
  const displayProducts = products && products.length > 0 
    ? products.slice(0, 3) 
    : [
        {
          id: 1,
          name: 'Premium Gudiya Anda Mala - Classic',
          price: 1299,
          originalPrice: 1899,
          image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600',
          description: 'Authentic handcrafted mala blessed with positive Vedic vibrations.',
          rating: 4.9,
          reviews: 234
        },
        {
          id: 2,
          name: 'Gudiya Anda Mala - Deluxe Gold Edition',
          price: 1599,
          originalPrice: 2299,
          image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600',
          description: 'High-grade natural beads with enhanced aura cleansing energy.',
          rating: 5.0,
          reviews: 189
        },
        {
          id: 3,
          name: 'Royal Spiritual Gudiya Anda Mala',
          price: 1899,
          originalPrice: 2699,
          image: 'https://images.unsplash.com/photo-1601159292502-7b9f3f7b8d3a?w=600',
          description: 'Master blessed collection for supreme wealth, focus, & inner peace.',
          rating: 4.9,
          reviews: 312
        }
      ]

  return (
    <main className="bg-ivory-50 text-royal-950 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-br from-amber-500/12 via-ivory-50/80 to-saffron-50/20">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-saffron-400/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="animate-fade-in-up inline-flex items-center gap-2 bg-gradient-to-r from-saffron-50 to-amber-50 border border-saffron-200/80 px-4 py-1.5 rounded-full text-xs font-extrabold text-saffron-800 shadow-warm-sm">
                <span className="animate-pulse">✨</span>
                <span>Sacred Gudiya Anda Mala Store</span>
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 animate-pulse" />
              </div>

              <h1 className="animate-fade-in-up delay-100 font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-royal-950">
                Awaken Spiritual Energy &
                <span className="block bg-gradient-to-r from-saffron-800 via-amber-600 to-saffron-900 bg-clip-text text-transparent mt-1">
                  Prosperity In Your Life
                </span>
              </h1>

              <p className="animate-fade-in-up delay-200 text-royal-700 text-sm max-w-lg leading-relaxed mx-auto lg:mx-0 font-medium">
                Experience 100% authentic, hand-crafted, and Vedic-blessed{' '}
                <strong className="text-saffron-900 font-extrabold">Gudiya Anda Mala</strong>.
                Engineered to purify your aura, attract positive abundance, and grant calm focus.
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="gold-btn-primary !rounded-xl !px-7 !py-3.5 text-xs shadow-warm-md hover:shadow-warm-lg"
                >
                  <span>Explore Collection</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/918739002047?text=Namaste!%20I%20want%20to%20buy%20authentic%20Gudiya%20Anda%20Mala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-ivory-100 text-royal-950 font-extrabold px-6 py-3.5 rounded-xl text-xs border border-ivory-300 shadow-warm-sm hover:shadow-warm-md hover:border-emerald-300 transition-all"
                >
                  <span>💬 WhatsApp Order</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="animate-fade-in-up delay-400 pt-5 grid grid-cols-3 gap-3 border-t border-ivory-200 max-w-md mx-auto lg:mx-0">
                {[
                  { icon: '🛡️', text: '100% Certified' },
                  { icon: '🔥', text: 'Vedic Energized' },
                  { icon: '🚚', text: 'Free Delivery' }
                ].map(b => (
                  <div key={b.text} className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-xl border border-ivory-200 shadow-sm">
                    <span className="text-base">{b.icon}</span>
                    <span className="text-[10px] font-extrabold text-royal-800">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Showcase Image Card */}
            <div className="lg:col-span-5 animate-slide-in-right delay-200">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/30 to-saffron-400/30 rounded-3xl blur-xl pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden border border-amber-300/40 bg-white shadow-warm-lg">
                  <img
                    src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800"
                    alt="Authentic Gudiya Anda Mala"
                    className="w-full h-[340px] object-cover hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-royal-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 border border-ivory-200 backdrop-blur-md flex items-center justify-between shadow-warm-md">
                    <div>
                      <p className="text-saffron-900 font-extrabold text-sm font-serif">Original Gudiya Anda Mala</p>
                      <p className="text-royal-600 text-[10px] font-bold mt-0.5">Direct Vedic Craftsmen</p>
                    </div>
                    <span className="bg-amber-300 text-royal-950 border border-amber-400 px-3 py-1 rounded-full font-extrabold text-[10px] shadow-sm">
                      Best Price
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 border-t border-b border-ivory-200 bg-gradient-to-b from-white to-ivory-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="inline-block bg-saffron-50 text-saffron-800 text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full border border-saffron-200">
              Sacred Authenticity
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-royal-950">
              Why Choose <span className="text-saffron-800">Illusion Mala</span>?
            </h2>
            <p className="text-royal-600 text-xs font-medium">
              Centuries of sacred Vedic traditions with certified, energized products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '✨', emoji: true, title: '100% Authentic', desc: 'Natural, hand-selected beads with lab certificate included.', delay: 'delay-100' },
              { icon: '🔥', emoji: true, title: 'Pooja Energized', desc: 'Purified with sacred mantras and Ganga Jal before dispatch.', delay: 'delay-200' },
              { icon: '🚚', emoji: true, title: 'Free Express Delivery', desc: 'Fast, insured delivery across all pin codes in India.', delay: 'delay-300' },
              { icon: '📞', emoji: true, title: 'Hotline Support', desc: 'Call or WhatsApp us at 8739002047 for personalized guidance.', delay: 'delay-400' },
            ].map(card => (
              <div key={card.title} className={`premium-card p-5 text-center space-y-3 ${card.delay} group`}>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-saffron-100 to-amber-100 text-saffron-900 flex items-center justify-center text-2xl mx-auto border border-amber-200 group-hover:scale-110 transition-transform duration-300 shadow-warm-sm">
                  {card.icon}
                </div>
                <h3 className="font-serif text-sm font-bold text-royal-950">{card.title}</h3>
                <p className="text-royal-600 text-[11px] leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Collection */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-8 gap-2">
            <div>
              <span className="inline-block bg-saffron-50 text-saffron-800 text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full border border-saffron-200 mb-2">
                Bestsellers
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-royal-950">
                Featured <span className="text-saffron-800">Gudiya Anda Mala</span> Collection
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-saffron-700 hover:text-saffron-900 font-extrabold text-xs bg-saffron-50 hover:bg-saffron-100 px-4 py-2 rounded-full border border-saffron-200 transition"
            >
              View All ({products ? products.length : 3}) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayProducts.map((product, idx) => (
              <div key={product.id} className={`animate-fade-in-up delay-${(idx + 1) * 100} premium-card overflow-hidden flex flex-col justify-between group`}>
                <div>
                  <div className="relative h-52 overflow-hidden bg-ivory-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-600"
                    />
                    {/* Discount badge */}
                    <span className="absolute top-3 right-3 bg-rose-500 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full shadow-md">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                    {/* Rating */}
                    <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-royal-900 text-[10px] font-bold px-2.5 py-1 rounded-full border border-ivory-200 flex items-center gap-1 shadow-sm">
                      ⭐ {product.rating || 4.9}
                      <span className="opacity-60">({product.reviews || 150})</span>
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-serif text-base font-bold text-royal-950 group-hover:text-saffron-800 transition line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-royal-600 text-[11px] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-xl font-extrabold text-saffron-800 font-serif">₹{product.price}</span>
                      <span className="text-[11px] line-through text-royal-400">₹{product.originalPrice}</span>
                      <span className="text-[10px] font-bold text-emerald-700 ml-auto">Save ₹{product.originalPrice - product.price}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-2">
                  <button
                    onClick={() => openRazorpayCheckout && openRazorpayCheckout(product)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-warm-sm hover:shadow-warm-md transition-all"
                  >
                    ⚡ Pay with Razorpay
                  </button>
                  <button
                    onClick={() => addToCart && addToCart(product)}
                    className="w-full bg-amber-400 hover:bg-amber-300 text-royal-950 border border-amber-500 font-extrabold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm hover:shadow-warm-sm transition-all"
                  >
                    <span>Add to Cart</span>
                    <span>🛒</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Science & Call Hotline Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-500/10 via-saffron-500/10 to-amber-500/10 border-t border-b border-ivory-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-saffron-800 text-[11px] font-bold tracking-widest uppercase">Sacred Benefits</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-royal-950 leading-tight">
                The Spiritual Power of <br />
                <span className="text-saffron-800">Gudiya Anda Mala</span>
              </h2>
              <p className="text-royal-900 text-xs md:text-sm leading-relaxed font-medium">
                Revered for meditation, focus, and attracting positive energy. Each bead is aligned to act as a receiver of auspicious Vedic frequencies.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-ivory-200 shadow-sm">
                  <span className="text-xl">🔮</span>
                  <div>
                    <h4 className="font-serif font-bold text-royal-950 text-xs">Aura Shielding & Positivity</h4>
                    <p className="text-royal-900 text-[11px] font-medium">Protects from negative vibes and clears stress.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-ivory-200 shadow-sm">
                  <span className="text-xl">💰</span>
                  <div>
                    <h4 className="font-serif font-bold text-royal-950 text-xs">Wealth & Success</h4>
                    <p className="text-royal-900 text-[11px] font-medium">Attracts business opportunities & leadership confidence.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-ivory-200 shadow-sm">
                  <span className="text-xl">🧘</span>
                  <div>
                    <h4 className="font-serif font-bold text-royal-950 text-xs">Meditation & Peace</h4>
                    <p className="text-royal-900 text-[11px] font-medium">Quiets mind chatter during japa chanting.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-ivory-200 shadow-warm-md space-y-4">
              <div className="text-center space-y-1">
                <span className="text-3xl">📿</span>
                <h3 className="font-serif text-xl font-bold text-royal-950">Need Help Choosing The Right Mala?</h3>
                <p className="text-royal-900 text-xs max-w-xs mx-auto font-medium">
                  Speak directly with our spiritual store advisors to select the best Mala.
                </p>
              </div>

              <div className="space-y-2 bg-ivory-50 p-4 rounded-xl border border-ivory-200 text-center">
                <p className="text-[10px] text-saffron-800 uppercase tracking-wider font-bold">Store Phone Hotline</p>
                <a href="tel:8739002047" className="text-2xl font-extrabold font-serif text-saffron-900 hover:text-saffron-800 transition block">
                  8739002047
                </a>
                <p className="text-[10px] text-royal-900 font-medium">Available Mon - Sat (10:00 AM - 8:00 PM)</p>
              </div>

              <a 
                href="https://wa.me/918739002047?text=Namaste!%20I%20need%20help%20selecting%20a%20Gudiya%20Anda%20Mala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-emerald-400 hover:bg-emerald-300 text-royal-950 border border-emerald-500 font-extrabold py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 transition text-xs"
              >
                <span>💬 Instant WhatsApp Advisory</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Grid */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="inline-block bg-saffron-50 text-saffron-800 text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full border border-saffron-200">
              Verified Reviews
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-royal-950">
              Trusted By Thousands Of <span className="text-saffron-800">Devotees</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { initial: 'R', name: 'Rajesh Kumar', city: 'Delhi', color: 'from-saffron-500 to-amber-600', review: '"The Gudiya Anda Mala was delivered safely in neat packaging with authenticity details. The vibration feels calm and genuine."' },
              { initial: 'P', name: 'Pooja Sharma', city: 'Jaipur', color: 'from-rose-500 to-pink-600', review: '"Superb service! They assisted me over WhatsApp & answered all my questions regarding daily wearing rules. Highly recommended!"' },
              { initial: 'A', name: 'Animesh Verma', city: 'Mumbai', color: 'from-emerald-500 to-teal-600', review: '"100% original Mala quality. Very satisfied with the Razorpay online payment option and super quick dispatch!"' },
            ].map((t, i) => (
              <div key={i} className={`animate-fade-in-up delay-${(i+1)*100} premium-card p-5 space-y-4`}>
                <div className="flex items-center gap-1 text-amber-500">
                  {'⭐'.repeat(5)}
                </div>
                <p className="text-royal-700 text-xs leading-relaxed italic">{t.review}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-ivory-100">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} text-white font-extrabold flex items-center justify-center text-sm shadow-warm-sm`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-royal-950 text-xs">{t.name}</p>
                    <p className="text-emerald-700 text-[10px] font-bold">✓ Verified Buyer ({t.city})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 relative overflow-hidden bg-gradient-to-br from-saffron-800 via-amber-700 to-saffron-700 text-center">
        <div className="absolute inset-0 opacity-15" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)'}} />
        <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-5">
          <span className="inline-block bg-white/20 text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/30">
            Limited Time Offer
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-extrabold text-white leading-tight">
            Ready to Experience Authentic <br className="hidden sm:block" />
            <span className="text-amber-200">Spiritual Transformation?</span>
          </h2>
          <p className="text-amber-100 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Order your certified Gudiya Anda Mala today with Free Delivery & Razorpay Secure Payment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/products"
              className="bg-white text-saffron-800 hover:bg-ivory-100 font-extrabold px-8 py-3.5 rounded-xl shadow-warm-lg hover:shadow-warm-lg transition-all text-sm hover:scale-105"
            >
              🛒 Order Sacred Mala Now
            </Link>
            <a
              href="tel:8739002047"
              className="bg-transparent text-white hover:bg-white/10 border-2 border-white/60 hover:border-white font-extrabold px-8 py-3.5 rounded-xl transition-all text-sm hover:scale-105"
            >
              📞 Call: 8739002047
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home




