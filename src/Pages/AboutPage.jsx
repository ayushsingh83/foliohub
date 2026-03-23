
import 'remixicon/fonts/remixicon.css'
import { NavLink } from 'react-router'
const teamMembers = [
  { initials: "AS", name: "Ayush Singh", role: "Full Stack Developer", color: "bg-cyan-500/20 text-cyan-400" },
]

const values = [
  { icon: "ri-shield-check-fill", color: "text-cyan-400 bg-cyan-400/10", title: "Trust & transparency", desc: "Every profile is verified. No fake accounts, no hidden fees." },
  { icon: "ri-rocket-fill", color: "text-violet-400 bg-violet-400/10", title: "Built for growth", desc: "We help freelancers get discovered and grow their career." },
  { icon: "ri-community-fill", color: "text-orange-400 bg-orange-400/10", title: "Community first", desc: "A platform built around people, not algorithms." },
]

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center px-6 pt-20 pb-16 text-white">

      <div className="text-center max-w-3xl mb-20">
        <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">About us</span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight">
          We connect <span className="text-cyan-400">talent</span> <br /> with opportunity
        </h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          FolioHub was built to give freelancers a beautiful, simple way to showcase their work — and help clients find the right person fast.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full max-w-2xl mb-20">
        {[
          { num: "2.4k+", label: "Freelancers" },
          { num: "180+", label: "Skills covered" },
          { num: "98%", label: "Satisfaction rate" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl py-8">
            <p className="text-4xl font-bold text-cyan-400">{s.num}</p>
            <p className="text-gray-400 text-sm mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-4xl mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          What we <span className="text-cyan-400">stand for</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                <i className={`${v.icon} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Meet the <span className="text-cyan-400">team</span>
        </h2>
        <div className="flex justify-center">
          {teamMembers.map((m) => (
            <div key={m.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-cyan-500/40 transition-all duration-300">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 ${m.color}`}>
                {m.initials}
              </div>
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-400 mb-8">Join thousands of freelancers already showcasing their work on FolioHub.</p>
        <div className="flex gap-4 justify-center">
          <NavLink to="/auth">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3 rounded-xl transition-all hover:scale-105">
              Join free
            </button>
          </NavLink>
          <NavLink to="/browse">
            <button className="border border-white/20 hover:border-white/50 text-white px-8 py-3 rounded-xl transition-all hover:scale-105">
              Browse freelancers
            </button>
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default AboutPage