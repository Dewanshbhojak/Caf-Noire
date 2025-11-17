// src/App.jsx
import { motion } from "framer-motion";
import { Coffee, Menu, ShoppingCart } from "lucide-react";
import Navbar from "./component/navbar.jsx"
import Hero from "./component/hero.jsx"
import About from "./component/about.jsx"
import Items from "./component/Items.jsx"
import Contact from "./component/contact.jsx"
import { Route, Routes } from "react-router";



export default function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Items" element={<Items/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      
         <Route path="/" element={<Hero/>}/>
      </Routes>
    
      
    </div>
  );
}
