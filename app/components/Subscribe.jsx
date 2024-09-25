export const Subscribe = ({className=""}) => (
    <div className={"flex w-full rounded-3xl bg-white py-14 sm:py-16 md:py-20 px-10 sm:px-12 md:px-16 shadow-xl mt-20 items-end justify-center gap-10 flex-wrap " + className}>
        <span className="flex flex-col gap-4 ">
            <h3 className=" sm:text-lg md:text-xl lg:text-2xl text-secondary font-caveat">
                Don't Miss our updates
            </h3>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            Subscribe Now
            </h1>
        
        </span>
        <span className="lg:flex-1 rounded-none p-5 sm:p-0 sm:rounded-full shadow-lg flex bg-neutral-100 overflow-hidden h-auto sm:h-14 md:h-16 md:min-w-[400px] w-full flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-4 sm:gap-0" >  
            <input type="email" placeholder="Enter your email..." className="bg-transparent pl-5 md:pl-10 w-full p-4 focus:outline-none text-xs sm:text-sm md:text-md " />
            <button className=" h-auto sm:h-full flex items-center justify-center py-3 px-8 md:px-14 text-white font-semibold bg-gradient-to-r from-secondary to-primary rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-sm sm:text-lg"> 
                Subscribe
            </button>
        </span>
    </div>
)