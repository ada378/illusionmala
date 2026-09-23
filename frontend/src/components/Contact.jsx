import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Namaste! I am contacting Illusion Mala:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    window.open(`https://wa.me/918739002047?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const faqs = [
    {
      q: 'How do I verify if my Gudiya Anda Mala is 100% authentic?',
      a: 'Every Mala dispatched from Illusion Mala comes with an authentic verification card and is pre-energized through authentic Vedic rituals.'
    },
    {
      q: 'How long does delivery take across India?',
      a: 'We offer Pan-India Free Express Shipping. Standard delivery takes 3 to 5 business days.'
    },
    {
      q: 'Can I consult someone before choosing a Mala?',
      a: 'Yes! You can call our spiritual hotline directly at 8739002047 or chat with us on WhatsApp for personal guidance.'
    },
    {
      q: 'How do I care for and cleanse my Mala?',
      a: 'Store your Mala in a dry, clean place or velvet pouch when not in use. You may cleanse it monthly with sandalwood paste or incense smoke.'
    }
  ]

  return (
    <main className="bg-ivory-50 text-royal-900 min-h-screen py-8">
      {/* Header Banner */}
      <section className="relative py-12 bg-gradient-to-b from-amber-500/10 to-ivory-50 border-b border-ivory-200 mb-8">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
          <span className="text-saffron-700 text-xs font-bold tracking-widest uppercase">Direct Assistance & Support</span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-royal-950">
            Contact <span className="text-saffron-700">Illusion Mala</span>
          </h1>
          <p className="text-royal-600 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-normal">
            Have questions about ordering, astrological suitability, or customization? Speak with our team directly.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 lg:p-10 rounded-3xl border border-ivory-200 shadow-warm-lg">
            <div className="space-y-1 mb-6">
              <span className="text-saffron-700 text-xs font-bold uppercase tracking-wider">Fast Inquiry</span>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-royal-950">Send Us a Direct Message</h2>
              <p className="text-royal-600 text-xs">Fill out the details below to initiate instant WhatsApp assistance.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-royal-700 uppercase tracking-wider mb-1.5">Your Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full bg-ivory-50 border border-ivory-300 text-royal-900 placeholder-royal-400 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-saffron-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-royal-700 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-ivory-50 border border-ivory-300 text-royal-900 placeholder-royal-400 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-saffron-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-royal-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 8739002047"
                  className="w-full bg-ivory-50 border border-ivory-300 text-royal-900 placeholder-royal-400 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-saffron-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-royal-700 uppercase tracking-wider mb-1.5">Your Query or Requirement</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us which Mala you are interested in or ask your question..."
                  className="w-full bg-ivory-50 border border-ivory-300 text-royal-900 placeholder-royal-400 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-saffron-500 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="gold-btn-primary w-full !rounded-xl !py-3.5 text-xs"
              >
                <span>💬 Send Message via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right Contact Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-ivory-200 shadow-warm-md space-y-5">
              <h3 className="font-serif text-xl font-bold text-royal-950 border-b border-ivory-200 pb-3">
                Get In Touch Directly
              </h3>

              <div className="space-y-4 text-xs">
                <a 
                  href="tel:8739002047" 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-ivory-50 border border-ivory-200 hover:border-saffron-400 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-saffron-100 text-saffron-800 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition">
                    📞
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-royal-950">Store Hotline</h4>
                    <p className="text-saffron-800 font-extrabold text-xl font-serif">8739002047</p>
                    <p className="text-royal-500 text-xs">Click to call immediately</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/918739002047" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition">
                    💬
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-royal-950">WhatsApp Live Chat</h4>
                    <p className="text-emerald-700 font-extrabold text-sm">Chat on +91 8739002047</p>
                    <p className="text-royal-500 text-xs">Quick responses from our team</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-ivory-50 border border-ivory-200">
                  <div className="w-10 h-10 rounded-xl bg-ivory-200 text-royal-800 flex items-center justify-center text-lg">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-royal-950">Store Working Hours</h4>
                    <p className="text-royal-600 text-xs">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion Box */}
            <div className="bg-white p-6 rounded-3xl border border-ivory-200 shadow-warm-md space-y-4">
              <h4 className="font-serif text-lg font-bold text-royal-950">Frequently Asked Questions</h4>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-ivory-200 rounded-xl overflow-hidden bg-ivory-50">
                    <button 
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full p-3 text-left text-xs font-bold text-royal-900 flex justify-between items-center gap-2 hover:text-saffron-800 transition"
                    >
                      <span>{faq.q}</span>
                      <span className="text-saffron-800 font-bold">{openFaqIndex === index ? '−' : '+'}</span>
                    </button>
                    {openFaqIndex === index && (
                      <div className="p-3 pt-0 text-xs text-royal-600 leading-relaxed border-t border-ivory-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact


