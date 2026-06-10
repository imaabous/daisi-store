import Footer from "../components/Footer"; 

export default function ContactPage() {
  return (
    <>
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800">
        <a href="/" className="text-2xl font-bold text-cyan-400">DAISI STORE</a>
        <div className="flex gap-8 text-sm text-gray-300">
          <a href="/products" className="hover:text-white">Products</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>
        <div className="flex gap-3">
          <a href="/login" className="border border-cyan-400 text-cyan-400 px-4 py-2 text-sm hover:bg-cyan-400 hover:text-black transition">Login</a>
          <a href="/signup" className="bg-cyan-400 text-black px-4 py-2 text-sm font-bold hover:bg-cyan-300 transition">Sign Up</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center px-20 py-32 text-center">
        <h2 className="text-5xl font-extrabold mb-4">
          Need <span className="text-cyan-400">Help?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-4 max-w-lg">
          Have questions about our mod packs, payments, or need support? Join our Discord and open a ticket - we will get back to you ASAP!
        </p>

        <div className="border border-gray-800 bg-gray-900 p-10 w-full max-w-md mt-6">
          <div className="text-6xl mb-6">🎮</div>
          <h3 className="text-2xl font-bold mb-2">Join Our Discord</h3>
          <p className="text-gray-400 text-sm mb-8">
            Click the button below to join our Discord server and open a support ticket. Our team is ready to help you!
          </p>
          <a href="https://discord.gg/DJcN9XJf" target="_blank" className="block bg-indigo-500 text-white font-bold py-4 text-center hover:bg-indigo-400 transition text-lg">
            OPEN TICKET ON DISCORD
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-3xl">
          <div className="border border-gray-800 bg-gray-900 p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold mb-1">Fast Response</h4>
            <p className="text-gray-400 text-sm">We reply within 24 hours</p>
          </div>
          <div className="border border-gray-800 bg-gray-900 p-6 text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="font-bold mb-1">Trusted Support</h4>
            <p className="text-gray-400 text-sm">Dedicated support team</p>
          </div>
          <div className="border border-gray-800 bg-gray-900 p-6 text-center">
            <div className="text-3xl mb-3">💬</div>
            <h4 className="font-bold mb-1">Community</h4>
            <p className="text-gray-400 text-sm">Join our growing community</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}