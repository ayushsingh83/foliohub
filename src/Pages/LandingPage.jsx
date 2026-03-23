import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import "./LandingPage.css"
import FeatureCard from "./FeatureCard"
import 'remixicon/fonts/remixicon.css'
import ShinyText from "../component/ShinyText"
import { NavLink } from "react-router"
import { githubFetch } from "../Utils/GitHubFetch"

const FEATURED_USERNAMES = [
    "torvalds", "gaearon", "sindresorhus",
    "wesbos", "kentcdodds", "cassidoo"
]

const LandingPage = () => {
    const [freelancers, setFreelancers] = useState([])
    const [loadingCards, setLoadingCards] = useState(true)

    useEffect(() => {
        const fetchFreelancers = async () => {
            try {
                const profiles = await Promise.all(
                    FEATURED_USERNAMES.map(username =>
                        githubFetch(`https://api.github.com/users/${username}`)
                    )
                )
                setFreelancers(profiles)
                console.log("Token:", import.meta.env.VITE_GITHUB_TOKEN)
            } catch (err) {
                console.error(err)
            } finally {
                setLoadingCards(false)
            }
        }
        fetchFreelancers()
    }, [])

    return (
        <div className="container-box" style={{
            background: `
        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6, 182, 212, 0.4), transparent 70%),
        radial-gradient(ellipse 40% 30% at 80% 80%, rgba(6, 182, 212, 0.08), transparent 60%),
        #000000
      `
        }}>

            {/* Navbar */}
            <div className="navigation-bar">
                <NavBar />
            </div>

            {/* Hero */}
            <div className="flex flex-col items-center text-center px-6 pt-20 pb-10">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    Find <span className="text-cyan-400">World Class</span> <br />
                    Freelance Talent
                </h1>

                <div className="text-gray-300 text-[20px] mt-6 flex flex-col items-center font-bold">
                    <ShinyText
                        text="Discover designers, developers, and writers with verified portfolios"
                        speed={2} delay={0} color="#b5b5b5" shineColor="#ffffff"
                        spread={120} direction="left" yoyo={false} pauseOnHover={false} disabled={false}
                    />
                    <ShinyText
                        text="— all in one place."
                        speed={2} delay={0} color="#b5b5b5" shineColor="#ffffff"
                        spread={120} direction="left" yoyo={false} pauseOnHover={false} disabled={false}
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-6 mt-10">
                    <NavLink to="/browse">
                        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-[18px] px-8 py-3 rounded-xl transition-all hover:scale-[1.04]">
                            Browse Freelancers
                        </button>
                    </NavLink>
                    <NavLink to="/auth">
                        <button className="border border-white/20 hover:border-white/50 text-white font-bold text-[18px] px-8 py-3 rounded-xl backdrop-blur-sm transition-all hover:scale-[1.06]">
                            Create Portfolio
                        </button>
                    </NavLink>
                </div>

                {/* Stats */}
                <div className="flex gap-12 justify-center mt-14 border-t border-white/10 pt-10 w-full max-w-md">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-400">2.4k+</p>
                        <p className="text-gray-300 text-sm mt-1">Freelancers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-400">180+</p>
                        <p className="text-gray-300 text-sm mt-1">Skills</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-cyan-400">98%</p>
                        <p className="text-gray-300 text-sm mt-1">Satisfaction</p>
                    </div>
                </div>
            </div>

            {/* Why FolioHub */}
            <div className="text-white flex flex-col gap-10 mt-10 mx-12 rounded-2xl bg-[#36454F]/50 mb-5 p-8">
                <div className="text-[25px] font-bold">
                    Why <span className="text-cyan-400">Folio</span>
                    <span className="text-white">Hub</span>
                </div>
                <div className="flex justify-between gap-6">
                    <FeatureCard
                        icon={<i className="ri-layout-grid-fill text-[30px] p-2 rounded-[6px] text-green-600/80 bg-green-100"></i>}
                        heading="Rich portfolios"
                        desc="Showcase projects with images, tags, and live links"
                    />
                    <FeatureCard
                        icon={<i className="ri-user-fill text-[30px] p-2 rounded-[6px] text-violet-600/80 bg-violet-100"></i>}
                        heading="Verified profiles"
                        desc="Every freelancer is real, with client testimonials"
                    />
                    <FeatureCard
                        icon={<i className="ri-star-fill text-[30px] p-2 rounded-[6px] text-orange-600/80 bg-orange-100"></i>}
                        heading="Skill tagging"
                        desc="Filter by exact skills, stack, or category instantly"
                    />
                </div>
            </div>

            {/* Featured Freelancers */}
            <div className="px-12 py-16 text-white">
                <div className="text-center mb-10">
                    <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                        Top talent
                    </span>
                    <h2 className="text-4xl font-bold mt-3">
                        Featured <span className="text-cyan-400">Freelancers</span>
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Top developers from around the world
                    </p>
                </div>

                {/* Skeleton loader */}
                {loadingCards ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-pulse">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-white/10" />
                                    <div className="flex flex-col gap-2">
                                        <div className="w-28 h-4 bg-white/10 rounded" />
                                        <div className="w-20 h-3 bg-white/10 rounded" />
                                    </div>
                                </div>
                                <div className="w-full h-3 bg-white/10 rounded mb-2" />
                                <div className="w-3/4 h-3 bg-white/10 rounded mb-4" />
                                <div className="flex gap-4 mb-4">
                                    <div className="flex-1 h-10 bg-white/10 rounded-xl" />
                                    <div className="flex-1 h-10 bg-white/10 rounded-xl" />
                                    <div className="flex-1 h-10 bg-white/10 rounded-xl" />
                                </div>
                                <div className="w-full h-9 bg-white/10 rounded-xl" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {freelancers.map(user => (
                            <div
                                key={user.id}
                                className="bg-white/5 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                            >
                                {/* Avatar + name */}
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={user.avatar_url}
                                        alt={user.login}
                                        className="w-16 h-16 rounded-full border-2 border-cyan-500/30"
                                    />
                                    <div>
                                        <h3 className="text-white font-bold text-lg">
                                            {user.name || user.login}
                                        </h3>
                                        <p className="text-cyan-400 text-sm">@{user.login}</p>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2 min-h-[40px]">
                                    {user.bio || "No bio available"}
                                </p>

                                {/* Stats */}
                                <div className="flex gap-4 mb-4 bg-white/5 rounded-xl p-3">
                                    <div className="text-center flex-1">
                                        <p className="text-white font-bold">{user.public_repos}</p>
                                        <p className="text-gray-500 text-xs">Repos</p>
                                    </div>
                                    <div className="text-center flex-1 border-x border-white/10">
                                        <p className="text-white font-bold">{user.followers}</p>
                                        <p className="text-gray-500 text-xs">Followers</p>
                                    </div>
                                    <div className="text-center flex-1">
                                        <p className="text-white font-bold">{user.following}</p>
                                        <p className="text-gray-500 text-xs">Following</p>
                                    </div>
                                </div>

                                {/* Location */}
                                {user.location && (
                                    <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                                        <span className="text-cyan-400">📍</span> {user.location}
                                    </p>
                                )}

                                {/* Company */}
                                {user.company && (
                                    <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                                        <span className="text-cyan-400">🏢</span> {user.company}
                                    </p>
                                )}

                                {/* Button */}

                                <a href={user.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-center bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 hover:text-black font-semibold py-2 rounded-xl transition-all duration-300 mt-2"
                                >
                                    View GitHub Profile
                                </a>
                            </div>
                        ))}
                    </div>
                )}

                {/* See all button */}
                <div className="text-center mt-10">
                    <NavLink to="/browse">
                        <button className="border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-10 py-3 rounded-xl transition-all duration-300">
                            See all freelancers →
                        </button>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default LandingPage