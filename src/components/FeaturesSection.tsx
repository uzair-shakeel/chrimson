import Image from 'next/image';
import Link from 'next/link';
import data from './data.json';

export default function FeaturesSection() {
    const whyUs = data.whyUs;

    return (
        <>
            {/* New top section with images and copy styled like AboutSection */}
            <section className=" py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Images Area */}
                        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start gap-6">
                            <div className="relative w-1/2 aspect-[3/4] shadow-lg overflow-hidden rounded-xl">
                                <Image
                                    src="/features-1.jpg"
                                    alt="Woman working by a large window"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-1/2 aspect-[3/4] shadow-lg overflow-hidden rounded-xl">
                                <Image
                                    src="/features-2.jpg"
                                    alt="Wooden door interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6 lg:pl-10 mt-12 lg:mt-0">
                            <div className="space-y-4">
                                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                                    {whyUs.leadingText}
                                </p>
                                <h2 className="text-[38px] md:text-[46px] md:leading-[50px] lg:text-[56px] lg:leading-[53px] font-bold leading-[40px] text-[#062A4D] ">
                                    {whyUs.heading}
                                </h2>
                            </div>

                            <p className="text-[17px] text-gray-600 max-w-sm leading-relaxed">
                                {whyUs.body}
                            </p>

                            <Link href={whyUs.link}>
                                <button className="bg-[#4d9fa8] hover:bg-[#3d838b] text-white px-8 py-4 font-semibold transition-colors duration-200">
                                    {whyUs.button}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Original three-column features grid below */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-2">
                        {whyUs.leadingText}
                    </p>
                    <h2 className="text-[32px] md:text-[42px] font-bold text-[#062A4D]">
                        {whyUs.heading}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
                    {whyUs.sections.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="relative w-[75px] h-[75px] mb-6">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-[24px] font-bold text-[#062A4D] mb-4">
                                {feature.title}
                            </h3>

                            {/* Body */}
                            <p className="text-[17px] text-gray-600 max-w-xs mx-auto leading-relaxed">
                                {feature.body}
                            </p>

                            {/* Read More */}
                            <Link href={feature.link}>
                                <div className="mt-6 flex items-center justify-center gap-2 text-[#062A4D]">

                                    {/* MASK */}
                                    <div
                                        className="
                                            overflow-hidden
                                            max-w-0
                                            group-hover:max-w-[120px]
                                            transition-[max-width]
                                            duration-300
                                            ease-in-out
                                            text-right
                                        "
                                    >
                                        <span className="whitespace-nowrap font-medium">
                                            Read More
                                        </span>
                                    </div>

                                    {/* Arrow */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
