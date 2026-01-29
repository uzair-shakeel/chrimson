import Image from "next/image";
import Link from "next/link";
import data from "./data.json";

export default function AboutSection() {
    const aboutCopy = data.about;

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center lg:flex-row flex-col justify-between gap-12 lg:gap-10">
                    {/* Text Content */}
                    <div className="w-full lg:max-w-125.25 flex flex-col items-start text-left">

                        <p className="text-[28px] sm:text-[40px] leading-10 sm:leading-13 text-[#111111] font-oswald font-normal tracking-[4px] uppercase">
                            {aboutCopy.heading}
                        </p>

                        <div className="w-12.5 h-px bg-[#111111] my-6" />

                        <p className="text-[15px] font-playfair text-[#111111] leading-6 mb-3.75">
                            {aboutCopy.body}
                        </p>

                        <ul className="font-playfair text-[#111111] list-disc ml-5 mb-8 space-y-1.5 text-[15px] leading-6">
                            <li>Pura Vida Bracelets</li>
                            <li>Saski Collection</li>
                            <li>Bootcamp and Balmain</li>
                        </ul>

                        <Link href={aboutCopy.link}>
                            <button className="bg-[#4d9fa8] hover:bg-[#3d838b] text-white px-10 h-[50px] font-semibold transition-colors duration-200 cursor-pointer">
                                {aboutCopy.button}
                            </button>
                        </Link>
                    </div>

                    <Image
                        src="/aboutus.jpg"
                        alt="Wicker lamp"
                        width={550}
                        height={550}
                        className="object-cover"
                    />
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-16 md:mt-32 border-t-0 pt-0">
                    {aboutCopy.features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-left group"
                        >
                            <div className="mb-6 sm:mb-[30px]">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={55}
                                    height={55}
                                    className="object-contain opacity-70 group-hover:opacity-100 transition duration-200 scale-100 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-[20px] leading-[26px] font-oswald font-normal text-[#121F38] tracking-[2px] mb-2.5 group-hover:text-[#B1915E] transition-colors duration-200 uppercase">
                                {feature.title}
                            </h3>
                            <p className="text-[15px] font-playfair leading-[25px] text-[#111111]">
                                {feature.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
