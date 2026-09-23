import { useState } from 'react'
import { Link } from 'react-router-dom'

function Products({ products: initialProducts = [], addToCart, openRazorpayCheckout }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

  const defaultProducts = [
    {
      id: 1,
      name: 'Premium Gudiya Anda Mala - Classic',
      category: 'Classic',
      price: 1299,
      originalPrice: 1899,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600',
      description: 'Authentic Gudiya Anda Mala for spiritual healing and aura alignment.',
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      name: 'Gudiya Anda Mala - Deluxe Edition',
      category: 'Deluxe',
      price: 1599,
      originalPrice: 2299,
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600',
      description: 'Premium quality beads infused with high spiritual energy.',
      rating: 4.9,
      reviews: 189
    },
    {
      id: 3,
      name: 'Royal Gudiya Anda Mala',
      category: 'Deluxe',
      price: 1899,
      originalPrice: 2699,
      image: 'https://images.unsplash.com/photo-1601159292502-7b9f3f7b8d3a?w=600',
      description: 'Ultimate spiritual healing experience with master blessing.',
      rating: 5.0,
      reviews: 312
    },
    {
      id: 4,
      name: 'Customized Gudiya Anda Mala',
      category: 'Custom',
      price: 1499,
      originalPrice: 2099,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600',
      description: 'Personalized mala crafted according to your spiritual goals.',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 5,
      name: 'Crystal Gudiya Anda Mala',
      category: 'Crystal',
      price: 1799,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600',
      description: 'Enhanced with healing crystal energy for focus & peace.',
      rating: 4.9,
      reviews: 278
    },
    {
      id: 6,
      name: 'Blessed Gudiya Anda Mala',
      category: 'Blessed',
      price: 1699,
      originalPrice: 2399,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600',
      description: 'Specially energized for prosperity & financial abundance.',
      rating: 4.8,
      reviews: 198
    }
  ]

  const products = initialProducts && initialProducts.length > 0 ? initialProducts : defaultProducts

  // Filter & Sort Logic
  const categories = ['All', 'Classic', 'Deluxe', 'Crystal', 'Blessed', 'Custom']

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'low-to-high') return a.price - b.price
      if (sortBy === 'high-to-low') return b.price - a.price
      if (sortBy === 'rating') return (b.rating || 5) - (a.rating || 5)
      return (b.reviews || 0) - (a.reviews || 0)
    })

  return (
    <main className="bg-ivory-50 text-royal-900 min-h-screen py-6">
      <div className="max-w-5xl mx-auto px-4">
        {/* Compact Page Header Banner */}
        <section className="relative py-6 bg-white border border-ivory-200 rounded-2xl shadow-sm mb-6 text-center">
          <div className="px-4 space-y-1.5">
            <span className="text-saffron-700 text-[11px] font-bold tracking-widest uppercase">Sacred Collection</span>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-royal-950">
              Sacred <span className="text-saffron-700">Gudiya Anda Mala</span> Store
            </h1>
            <p className="text-royal-600 text-xs max-w-xl mx-auto">
              100% certified natural beads, cleansed with Ganga Jal & energized with Vedic Mantras.
            </p>
          </div>
        </section>

        {/* Compact Filter & Search Bar */}
        <section className="mb-5 sm:mb-6">
          <div className="bg-white border border-ivory-200 p-3.5 rounded-2xl shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
              {/* Search Input */}
              <div className="relative flex-1">
                <input
                  type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Mala by name or type..."
                  className="w-full bg-ivory-50 border border-ivory-300 text-royal-900 placeholder-royal-400 text-xs px-3 py-2.5 pl-9 rounded-xl focus:outline-none focus:border-saffron-500 focus:bg-white transition"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-saffron-700 text-xs">🔍</span>
              </div>
              {/* Sort */}
              <div className="flex items-center gap-2">
                <label className="text-xs text-royal-600 font-bold whitespace-nowrap">Sort:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 sm:flex-none bg-ivory-50 border border-ivory-300 text-royal-900 text-xs px-3 py-2.5 rounded-xl focus:outline-none focus:border-saffron-500 font-medium"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="low-to-high">Price: Low → High</option>
                  <option value="high-to-low">Price: High → Low</option>
                </select>
              </div>
            </div>

            {/* Category Pills - scrollable */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-0.5 px-0.5" style={{scrollbarWidth:'none'}}>
              <span className="text-[11px] font-bold text-royal-500 mr-0.5 whitespace-nowrap">Filter:</span>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-saffron-700 text-white shadow-sm'
                      : 'bg-ivory-100 text-royal-600 hover:bg-ivory-200 border border-ivory-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Compact Products Grid */}
        <section className="pb-16">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-white border border-ivory-200 rounded-2xl p-6 space-y-3 shadow-sm">
              <span className="text-3xl">📿</span>
              <h3 className="font-serif text-lg font-bold text-royal-950">No Malas Found</h3>
              <p className="text-royal-600 text-xs">Try searching with a different keyword or reset filters.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="bg-saffron-700 text-white font-bold text-xs px-5 py-2 rounded-xl hover:bg-saffron-800 transition shadow-sm mx-auto"
              >
                Reset Filters
              </button>
            </div>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredProducts.map(product => (
                <div key={product.id} className="premium-card overflow-hidden flex flex-col justify-between group">
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <div className="relative h-44 sm:h-48 overflow-hidden bg-ivory-100">
                        <img
                          src={product.image} alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2.5 right-2.5 bg-rose-500 text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                        <span className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-md text-royal-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-ivory-200 flex items-center gap-1 shadow-sm">
                          ⭐ {product.rating || 4.9}
                        </span>
                      </div>
                    </Link>

                    <div className="p-3.5 sm:p-4 space-y-2">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-sm sm:text-base font-bold text-royal-950 group-hover:text-saffron-700 transition line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-royal-500 text-[11px] leading-relaxed line-clamp-2">{product.description}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg sm:text-xl font-extrabold text-saffron-800 font-serif">₹{product.price}</span>
                        <span className="text-[11px] line-through text-royal-400">₹{product.originalPrice}</span>
                        <span className="text-emerald-600 text-[10px] font-bold ml-auto">✓ In Stock</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 pt-0 space-y-1.5">
                    <button
                      onClick={() => openRazorpayCheckout && openRazorpayCheckout(product)}
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                    >
                      ⚡ Pay with Razorpay
                    </button>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        onClick={() => addToCart && addToCart(product)}
                        className="bg-amber-400 hover:bg-amber-300 text-royal-950 border border-amber-500 font-bold py-2 rounded-xl text-[11px] flex items-center justify-center gap-1 transition"
                      >
                        <span>🛒</span> <span>Add Cart</span>
                      </button>
                      <a
                        href={`https://wa.me/918739002047?text=Namaste!%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}%20(Price:%20₹${product.price})`}
                        target="_blank" rel="noopener noreferrer"
                        className="bg-ivory-100 hover:bg-ivory-200 text-royal-700 border border-ivory-300 py-2 rounded-xl text-[11px] font-bold transition flex items-center justify-center gap-1"
                      >
                        <span>💬</span> <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default Products



