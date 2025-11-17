import React from 'react'
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <section 
      id="menu" 
      className="px-4 sm:px-8 md:px-16 lg:px-24 py-16"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-[#ffdd] underline decoration-4 mb-12">
        Popular Drinks
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        
        {[
          { name: "Espresso", price: "$3.50", img: "/image/espresso.jpg" },
          { name: "Cappuccino", price: "$4.00", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80" },
          { name: "Latte", price: "$4.50", img: "/image/latte.jpg" },
        ].map((item, i) => (
          
          <motion.div  
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-800 rounded-2xl shadow-xl overflow-hidden border border-zinc-700"
          >
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-56 sm:h-60 md:h-64 object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#ffdd]">
                {item.name}
              </h3>
              <p className="text-amber-400 text-lg font-bold mt-2">
                {item.price}
              </p>
            </div>
          </motion.div>

        ))}
      </div>

    </section>
  );
};

export default Menu;
