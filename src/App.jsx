// src/App.jsx
import { motion } from "framer-motion";
import { Coffee, Menu, ShoppingCart } from "lucide-react";
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import About from "./component/about"
import Items from "./component/Items.jsx"
import Contact from "./component/contact"
import { Route, Routes } from "react-router";



export default function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/items" element={<Items/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      
         <Route path="/" element={<Hero/>}/>
      </Routes>
    
      
    </div>
  );
}
