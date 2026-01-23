import Image from 'next/image';
import Link from 'next/link';
import data from './data.json';

export default function AboutSection() {
    const aboutCopy = data.about;

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-10">

                    {/* Background Image (Lamp) */}
                    <div className="relative w-full h-[400px] md:h-[450px] lg:h-[550px]">
                        <Image
                            src="/about-us.jpg"
                            alt="Wicker lamp"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full  flex flex-col items-start text-left space-y-6 lg:pl-10 mt-12 lg:mt-0">
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



                        <Link href={aboutCopy.link}>
                            <button className="bg-[#4d9fa8] hover:bg-[#3d838b] text-white px-8 py-4 font-semibold transition-colors duration-200 cursor-pointer">
                                {aboutCopy.button}
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-32 border-t-0 pt-0">
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
