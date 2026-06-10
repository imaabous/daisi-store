import Footer from "../components/Footer";

export default function SignupPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="border border-gray-800 bg-gray-900 p-10 w-full max-w-md">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Create Account</h1>
          <p className="text-gray-400 text-sm mb-8">Join Daisi Store today</p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Username</label>
              <input
                type="text"
                placeholder="yourusername"
                className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
            <button className="bg-cyan-400 text-black font-bold py-3 hover:bg-cyan-300 transition mt-2">
              CREATE ACCOUNT
            </button>
            <p className="text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-cyan-400 hover:underline">Login</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}