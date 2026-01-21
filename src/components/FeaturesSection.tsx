import Image from 'next/image';
import Link from 'next/link';
import data from './data.json';

export default function FeaturesSection() {
    const whyUs = data.whyUs;

    return (
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
    );
}
