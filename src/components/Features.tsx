'use client'

import { motion } from 'framer-motion'
import { Zap, BarChart3, TrendingUp, BrainCircuit, Users, Shield } from 'lucide-react'

// components/Features.jsx
const features = [
  { title: "Algorithmic Trading", desc: "Harness AI & data science to invest smarter." },
  { title: "Risk Management", desc: "Reduce volatility through diversified strategies." },
  { title: "Custom Portfolios", desc: "Built around your financial goals and preferences." },
];

export default function Features() {
  return (
    <section className="py-20 px-8 bg-white text-dark">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Why Choose Kalpi Capital?</h2>
        <p className="text-gray-600 mt-2">Smart, systematic, and transparent investing.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div key={idx} className="bg-accent p-6 rounded-2xl shadow-lg transform hover:scale-105 transition">
            <h3 className="text-xl font-bold">{f.title}</h3>
            <p className="mt-2 text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
