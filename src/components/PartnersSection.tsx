"use client";
import React from "react";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <section className=" mt-10">
      <div className="h-screen md:max-h-[600px] w-full">
        <div className="h-full max-w-full">
          <Image
            src={`/partners-bg.jpg`}
            alt="Brand logos"
            width={1000}
            height={100}
            className="bg-center object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Partners;
