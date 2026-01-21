"use client";
import React from "react";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <section className=" mt-10">
      <div className="h-screen w-full">
        <div className="h-full max-w-full">
          <Image
            src={`/hero-background.png`}
            alt="Brand logos"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Partners;
