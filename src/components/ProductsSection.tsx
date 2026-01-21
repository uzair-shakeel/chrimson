import Image from 'next/image';
import data from './data.json';

export default function ProductsSection() {
    const productsSection = data.productsSection;
    const products = productsSection.items;

    return (
        <section className=" container mx-auto px-4 py-20 ">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="block text-[13px] font-semibold tracking-wider text-[#062A4D] mb-4 uppercase">
                    {productsSection.leadingText}
                </span>
                <h2 className="text-[38px] md:text-[46px] lg:text-[56px] font-bold text-[#062A4D] leading-tight">
                    {productsSection.heading}
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {products.map((product, index) => (
                    <div key={index} className="flex cursor-pointer flex-col items-center text-center group">
                        {/* Circular Image */}
                        <div className="relative w-[215px] h-[215px] mb-8 group-hover:scale-110 transition-transform duration-500 rounded-full overflow-hidden shadow-lg">

                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover  "
                            />
                        </div>

                        {/* Content */}
                        <span className="text-[14px] text-gray-500 mb-2 font-light">
                            {product.tag}
                        </span>
                        <h3 className="text-[24px] font-bold text-[#062A4D] mb-4">
                            {product.title}
                        </h3>
                        <p className="text-[17px] text-gray-500 leading-relaxed mb-8 max-w-sm">
                            {product.description}
                        </p>

                        {/* Arrow Button */}
                        {/* 
                Default: White background, Dark border/icon (implied).
                Hover (and middle card by default/example): Teal bg, White icon.
                I will make them all have the hover effect.
            */}
                        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-[#50AAB2] group-hover:border-[#50AAB2] group-hover:text-white text-[#062A4D]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
