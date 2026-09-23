import { useState } from 'react'

const ADMIN_EMAIL = 'admin@illusionmala.com'
const ADMIN_PASSWORD = 'illusion@2024'

/* ─── Login Screen ─── */
function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(() => {
      if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        onLogin()
      } else {
        setError('Invalid email or password. Please try again.')
      }
      setLoading(false)
    }, 800)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-ivory-50 via-amber-50/40 to-ivory-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md animate-fade-in-up">
        <div className="bg-white rounded-3xl border border-amber-500/25 shadow-warm-lg overflow-hidden">

          {/* Header Band */}
          <div className="bg-gradient-to-r from-saffron-800 via-amber-700 to-saffron-700 p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 shadow-lg">
                📿
              </div>
              <h1 className="font-serif text-xl sm:text-2xl font-extrabold text-white tracking-wide">Admin Portal</h1>
              <p className="text-amber-100 text-xs mt-1 font-medium">Illusion Mala — Store Control Center</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 space-y-5">
            <p className="text-royal-600 text-xs font-medium text-center">
              Sign in with your admin credentials to access the dashboard.
            </p>

            {error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
                <span>⚠️</span><span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-royal-800 uppercase tracking-wider mb-1.5">Admin Email</label>
                <input
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="admin@illusionmala.com"
                  className="w-full bg-ivory-50 border border-amber-500/30 text-royal-900 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/15 transition font-medium placeholder-royal-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-royal-800 uppercase tracking-wider mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-ivory-50 border border-amber-500/30 text-royal-900 text-sm px-4 py-3 pr-12 rounded-xl focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/15 transition font-medium placeholder-royal-400"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-royal-500 hover:text-royal-800 transition text-base"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="w-full gold-btn-primary !rounded-xl !py-3.5 text-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Verifying...
                  </span>
                ) : '🔐 Sign In to Dashboard'}
              </button>
            </form>

            <div className="pt-2 border-t border-ivory-200 text-center">
              <p className="text-royal-400 text-[11px] font-medium">
                🔒 This admin area is secured. Unauthorized access is prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

