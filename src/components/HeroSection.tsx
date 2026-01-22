import Image from 'next/image';
import data from './data.json';

export default function HeroSection() {
  const heroCopy = data.hero;

  return (
    <section className="relative h-screen w-full overflow-hidden z-0">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Modern interior with windows"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-5xl space-y-5 mt-20">
          <h1 className="text-white text-[53px] md:text-[78px] lg:text-[90px] font-[600] leading-[0.9] tracking-tight uppercase max-w-4xl">
            {heroCopy.heading}
          </h1>

          <div className="flex items-start gap-8 max-w-2xl">
            {/* Scroll Indicator Icon Left of Text */}
            <div className="hidden md:flex pt-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white opacity-80"
              >
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <p className="text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[500px]">
              {heroCopy.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
