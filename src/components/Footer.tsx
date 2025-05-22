export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img src="/logo.svg" className="h-8 mb-4" />
          <p>Quant-based investing for a smarter future.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#solutions" className="hover:underline">Solutions</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
