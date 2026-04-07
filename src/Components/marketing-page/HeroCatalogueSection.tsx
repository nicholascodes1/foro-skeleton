import CompetitionCard from "../dashboard/CompetitionCard";

const CARDS_PER_SET = 5;

export default function HeroCatalogueSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col overflow-visible"
      aria-label="Il Foro competition catalogue"
    >
      <div className="flex flex-col flex-1 pt-10 md:pt-14 min-h-0">

        {/* Heading */}
        <div className="pl-[8%] pr-[4%] lg:pl-[12.4%] shrink-0">
          <h2
            className="font-garamond font-medium text-black"
            style={{
              fontSize: "clamp(36px, 5.35vw, 77px)",
              lineHeight: 0.94,
            }}
          >
            <em>Il Foro</em>{" "}
            has a near endless catalogue of competitions and opportunities for
            you to seize
          </h2>
        </div>

        {/* Flexible spacer */}
        <div className="flex-1" />

        {/* Infinite marquee card row */}
        <div className="overflow-visible w-full pb-10 shrink-0" aria-label="Competition cards">
          {/*
           * Two identical sets rendered side by side.
           * The marquee animation translates the track by -50% (= one set's width),
           * which seamlessly loops back to the start.
           * pr-[22px] on each set matches the 22px inter-card gap so the
           * transition from set-1's last card to set-2's first card is gapless.
           */}
          <div className="flex marquee-track" role="list">
            {[0, 1].map((setIdx) => (
              <div
                key={setIdx}
                className="flex gap-[22px] pr-[22px] shrink-0"
                aria-hidden={setIdx === 1 ? true : undefined}
              >
                {Array.from({ length: CARDS_PER_SET }).map((_, i) => {
                  const cardIndex = setIdx * CARDS_PER_SET + i;
                  const rotation = cardIndex % 2 === 0 ? 35 : -35;
                  return (
                    <div
                      key={i}
                      role={setIdx === 0 ? "listitem" : undefined}
                      className="overflow-visible"
                    >
                      <CompetitionCard rotation={rotation} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
