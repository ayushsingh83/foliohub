import { NavLink } from "react-router"

const navLinkClass = "hover:scale-110 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 ease-in-out"

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-5 w-full">

      <span className="text-xl font-bold">
        <span className="text-cyan-400">Folio</span>
        <span className="text-white">Hub</span>
      </span>

      <div className="flex gap-10 text-[20px] font-semibold text-gray-300">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/browse" className={navLinkClass}>Browse</NavLink>
        <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
      </div>

      <NavLink
        to="/auth"
        className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold px-5 py-2 rounded-lg transition-all duration-300"
      >
        Login
      </NavLink>

    </nav>
  )
}

export default NavBar