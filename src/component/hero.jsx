import React from 'react'
import { motion } from "framer-motion";
import Navbar from "./navbar"
import Menu from "./menu"
import { Link } from 'react-router'

const hero = () => {
  return (
    <div className=' h-full bg-[#4B3832] '>
      <Navbar />
      <section id="home" className="flex h-3xl flex-col md:flex-row items-center  bg-[url(/image/coffeeimage.jpg)] bg-cover bg-center  justify-between px-10  ">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 w-"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-15">
            Start Your Day <br />
            with <span className="text-amber-400">Perfect Coffee</span>
          </h1>
          <p className="text-stone-800 text-lg">
            Experience the rich taste and aroma of freshly brewed coffee, made with love for coffee lovers.
          </p>
          <button onClick="/about.jsx" className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 mb-15 rounded-2xl text-lg font-semibold">
           <Link to={"/about"}>About us</Link> 
          </button>
        </motion.div>

   
      </section>
      <hr  />
      <div className='flex  rounded-3xl shadow-7xl bg-[url(/image/coffee.io-background.jpg)] bg-fixed bg-no-repeat bg-cover bg-center justify-between items-center '>

        <p className='text-center text-5xl font-extrabold  px-10 py-20  shadow-amber-100'> Create your own version of <br/>
        <span className='text-amber-600 text-6xl '>Drink</span> <br/>
        <button onClick={"./about.jsx"}className="bg-amber-700 hover:bg-amber-600 text-black px-6 py-3 rounded-2xl text-lg font-semibold justify-center items-center mt-15">
           <Link to={"/items"}>Explore Menu</Link>
        </button>
        </p>
      


      </div>
      <hr />
      <div>
        <Menu/>
      </div>
     
   <footer className="px-10 py-6 text-center border-t bg-stone-800 border-[#ffdd] text-gray-400">
        © {new Date().getFullYear()} Café Noire All Rights Reserved.
      </footer>
    </div>

  )
}

export default hero
