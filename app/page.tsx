import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-cyan-400">DAISI STORE</h1>
          <div className="flex gap-8 text-sm text-gray-300">
            <a href="/products" className="hover:text-white">Products</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex gap-3">
            <a href="/login" className="border border-cyan-400 text-cyan-400 px-4 py-2 text-sm hover:bg-cyan-400 hover:text-black transition">Login</a>
            <a href="/signup" className="bg-cyan-400 text-black px-4 py-2 text-sm font-bold hover:bg-cyan-300 transition">Sign Up</a>
          </div>
        </nav>

        <section className="flex flex-col items-start justify-center px-20 py-32 max-w-2xl">
          <h2 className="text-6xl font-extrabold leading-tight mb-6">
            FiveM Graphic<br />
            <span className="text-cyan-400">Mod Pack Store.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Premium graphic mod packs for FiveM. Enhance your server visuals with high quality reshade & texture packs.
          </p>
          <a href="/products" className="bg-cyan-400 text-black font-bold px-8 py-3 hover:bg-cyan-300 transition">
            BROWSE PRODUCTS
          </a>
        </section>

        <section className="px-20 py-16">
          <h3 className="text-3xl font-bold mb-10">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "CalliVibe", price: "RM 80.00", desc: "Ultra realistic reshade for FiveM" },
              { name: "SummerTime", price: "RM 50.00", desc: "Cinematic color grading mod pack" },
              { name: "Filmic TopBoy", price: "RM 18.00", desc: "Enhanced night visuals for roleplay" },
            ].map((product, i) => (
              <div key={i} className="border border-gray-800 bg-gray-900 p-6 hover:border-cyan-400 transition">
                <div className="bg-gray-800 h-40 mb-4 flex items-center justify-center text-gray-600">
                  [ Preview Image ]
                </div>
                <h4 className="text-lg font-bold mb-1">{product.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-bold">{product.price}</span>
                  <button className="bg-cyan-400 text-black text-sm font-bold px-4 py-2 hover:bg-cyan-300 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}