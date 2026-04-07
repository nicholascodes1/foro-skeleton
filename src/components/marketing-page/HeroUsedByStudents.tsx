import Image from "next/image";
import Navbar from "@/src/layout/Navbar";

export default function HeroUsedByStudents() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "clamp(400px, 44.1vw, 700px)" }}
      aria-label="Used by students at top universities"
    >
      {/* Background painting */}
      <Image
        src="/images/hero-background.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/* Overlay for subtle depth */}
      <div className="absolute inset-0 bg-black/10 z-10" aria-hidden="true" />

      {/* Navbar overlaid on the background */}
      <Navbar />

      {/* Hero content */}
      <div
        className="relative z-10 flex flex-col"
        style={{
          paddingTop: "clamp(130px, 14.17vw, 204px)",
          paddingLeft: "clamp(40px, 6.53vw, 94px)",
          paddingRight: "clamp(24px, 5.83vw, 84px)",
          paddingBottom: "clamp(60px, 10.97vw, 158px)",
          gap: "clamp(10px, 1.39vw, 20px)",
        }}
      >
        {/* Heading: "Used By Students At" */}
        <h1
          className="font-[family-name:var(--font-garamond)] font-medium"
          style={{
            fontSize: "clamp(36px, 5.35vw, 77px)",
            lineHeight: 0.94,
            color: "var(--color-brand-cream)",
          }}
        >
          <span>Used By </span>
          <em>Students</em>
          <span> At</span>
        </h1>

        {/* University logos strip */}
        <img
          src="/images/university-logos.svg"
          alt="Used by students at Harvard, LSE, Columbia, University of Chicago, Tulsa, University of Michigan, University of Cambridge, and Stanford University"
          className="w-full object-contain"
          style={{
            maxWidth: "1296px",
            height: "auto",
            maxHeight: "clamp(90px, 12.5vw, 180px)",
          }}
        />
      </div>
    </section>
  );
}
