import Image from "next/image";
import fblogo from "./assets/logos/facebook.svg"
import { Hero } from "./components/Hero";

import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar/>
      <Hero/>

    </div>
  );
}
