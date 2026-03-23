import { useState, useEffect } from "react"
import { githubFetch } from "../Utils/GitHubFetch"

const BrowsePage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState("")
  const [searched, setSearched] = useState(false)

  const searchUsers = async (q) => {
    setLoading(true)
    setError(null)
    setSearched(true)
    try {
      const data = await githubFetch(
        `https://api.github.com/search/users?q=${q}&per_page=12`
      )
      const detailedProfiles = await Promise.all(
        data.items.map(user =>
          githubFetch(`https://api.github.com/users/${user.login}`)
        )
      )
      setUsers(detailedProfiles)
    } catch (err) {
      setError("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!query.trim()) {
      setUsers([])
      setSearched(false)
      return
    }
    const timer = setTimeout(() => searchUsers(query), 500)
    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="px-12 py-16 text-white">

      <div className="text-center mb-12">
        <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
          Discover talent
        </span>
        <h1 className="text-5xl font-bold mt-3">
          Browse <span className="text-cyan-400">Freelancers</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Search any GitHub username to find talented developers
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search GitHub username..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none rounded-xl px-5 py-3 text-white placeholder-gray-600 transition-all pr-12"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            {loading
              ? <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              : <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            }
          </div>
        </div>
      </div>

      {error && (
        <p className="text-center text-red-400 mb-6">{error}</p>
      )}

      {!searched && !loading && (
        <div className="flex flex-col items-center justify-center mt-20 gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <circle cx="10" cy="10" r="7" stroke="#22d3ee" strokeWidth="1.5" />
              <path d="M15.5 15.5L20 20" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-gray-400 text-lg">Type a name to search GitHub users</p>
          <p className="text-gray-600 text-sm">Try "torvalds", "gaearon", "wesbos"</p>
        </div>
      )}

      {searched && !loading && users.length === 0 && !error && (
        <div className="flex flex-col items-center justify-center mt-20 gap-4">
          <p className="text-gray-400 text-lg">No users found for "{query}"</p>
          <p className="text-gray-600 text-sm">Try a different username</p>
        </div>
      )}

      {users.length > 0 && (
        <p className="text-gray-400 text-sm mb-6 text-center">
          Showing {users.length} results for "{query}"
        </p>
      )}

      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <div
              key={user.id}
              className="bg-white/5 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
            >
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

              <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2 min-h-[40px]">
                {user.bio || "No bio available"}
              </p>

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

              {user.location && (
                <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                  <span className="text-cyan-400">📍</span> {user.location}
                </p>
              )}

              {user.company && (
                <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">🏢</span> {user.company}
                </p>
              )}

              
             <a   href={user.html_url}
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

    </div>
  )
}

export default BrowsePage