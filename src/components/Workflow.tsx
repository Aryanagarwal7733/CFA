'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Build Your Strategy',
    description: 'Use our visual strategy builder to construct complex logic easily.',
  },
  {
    number: 2,
    title: 'Backtest & Optimize',
    description: 'Validate with historical data, refine parameters, and assess risk/reward.',
  },
  {
    number: 3,
    title: 'Create Portfolio',
    description: 'Deploy your strategy in a real or simulated portfolio with auto-rebalance.',
  },
]

export default function Workflow() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How It <span className="text-kalpiGreen">Works</span>
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Start investing with Kalpi in just 3 steps — no technical skills required.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md border border-gray-100 dark:border-neutral-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full bg-kalpiGreen text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold dark:text-white">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
