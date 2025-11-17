import React from "react";
import Navbar from "./navbar";
import Slideshow from "./Slideshow";

const Items = () => {
  return (
    <div className="bg-[#3B2F2F] min-h-screen">
      <Navbar />
      <Slideshow />

      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#ffdd] font-extrabold text-center py-12 underline decoration-4">
        Our Menu
      </p>

    
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-10 pb-20">
        
        {/* Item Card */}
        <li className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
          <div className="w-full h-60 bg-[url('/image/coffee.png')] bg-center bg-cover rounded-t-2xl mb-4"></div>
          <h3 className="text-center font-bold text-[#ffdd] text-3xl">Espresso</h3>
          <p className="font-serif text-lg text-center text-[#ffdd] px-2 mt-2">
            Wide range of steaming hot coffee to make you feel fresh.
          </p>
        </li>

        <li className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
          <div className="w-full h-60 bg-[url('/image/cold_coffee.png')] bg-center bg-cover rounded-t-2xl mb-4"></div>
          <h3 className="text-center font-bold text-[#ffdd] text-3xl">Cold Coffee</h3>
          <p className="font-serif text-lg text-center text-[#ffdd] px-2 mt-2">
            Enjoy a chilled and refreshing coffee experience.
          </p>
        </li>

        <li className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
          <div className="w-full h-60 bg-[url('/image/lattes.png')] bg-center bg-cover rounded-t-2xl mb-4"></div>
          <h3 className="text-center font-bold text-[#ffdd] text-3xl">Latte</h3>
          <p className="font-serif text-lg text-center text-[#ffdd] px-2 mt-2">
            Smooth and creamy blend for the latte lovers.
          </p>
        </li>

        <li className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">
          <div className="w-full h-60 bg-[url('/image/javachipfrappe.png')] bg-center bg-cover rounded-t-2xl mb-4"></div>
          <h3 className="text-center font-bold text-[#ffdd] text-3xl">Java Chip Frappe</h3>
          <p className="font-serif text-lg text-center text-[#ffdd] px-2 mt-2">
            Loaded with chocolate chips & rich coffee flavor.
          </p>
        </li>

        <li className="p-6  rounded-3xl shadow-xl hover:shadow-2xl transition">
          <div className="w-full h-60 bg-[url('/image/Americano.png')] bg-center bg-cover rounded-t-2xl mb-4"></div>
          <h3 className="text-center font-bold text-[#ffdd] text-3xl">Americano</h3>
          <p className="font-serif text-lg text-center text-[#ffdd] px-2 mt-2">
            Classic strong black coffee for pure coffee lovers.
          </p>
        </li>

        <li className="p-6  rounded-3xl shadow-xl hover:shadow-2xl transition">
          <div className="w-full h-60 bg-[url('/image/Crossiant.png')] bg-center bg-cover rounded-t-2xl mb-4"></div>
          <h3 className="text-center font-bold text-[#ffdd] text-3xl">Croissant</h3>
          <p className="font-serif text-lg text-center text-[#ffdd] px-2 mt-2">
            Freshly baked buttery & flaky croissant.
          </p>
        </li>

        <li className="p-6  rounded-3xl shadow-xl hover:shadow-2xl transition">
          <div className="w-full h-80 bg-[url('/image/blueberry.png')] bg-center bg-cover rounded-t-2xl mb-4"></div>
          <h3 className="text-center font-bold text-[#ffdd] text-3xl">Blueberry Shake</h3>
          <p className="font-serif text-lg text-center text-[#ffdd] px-2 mt-2">
            Sweet, refreshing, and filled with blueberry goodness.
          </p>
        </li>

      </ul>

      <footer className="px-10 py-6 text-center border-t bg-stone-800 border-[#ffdd] text-gray-400">
        © {new Date().getFullYear()} Café Noire All Rights Reserved.
      </footer>
    </div>
  );
};

export default Items;
