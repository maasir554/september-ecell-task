import Image from "next/image"
import calenderIcon from "../assets/icons/calender.svg"
import locationIcon from "../assets/icons/location-white.svg"

export const Hero = ()  => (
    <section className="px-10 sm:px-0 w-full min-h-screen bg-hero-bg flex flex-col items-center justify-center text-neutral-50 pt-32 pb-16 gap-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-neutral-100">Entrepreneurship Cell presents</h2>
 
        <div className="text-center w-full flex flex-col items-center">
            <h1 className=" text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-hero-text-gredient bg-clip-text font-semibold font-roboto">
            MANIT Alumnis’
            </h1>
 
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-neutral-50 font-normal font-roboto">
            Meet 2023
            </h1>
        
           <div className="flex gap-8 sm:gap-12 md:gap-16 flex-wrap mt-16 items-center justify-center">
                <span className="inline-flex items-center text-md sm:text-2xl md:text-3xl">
                    <Image className="mr-5 w-5 sm:w-4 md:w-7" src={calenderIcon} width={30} height={30}/>
                    11-12 Feb 2023
                </span>
            
              <span className="inline-flex items-center text-md sm:text-2xl md:text-3xl">
                    <Image className="mr-5 w-5 sm:w-4 md:w-7" src={locationIcon} width={30} height={30}/>
                 MANIT Bhopal, India
                </span>
            </div>

        </div>
        
        <a className="px-7 py-4 bg-white text-black text-xs sm:text-sm font-semibold whitespace-nowrap border-transparent border-2 hover:border-primary active:opacity-95" href="https://ecellnitb.com"> Contact us</a>
    </section>
)