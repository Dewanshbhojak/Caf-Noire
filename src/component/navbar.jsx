import React, { useState } from "react";
import { Coffee, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#1C1C1C] shadow-3xl px-6 sm:px-10 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-amber-400">
          <Coffee className="w-7 h-7" /> Café Noire
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-300 text-lg">
          <a href="/" className="hover:text-amber-400 hover:underline">Home</a>
          <a href="/about" className="hover:text-amber-400 hover:underline">About</a>
          <a href="/items" className="hover:text-amber-400 hover:underline">Menu</a>
          <a href="/contact" className="hover:text-amber-400 hover:underline">Contact</a>
        </nav>

        {/* Button */}
        <button className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-xl font-semibold">
          <ShoppingCart className="w-5 h-5" /> Order
        </button>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-amber-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#2A2A2A] p-5 rounded-xl text-gray-300 animate-slideDown">
          <a href="/" className="hover:text-amber-400">Home</a>
          <a href="/about" className="hover:text-amber-400">About</a>
          <a href="/items" className="hover:text-amber-400">Menu</a>
          <a href="/contact" className="hover:text-amber-400">Contact</a>

          <button className="mt-3 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-xl font-semibold">
            <ShoppingCart className="w-5 h-5" /> Order
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
