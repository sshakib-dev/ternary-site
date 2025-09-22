"use client";

import Image from "next/image";
import { Logos } from "./logos";

export default function HeroSection() {
  return (
    <section className="-my-10 lg:-my-0 flex flex-col gap-4 md:gap-10 w-full">
      {/* Responsive Heading */}
      <h1 className="px-6 md:px-10 scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight max-w-[90%] md:max-w-[800px]">
        Building products that shape the lives of millions every single day.
      </h1>

      {/* Responsive Aspect Ratio */}

        <Image
          src={"/ternary_home_cover.png"}
          alt="Hero Image"
          className="object-cover border-t border-b border-white/20"
          width={2560}
          height={1000}
        />
              <Logos/>

    </section>
  );
}