/* ─── Add/Edit Product Modal ─── */
function ProductModal({ editingProduct, formData, onInputChange, onSubmit, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-royal-950/70 backdrop-blur-md animate-fade-in p-0 sm:p-4">
      {/* Bottom sheet on mobile, centered modal on sm+ */}
      <div className="w-full sm:max-w-xl bg-white sm:rounded-3xl rounded-t-3xl border border-amber-500/30 shadow-2xl animate-fade-in-up max-h-[92vh] sm:max-h-[90vh] flex flex-col">

        {/* Modal Header */}
        <div className="flex justify-between items-center px-5 pt-5 pb-4 border-b border-ivory-200 flex-shrink-0">
          {/* Drag handle for mobile */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-ivory-300 rounded-full sm:hidden" />
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-royal-900">
              {editingProduct ? '✏️ Edit Product' : '+ Add New Product'}
            </h3>
            <p className="text-[11px] text-royal-500 mt-0.5">
              {editingProduct ? 'Update product details below.' : 'Fill in all fields to publish product.'}
            </p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-ivory-100 text-royal-700 hover:bg-rose-50 hover:text-rose-600 transition font-bold text-sm border border-ivory-200 flex items-center justify-center flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto flex-1 px-5 py-4">
          <form onSubmit={onSubmit} id="product-form" className="space-y-4 text-xs">

            {/* Product Title */}
            <div>
              <label className="block font-bold text-royal-700 uppercase tracking-wider mb-1.5">Product Title *</label>
              <input
                type="text" name="name" required value={formData.name} onChange={onInputChange}
                placeholder="e.g. Royal Energized Gudiya Anda Mala"
                className="w-full bg-ivory-50 border border-amber-500/30 text-xs px-3.5 py-3 rounded-xl text-royal-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-500/10 font-medium placeholder-royal-400"
              />
            </div>

            {/* Category + Price row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-bold text-royal-700 uppercase tracking-wider mb-1.5">Category</label>
                <select name="category" value={formData.category} onChange={onInputChange}
                  className="w-full bg-ivory-50 border border-amber-500/30 text-xs px-3.5 py-3 rounded-xl text-royal-900 focus:outline-none focus:border-amber-600 font-medium"
                >
                  <option value="Classic">Classic</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Crystal">Crystal</option>
                  <option value="Blessed">Blessed</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-royal-700 uppercase tracking-wider mb-1.5">Price (₹) *</label>
                <input
                  type="number" name="price" required value={formData.price} onChange={onInputChange}
                  placeholder="1499" min="1"
                  className="w-full bg-ivory-50 border border-amber-500/30 text-xs px-3.5 py-3 rounded-xl text-royal-900 focus:outline-none focus:border-amber-600 font-medium placeholder-royal-400"
                />
              </div>
              <div>
                <label className="block font-bold text-royal-700 uppercase tracking-wider mb-1.5">MRP (₹)</label>
                <input
                  type="number" name="originalPrice" value={formData.originalPrice} onChange={onInputChange}
                  placeholder="2099" min="1"
                  className="w-full bg-ivory-50 border border-amber-500/30 text-xs px-3.5 py-3 rounded-xl text-royal-900 focus:outline-none focus:border-amber-600 font-medium placeholder-royal-400"
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block font-bold text-royal-700 uppercase tracking-wider mb-1.5">Rating (1–5)</label>
              <input
                type="number" name="rating" min="1" max="5" step="0.1" value={formData.rating} onChange={onInputChange}
                placeholder="4.8"
                className="w-full bg-ivory-50 border border-amber-500/30 text-xs px-3.5 py-3 rounded-xl text-royal-900 focus:outline-none focus:border-amber-600 font-medium"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block font-bold text-royal-700 uppercase tracking-wider mb-1.5">Image URL</label>
              <input
                type="url" name="image" value={formData.image} onChange={onInputChange}
                placeholder="https://images.unsplash.com/photo-..."
                className="w-full bg-ivory-50 border border-amber-500/30 text-xs px-3.5 py-3 rounded-xl text-royal-900 focus:outline-none focus:border-amber-600 font-medium placeholder-royal-400"
              />
              {/* Preview */}
              {formData.image && (
                <img src={formData.image} alt="preview" onError={e => e.target.style.display='none'}
                  className="mt-2 w-full h-24 object-cover rounded-xl border border-ivory-200"
                />
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block font-bold text-royal-700 uppercase tracking-wider mb-1.5">Description *</label>
              <textarea
                name="description" required rows="3" value={formData.description} onChange={onInputChange}
                placeholder="Describe the spiritual purpose and authentic quality of this Mala..."
                className="w-full bg-ivory-50 border border-amber-500/30 text-xs px-3.5 py-3 rounded-xl text-royal-900 focus:outline-none focus:border-amber-600 resize-none font-medium placeholder-royal-400"
              />
            </div>

            {/* Features */}
            <div>
              <label className="block font-bold text-royal-700 uppercase tracking-wider mb-1.5">
                Features <span className="normal-case font-normal text-royal-400">(comma separated)</span>
              </label>
              <input
                type="text" name="features" value={formData.features} onChange={onInputChange}
                placeholder="100% Authentic, Pooja Energized, Free Shipping, Certificate Included"
                className="w-full bg-ivory-50 border border-amber-500/30 text-xs px-3.5 py-3 rounded-xl text-royal-900 focus:outline-none focus:border-amber-600 font-medium placeholder-royal-400"
              />
            </div>
          </form>
        </div>

        {/* Sticky Footer Buttons */}
        <div className="flex gap-3 px-5 py-4 border-t border-ivory-200 bg-white flex-shrink-0">
          <button form="product-form" type="submit" className="gold-btn-primary flex-1 !rounded-xl !py-3 text-xs shadow-warm-md">
            {editingProduct ? '💾 Save Changes' : '🚀 Publish to Store'}
          </button>
          <button type="button" onClick={onClose} className="gold-btn-outline w-20 sm:w-28 !py-3 text-xs justify-center">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Admin Dashboard ─── */
function Admin({ products, onAddProduct, onEditProduct, onDeleteProduct, orders = [] }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('products')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const [formData, setFormData] = useState({
    name: '', category: 'Classic', price: '', originalPrice: '',
    image: '', description: '', rating: 5.0, features: ''
  })

  if (!isAuthenticated) return <AdminLogin onLogin={() => setIsAuthenticated(true)} />

  const totalRevenue = orders.reduce((s, o) => s + (o.amount || 0), 0)

  const resetForm = () => {
    setFormData({ name: '', category: 'Classic', price: '', originalPrice: '', image: '', description: '', rating: 5.0, features: '' })
    setEditingProduct(null)
  }

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleOpenAdd = () => { resetForm(); setIsAddModalOpen(true) }

  const handleOpenEdit = (product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name, category: product.category || 'Classic',
      price: product.price, originalPrice: product.originalPrice,
      image: product.image, description: product.description,
      rating: product.rating || 5.0,
      features: Array.isArray(product.features) ? product.features.join(', ') : (product.features || '')
    })
    setIsAddModalOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const productPayload = {
      name: formData.name, category: formData.category,
      price: Number(formData.price),
      originalPrice: Number(formData.originalPrice || Number(formData.price) * 1.4),
      image: formData.image || 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800',
      description: formData.description,
      rating: Number(formData.rating),
      reviews: editingProduct ? editingProduct.reviews : Math.floor(100 + Math.random() * 200),
      features: formData.features.split(',').map(f => f.trim()).filter(Boolean)
    }
    if (editingProduct) {
      onEditProduct({ ...editingProduct, ...productPayload })
    } else {
      onAddProduct(productPayload)
    }
    setIsAddModalOpen(false)
    resetForm()
  }

  const statCards = [
    { label: 'Products', value: products.length, sub: 'Live on Store', icon: '📿', color: 'from-amber-50 to-amber-100/60', border: 'border-amber-200', text: 'text-amber-700' },
    { label: 'Orders', value: orders.length, sub: orders.length === 0 ? 'No orders yet' : 'Sales', icon: '🛒', color: 'from-emerald-50 to-emerald-100/60', border: 'border-emerald-200', text: 'text-emerald-700' },
    { label: 'Revenue', value: `₹${totalRevenue.toLocaleString()}`, sub: 'Razorpay', icon: '💰', color: 'from-blue-50 to-blue-100/60', border: 'border-blue-200', text: 'text-blue-700' },
    { label: 'Hotline', value: '87390…', sub: '8739002047', icon: '📞', color: 'from-rose-50 to-rose-100/60', border: 'border-rose-200', text: 'text-rose-700' }
  ]

  return (
    <main className="bg-ivory-50 text-royal-900 min-h-screen py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 space-y-5 sm:space-y-6">

        {/* Page Header */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 border-b border-amber-500/20 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 bg-saffron-500/10 border border-saffron-500/30 px-3 py-1 rounded-full text-[11px] font-bold text-saffron-700 mb-2">
              ⚙️ Store Control Center
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-royal-900">
              Admin <span className="gold-gradient-text">Dashboard</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button onClick={() => setIsAuthenticated(false)} className="gold-btn-outline !px-3 !py-2 text-xs flex-shrink-0">
              🚪 Logout
            </button>
            <button onClick={handleOpenAdd} className="gold-btn-primary !px-4 !py-2.5 text-xs shadow-warm-md flex-1 sm:flex-none justify-center">
              + Add Product 📿
            </button>
          </div>
        </div>

        {/* Stat Cards — 2 cols on mobile, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {statCards.map((card, i) => (
            <div key={i} className={`animate-fade-in-up delay-${(i + 1) * 100} premium-card p-4 sm:p-5 space-y-2 sm:space-y-3 bg-gradient-to-br ${card.color} border ${card.border}`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold text-royal-600 uppercase tracking-wider leading-tight">{card.label}</span>
                <span className="text-xl sm:text-2xl">{card.icon}</span>
              </div>
              <p className={`font-serif text-lg sm:text-2xl font-extrabold ${card.text} leading-none`}>{card.value}</p>
              <p className="text-[10px] sm:text-xs text-royal-500 font-medium">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Tab Controls */}
        <div className="flex gap-1 bg-ivory-100 p-1 rounded-xl border border-ivory-200 w-full sm:w-fit overflow-x-auto">
          {['products', 'orders'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 sm:flex-none px-4 sm:px-5 py-2 text-[11px] sm:text-xs font-bold rounded-lg uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-white text-saffron-700 shadow-warm-sm border border-amber-500/20'
                  : 'text-royal-500 hover:text-royal-900'
              }`}
            >
              {tab === 'products' ? `📦 Products (${products.length})` : `🛒 Orders (${orders.length})`}
            </button>
          ))}
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="animate-fade-in premium-card overflow-hidden border-amber-500/20">
            <div className="p-4 sm:p-5 border-b border-amber-500/15 flex justify-between items-center bg-gradient-to-r from-ivory-50 to-amber-50/30">
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-royal-900">Product Catalog</h3>
                <p className="text-[10px] sm:text-xs text-royal-500 mt-0.5 hidden sm:block">Changes reflect live across all pages</p>
              </div>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-200">
                {products.length} items
              </span>
            </div>

            {/* Mobile Cards view */}
            <div className="block sm:hidden divide-y divide-amber-500/10">
              {products.map(p => (
                <div key={p.id} className="p-4 flex items-start gap-3">
                  <img src={p.image} alt={p.name} className="w-14 h-14 object-cover rounded-xl border border-amber-500/20 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-bold text-royal-900 text-sm line-clamp-1">{p.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-saffron-700 font-extrabold text-sm font-serif">₹{p.price}</span>
                      <span className="text-royal-400 line-through text-[10px]">₹{p.originalPrice}</span>
                      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">{p.category || 'Classic'}</span>
                    </div>
                    <p className="text-royal-500 text-[10px] mt-0.5">⭐ {p.rating}</p>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => handleOpenEdit(p)}
                      className="bg-amber-100 text-amber-800 hover:bg-amber-500 hover:text-white px-3 py-1.5 rounded-lg font-bold transition text-[10px] border border-amber-200"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => { if (window.confirm(`Delete "${p.name}"?`)) onDeleteProduct(p.id) }}
                      className="bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white px-3 py-1.5 rounded-lg font-bold transition text-[10px] border border-rose-200"
                    >
                      🗑️ Del
                    </button>
                  </div>
                </div>
              ))}
              {products.length === 0 && (
                <div className="text-center py-12 text-royal-400">
                  <span className="text-4xl block mb-2">📦</span>
                  <p className="text-sm font-semibold">No products yet. Add your first product!</p>
                </div>
              )}
            </div>

            {/* Desktop Table view */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-ivory-100/80 border-b border-amber-500/20 text-royal-600 font-bold uppercase tracking-wider text-[11px]">
                    <th className="p-4">Product Info</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">MRP</th>
                    <th className="p-4">Rating</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-500/10">
                  {products.map(p => (
                    <tr key={p.id} className="hover:bg-amber-50/40 transition group">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={p.image} alt={p.name} className="w-11 h-11 object-cover rounded-xl border border-amber-500/20 flex-shrink-0" />
                          <div>
                            <p className="font-serif font-bold text-royal-900 text-sm group-hover:text-saffron-800 transition">{p.name}</p>
                            <p className="text-[10px] text-royal-400 line-clamp-1 mt-0.5">{p.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-bold text-[10px] border border-amber-200">
                          {p.category || 'Classic'}
                        </span>
                      </td>
                      <td className="p-4 font-serif font-extrabold text-saffron-700 text-sm">₹{p.price}</td>
                      <td className="p-4 text-royal-400 line-through text-xs">₹{p.originalPrice}</td>
                      <td className="p-4 font-bold text-amber-700">⭐ {p.rating}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => handleOpenEdit(p)}
                            className="bg-amber-100 text-amber-800 hover:bg-amber-500 hover:text-white px-3 py-1.5 rounded-lg font-bold transition text-[11px] border border-amber-200"
                          >✏️ Edit</button>
                          <button onClick={() => { if (window.confirm(`Delete "${p.name}"?`)) onDeleteProduct(p.id) }}
                            className="bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white px-3 py-1.5 rounded-lg font-bold transition text-[11px] border border-rose-200"
                          >🗑️ Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr>
                      <td colSpan="6" className="text-center py-16 text-royal-400">
                        <span className="text-4xl block mb-3">📦</span>
                        <p className="font-semibold text-sm">No products yet. Add your first product!</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="animate-fade-in premium-card p-4 sm:p-6 border-amber-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-royal-900">Customer Orders</h3>
              {orders.length > 0 && (
                <span className="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-200">
                  {orders.length} order{orders.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
            {orders.length === 0 ? (
              <div className="text-center py-10 sm:py-14 space-y-3">
                <span className="text-4xl block">🛒</span>
                <p className="text-sm font-semibold text-royal-600">No orders received yet.</p>
                <p className="text-xs text-royal-400">Orders from Razorpay payments will appear here.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {orders.map((o, idx) => (
                  <div key={idx} className="p-3 sm:p-4 rounded-xl bg-ivory-50 border border-amber-500/20 flex justify-between items-start sm:items-center gap-3 hover:border-amber-400 transition">
                    <div className="space-y-1 min-w-0">
                      <p className="font-bold text-saffron-700 font-mono text-[11px] sm:text-xs truncate">{o.orderId} • {o.paymentMethod}</p>
                      <p className="text-royal-900 font-medium text-xs">{o.customer?.name} ({o.customer?.phone})</p>
                      <p className="text-royal-400 text-[10px]">{o.date}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-serif font-extrabold text-sm sm:text-base text-amber-800">₹{o.amount}</p>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">✓ Paid</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {isAddModalOpen && (
        <ProductModal
          editingProduct={editingProduct}
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          onClose={() => { setIsAddModalOpen(false); resetForm() }}
        />
      )}
    </main>
  )
}

export default Admin
