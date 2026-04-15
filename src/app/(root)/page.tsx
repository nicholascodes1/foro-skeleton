<<<<<<< HEAD
import HeroAboutUs from "@/components/marketing-page/HeroAboutUs/HeroAboutUs";
import HeroFourWays from "@/components/marketing-page/FourWaysSection/HeroFourWays";
import HeroWelcome from "@/components/marketing-page/HeroWelcome";
import HeroUsedByStudents from "@/components/marketing-page/HeroUsedByStudents/HeroUsedByStudents";
=======
import HeroAboutUs from "@/src/components/marketing-page/AboutUs/AboutUs";
import HeroFourWays from "@/src/components/marketing-page/FourWaysSection/HeroFourWays";
import HeroWelcome from "@/src/components/marketing-page/Welcome";
import HeroUsedByStudents from "@/src/components/marketing-page/UsedByStudents/UsedByStudents";
>>>>>>> origin/main
  
export default function Page() {
  return (
    <main>
      <HeroWelcome />
      <HeroAboutUs />
      <HeroFourWays />
      <HeroUsedByStudents />
    </main>
  );
}
