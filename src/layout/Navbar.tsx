import Image from "next/image";
import Link from "next/link";
import NewsletterIcon from "@/src/assets/icons/newsletter-icon.svg";

export default function Navbar() {
  return (
    <nav
      className="absolute top-0 left-0 right-0 flex items-center justify-between z-20"
      style={{
        height: "clamp(120px, 14.79vw, 213px)",
        paddingLeft: "clamp(40px, 8.13vw, 117px)",
        paddingRight: "clamp(40px, 9.03vw, 130px)",
      }}
      aria-label="Main navigation"
    >
      {/* Left nav links */}
      <div
        className="flex items-center"
        style={{ gap: "clamp(20px, 3.15vw, 45px)" }}
      >
        <Link
          href="/marketing-page/about"
          className="font-[family-name:var(--font-grotesk)] font-medium text-black hover:opacity-70 transition-opacity"
          style={{ fontSize: "clamp(15px, 1.89vw, 27px)" }}
        >
          About
        </Link>
        <Link
          href="/marketing-page/for-hosts"
          className="font-[family-name:var(--font-grotesk)] font-medium text-black hover:opacity-70 transition-opacity"
          style={{ fontSize: "clamp(15px, 1.89vw, 27px)" }}
        >
          For Hosts
        </Link>
      </div>

      {/* Center logo — absolutely centered, extends from y=0 */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <Link href="/marketing-page" aria-label="IL FORO — home">
          <Image
            src="/images/il-foro-logo.png"
            width={213}
            height={213}
            alt="IL FORO"
            className="object-contain"
            style={{ width: "clamp(100px, 14.79vw, 213px)", height: "auto" }}
            priority
          />
        </Link>
      </div>

      {/* Right nav links + newsletter CTA */}
      <div
        className="flex items-center"
        style={{ gap: "clamp(20px, 3.15vw, 45px)" }}
      >
        <Link
          href="/marketing-page/winners-showcase"
          className="font-[family-name:var(--font-grotesk)] font-medium text-black hover:opacity-70 transition-opacity"
          style={{ fontSize: "clamp(15px, 1.89vw, 27px)" }}
        >
          Winners
        </Link>

        <a
          href="#newsletter"
          className="flex items-center border border-black rounded-2xl hover:opacity-90 active:scale-95 transition-all"
          style={{
            backgroundColor: "var(--color-brand-accent)",
            gap: "clamp(4px, 0.43vw, 6px)",
            paddingTop: "clamp(10px, 1.18vw, 17px)",
            paddingBottom: "clamp(10px, 1.18vw, 17px)",
            paddingLeft: "clamp(16px, 2.29vw, 33px)",
            paddingRight: "clamp(16px, 2.29vw, 33px)",
          }}
          aria-label="Subscribe to Newsletter"
        >
          <span
            className="font-[family-name:var(--font-grotesk)] font-medium whitespace-nowrap"
            style={{
              color: "var(--color-brand-cream)",
              fontSize: "clamp(12px, 1.55vw, 22px)",
            }}
          >
            Newsletter
          </span>
          <NewsletterIcon
            style={{
              width: "clamp(13px, 1.67vw, 24px)",
              height: "clamp(12px, 1.53vw, 22px)",
              stroke: "var(--color-brand-cream)",
              fill: "none",
              flexShrink: 0,
            }}
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
}
