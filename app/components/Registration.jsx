
import { Subscribe } from "./Subscribe"
import Image from "next/image"
import arrowIcon from "../assets/icons/arrow.svg"

const FormInput = ({placeholder, className=""}) => <input type="text" name={placeholder} className={"placeholder-neutral-400 bg-slate-100 px-6 py-4 md:py-8 italic focus:outline-2 focus:outline-primary w-full max-w-4xl mb-4 md:mb-8 "+className} placeholder={placeholder} />

const TwoInputsGrp = ({ph1,ph2,type_ph1="text"}) => (
    <div className="w-full gap-1 flex flex-col md:flex-row flex-wrap max-w-4xl">
        <input name={ph1} type={type_ph1} className="placeholder-neutral-400 bg-slate-100 px-6 py-4 md:py-8 italic focus:outline-2 focus:outline-primary flex-1 mb-4 md:mb-8 w-full md:w-auto" 
        placeholder={ph1} />
        <input type="text" name={ph2} className="placeholder-neutral-400 bg-slate-100 px-6 py-4 md:py-8 italic focus:outline-2 focus:outline-primary flex-1 mb-4 md:mb-8 w-full md:w-auto" placeholder={ph2} />
    </div>
) 


export const Registration = () => (
    <section id="register" className="py-20 px-4 md:py-36 md:px-8 bg-gradient-to-br from-primary to-secondary min-h-screen w-full flex flex-col justify-center items-center">
        <form 
            className="shadow-2xl w-full max-w-7xl bg-white flex flex-col justify-center items-center rounded-xl md:rounded-3xl py-10 md:py-24 px-4 md:px-8"
            action="#"
        >
            <div className="w-full max-w-5xl flex flex-row lg:gap-14 md:gap-8 gap-4 items-center mb-6 sm:mb-12 ">
                <span className="h-[2px] flex-1 bg-primary"></span>
                <span className="text-2xl sm:text-4xl font-semibold ">Register for Alumni Meet</span>
                <span className="h-[2px] flex-1 bg-primary"></span>
            </div>

            {/* <FormInput placeholder="First name" name="first name"/> */}

            <TwoInputsGrp ph1="First name" ph2="Last name" />
            <TwoInputsGrp ph1="Branch" ph2="Year of Passing" />
            <TwoInputsGrp type_ph1="number" ph1="Contact no." ph2="Email" />
            <FormInput placeholder="College Achievement"/>
            <FormInput placeholder="Brief Profile"/>
            <FormInput placeholder="Special Achievements"/>
            <FormInput placeholder="Message for your batchmates" className="h-40 "/>
            <button type="button" className="cursor-pointer bg-gradient-to-r from-secondary to-primary px-6 py-8 text-white font-semibold w-full max-w-4xl rounded-xl hover:rounded-none transition-all hover:bg-gradient-to-r hover:from-primary hover:to-secondary active:scale-95 flex items-center justify-between">
            <span></span>
            <span>Register now</span> 
            <Image src={arrowIcon} width={49} height={23}  />
            </button>
        </form>
    </section>
)