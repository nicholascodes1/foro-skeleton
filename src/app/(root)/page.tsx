"use client";

import { Parallax } from "react-parallax";
import HeroWelcome from "@/components/marketing-page/Welcome";
import HeroAboutUs from "@/components/marketing-page/AboutUs/AboutUs";
import HeroFourWays from "@/components/marketing-page/FourWaysSection/HeroFourWays";
import HeroUsedByStudents from "@/components/marketing-page/UsedByStudents/UsedByStudents";

export default function Page() {
  return (
    <main>
      {/* Wrap the ENTIRE page content inside the Parallax component */}
      <Parallax 
        bgImage="/images/hero-catalogue-bg.png" 
        strength={800} // You might want to increase strength since the scroll is longer now
        bgImageStyle={{ objectFit: "contain", objectPosition: "top" }}
      >
        
        {/* Top Hero Section */}
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