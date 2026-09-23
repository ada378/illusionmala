import { Link } from 'react-router-dom'
import { useState } from 'react'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="bg-ivory-100 text-royal-900 border-t border-amber-500/20 pt-10 sm:pt-14 pb-6 sm:pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">

          {/* Brand Column — full width on mobile */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-saffron-700 via-amber-600 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-warm-sm">
                📿
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wider gold-gradient-text uppercase">
                Illusion Mala
              </h3>
            </div>
            <p className="text-royal-700 text-xs sm:text-sm leading-relaxed font-medium">
              Authentic Gudiya Anda Mala handcrafted with sacred energy for deep spiritual healing, prosperity, and inner tranquility.
            </p>
            <a
              href="tel:8739002047"
              className="inline-flex items-center gap-2 font-bold text-saffron-700 hover:text-saffron-800 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/30 transition-all text-xs"
            >
              📞 Hotline: 8739002047
            </a>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold mb-4 text-saffron-700 border-b border-amber-500/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {[['/', 'Home'], ['/products', 'Sacred Products'], ['/about', 'About Us'], ['/contact', 'Contact'], ['/admin', 'Admin Panel']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-royal-700 hover:text-saffron-700 transition flex items-center gap-1.5">
                    <span className="text-amber-500 text-xs">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spiritual Assurance */}
          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold mb-4 text-saffron-700 border-b border-amber-500/20 pb-2">
              Our Assurance
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-royal-700">
              {[
                ['✨', '100% Genuine Certified Malas'],
                ['🔥', 'Vedic Energized Before Dispatch'],
                ['🚚', 'Free Express Shipping India'],
                ['💳', 'Razorpay & COD Payments'],
                ['💬', '24/7 WhatsApp Assistance'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-2">
                  <span className="text-amber-500">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-serif text-sm sm:text-base font-bold mb-4 text-saffron-700 border-b border-amber-500/20 pb-2">
              Stay Connected
            </h4>
            <p className="text-royal-700 text-xs mb-3 font-medium">
              Receive spiritual insights and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white border border-amber-500/30 text-royal-900 placeholder-royal-500/50 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-amber-600 font-medium shadow-warm-sm"
                />
                <button type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-saffron-700 to-amber-600 text-white px-3 rounded-lg font-bold text-xs hover:scale-105 transition"
                >Join</button>
              </div>
              {subscribed && (
                <p className="text-emerald-700 text-xs font-bold">✨ Subscribed successfully!</p>
              )}
            </form>

            <div className="pt-4 flex items-center gap-3">
              <a href="https://wa.me/918739002047" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-500 transition shadow-warm-sm"
                title="WhatsApp">💬</a>
              <a href="tel:8739002047"
                className="w-10 h-10 rounded-xl bg-saffron-700 text-white flex items-center justify-center hover:bg-saffron-600 transition shadow-warm-sm"
                title="Call">📞</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-500/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] sm:text-xs font-medium text-royal-600">
          <p>© 2026 Illusion Mala. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-saffron-700 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-saffron-700 transition cursor-pointer">Terms</span>
            <span className="hover:text-saffron-700 transition cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



