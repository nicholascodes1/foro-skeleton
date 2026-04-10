import React from "react";

const garamondStyle: React.CSSProperties = {
  fontFamily: "var(--font-eb-garamond, 'EB Garamond', Georgia, serif)",
};

export default function HeroCatalogueSection() {
  return (
    <section
      className="w-full overflow-hidden"
      aria-label="Il Foro competition catalogue"
    >
      {/* Heading */}
      <h2
        style={{
          ...garamondStyle,
          fontSize: "clamp(2rem, 5.35vw, 4.82rem)",
          lineHeight: 0.94,
          fontWeight: 500,
          color: "#000000",
          paddingLeft: "clamp(24px, 6.53vw, 94px)",
          paddingRight: "clamp(24px, 5.83vw, 84px)",
          paddingTop: "clamp(32px, 3.47vw, 50px)",
          marginBottom: "clamp(16px, 1.39vw, 20px)",
        }}
      >
        {/* "Il Foro" — italic, brand accent colour */}
        <em style={{ color: "var(--color-brand-accent)" }}>Il Foro</em>
        {" has a near endless catalogue of competitions and oppurtunities for you to seize"}
      </h2>

      {/* Competition cards image — intentionally overflows both sides */}
      <div
        className="relative w-full overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/marketing-page-assets/HeroCatalogue-assets/competition-cards.svg"
          alt="A row of competition cards including VEX Robotics, John Locke Essay, Cambridge Rethink Essay, PolyU Business Case, and Blue Ocean Competition 2025"
          style={{
            width: "clamp(1200px, 119vw, 1714px)",
            maxWidth: "none",
            display: "block",
            marginInline: "auto",
          }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
