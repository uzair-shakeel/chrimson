import Image from "next/image";
import data from "./data.json";

export default function HeroSection() {
  const heroCopy = data.hero;

  return (
    <section className="relative h-screen w-full overflow-hidden z-0">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Modern interior with windows"
        fill
        className="object-cover"
        priority
      />

      <div
        className="absolute inset-0 opacity-90 z-10"
        style={{
          backgroundImage:
            "linear-gradient(290deg, #B1915E30 0%, #2B2B2B 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-5xl space-y-4 mt-20">
          <p className="font-playfair text-[20px] capitalize italic font-normal tracking-[3.5px]">
            {heroCopy.body}
          </p>
          <h1 className="text-[75px] font-light font-oswald leading-22.5 uppercase tracking-[7.5px]">
            {heroCopy.heading} <br />
            <span className="font-bold">{heroCopy.heading2}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
