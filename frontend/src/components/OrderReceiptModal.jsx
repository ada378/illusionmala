function OrderReceiptModal({ order, onClose }) {
  if (!order) return null

  const handlePrint = () => {
    window.print()
  }

  const handleSendWhatsApp = () => {
    const text = `Namaste! I just placed an order on Illusion Mala:\n\nOrder ID: ${order.orderId}\nPayment ID: ${order.paymentId}\nPayment Method: ${order.paymentMethod}\nAmount: ₹${order.amount}\nName: ${order.customer.name}\nPhone: ${order.customer.phone}\nAddress: ${order.customer.address}, ${order.customer.city} (${order.customer.pincode})\n\nPlease dispatch my sacred Mala at the earliest!`
    window.open(`https://wa.me/918739002047?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-950/70 backdrop-blur-md animate-fade-in">
      <div className="glass-card w-full max-w-lg p-6 lg:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto border-amber-500/40 shadow-2xl">
        {/* Success Header */}
        <div className="text-center space-y-2 border-b border-amber-500/20 pb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-warm-sm">
            ✓
          </div>
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Order Confirmed</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-royal-900">
            Payment Successful!
          </h2>
          <p className="text-xs text-royal-800">
            Thank you for ordering from <strong className="text-amber-800">Illusion Mala</strong>. Your product is being prepared & energized.
          </p>
        </div>

        {/* Receipt Details Box */}
        <div className="bg-ivory-50 p-5 rounded-2xl border border-amber-500/20 space-y-3 text-xs">
          <div className="flex justify-between border-b border-amber-500/10 pb-2">
            <span className="text-royal-800 font-medium">Order ID:</span>
            <span className="font-mono font-bold text-saffron-700">{order.orderId}</span>
          </div>
          <div className="flex justify-between border-b border-amber-500/10 pb-2">
            <span className="text-royal-800 font-medium">Transaction ID:</span>
            <span className="font-mono text-royal-900 font-semibold">{order.paymentId}</span>
          </div>
          <div className="flex justify-between border-b border-amber-500/10 pb-2">
            <span className="text-royal-800 font-medium">Payment Mode:</span>
            <span className="text-emerald-700 font-bold">{order.paymentMethod}</span>
          </div>
          <div className="flex justify-between border-b border-amber-500/10 pb-2">
            <span className="text-royal-800 font-medium">Date & Time:</span>
            <span className="text-royal-900 font-medium">{order.date}</span>
          </div>

          <div className="pt-2 space-y-1">
            <p className="font-bold text-royal-900">Shipping Address:</p>
            <p className="text-royal-800 font-medium">{order.customer.name} ({order.customer.phone})</p>
            <p className="text-royal-800/80">{order.customer.address}, {order.customer.city} - {order.customer.pincode}</p>
          </div>
        </div>

        {/* Cart items list */}
        <div className="space-y-2">
          <p className="text-xs font-bold text-royal-800 uppercase tracking-wider">Ordered Products</p>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {order.cart.map(item => (
              <div key={item.id} className="flex justify-between items-center text-xs p-2 rounded-xl bg-ivory-100/60 border border-amber-500/15">
                <span className="font-medium text-royal-900">{item.name} × {item.quantity}</span>
                <span className="font-serif font-bold text-amber-800">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-baseline pt-2 border-t border-amber-500/20 font-serif text-lg font-extrabold text-saffron-700">
            <span>Total Paid</span>
            <span>₹{order.amount}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button 
            onClick={handleSendWhatsApp}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-full text-xs shadow-md flex items-center justify-center gap-2 transition"
          >
            <span>Share Order on WhatsApp</span>
            <span>💬</span>
          </button>
          <button 
            onClick={onClose}
            className="gold-btn-outline w-full !py-3 text-xs justify-center"
          >
            Close Receipt
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderReceiptModal
