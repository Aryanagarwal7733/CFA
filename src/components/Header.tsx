import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/kalpilogo.jpeg" alt="Kalpi Capital Logo" width={120} height={30} />
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#about" className="hover:text-kalpiGreen">About</Link>
          <Link href="#solutions" className="hover:text-kalpiGreen">Solutions</Link>
          <Link href="#contact" className="hover:text-kalpiGreen">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="bg-kalpiGreen text-white px-4 py-2 rounded-lg text-sm hover:bg-kalpiDarkGreen">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
