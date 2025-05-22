'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'



const phrases = [
  "Unlocking Algorithmic Alpha",
  "Data-Driven Strategies",
  "India’s First Quant Investing Platform",
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-accent text-primary text-center px-4">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Unlock the Power of <span className="text-dark">Quantitative Finance</span>
      </motion.h1>
      <motion.p 
        className="text-xl max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Data-driven strategies for the modern investor. Experience systematic investing with Kalpi Capital.
      </motion.p>
    </section>
  );
}