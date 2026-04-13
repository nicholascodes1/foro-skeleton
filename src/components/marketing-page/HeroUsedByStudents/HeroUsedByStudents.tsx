import React from "react";
import InfiniteCarousel from "./InfiniteCarousell";

export default function HeroUsedByStudents() {
  return (
    <main>
      <section
        className="relative w-full overflow-hidden min-h-96 md:min-h-[512px] lg:min-h-[700px]"
        aria-label="Used by students at top universities"
      >
        {/* Hero content */}
        <div className="relative z-10 flex flex-col pt-32 pl-10 pr-6 pb-16 gap-1 md:pt-40 md:pl-16 md:pr-12 md:pb-28 md:gap-2 lg:pt-52 lg:pl-24 lg:pr-20 lg:pb-40 lg:gap-2.5">
          {/* Heading: "Used By Students At" */}
          <h1 className="font-garamond text-4xl md:text-6xl lg:text-7xl leading-none text-black font-medium">
            <span>Used By </span>
            <em className="text-cream">Students</em>
            <span> At</span>
          </h1>

          {/* University logos strip */}
          <InfiniteCarousel />
        </div>
      </section>
    </main>
  );
}
// fill with HerousedByStudents. Under Landing page 14. Logos need to be put inside public
