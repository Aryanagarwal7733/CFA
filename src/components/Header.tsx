import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-md border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/kalpilogo.jpeg" alt="Kalpi Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Kalpi Capital</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="#about" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#solutions" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
            Solutions
          </Link>
          <Link href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
            Contact
          </Link>

          {/* Launch App CTA */}
          <Link
            href="/launch"
            className="bg-primary text-white px-4 py-2 rounded-lg shadow-sm hover:bg-cyan-600 transition-all duration-200"
          >
            Launch App
          </Link>

          {/* Theme Toggle Button */}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
