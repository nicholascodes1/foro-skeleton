import Image from "next/image";

// 1. Interfaces
export interface SubjectTag {
  name: string;
  variant: "grey" | "teal";
}

export interface CompetitionCardData {
  title: string;
  image: string;
  tags: string[];
  subjects: SubjectTag[];
  location: string;
  prizeType: string;
  winRate: string;
  format: string;
  information: string;
  studentsCount: number;
  spotsRemaining: string;
}

const AVATAR_COLORS = ["#60a5fa", "#f472b6", "#4ade80"];

const LocationPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-400 shrink-0"
    aria-hidden="true"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

interface CompetitionCardProps {
  data: CompetitionCardData;
  rotation?: number;
}

export default function CompetitionCard({ data, rotation = 0 }: CompetitionCardProps) {
  return (
    <article
      className="w-full flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer origin-center"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Responsive Image Header */}
      <div className="relative w-full aspect-[3/2] bg-gray-100">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4 flex flex-col gap-3.5">
        
        {/* TODO: we need a better way to add tags here with a dict? */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] sm:text-[11px] font-space-grotesk font-bold px-2 py-1 rounded-md leading-none border ${
                  tag === "Popular"
                    ? "bg-rose-50 text-rose-600 border-rose-100"
                    : "bg-blue-50 text-blue-600 border-blue-100"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              <div
                className="w-5.5 h-5.5 rounded-full bg-white border border-gray-200 shadow-sm
                  flex items-center justify-center text-[10px] font-extrabold text-blue-500 z-10"
                aria-label="Google"
              >
                G
              </div>
              <div
                className="w-5.5 h-5.5 rounded-full border border-gray-200 bg-red-600 shadow-sm
                  flex items-center justify-center text-[7px] font-extrabold text-white leading-none z-0"
                aria-label="VEX"
              >
                VEX
              </div>
            </div>
            <span className="text-[11px] font-space-grotesk text-gray-400 font-semibold">25+</span>
          </div>
        </div>

        {/* Title + Quick Action Icons */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-garamond text-lg sm:text-xl font-bold leading-tight text-gray-900 line-clamp-2">
            {data.title}
          </h3>

          {/* TODO we need svg for these */}
          <div className="flex gap-2.5 shrink-0 mt-1 text-gray-400">
            <button aria-label="Add to wishlist" className="hover:text-amber-400 transition-colors text-sm">
              ☆
            </button>
            <button aria-label="Save competition" className="hover:text-blue-500 transition-colors text-sm">
              ⊡
            </button>
            <button aria-label="Share competition" className="hover:text-gray-800 transition-colors text-sm">
              ↗
            </button>
          </div>
        </div>

        {/* Subject Tags */}
        <div className="flex gap-2 flex-wrap">
          {data.subjects.map(({ name, variant }) => (
            <span
              key={name}
              className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-space-grotesk font-semibold px-2 py-1 rounded-md border ${
                variant === "grey"
                  ? "bg-gray-50 text-gray-600 border-gray-200"
                  : "bg-teal-50 text-teal-700 border-teal-100"
              }`}
            >
              {name}
              <span className="text-[9px]" aria-hidden="true">
                {variant === "grey" ? " ✓" : " 🔧"}
              </span>
            </span>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5">
          <LocationPinIcon />
          <span className="text-[11px] font-space-grotesk font-medium text-gray-500">
            {data.location}
          </span>
        </div>

        {/* Details Grid */}
        <div className="flex flex-col gap-1.5 mt-0.5">
          <p className="text-[11px] sm:text-xs font-space-grotesk text-gray-600 leading-snug">
            <span className="font-bold text-gray-800">Prize Type:</span> {data.prizeType}
          </p>
          <p className="text-[11px] sm:text-xs font-space-grotesk text-gray-600 leading-snug">
            <span className="font-bold text-gray-800">Win rate:</span> {data.winRate}
          </p>
          <p className="text-[11px] sm:text-xs font-space-grotesk text-gray-600 leading-snug">
            <span className="font-bold text-gray-800">Format:</span> {data.format}
          </p>
        </div>

        {/* Information Paragraph */}
        <div className="mt-0.5">
          <p className="text-[11px] sm:text-xs font-space-grotesk font-bold text-gray-800 underline underline-offset-2 mb-1.5">
            Information:
          </p>
          <p className="text-[11px] sm:text-xs font-space-grotesk text-gray-500 leading-relaxed line-clamp-3">
            {data.information}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-0.5" />

        {/* Footer: Avatars + Spots */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2" aria-hidden="true">
              {AVATAR_COLORS.map((color, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="text-[10px] sm:text-[11px] font-space-grotesk text-gray-500 font-semibold">
              {data.studentsCount}+ Students Registered!
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-space-grotesk text-gray-500 font-semibold">
            {data.spotsRemaining} Spots Remaining
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2.5 mt-1">
          <button
            className="flex-1 py-2.5 text-[11px] sm:text-xs font-space-grotesk font-bold text-gray-700
              bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
            aria-label={`More info about ${data.title}`}
          >
            More Info
          </button>
          <button
            className="flex-1 py-2.5 text-[11px] sm:text-xs font-space-grotesk font-bold text-black
              bg-[#6fbc7b] rounded-lg hover:bg-[#66ae71] transition-all shadow-sm"
            aria-label={`Register for ${data.title}`}
          >
            Register
          </button>
        </div>
      </div>
    </article>
  );
}