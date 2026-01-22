"use client";
import React from "react";
import Image from "next/image";

const Brands: React.FC = () => {
  return (
    <section className="bg-white sm:pl-5 sm:mt-0 mt-10">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="h-full max-w-full">
          <Image
            src={`/logo (1).jpg`}
            alt="Brand logos"
            width={1000}
            height={1000}
            className="object-contain w-full h-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Brands;
