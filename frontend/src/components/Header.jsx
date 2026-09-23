import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/products', label: 'Products', icon: '📿' },
    { to: '/about', label: 'About', icon: '✨' },
    { to: '/contact', label: 'Contact', icon: '📞' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-warm-md' : ''}`}>

      {/* Top Announcement Bar */}
      <div className="bg-amber-100 border-b border-amber-200/80 text-royal-950 py-1.5 text-xs">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-3 font-medium">
            <span className="flex items-center gap-1.5 font-bold text-royal-950 text-[10px] sm:text-xs">
              <span className="animate-pulse">✨</span>
              <span className="hidden xs:inline">100% Certified Sacred Gudiya Anda Mala</span>
              <span className="xs:hidden">Certified Sacred Mala</span>
            </span>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="hidden md:inline opacity-90 text-royal-900 font-semibold text-xs">Pan-India Free Express Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold">
            <a
              href="tel:8739002047"
              className="flex items-center gap-1 bg-amber-200/70 hover:bg-amber-300 text-royal-950 px-2 py-0.5 rounded-full border border-amber-300 transition"
            >
              <span>📞</span>
              <span className="hidden sm:inline">Hotline:</span>
              <span>8739002047</span>
            </a>
            <a
              href="https://wa.me/918739002047"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-0.5 rounded-full font-extrabold transition flex items-center gap-1 shadow-sm"
            >
              <span>💬</span>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-nav py-2.5 sm:py-3">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="flex justify-between items-center">

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-saffron-700 via-amber-600 to-amber-500 flex items-center justify-center text-royal-950 font-bold text-base sm:text-xl shadow-warm-sm group-hover:scale-105 transition-all duration-300">
                📿
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl md:text-2xl font-extrabold tracking-wider text-saffron-800 uppercase leading-none">
                  Illusion Mala
                </span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-royal-700 font-bold hidden xs:block">
                  Sacred Energy &amp; Prosperity
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-amber-500/20 shadow-warm-sm">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 xl:px-5 py-2 rounded-full font-extrabold text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-300 text-royal-950 border border-amber-500 shadow-sm'
                        : 'text-royal-950 hover:text-saffron-800 hover:bg-ivory-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Admin — desktop only */}
              <NavLink
                to="/admin"
                className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-royal-950 hover:text-saffron-800 bg-amber-200/80 hover:bg-amber-300 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-amber-400 transition"
              >
                <span>⚙️</span>
                <span className="hidden md:inline">Admin</span>
              </NavLink>

              {/* Cart Button */}
              <NavLink
                to="/cart"
                className="relative bg-gradient-to-r from-saffron-600 via-amber-500 to-saffron-700 text-royal-950 font-extrabold px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm shadow-warm-sm hover:scale-105 transition flex items-center gap-1.5 border border-amber-500"
              >
                <span className="hidden sm:inline">Cart</span>
                <span>🛒</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-saffron-700 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-bounce">
                    {cartCount}
                  </span>
                )}
              </NavLink>

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden p-2 rounded-xl text-royal-950 bg-white border border-amber-500/30 hover:bg-ivory-100 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-amber-500/20 animate-fade-in-up">
              <div className="bg-white rounded-2xl border border-amber-500/20 shadow-warm-md overflow-hidden">
                {/* Nav Links */}
                <div className="p-3 space-y-1">
                  {navLinks.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-extrabold text-sm transition-all ${
                          isActive
                            ? 'bg-amber-300 text-royal-950 border border-amber-400 shadow-sm'
                            : 'text-royal-800 hover:bg-ivory-100'
                        }`
                      }
                    >
                      <span className="text-base">{link.icon}</span>
                      <span>{link.label}</span>
                    </NavLink>
                  ))}

                  <NavLink
                    to="/admin"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl font-extrabold text-sm transition-all ${
                        isActive
                          ? 'bg-amber-300 text-royal-950 border border-amber-400 shadow-sm'
                          : 'text-royal-800 hover:bg-ivory-100'
                      }`
                    }
                  >
                    <span className="text-base">⚙️</span>
                    <span>Admin Panel</span>
                  </NavLink>
                </div>

                {/* Mobile Bottom CTA */}
                <div className="px-3 pb-3 grid grid-cols-2 gap-2 border-t border-ivory-200 pt-3">
                  <a
                    href="tel:8739002047"
                    className="flex items-center justify-center gap-2 bg-saffron-50 border border-saffron-200 text-saffron-800 font-bold py-2.5 rounded-xl text-xs hover:bg-saffron-100 transition"
                  >
                    <span>📞</span> <span>Call Us</span>
                  </a>
                  <a
                    href="https://wa.me/918739002047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs hover:bg-emerald-700 transition shadow-sm"
                  >
                    <span>💬</span> <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
