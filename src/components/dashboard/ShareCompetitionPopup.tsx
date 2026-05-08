"use client";

import Image from "next/image";
import CompetitionCardData from "src/components/dashboard/CompetitionCard.tsx";

const competitionLink = CompetitionCardData.competitionWebsite;    


export default function ShareCompetitionPopup() {
    const handleCopy = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    };

    return (
      <div>
        <div>
          <h1>Copy link to clipboard</h1>
        </div>

        <div className="flex flex-row gap-4">
          <p>{competitionLink}</p>
          <button onClick={() => handleCopy(competitionLink)}>
            <Image
              src="/dashboard-assets/copy-to-clipboard.svg"
              width={100}
              height={100}
              alt="Copy to clipboard icon"
            />
          </button>
        </div>
      </div>
    );
}
