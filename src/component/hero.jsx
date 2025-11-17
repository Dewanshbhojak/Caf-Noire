import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Menu from "./menu";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="h-full bg-[#4B3832]">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-20 bg-[url('/image/coffeeimage.jpg')] bg-cover bg-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mt-10">
            Start Your Day <br />
            with{" "}
            <span className="text-amber-400">Perfect Coffee</span>
          </h1>

          <p className="text-stone-800 text-base sm:text-lg">
            Experience the rich taste and aroma of freshly brewed coffee,
            made with love for true coffee lovers.
          </p>

          <Link
            to="/about"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-2xl text-lg font-semibold"
          >
            About Us
          </Link>
        </motion.div>
      </section>

      <hr />

      {/* Create Your Own Drink */}
      <div className="flex flex-col items-center justify-center text-center rounded-3xl bg-[url('/image/coffee.io-background.jpg')] bg-fixed bg-cover bg-center px-6 py-20">
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-white drop-shadow-lg">
          Create your own version of <br />
          <span className="text-amber-600 text-5xl sm:text-6xl">
            Drink
          </span>
        </p>

        <Link
          to="/items"
          className="bg-amber-700 hover:bg-amber-600 text-black px-6 py-3 rounded-2xl text-lg font-semibold"
        >
          Explore Menu
        </Link>
      </div>

      <hr />

      {/* Menu Section */}
      <Menu />

      {/* Footer */}
      <footer className="px-10 py-6 text-center border-t bg-stone-800 border-[#ffdd] text-gray-400">
        © {new Date().getFullYear()} Café Noire All Rights Reserved.
      </footer>
    </div>
  );
};

export default Hero;
