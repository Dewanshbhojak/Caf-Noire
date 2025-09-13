import React from 'react'
import { Coffee, ShoppingCart } from "lucide-react";

const navbar = () => {
  return (
      <header className="flex justify-between items-center px-10 py-6 border-b border-zinc-800">
      <div className="flex items-center gap-2 text-2xl font-bold text-amber-400">
        <Coffee className="w-7 h-7" /> CoffeeCo
      </div>
      <nav className="hidden md:flex gap-8 text-gray-300">
        <a href="#home" className="hover:text-amber-400  hover:underline">Home</a>
        <a href="#about" className="hover:text-amber-400 hover:underline">About</a>
        <a href="#menu" className="hover:text-amber-400 hover:underline">Menu</a>
        <a href="#contact" className="hover:text-amber-400 hover:underline">Contact</a>
      </nav>
      <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-xl font-semibold">
        <ShoppingCart className="w-5 h-5" /> Order
      </button>
    </header>
  )
}

export default navbar
