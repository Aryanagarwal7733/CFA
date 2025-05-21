'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-kalpiGreen to-kalpiDarkGreen text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to Revolutionize Your Investing?
        </motion.h2>

        <p className="text-white/90 text-lg mb-8">
          Join thousands using Kalpi to build data-driven portfolios.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-kalpiGreen px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition">
            Start Free Trial
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}
