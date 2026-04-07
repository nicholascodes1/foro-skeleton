import HeroUsedByStudents from "@/src/components/marketing-page/HeroUsedByStudents";
import Footer from "@/src/layout/Footer";

export default function MarketingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroUsedByStudents />
      <Footer />
    </main>
  );
}
