import Footer from "../components/Footer";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "CalliVibe",
      price: "RM 80.00",
      desc: "Ultra realistic reshade for FiveM",
      details: "CalliVibe is a premium reshade pack designed for maximum realism. Includes warm tones, sharp shadows, and cinematic depth of field effects.",
      image: "callivibe.png",
    },
    {
      id: 2,
      name: "SummerTime",
      price: "RM 50.00",
      desc: "Cinematic color grading mod pack",
      details: "SummerTime brings vibrant summer colors to your FiveM server. Perfect for beach and outdoor roleplay scenarios.",
      image: "summertime.png",
    },
    {
      id: 3,
      name: "Filmic TopBoy",
      price: "RM 18.00",
      desc: "Enhanced night visuals for roleplay",
      details: "Filmic TopBoy enhances night scenes with deep contrast and moody color grading. Perfect for dark roleplay themes.",
      image: "topboy.png",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800">
          <a href="/" className="text-2xl font-bold text-cyan-400">DAISI STORE</a>
          <div className="flex gap-8 text-sm text-gray-300">
            <a href="/products" className="text-white">Products</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex gap-3">
            <a href="/login" className="border border-cyan-400 text-cyan-400 px-4 py-2 text-sm hover:bg-cyan-400 hover:text-black transition">Login</a>
            <a href="/signup" className="bg-cyan-400 text-black px-4 py-2 text-sm font-bold hover:bg-cyan-300 transition">Sign Up</a>
          </div>
        </nav>

        <section className="px-20 py-16">
          <h2 className="text-4xl font-bold mb-2">Our Products</h2>
          <p className="text-gray-400 mb-10">Choose your perfect FiveM graphic mod pack</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-800 bg-gray-900 p-6 hover:border-cyan-400 transition">
                <img src={`/images/${product.image}`} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <h4 className="text-lg font-bold mb-1">{product.name}</h4>
                <p className="text-gray-400 text-sm mb-2">{product.desc}</p>
                <p className="text-gray-500 text-xs mb-4">{product.details}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-bold">{product.price}</span>
                  <a href="https://discord.gg/DJcN9XJf" target="_blank" className="bg-cyan-400 text-black text-sm font-bold px-4 py-2 hover:bg-cyan-300 transition">
                    Buy Now
                  </a>
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