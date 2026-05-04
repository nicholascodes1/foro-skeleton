"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Interactive Checkbox
function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <button
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className="flex w-full items-center justify-between py-1.5 px-2 -mx-2 cursor-pointer hover:bg-black/5 rounded-md transition-all text-left focus:outline-none group"
      type="button"
    >
      <span className="text-[12px] font-medium text-black truncate pr-2">{label}</span>
      <div className={`relative h-5 w-5 shrink-0 rounded-sm border-2 border-black transition-colors duration-200 ${checked ? 'bg-black' : 'bg-transparent'}`}>
        {checked && (
          // TODO: can someone change this svg into Image tag from next.js, turn the svg code into a .svg file first.
          <motion.svg 
            viewBox="0 0 20 20" 
            fill="none" 
            className="h-full w-full text-cream absolute inset-0"
          >
            <motion.path 
              d="M5 10.5L8.5 14L15 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              style={{ translateZ: 0 }}
              transition={{ 
                opacity: { duration: 0.1 }, 
                pathLength: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } 
              }} 
            />
          </motion.svg>
        )}
      </div>
    </button>
  );
}

export interface FilterState {
  subjects: string[];
  location: string;
  prizes: string[];
  groupTypes: string[]; // for "Individual" and "Duo (2 members)"
  teamSize: number | null; // for the exact team number search
}

interface FilterProps {
  isOpen: boolean;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const SUBJECTS = ["Chemistry", "Physics", "Maths", "Environmental Science", "Computer Science", "Economics", "Biology"];
const PRIZES = ["Cash", "Certificate", "Scholarship"];
const GROUPS = ["Individual", "Duo (2 members)"];

export default function Filter({ isOpen, filters, setFilters }: FilterProps) {
  
  const toggleArrayItem = (key: keyof FilterState, item: string) => {
    setFilters((prev) => {
      const currentArray = prev[key] as string[];
      return {
        ...prev,
        [key]: currentArray.includes(item)
          ? currentArray.filter((i) => i !== item)
          : [...currentArray, item],
      };
    });
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          // during this animation, the buttom border doesn't animate and is clipped, can someone find a fix for this?
          initial={{ height: 0, opacity: 0, marginBottom: 0 }}
          animate={{ 
            height: "auto", 
            opacity: 1, 
            marginBottom: 24,
          }}
          exit={{ 
            height: 0, 
            opacity: 0, 
            marginBottom: 0 
          }}
          transition={{ 
            height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
            opacity: { duration: 0.2 } 
          }}
          className="overflow-hidden w-full"
        >
          <section className="flex flex-col gap-3 bg-cream border border-black/30 rounded-xl p-6 w-full">
            <div className="flex flex-wrap items-start gap-6">
              
              {/* subjects */}
              <div className="flex min-w-45 max-w-60 flex-1 flex-col px-2">
                <p className="h-10 font-medium text-12 leading-10 text-black">SUBJECT</p>
                <div className="h-px w-full bg-black/60 mb-2" />
                <div className="flex flex-col px-2 pt-2 max-h-40 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.2)_transparent] pr-1">
                  {/* web-kit lets us add hover colour change but doesn't work on firefox, the new 2025 scrollbar stuff is so restrictive i can't add hover, neither of these options have tailwind wtf man */}
                  {SUBJECTS.map((opt) => (
                    <Checkbox key={opt} checked={filters.subjects.includes(opt)} onChange={() => toggleArrayItem("subjects", opt)} label={opt} />
                  ))}
                </div>
              </div>

              {/* location (typed) */}
              <div className="flex min-w-45 max-w-60 flex-1 flex-col px-2">
                <p className="h-10 font-medium text-12 leading-10 text-black">LOCATION</p>
                <div className="h-px w-full bg-black/60 mb-2" />
                <div className="flex flex-col px-2 pt-2">
                  <input
                    type="text"
                    placeholder="Type location (e.g. Online)"
                    value={filters.location}
                    onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full bg-transparent border-b border-black/40 text-[12px] py-1 text-black placeholder:text-gray-500 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* prize type */}
              <div className="flex min-w-45 max-w-60 flex-1 flex-col px-2">
                <p className="h-10 font-medium text-12 leading-10 text-black">PRIZE</p>
                <div className="h-px w-full bg-black/60 mb-2" />
                <div className="flex flex-col px-2 pt-2">
                  {PRIZES.map((opt) => (
                    <Checkbox key={opt} checked={filters.prizes.includes(opt)} onChange={() => toggleArrayItem("prizes", opt)} label={opt} />
                  ))}
                </div>
              </div>

              {/* group size */}
              <div className="flex min-w-45 max-w-60 flex-1 flex-col px-2">
                <p className="h-10 font-medium text-12 leading-10 text-black">GROUP SIZE</p>
                <div className="h-px w-full bg-black/60 mb-2" />
                <div className="flex flex-col px-2 pt-2">
                  {GROUPS.map((opt) => (
                    <Checkbox key={opt} checked={filters.groupTypes.includes(opt)} onChange={() => toggleArrayItem("groupTypes", opt)} label={opt} />
                  ))}
                  
                  {/* value input */}
                  <div className="flex w-full items-center justify-between mt-2">
                    <span className="text-[12px] font-medium text-black truncate pr-2">Team size:</span>
                    <div className="flex items-center border-b border-black/40 transition-colors focus-within:border-black">
                      
                      <input
                        type="number"
                        min="3"
                        placeholder="#"
                        value={filters.teamSize || ""}
                        onChange={(e) => setFilters(prev => ({ ...prev, teamSize: e.target.value ? parseInt(e.target.value) : null }))}
                        className="w-8 bg-transparent text-[12px] py-1 text-center text-black focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />

                      {/* the up and down arrows */}
                      <div className="flex flex-col justify-center pl-1">
                        
                        {/* up */}
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.8 }}
                          onClick={() => setFilters(prev => ({ 
                            ...prev, 
                            teamSize: prev.teamSize ? prev.teamSize + 1 : 3 
                          }))}
                          className="flex h-3 w-4 items-center justify-center text-black/60 hover:text-black transition-colors focus:outline-none"
                        >
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 15l-6-6-6 6"/>
                          </svg>
                        </motion.button>

                        {/* down */}
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.8 }}
                          onClick={() => setFilters(prev => ({ 
                            ...prev, 
                            teamSize: prev.teamSize && prev.teamSize > 3 ? prev.teamSize - 1 : null 
                          }))}
                          className="flex h-3 w-4 items-center justify-center text-black/60 hover:text-black transition-colors focus:outline-none"
                        >
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6"/>
                          </svg>
                        </motion.button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}