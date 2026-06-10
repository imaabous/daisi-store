export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white px-10 py-10 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-3">DAISI STORE</h3>
          <p className="text-gray-400 text-sm">
            Premium FiveM Graphic Mod Packs for your server. Made with passion for the Malaysian FiveM community.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="/" className="hover:text-cyan-400">Home</a>
            <a href="/products" className="hover:text-cyan-400">Products</a>
            <a href="/about" className="hover:text-cyan-400">About</a>
            <a href="/contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="https://discord.gg/DJcN9XJf" target="_blank" className="hover:text-cyan-400">Discord Server</a>
            <a href="/contact" className="hover:text-cyan-400">Open Ticket</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm mt-10 border-t border-gray-800 pt-6">
        2024 Daisi Store. All rights reserved.
      </div>
    </footer>
  );
}