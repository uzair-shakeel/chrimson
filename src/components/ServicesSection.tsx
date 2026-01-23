import Image from 'next/image';
import data from './data.json';

export default function ProductsSection() {
    const products = data.servicesGrid.items;
    return (
        <section className="bg-white py-12 px-6">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="relative h-[400px] overflow-hidden group cursor-pointer rounded-sm"
                        >
                            {/* Background Image */}
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradients */}
                            {/* Top Gradient */}
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                            {/* Bottom Gradient (Always slightly visible for title readability, intensifies on hover) */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                                {/* Top ID - Slides down from top */}
                                <div className="text-[20px] md:text-[24px] font-bold text-white transition-all duration-500 ease-out opacity-0 -translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                                    {product.id}
                                </div>

                                {/* Bottom Content */}
                                <div className="text-white">
                                    {/* Title - Slides up slightly on hover */}
                                    <h3 className="text-[32px] md:text-[40px] font-bold leading-tight transition-transform duration-500 ease-out transform group-hover:-translate-y-2">
                                        {product.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
