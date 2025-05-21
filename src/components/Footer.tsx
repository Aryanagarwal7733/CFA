export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 text-gray-600 dark:text-gray-400 py-12 border-t dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Kalpi Capital</h4>
          <p className="text-sm">
            India's first systematic quant investing platform built for professionals & individuals.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-gray-800 dark:text-white mb-2">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-kalpiGreen">About</a></li>
            <li><a href="#solutions" className="hover:text-kalpiGreen">Solutions</a></li>
            <li><a href="#contact" className="hover:text-kalpiGreen">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-gray-800 dark:text-white mb-2">Legal</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-kalpiGreen">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-kalpiGreen">Terms of Use</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium text-gray-800 dark:text-white mb-2">Stay Updated</h5>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-sm"
          />
          <button className="mt-2 w-full px-3 py-2 bg-kalpiGreen text-white rounded-lg text-sm hover:bg-kalpiDarkGreen transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Kalpi Capital. All rights reserved.
      </div>
    </footer>
  )
}
