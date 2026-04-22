// SubjectTag.tsx
import React from "react";

export type SubjectName =
  | "Maths"
  | "Engineering"
  | "Chemistry"
  | "Physics"
  | "Biology"
  | "Medicine";

interface SubjectTagProps {
  subject: SubjectName;
}

// Dictionary for colors
const SUBJECT_COLOUR: Record<SubjectName, string> = {
  Maths: "bg-[#a1b866]",
  Engineering: "bg-[#f59e42]",
  Chemistry: "bg-[#ef4a60]",
  Physics: "bg-[#5bc0eb]",
  Biology: "bg-[#66c25e]",
  Medicine: "bg-white",
};

// Empty SVG Placeholder Component
const Icon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    {/* TODO: put svg tags here */}
  </svg>
);

export default function SubjectTag({ subject }: SubjectTagProps) {
  const bgColor = SUBJECT_COLOUR[subject] || "bg-gray-200"; // this is a fallback colour

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 ${bgColor} 
        rounded-l-full rounded-tr-full rounded-br-sm shadow-sm border border-black/5`}
    >
      <span className="text-[11px] sm:text-xs font-space-grotesk font-semibold text-black tracking-wide">
        {subject}
      </span>
      <Icon />
    </div>
  );
}