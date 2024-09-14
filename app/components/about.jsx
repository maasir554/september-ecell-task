export const About = () => {
    return(
        <section className="w-full min-h-96 px-8 py-12 sm:py-18 md:py-20 flex flex-col justify-start items-center">
            <div className="w-full max-w-3xl flex flex-row lg:gap-14 md:gap-8 gap-4 items-center mb-6 sm:mb-12 ">
                <span className="h-[2px] flex-1 bg-primary"></span>
                <span className="text-2xl sm:text-4xl font-semibold ">About the Event</span>
                <span className="h-[2px] flex-1 bg-primary"></span>
            </div>

            <p className="text-lg text-neutral-500 text-justify md:text-center w-full max-w-8xl leading-9 tracking-normal ">
                Alumni Reunion is a jubilant event
                aimed at celebrating the imperial
                legacy of graduated pupil of Maulana
                Azad National Institute of Technology.
                This annual conference will consist of
                diverse insightful activities and interactive sessions from
                accomplished alums contributing
                conscientiously in the field of
                entrepreneurship and technological
                advancements. As a part of our
                upcoming megafest, E-Summit'23,
                our team will be organising an Alumni Meet to reminisce the yester years and
                share their insights from the
                corporate world.
            </p>
        </section>
    )
}
