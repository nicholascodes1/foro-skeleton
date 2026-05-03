"use client";

import React from "react";

function Checkbox({ label }: { label: string }) {
  return (
    <button
      role="checkbox" aria-checked={false} aria-label={label}
      className="relative h-5 w-5 shrink-0 rounded-xs focus:outline-none focus:ring-2 focus:ring-black" type="button"
    >
      <svg viewBox="0 0 20 20" fill="none" className="h-full w-full">
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="black" strokeWidth="1.5" fill="none" />
      </svg>
    </button>
  );
}

// Dummy data just for the UI layout
const CATEGORIES = [
  { label: "SUBJECT", options: ["Math", "Science", "Technology"] },
  { label: "LOCATION", options: ["Online", "Hong Kong", "Alcatraz"] },
  { label: "PRIZE TYPE", options: ["Cash", "Certificate", "Scholarship"] },
  { label: "GROUP SIZE", options: ["Solo", "Pairs", "Team"] },
];

export default function FilterComponent({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`transition-all duration-300 overflow-hidden w-full ${isOpen ? "max-h-250 opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"}`}>
      <section className="flex flex-col gap-3 bg-cream border border-black/30 rounded-xl p-6 w-full">
        <div className="flex flex-wrap gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className="flex min-w-45 max-w-60 flex-1 flex-col px-2">
              <p className="h-10 font-medium text-24 leading-10 text-black">{cat.label}</p>
              <div className="h-px w-full bg-black/60 mb-2" />
              <div className="flex flex-col px-2 gap-2 pt-2">
                {cat.options.map((opt) => (
                  <div key={opt} className="flex w-full items-center justify-between">
                    <span className="text-[12px] font-medium text-black truncate pr-2">{opt}</span>
                    <Checkbox label={opt} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}