'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const heroTexts = [
  'Unlocking Algorithmic Alpha',
  'Data-Driven Quant Strategies',
  'AI-Powered Portfolio Creation',
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          {/* Subheadline */}
          <span className="inline-block py-1 px-3 text-sm font-medium bg-kalpiGreen/10 text-kalpiGreen rounded-full backdrop-blur-sm">
            Systematic Quant Investing Platform
          </span>

          {/* Animated Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            {heroTexts[index]}
          </h1>

          {/* Supporting Text */}
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build, backtest, and deploy cutting-edge quant & AI portfolios — no code required.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <button className="bg-kalpiGreen hover:bg-kalpiDarkGreen text-white px-6 py-3 rounded-lg flex items-center justify-center transition">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-300 dark:border-neutral-700 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
