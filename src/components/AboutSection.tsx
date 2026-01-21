import Image from 'next/image';
import Link from 'next/link';
import data from './data.json';

export default function AboutSection() {
    const aboutCopy = data.about;

    return (
        <section className="bg-[var(--background)] py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Images Area */}
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-10">
                        {/* Background Image (Lamp) */}
                        <div className="relative z-10 w-[70%] lg:w-[350px] aspect-[3/4] -translate-x-10 -translate-y-10 lg:-translate-x-16 lg:-translate-y-12">
                            <Image
                                src="/about-1.png"
                                alt="Wicker lamp"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Foreground Image (Living Room) */}
                        <div className="absolute z-20 w-[75%] lg:w-[400px] aspect-square bottom-0 right-0 translate-y-10 lg:translate-x-0 lg:translate-y-12 shadow-xl">
                            <Image
                                src="/about-2.png"
                                alt="Modern living room"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6 lg:pl-10 mt-12 lg:mt-0">
                        <div className="space-y-4">
                            <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                                {aboutCopy.leadingText}
                            </p>
                            <h2 className="text-[38px] md:text-[46px] md:leading-[50px] lg:text-[56px] lg:leading-[53px] font-[700] leading-[40px] text-[#062A4D] ">
                                {aboutCopy.heading}
                            </h2>
                        </div>

                        <p className="text-[17px] text-gray-600 max-w-sm leading-relaxed">
                            {aboutCopy.body}
                        </p>

                        <div className="space-y-2 py-4">
                            <p className="text-[#1e293b] font-bold text-sm tracking-wide">
                                MON-FRI: 9 AM – 10 PM
                            </p>
                            <p className="text-[#1e293b] font-bold text-sm tracking-wide">
                                SATURDAY: 9 AM – 6 PM
                            </p>
                        </div>

                        <Link href={aboutCopy.link}>
                            <button className="bg-[#4d9fa8] hover:bg-[#3d838b] text-white px-8 py-4 font-semibold transition-colors duration-200">
                                {aboutCopy.button}
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-32 border-t-0 pt-0">
                    {aboutCopy.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-2">
                            <span className="text-slate-600 font-bold text-sm">{stat.title}</span>
                            <span className="text-5xl md:text-6xl font-bold text-[#0f172a]">{stat.number}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
