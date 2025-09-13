// src/App.jsx
import { motion } from "framer-motion";
import { Coffee, ShoppingCart } from "lucide-react";
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import About from "./component/about"
import Menu from "./component/menu"
import Contact from "./component/contact"

export default function App() {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black min-h-screen text-white w-screen">
      <Navbar/>
     <Hero/>
     <About/>
     <Menu/>
     <Contact/>
      
    </div>
  );
}
