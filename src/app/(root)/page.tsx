"use client";

import { Parallax } from "react-parallax";
import HeroWelcome from "@/components/marketing-page/Welcome";
import HeroAboutUs from "@/components/marketing-page/AboutUs/AboutUs";
import HeroFourWays from "@/components/marketing-page/FourWaysSection/HeroFourWays";
import HeroUsedByStudents from "@/components/marketing-page/UsedByStudents/UsedByStudents";

export default function Page() {
  return (
    <main>
      <Parallax 
        bgImage="/images/hero-catalogue-bg.png" 
        strength={800} // adjust the strength of the parallax effect
        bgImageStyle={{ objectFit: "contain", objectPosition: "top" }}
      >
        
        <div className="pt-24">
          <HeroWelcome />
        </div>

        <div className="relative z-20">
          <div className="mt-[375px]">
            <HeroAboutUs />
          </div>
          <HeroFourWays />
          <HeroUsedByStudents />
        </div>

      </Parallax>
    </main>
  );
}