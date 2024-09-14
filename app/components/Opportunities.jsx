import Image from "next/image"
import rings from "../assets/rings.svg"
export const Opportunities = () => (
    <section className="w-full py-12 px-8 flex flex-col justify-evenly items-center bg-neutral-100 min-h-screen relative overflow-hidden">
        <Image className="absolute top-0 right-0 -translate-y-1/2" src={rings} width={500} height={500} alt="design" />
    </section>
)