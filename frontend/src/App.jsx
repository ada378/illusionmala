import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Admin from './components/Admin'
import Footer from './components/Footer'
import RazorpayModal from './components/RazorpayModal'
import OrderReceiptModal from './components/OrderReceiptModal'
import './App.css'

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Premium Gudiya Anda Mala - Classic',
    category: 'Classic',
    price: 1299,
    originalPrice: 1899,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800',
    description: 'Authentic handcrafted Gudiya Anda Mala blessed with positive Vedic vibrations for deep spiritual healing & aura alignment.',
    rating: 4.8,
    reviews: 234,
    features: ['100% Authentic natural beads', 'Vedic ritual energized', 'Certificate included', 'Free India delivery']
  },
  {
    id: 2,
    name: 'Gudiya Anda Mala - Deluxe Edition',
    category: 'Deluxe',
    price: 1599,
    originalPrice: 2299,
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800',
    description: 'High-grade natural beads with enhanced aura cleansing energy and gold-toned thread binding for prosperity.',
    rating: 4.9,
    reviews: 189,
    features: ['Enhanced spiritual energy', 'Gold silk tassel', 'Lifetime authenticity guarantee']
  },
  {
    id: 3,
    name: 'Royal Gudiya Anda Mala',
    category: 'Deluxe',
    price: 1899,
    originalPrice: 2699,
    image: 'https://images.unsplash.com/photo-1601159292502-7b9f3f7b8d3a?w=800',
    description: 'Master blessed collection for supreme wealth, focus, leadership aura, & inner peace.',
    rating: 5.0,
    reviews: 312,
    features: ['Royal craftsman grade', 'Maximum spiritual potency', 'VIP helpline support']
  },
  {
    id: 4,
    name: 'Customized Gudiya Anda Mala',
    category: 'Custom',
    price: 1499,
    originalPrice: 2099,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    description: 'Personalized mala tailored specifically for your zodiac, name vibration, and life goals.',
    rating: 4.7,
    reviews: 156,
    features: ['Fully tailored design', 'Name & Nakshatra blessing', 'Personal astrologer advice']
  },
  {
    id: 5,
    name: 'Crystal Gudiya Anda Mala',
    category: 'Crystal',
    price: 1799,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800',
    description: 'Interwoven with natural healing quartz crystals for mental clarity, stress relief, and focus.',
    rating: 4.9,
    reviews: 278,
    features: ['Genuine healing crystals', 'Amplifies concentration', 'Crystal lab certified']
  },
  {
    id: 6,
    name: 'Blessed Gudiya Anda Mala',
    category: 'Blessed',
    price: 1699,
    originalPrice: 2399,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800',
    description: 'Specially blessed for business growth, financial abundance, and overcoming obstacles.',
    rating: 4.8,
    reviews: 198,
    features: ['Lakshmi & Kuber pooja blessed', 'Ideal for career success', 'Free energization oil']
  }
]

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('illusion_mala_cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('illusion_mala_products')
    return savedProducts ? JSON.parse(savedProducts) : INITIAL_PRODUCTS
  })

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('illusion_mala_orders')
    return savedOrders ? JSON.parse(savedOrders) : []
  })

  const [toastMessage, setToastMessage] = useState(null)
  const [razorpayModalState, setRazorpayModalState] = useState({
    isOpen: false,
    cartItems: [],
    totalAmount: 0
  })

  const [orderReceipt, setOrderReceipt] = useState(null)

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem('illusion_mala_cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('illusion_mala_products', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    localStorage.setItem('illusion_mala_orders', JSON.stringify(orders))
  }, [orders])

  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => {
      setToastMessage(null)
    }, 3500)
  }

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
    showToast(`✨ Added "${product.name}" to your Sacred Cart!`)
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      ))
    }
  }

  // Admin Product CRUD handlers
  const handleAddProduct = (newProd) => {
    const createdProduct = { ...newProd, id: Date.now() }
    const updated = [createdProduct, ...products]
    setProducts(updated)
    showToast(`✨ Added product "${newProd.name}" to store!`)
    
    // Optional backend sync
    axios.post('http://localhost:5001/api/products', createdProduct).catch(() => {})
  }

  const handleEditProduct = (updatedProd) => {
    const updated = products.map(p => p.id === updatedProd.id ? updatedProd : p)
    setProducts(updated)
    showToast(`✏️ Updated product "${updatedProd.name}"!`)

    axios.put(`http://localhost:5001/api/products/${updatedProd.id}`, updatedProd).catch(() => {})
  }

  const handleDeleteProduct = (productId) => {
    const updated = products.filter(p => p.id !== productId)
    setProducts(updated)
    showToast(`🗑️ Removed product from catalog`)

    axios.delete(`http://localhost:5001/api/products/${productId}`).catch(() => {})
  }

  // Razorpay Checkout flow triggers
  const openRazorpayCheckout = (cartItems, totalAmount) => {
    setRazorpayModalState({
      isOpen: true,
      cartItems: cartItems.length > 0 ? cartItems : cart,
      totalAmount: totalAmount || cart.reduce((s, i) => s + (i.price * i.quantity), 0)
    })
  }

  const handlePaymentSuccess = (orderData) => {
    setRazorpayModalState({ isOpen: false, cartItems: [], totalAmount: 0 })
    setOrders([orderData, ...orders])
    setCart([]) // Clear cart upon successful order
    setOrderReceipt(orderData)
    showToast(`🎉 Order ${orderData.orderId} placed successfully!`)
  }

  return (
    <Router>
      <div className="App bg-ivory-50 text-royal-900 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-white relative">
        <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products} addToCart={addToCart} openRazorpayCheckout={openRazorpayCheckout} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products products={products} addToCart={addToCart} openRazorpayCheckout={openRazorpayCheckout} />} />
            <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} openRazorpayCheckout={openRazorpayCheckout} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} openRazorpayCheckout={openRazorpayCheckout} />} />
            <Route path="/admin" element={<Admin products={products} onAddProduct={handleAddProduct} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} orders={orders} />} />
          </Routes>
        </div>

        <Footer />

        {/* Global Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-24 right-6 z-50 bg-white border border-amber-500/40 text-royal-900 px-6 py-3.5 rounded-2xl shadow-warm-lg flex items-center gap-3 animate-bounce font-medium text-sm">
            <span className="text-xl">📿</span>
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Sticky WhatsApp Floating Button */}
        <a 
          href="https://wa.me/918739002047?text=Namaste!%20I%20want%20to%20inquire%20about%20Gudiya%20Anda%20Mala" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          title="Direct WhatsApp Consultation"
        >
          <span className="text-2xl">💬</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold px-0 group-hover:px-2">
            Ask Spiritual Expert (8739002047)
          </span>
        </a>

        {/* Razorpay Modal */}
        <RazorpayModal 
          isOpen={razorpayModalState.isOpen}
          onClose={() => setRazorpayModalState({ ...razorpayModalState, isOpen: false })}
          cart={razorpayModalState.cartItems}
          total={razorpayModalState.totalAmount}
          onPaymentSuccess={handlePaymentSuccess}
        />

        {/* Order Receipt Modal */}
        <OrderReceiptModal 
          order={orderReceipt}
          onClose={() => setOrderReceipt(null)}
        />
      </div>
    </Router>
  )
}

export default App


