"use client"

import Image from "next/image";
import fblogo from "./assets/logos/facebook.svg"
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Opportunities } from "./components/Opportunities";
import { Registration } from "./components/Registration";
import { Footer } from "./components/Footer";
import { createContext, useState } from "react";

import { Navbar, Menu } from "./components/Navbar";

export const NavContext = createContext();

export default function Home() {
  
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  
  return ( 
    <div className="w-full relative">
      <NavContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
        <Navbar/>
        <Menu/>
      </NavContext.Provider>
      <Hero/>
      <About/>
      <Opportunities/>
      <Registration/>
      <Footer/>
    </div>
  );
}
