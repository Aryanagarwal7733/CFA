'use client'

import { motion } from 'framer-motion'
import { Zap, BarChart3, TrendingUp, BrainCircuit, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'No-Code Strategy Builder',
    description: 'Build complex quant strategies with an intuitive interface. No coding required.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Backtesting',
    description: 'Validate your strategies with historical data and in-depth metrics.',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Creation',
    description: 'Equal/custom-weighted portfolios with smart rebalancing options.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Strategies',
    description: 'Use ML models to combine and optimize your quant strategies.',
  },
  {
    icon: Users,
    title: 'Strategy Marketplace',
    description: 'Access top quant strategies created by professionals.',
  },
  {
    icon: Shield,
    title: 'Multi-Factor Models',
    description: 'Robust multi-factor strategies for risk-adjusted returns.',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-950" id="solutions">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-kalpiGreen">Kalpi Capital?</span>
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We combine powerful technology with simplicity to empower your quant investing journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-gray-100 dark:border-neutral-800 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-kalpiGreen/10 text-kalpiGreen rounded-full mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
