import { useState } from "react";

export default function AuthPage() {

  const [page, setPage] = useState("login");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (page === "login") {
      alert("Logged in with: " + form.email);
    } else {
      alert("Signed up as: " + form.name);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{
  background: `
    radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6, 182, 212, 0.4), transparent 70%),
    radial-gradient(ellipse 40% 30% at 80% 80%, rgba(6, 182, 212, 0.08), transparent 60%),
    #000000
  `}}>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-[320px] flex flex-col gap-4">
        <h1 className="text-white text-2xl font-bold text-center">
          {page === "login" ? "Sign In" : "Sign Up"}
        </h1>

        {page === "signup" && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none w-full"
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none w-full"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none w-full"
        />

        <button
          onClick={handleSubmit}
          className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 rounded-xl w-full"
        >
          {page === "login" ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white/40 text-sm text-center">
          {page === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setPage("signup")}
                className="text-white underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setPage("login")}
                className="text-white underline"
              >
                Sign in
              </button>
            </>
          )}
        </p>

      </div>
    </div>
  );
}
