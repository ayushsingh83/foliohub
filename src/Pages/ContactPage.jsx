
import { useState } from "react"
import 'remixicon/fonts/remixicon.css'

const contactInfo = [
  { icon: "ri-mail-fill", color: "text-cyan-400 bg-cyan-400/10", label: "Email us", value: "hello@foliohub.com" },
  { icon: "ri-map-pin-fill", color: "text-violet-400 bg-violet-400/10", label: "Location", value: "Gorakhpur, India" },
  { icon: "ri-time-fill", color: "text-orange-400 bg-orange-400/10", label: "Response time", value: "Within 24 hours" },
]

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex flex-col items-center px-6 pt-20 pb-16 text-white">

      <div className="text-center max-w-2xl mb-16">
        <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Contact us</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
          Let's <span className="text-cyan-400">talk</span>
        </h1>
        <p className="text-gray-400 text-lg mt-4 leading-relaxed">
          Have a question or want to work with us? We'd love to hear from you.
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col gap-6">
          {contactInfo.map((c) => (
            <div key={c.label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-500/40 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.color}`}>
                <i className={`${c.icon} text-2xl`}></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">{c.label}</p>
                <p className="text-white font-semibold">{c.value}</p>
              </div>
            </div>
          ))}

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-4">Follow us</p>
            <div className="flex gap-4">
              {["ri-twitter-x-fill", "ri-linkedin-fill", "ri-github-fill", "ri-instagram-fill"].map((icon) => (
                <div key={icon} className="w-10 h-10 rounded-xl bg-white/10 hover:bg-cyan-500/20 hover:text-cyan-400 flex items-center justify-center cursor-pointer transition-all duration-300">
                  <i className={`${icon} text-lg`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-10">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <i className="ri-check-line text-3xl text-cyan-400"></i>
              </div>
              <h3 className="text-2xl font-bold">Message sent!</h3>
              <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 border border-white/20 hover:border-cyan-500/50 text-white px-6 py-2 rounded-xl transition-all"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-2">Send a message</h3>

              <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-sm">Your name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-600 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@email.com"
                  className="bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-600 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-sm">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's it about?"
                  className="bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-600 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-gray-400 text-sm">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us more..."
                  className="bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-600 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-all hover:scale-[1.02] mt-2"
              >
                Send message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}


export default ContactPage