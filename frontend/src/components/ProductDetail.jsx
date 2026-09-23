import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ProductDetail({ products: storeProducts = [], addToCart, openRazorpayCheckout }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('features')

  const defaultProducts = [
    {
      id: 1,
      name: 'Premium Gudiya Anda Mala - Classic',
      price: 1299,
      originalPrice: 1899,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800',
      description: 'Authentic handcrafted Gudiya Anda Mala blessed with positive Vedic vibrations for deep spiritual healing, aura cleansing, and financial stability.',
      rating: 4.8,
      reviews: 234,
      features: [
        'Handcrafted with 100% natural sacred beads',
        'Vedic ritual energized & cleansed with holy Ganga Jal',
        'Accompanied by Certificate of Authenticity',
        'Free insured express shipping across India',
        'Guaranteed energy alignment and protection'
      ],
      ritualGuide: 'Wear the mala around your neck or hold in your right hand during morning prayer (Sun transit). Recite your personal mantra 108 times daily for maximum potency.'
    },
    {
      id: 2,
      name: 'Gudiya Anda Mala - Deluxe Gold Edition',
      price: 1599,
      originalPrice: 2299,
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800',
      description: 'High-grade natural beads with enhanced aura cleansing energy and gold-toned thread binding for prosperity.',
      rating: 4.9,
      reviews: 189,
      features: [
        'Superior density natural beads',
        'Specialized wealth attraction blessings',
        'Gold accented silk tassels',
        'Lifetime authenticity guarantee',
        'Includes sacred velvet pouch'
      ],
      ritualGuide: 'Cleanse with sandalwood paste once every month. Keep in a dry, sacred altar space when not wearing.'
    },
    {
      id: 3,
      name: 'Royal Gudiya Anda Mala',
      price: 1899,
      originalPrice: 2699,
      image: 'https://images.unsplash.com/photo-1601159292502-7b9f3f7b8d3a?w=800',
      description: 'Master blessed collection for supreme wealth, focus, leadership aura, & inner peace.',
      rating: 5.0,
      reviews: 312,
      features: [
        'Royal craftsman grade beads',
        'Maximum spiritual frequency potency',
        'VIP direct helpline support included',
        'Exclusive gold gift box packaging',
        'Custom intention blessing from spiritual master'
      ],
      ritualGuide: 'Activate by placing under early sunrise rays for 15 minutes before wearing on Thursdays.'
    },
    {
      id: 4,
      name: 'Customized Gudiya Anda Mala',
      price: 1499,
      originalPrice: 2099,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
      description: 'Personalized mala tailored specifically for your zodiac, name vibration, and life goals.',
      rating: 4.7,
      reviews: 156,
      features: [
        'Fully tailored bead count & arrangement',
        'Name & Nakshatra specific energization',
        'Personal consultation with our expert',
        'Custom blessing card included',
        '100% genuine natural materials'
      ],
      ritualGuide: 'Follow the custom ritual guide card included in your personalized package.'
    },
    {
      id: 5,
      name: 'Crystal Gudiya Anda Mala',
      price: 1799,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800',
      description: 'Interwoven with natural healing quartz crystals for mental clarity, stress relief, and focus.',
      rating: 4.9,
      reviews: 278,
      features: [
        'Genuine healing crystals integrated',
        'Amplifies meditation concentration',
        'Crystal lab certification included',
        'Absorbs negative radiation & stress',
        'Exquisite luster finish'
      ],
      ritualGuide: 'Recharge under full moonlight once a month to clear accumulated ambient energy.'
    },
    {
      id: 6,
      name: 'Blessed Gudiya Anda Mala',
      price: 1699,
      originalPrice: 2399,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800',
      description: 'Specially blessed for business growth, financial abundance, and overcoming obstacles.',
      rating: 4.8,
      reviews: 198,
      features: [
        'Lakshmi & Kuber pooja blessed',
        'Ideal for entrepreneurs & professionals',
        'Overcomes financial bottlenecks',
        'Continuous positive aura glow',
        'Includes free energization oil'
      ],
      ritualGuide: 'Anoint the main guru bead with a drop of sandalwood or jasmine oil on Fridays.'
    }
  ]

  useEffect(() => {
    const list = storeProducts && storeProducts.length > 0 ? storeProducts : defaultProducts
    const found = list.find(p => String(p.id) === String(id)) || list[0]
    setProduct(found)
  }, [id, storeProducts])

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] bg-ivory-50 text-saffron-800 font-serif text-xl animate-pulse">
        <span>📿 Loading Sacred Details...</span>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < selectedQuantity; i++) {
      addToCart(product)
    }
  }

  const featuresList = product.features || [
    'Handcrafted with 100% natural sacred beads',
    'Vedic ritual energized & cleansed with holy Ganga Jal',
    'Accompanied by Certificate of Authenticity',
    'Free insured express shipping across India'
  ]

  const ritualGuideText = product.ritualGuide || 'Wear the mala around your neck or hold in your right hand during morning prayer. Recite your personal mantra daily.'

  return (
    <div className="min-h-screen bg-ivory-50 text-royal-900 py-6">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back Navigation Button */}
        <button 
          onClick={() => navigate('/products')}
          className="mb-4 border border-ivory-300 text-royal-800 bg-white hover:bg-ivory-100 px-4 py-1.5 rounded-xl font-bold text-xs shadow-sm transition flex items-center gap-1.5"
        >
          <span>← Back to Store</span>
        </button>
        
        {/* Main Product Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-5 lg:p-8 rounded-2xl border border-ivory-200 shadow-warm-md">
          {/* Left Column: Image Viewer */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden h-[320px] lg:h-[380px] bg-ivory-100 border border-ivory-200">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              
              <span className="absolute top-3 right-3 bg-saffron-700 text-white px-3 py-0.5 rounded-full font-extrabold text-[11px] shadow-sm">
                {Math.round((((product.originalPrice || product.price * 1.4) - product.price) / (product.originalPrice || product.price * 1.4)) * 100)}% OFF
              </span>
              
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-ivory-200 text-[11px] text-saffron-800 font-bold shadow-sm">
                <span>✨ 100% Certified Original</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-saffron-50 border border-saffron-200 px-3 py-0.5 rounded-full text-[11px] font-bold text-saffron-800">
                <span>📿 Sacred Spiritual Product</span>
              </div>

              <h1 className="font-serif text-xl lg:text-3xl font-extrabold text-royal-950 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="text-amber-600 font-bold flex items-center gap-1">
                  ⭐ {product.rating || 4.9}
                </span>
                <span className="text-royal-500 text-[11px]">({product.reviews || 180} verified reviews)</span>
                <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  ✓ Ready To Dispatch
                </span>
              </div>

              <div className="flex items-baseline gap-3 py-2.5 border-t border-b border-ivory-200">
                <span className="font-serif text-3xl font-extrabold text-saffron-800">₹{product.price}</span>
                <span className="text-base line-through text-royal-400">₹{product.originalPrice || Math.round(product.price * 1.4)}</span>
                <span className="bg-saffron-50 text-saffron-800 border border-saffron-200 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                  Save ₹{(product.originalPrice || Math.round(product.price * 1.4)) - product.price}
                </span>
              </div>

              <p className="text-royal-700 text-xs leading-relaxed font-normal">
                {product.description}
              </p>
            </div>

            {/* Tabs (Features vs Ritual Guide) */}
            <div className="space-y-2">
              <div className="flex gap-4 border-b border-ivory-200">
                <button 
                  onClick={() => setActiveTab('features')}
                  className={`pb-1.5 text-[11px] font-bold transition uppercase tracking-wider ${
                    activeTab === 'features' ? 'text-saffron-800 border-b-2 border-saffron-800' : 'text-royal-400 hover:text-royal-700'
                  }`}
                >
                  Highlights & Features
                </button>
                <button 
                  onClick={() => setActiveTab('ritual')}
                  className={`pb-1.5 text-[11px] font-bold transition uppercase tracking-wider ${
                    activeTab === 'ritual' ? 'text-saffron-800 border-b-2 border-saffron-800' : 'text-royal-400 hover:text-royal-700'
                  }`}
                >
                  Wearing Ritual Guide
                </button>
              </div>

              {activeTab === 'features' ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-royal-700">
                  {featuresList.map((feature, index) => (
                    <li key={index} className="flex items-center gap-1.5 bg-ivory-50 p-2 rounded-lg border border-ivory-200">
                      <span className="text-saffron-700 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="bg-ivory-50 p-3 rounded-lg border border-ivory-200 text-xs text-royal-700 leading-relaxed space-y-1">
                  <p className="text-saffron-800 font-bold text-[11px]">🔥 Energy Activation Instructions:</p>
                  <p className="text-[11px]">{ritualGuideText}</p>
                </div>
              )}
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-3 pt-3 border-t border-ivory-200">
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-royal-700 uppercase tracking-wider">Quantity:</label>
                <div className="flex items-center gap-2 bg-ivory-50 px-2.5 py-1 rounded-lg border border-ivory-300">
                  <button 
                    onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                    className="w-6 h-6 rounded bg-ivory-200 text-royal-800 font-bold hover:bg-saffron-700 hover:text-white transition text-xs"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold min-w-[20px] text-center text-royal-950">{selectedQuantity}</span>
                  <button 
                    onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                    className="w-6 h-6 rounded bg-ivory-200 text-royal-800 font-bold hover:bg-saffron-700 hover:text-white transition text-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button 
                  onClick={() => openRazorpayCheckout && openRazorpayCheckout({ ...product, price: product.price * selectedQuantity })}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                >
                  <span>⚡ Pay ₹{product.price * selectedQuantity} via Razorpay</span>
                </button>

                <button 
                  onClick={handleAddToCart}
                  className="bg-saffron-700 hover:bg-saffron-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                >
                  <span>Add to Cart (₹{product.price * selectedQuantity})</span>
                  <span>🛒</span>
                </button>
              </div>

              {/* Quick Contact Box */}
              <div className="bg-ivory-50 p-2.5 rounded-lg border border-ivory-200 text-center text-[11px]">
                <p className="text-royal-700">
                  Need guidance? Call hotline: <a href="tel:8739002047" className="text-saffron-800 font-bold hover:underline">8739002047</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail


