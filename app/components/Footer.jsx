
import { Subscribe } from "./Subscribe"
import Image from "next/image"
import locationIcon from "../assets/icons/location.svg"
import mailIcon from "../assets/icons/mail.svg"

import fbIcon from "../assets/logos/facebook.svg"
import inIcon from "../assets/logos/linkedin.svg"
import ytIcon from "../assets/logos/youtube.svg"
import instaIcon from "../assets/logos/instagram.svg"

export const Footer = () => (
    <footer id="contact" className="w-full bg-white flex gap-4 justify-center items-center flex-wrap pb-10 sm:pb-24 md:pb-32 lg:pb-36"> 
        <Subscribe className="col-span-2 -translate-y-1/3 lg:-translate-y-1/2"/>
        <span className="flex box-border h-1 w-full max-w-[85vw] mt-0 m-14 sm:m-16 md:m-20 bg-primary col-span-2 -translate-y-10" />
        
       <div className="w-4/5 max-w-7xl flex items-center justify-between gap-10 flex-wrap text-sm sm:text-lg">
            <span className="flex flex-1 flex-col  gap-10 ">
                <span className="flex-1 flex justify-between gap-10 max-w-[300px]">
                    <span className="whitespace-nowrap">Pratham Patidar</span><span>9294836692</span>
                </span>
                <span className="flex-1 flex justify-between gap-10 max-w-[300px]">
                    <span className="whitespace-nowrap">Anuraj Shrivastava</span><span>8962970385</span>
                </span>
                <span className="flex-1 flex justify-between gap-10 max-w-[300px]">
                    <span className="whitespace-nowrap">Chirayu Sood</span><span>8251027550</span>
                </span>
                <span className="flex-1 flex justify-between gap-10 max-w-[300px]">
                    <span className="whitespace-nowrap">Arnav Bangaria</span><span>6265174401</span>
                </span>
                <span className="flex-1 flex items-center justify-start gap-10 text-xs whitespace-nowrap mt-20 flex-wrap text-neutral-900">
                    <a className="hover:underline text-sm text-neutral-950" href="#about">ABOUT EVENT</a>
                    <a className="hover:underline" href="#register">REGISTER</a>
                    <a className="hover:underline" href="https://ecellnitb.in">E-CELL MANIT</a>
                    <a className="hover:underline" href="https://esummit.ecellnitb.in">E-SUMMIT 23'</a>
                </span>
            </span>

            <span className="flex-1">
                <div className="flex flex-col gap-10">
                   
                    <span className="gap-4 flex items-center">
                        <Image src={locationIcon} width={30} height={30} />
                       <span> Maulana Azad National Institute of Technology, Bhopal India - 462003</span>
                    </span>
                    <span className="gap-4 flex items-center">
                        <Image src={mailIcon} width={30} height={30} />
                       <a href="mailto:support@ecellnitb.com">support@ecellnitb.com</a>
                    </span>
                    <span className="gap-10 flex items-center justify-end mt-14 sm:mt-16 md:mt-20">
                        <a className="cursor-pointer hover:scale-105 transition-transform active:opacity-85" href="https://github.com/maasir554" ><Image src={fbIcon} width={30} height={30} /></a>
                        <a className="cursor-pointer hover:scale-105 transition-transform active:opacity-85" href="https://github.com/maasir554" ><Image src={inIcon} width={30} height={30} /></a>
                        <a className="cursor-pointer hover:scale-105 transition-transform active:opacity-85" href="https://github.com/maasir554" ><Image src={ytIcon} width={30} height={30} /></a>
                        <a className="cursor-pointer hover:scale-105 transition-transform active:opacity-85" href="https://github.com/maasir554" ><Image src={instaIcon} width={30} height={30} /></a>
                    </span>
                    <span className="gap-4 flex items-center justify-end text-neutral-400 mt-6 sm:mt-8 md:mt-10">
                    Copyright © 2023 • E-Cell MANIT Bhopal
                    </span>
                </div>
            </span>      
       </div>
        
        
    </footer>
)