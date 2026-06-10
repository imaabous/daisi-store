import Footer from "../components/Footer"; 

export default function AboutPage() {
  return (
    <>
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800">
        <a href="/" className="text-2xl font-bold text-cyan-400">DAISI STORE</a>
        <div className="flex gap-8 text-sm text-gray-300">
          <a href="/products" className="hover:text-white">Products</a>
          <a href="/about" className="text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
        <div className="flex gap-3">
          <a href="/login" className="border border-cyan-400 text-cyan-400 px-4 py-2 text-sm hover:bg-cyan-400 hover:text-black transition">Login</a>
          <a href="/signup" className="bg-cyan-400 text-black px-4 py-2 text-sm font-bold hover:bg-cyan-300 transition">Sign Up</a>
        </div>
      </nav>

      <section className="flex flex-col items-center px-20 py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-4">
          About <span className="text-cyan-400">Daisi Store</span>
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          We are passionate about bringing the best visual experience to FiveM servers across Malaysia and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
          <div className="border border-gray-800 bg-gray-900 p-8 text-center hover:border-cyan-400 transition">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-400 text-sm">Every mod pack is carefully crafted for maximum visual impact on your FiveM server.</p>
          </div>
          <div className="border border-gray-800 bg-gray-900 p-8 text-center hover:border-cyan-400 transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Easy Install</h3>
            <p className="text-gray-400 text-sm">Simple installation process with full guide included with every purchase.</p>
          </div>
          <div className="border border-gray-800 bg-gray-900 p-8 text-center hover:border-cyan-400 transition">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Trusted Store</h3>
            <p className="text-gray-400 text-sm">Hundreds of satisfied customers across Malaysia and Southeast Asia.</p>
          </div>
        </div>

        <div className="border border-gray-800 bg-gray-900 p-10 w-full text-left mb-10">
          <h3 className="text-3xl font-bold mb-4">Our <span className="text-cyan-400">Story</span></h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Daisi Store was founded by a group of FiveM enthusiasts who wanted to bring high quality graphic mod packs to the Malaysian FiveM community at an affordable price.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We spend countless hours testing and perfecting each mod pack to ensure the best possible visual experience for your server. Our goal is simple - make your FiveM server look amazing.
          </p>
        </div>

        <a href="/contact" className="bg-cyan-400 text-black font-bold px-10 py-4 hover:bg-cyan-300 transition text-lg">
          GET IN TOUCH
        </a>
      </section>
    </main>
    <Footer />
    </>
  );
}