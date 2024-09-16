import Image from "next/image"
import rings from "../assets/rings.svg"
import { OPPORTUNITIES_DATA } from "../constants"

const FeatureCard = ({text, imgLink}) => (
    <div className=" rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[45px] bg-white flex flex-col justify-center md:justify-around items-center py-4 sm:py-9 md:py-10 px-2 sm:px-8 h-52 sm:h-64 md:h-72 lg:h-80 min-w-32 flex-1 sm:flex-none sm:w-64 md:w-72 z-10 shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl">
        <Image className=" w-14 sm:w-20 md:w-24 mb-5" src={imgLink} width={50} height={50}/>
        
        <div className="text-center font-semibold text-sm sm:text-lg md:text-xl leading-6 md:leading-9 tracking-normal">
           
            {text.split('\n').map( (str,jdx) => (<p key={jdx}>{str}</p>))} 
           
            {/* yeh woh \n ki jagah line break karne k liye hai */}
        
        </div>
    </div>
)

export const Opportunities = () => (
    <section className="w-full py-14 sm:py-16 md:py-24 px-4 sm:px-8 flex flex-col justify-evenly items-center bg-[#F3F3F3] min-h-screen relative overflow-hidden">
        
        <Image className="absolute top-0 right-0 -translate-y-1/2 sm:w-72 md:w-96 lg:w-[300px] z-0" src={rings} width={300} height={300} alt="design" />
        
        <h1 className="text-3xl sm:text-4xl text-black font-semibold text-center z-10 mb-14 s:mb-16 md:mb-20">
            Opportunities
        </h1>

        <div className="w-full flex flex-row items-center justify-center flex-wrap gap-3 sm:gap-12 md:gap-14 lg:gap-24">
            {OPPORTUNITIES_DATA.map((opportunity,idx)=>(
                <FeatureCard key={idx} imgLink={opportunity.imgLink} text={opportunity.text}/>
            ))}
        </div>
    </section>
)