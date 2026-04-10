import HeroAboutUs from "@/src/components/marketing-page/HeroAboutUs/HeroAboutUs";
import HeroWelcome from "@/src/components/marketing-page/HeroWelcome";
import HerousedByStudents from "@/src/components/marketing-page/HeroUsedByStudents/HeroUsedByStudents";
import InfiniteCarousel from "@/src/components/marketing-page/HeroUsedByStudents/InfiniteCarousell";

export default function page() {
  return (
    <>
      <HeroWelcome />
      <HeroAboutUs />
      <HerousedByStudents />
    </>
  );
}
