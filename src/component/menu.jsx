import React from 'react'
import { motion } from "framer-motion";

const menu = () => {
  return (
     <section id="menu" className="px-10 py-20">
        <h2 className="text-4xl font-bold text-center text-amber-400 mb-12">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Espresso", price: "$3.50", img: "./image/espresso.jpg" },
            { name: "Cappuccino", price: "$4.00", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80" },
            { name: "Latte", price: "$4.50", img: "./image/latte.jpg" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={item.img} alt={item.name} className="w-full h-60 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-amber-400 text-lg font-bold mt-2">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default menu
