
const FormInput = ({placeholder, className=""}) => <input type="text" name={placeholder} className={"placeholder-neutral-400 bg-slate-100 px-6 py-4 md:py-8 italic focus:outline-2 focus:outline-primary w-full max-w-4xl mb-4 md:mb-8 "+className} placeholder={placeholder} />

const TwoInputsGrp = ({ph1,ph2}) => (
    <div className="w-full gap-1 flex flex-col md:flex-row flex-wrap max-w-4xl">
        <input type="text" name={ph1} className="placeholder-neutral-400 bg-slate-100 px-6 py-4 md:py-8 italic focus:outline-2 focus:outline-primary flex-1 mb-4 md:mb-8" 
        placeholder={ph1} />
        <input type="text" name={ph2} className="placeholder-neutral-400 bg-slate-100 px-6 py-4 md:py-8 italic focus:outline-2 focus:outline-primary flex-1 mb-4 md:mb-8" placeholder={ph2} />
    </div>
) 


export const Registration = () => (
    <section className="py-20 px-4 md:py-36 md:px-8 bg-gradient-to-br from-primary to-secondary min-h-screen w-full flex justify-center items-center">
        <form 
            className="w-full max-w-7xl bg-white min-h-screen flex flex-col justify-center items-center rounded-xl md:rounded-3xl py-10 md:py-24 px-4 md:px-8"
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
            <TwoInputsGrp ph1="Contact no." ph2="Email" />
            <FormInput placeholder="College Achievement"/>
            <FormInput placeholder="Brief Profile"/>
            <FormInput placeholder="Special Achievements"/>
            <FormInput placeholder="Message for your batchmates" className="h-40 "/>
            <input type="button" value="Register Now" className="bg-gradient-to-r from-secondary to-primary flex-1 px-6 py-8 text-white font-semibold w-full max-w-4xl rounded-xl " />
        </form>
    </section>
)