import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

function Cart({ cart, updateQuantity, removeFromCart, openRazorpayCheckout }) {
  const navigate = useNavigate()
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [promoApplied, setPromoApplied] = useState(false)

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const finalTotal = Math.max(0, subtotal - discount)

  const handleApplyPromo = (e) => {
    e.preventDefault()
    if (promoCode.trim().toUpperCase() === 'SACRED10') {
      setDiscount(Math.round(subtotal * 0.1))
      setPromoApplied(true)
    } else if (promoCode.trim().toUpperCase() === 'BLESSING') {
      setDiscount(200)
      setPromoApplied(true)
    } else {
      alert('Invalid Promo Code. Try using "SACRED10"')
    }
  }

  const handleWhatsAppCheckout = () => {
    const message = `Namaste! I would like to order the following Gudiya Anda Mala from Illusion Mala:\n\n${cart.map(item => `• ${item.name} (Qty: ${item.quantity}) = ₹${item.price * item.quantity}`).join('\n')}\n\n${promoApplied ? `Discount Applied: -₹${discount}\n` : ''}Final Total Amount: ₹${finalTotal}\n\nPlease confirm my order and share payment details.`
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/918739002047?text=${encodedMessage}`, '_blank')
  }

  const handleRazorpayCartPayment = () => {
    if (cart.length === 0) return
    const firstItem = cart[0]
    openRazorpayCheckout && openRazorpayCheckout({
      id: 'cart_' + Date.now(),
      name: cart.length === 1 ? firstItem.name : `Cart Order (${cart.length} items)`,
      price: finalTotal,
      originalPrice: subtotal * 1.3,
      image: firstItem.image,
      description: `Order consisting of ${cart.map(i => `${i.name} x${i.quantity}`).join(', ')}`
    })
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center bg-ivory-50 py-16">
        <div className="text-center p-8 max-w-md bg-white rounded-3xl border border-ivory-200 shadow-warm-lg space-y-5">
          <div className="w-20 h-20 rounded-2xl bg-saffron-100 border border-saffron-200 flex items-center justify-center text-4xl mx-auto text-saffron-800">
            📿
          </div>
          <h2 className="font-serif text-2xl font-bold text-royal-950">Your Sacred Cart is Empty</h2>
          <p className="text-royal-600 text-xs leading-relaxed">
            Discover our collection of authentic Gudiya Anda Mala handcrafted for spiritual healing and prosperity.
          </p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-saffron-700 hover:bg-saffron-800 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow-sm mx-auto flex items-center gap-2"
          >
            <span>Explore Sacred Products</span>
            <span>✨</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ivory-50 text-royal-900 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4 border-b border-ivory-200 pb-4">
          <div>
            <span className="text-saffron-700 text-xs font-bold tracking-widest uppercase">Shopping Bag</span>
            <h1 className="font-serif text-2xl md:text-4xl font-extrabold text-royal-950">
              Your Sacred <span className="text-saffron-700">Cart Items</span> ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h1>
          </div>
          <Link to="/products" className="text-saffron-700 hover:text-saffron-800 text-xs font-bold flex items-center gap-1">
            <span>← Continue Shopping</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Item List */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-5 rounded-2xl border border-ivory-200 shadow-sm flex flex-col md:flex-row items-center gap-5 hover:border-saffron-300 transition">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl border border-ivory-200 bg-ivory-100" />
                
                <div className="flex-1 text-center md:text-left space-y-1">
                  <h3 className="font-serif text-base font-bold text-royal-950">{item.name}</h3>
                  <p className="text-saffron-800 font-bold text-sm font-serif">₹{item.price}</p>
                  <span className="text-emerald-700 text-[10px] font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Vedic Blessed
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 bg-ivory-50 px-3 py-1.5 rounded-xl border border-ivory-300">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded bg-ivory-200 text-royal-800 font-bold hover:bg-saffron-700 hover:text-white transition"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold min-w-[20px] text-center text-royal-950">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded bg-ivory-200 text-royal-800 font-bold hover:bg-saffron-700 hover:text-white transition"
                  >
                    +
                  </button>
                </div>

                <div className="font-serif text-lg font-bold text-saffron-800 min-w-[80px] text-center">
                  ₹{item.price * item.quantity}
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-600 hover:text-white transition flex items-center justify-center text-xs"
                  title="Remove Item"
                >
                  ✕
                </button>
              </div>
            ))}

            {/* Guarantees pill */}
            <div className="bg-white border border-ivory-200 p-4 rounded-2xl flex flex-wrap justify-between items-center text-xs text-royal-700 gap-2 shadow-sm">
              <span className="flex items-center gap-1.5"><span className="text-saffron-600">✨</span> 100% Original Certificate</span>
              <span className="flex items-center gap-1.5"><span className="text-saffron-600">🚚</span> Free Express Delivery</span>
              <span className="flex items-center gap-1.5"><span className="text-saffron-600">🔒</span> Razorpay Secured Checkout</span>
            </div>
          </div>

          {/* Right Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-ivory-200 p-6 rounded-3xl shadow-warm-md space-y-5 sticky top-24">
              <h3 className="font-serif text-xl font-bold text-royal-950 border-b border-ivory-200 pb-3">
                Order Summary
              </h3>

              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="space-y-2">
                <label className="text-xs font-bold text-royal-700">Have a Sacred Coupon?</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code (e.g. SACRED10)" 
                    className="w-full bg-ivory-50 border border-ivory-300 text-royal-900 text-xs px-3 py-2.5 rounded-xl uppercase placeholder-royal-400 focus:outline-none focus:border-saffron-500"
                  />
                  <button type="submit" className="bg-saffron-700 hover:bg-saffron-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition">
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-emerald-700 text-xs font-bold">
                    ✓ Promo applied! Saved ₹{discount}
                  </p>
                )}
              </form>

              {/* Cost Calculations */}
              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex justify-between text-royal-700">
                  <span>Subtotal</span>
                  <span className="font-bold text-royal-950 font-serif">₹{subtotal}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Discount Coupon</span>
                    <span>-₹{discount}</span>
                  </div>
                )}

                <div className="flex justify-between text-royal-700">
                  <span>Pan-India Express Shipping</span>
                  <span className="font-bold text-emerald-700 uppercase tracking-wider text-xs">FREE</span>
                </div>

                <div className="border-t border-ivory-200 pt-3 flex justify-between items-baseline">
                  <span className="font-serif text-base font-bold text-royal-950">Total Amount</span>
                  <span className="font-serif text-3xl font-extrabold text-saffron-800">₹{finalTotal}</span>
                </div>
              </div>

              {/* Payment Option Buttons */}
              <div className="space-y-2.5 pt-2">
                <button 
                  onClick={handleRazorpayCartPayment}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-xs"
                >
                  <span>⚡ Pay Total ₹{finalTotal} with Razorpay</span>
                </button>

                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-saffron-700 hover:bg-saffron-800 text-white font-bold py-3 rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-xs"
                >
                  <span>WhatsApp Order</span>
                  <span>💬</span>
                </button>

                <a 
                  href="tel:8739002047"
                  className="w-full bg-ivory-100 hover:bg-ivory-200 text-royal-800 border border-ivory-300 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1"
                >
                  <span>Call Hotline: 8739002047</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart


