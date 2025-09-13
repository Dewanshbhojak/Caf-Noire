import React from 'react'
import { motion } from "framer-motion";

const hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Start Your Day <br />
          with <span className="text-amber-400">Perfect Coffee</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Experience the rich taste and aroma of freshly brewed coffee, made with love for coffee lovers.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-2xl text-lg font-semibold">
          Explore Menu
        </button>
      </motion.div>

      <motion.img 
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
        alt="Coffee Cup"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="md:w-1/2 mt-10 md:mt-0 rounded-2xl shadow-lg"
      />
    </section>

  )
}

export default hero
