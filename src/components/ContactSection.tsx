"use client";
import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';
import data from './data.json';

const ContactSection = () => {
    const contactCopy = data.contact;

    return (
        <section className="relative w-full h-screen sm:h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center lg:justify-end overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/contact.jpg"
                    alt="Modern interior background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Overlay/Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 flex justify-end">

                {/* White Card */}
                <div className="bg-white p-8 md:p-12 lg:p-16 max-w-xl w-full shadow-2xl relative translate-y-12 md:translate-y-0 lg:mr-10">

                    <div className="mb-8">
                        <h4 className="text-[#062A4D] font-bold text-xs tracking-widest uppercase mb-4">
                            {contactCopy.leadingText}
                        </h4>
                        <h2 className="text-[#062A4D] text-4xl md:text-5xl font-bold leading-tight mb-2">
                            {contactCopy.heading}
                        </h2>
                    </div>

                    <ContactForm simple={true} />
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
