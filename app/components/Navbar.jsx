"use client"

import Image from "next/image"
import ECellLogo from "../assets/logos/e-cell-logo.png"
import { useContext, useEffect, useState } from "react"
import { NavContext } from "../page"

const Hamburger = ({className}) => {
    const {isMenuOpen, setIsMenuOpen} = useContext(NavContext)

    const clickHandeler = () => {
        window.addEventListener("resize", () =>{
            if(window.innerWidth>768){
                setIsMenuOpen(false)
            }
        })

        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    }
    useEffect(()=>{
        const Menu = document.querySelector("#menu");
       
        if (isMenuOpen){
            Menu?.classList.remove("-left-full")
            Menu?.classList.add("left-0")
            document.body.classList.add("overflow-hidden")
            // setIsMenuOpen(false)
        }
        else {
            Menu?.classList.remove("left-0")
            Menu?.classList.add("-left-full")
            document.body.classList.remove("overflow-hidden")
           
            // setIsMenuOpen(true)
        }
    },[isMenuOpen])

    return ( !isMenuOpen?
        <div className={"group h-3/4 aspect-square flex flex-col justify-between py-4vw sm:py-2" + " " + className} onClick={clickHandeler}>
            <span className="h-1/6 w-full bg-white group-hover:bg-primary transition" />
            <span className="h-1/6 w-full bg-white group-hover:bg-primary transition" />
            <span className="h-1/6 w-full bg-white group-hover:bg-primary transition" />
        </div>
        
        :

        <div className={"group h-3/4 aspect-square flex flex-col justify-between py-2 relative " + " " + className} onClick={clickHandeler} >
            <span className="absolute h-1 w-full bg-white group-hover:bg-primary transition left-0 top-1/2 -translate-y-1/2 rotate-45" />
            <span className="absolute h-1 w-full bg-white group-hover:bg-primary transition left-0 bottom-1/2 translate-y-1/2 -rotate-45" />
        </div>
    )
}



export const Menu = () => {
 
    const {isMenuOpen, setIsMenuOpen} = useContext(NavContext)

    const clickLink = () => {
        setIsMenuOpen(false)
    }
 
 return (<div id="menu" className="fixed top-0 -left-full w-full h-screen bg-neutral-900/90 backdrop-blur-sm z-30 transition-all">
        
        <ul className="flex flex-col gap-10 text-white font-medium items-center justify-center uppercase h-full">
            <li className="flex items-center"><a className="h-full hover:text-primary flex items-center" onClick={clickLink} href="#about">About event</a></li>
            <li className="flex items-center"><a className="h-full hover:text-primary flex items-center" onClick={clickLink} href="#register">Register</a></li>
            <li className="flex items-center"><a className="h-full hover:text-primary flex items-center" onClick={clickLink} href="https://ecellnitb.in/">E-Cell MANIT</a></li>
            <li className="flex items-center"><a className="h-full hover:text-primary flex items-center" onClick={clickLink} href="https://esummit.ecellnitb.in/">E-Summit 24'</a></li>
            <li className="flex items-center"><a className="h-full hover:text-primary flex items-center" onClick={clickLink} href="#contact">Contact</a></li>
        </ul>

    </div>)
}


export const Navbar = () => {
    
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(()=>{
        
        const Nav = document.getElementById('navbar');
       
        window.addEventListener("scroll", ()=>{
            const currentScrollY = window.scrollY;
            if (currentScrollY>lastScrollY){
                setShowNav(false)
            }else{setShowNav(true)}
            setLastScrollY(currentScrollY);
        });

        if(showNav){
            Nav.classList.remove("-top-full");
            Nav?.classList.add("top-0");
        }else{
            Nav.classList.add("-top-full");
            Nav?.classList.remove("top-0");
        }
    },[lastScrollY])

    return(<nav id="navbar" className="w-full bg-black max-h-[15vh] h-16 md:h-20 lg:h-24 fixed top-0 z-[999] flex items-center justify-between py-1 sm:py-3 px-2 sm:px-6 md:px-8 lg:px-10 transition-all duration-300">
        <a className="h-full" href="https://ecellnitb.in/">
        <Image className="h-full w-auto" src={ECellLogo} width={50} height={50} />
        </a>
        <ul className="md:flex gap-6 h-full flex-nowrap text-white font-medium items-center self-center uppercase hidden">
            <li className="h-full flex items-center"><a className="h-full hover:text-primary flex items-center" href="#about">About event</a></li>
            <li className="h-full flex items-center"><a className="h-full hover:text-primary flex items-center" href="#register">Register</a></li>
            <li className="h-full flex items-center"><a className="h-full hover:text-primary flex items-center" href="https://ecellnitb.in/">E-Cell MANIT</a></li>
            <li className="h-full flex items-center"><a className="h-full hover:text-primary flex items-center" href="https://esummit.ecellnitb.in/">E-Summit 24'</a></li>
            <li className="h-full flex items-center"><a className="h-full hover:text-primary flex items-center" href="#contact">Contact</a></li>
        </ul>
        <Hamburger className={"flex md:hidden cursor-pointer"} />
    </nav>)
}
