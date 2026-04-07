import Image from "next/image";
import Link from "next/link";
import ArrowRightDark from "@/src/assets/icons/arrow-right-dark.svg";
import ArrowRight from "@/src/assets/icons/arrow-right.svg";
import LinkedInIcon from "@/src/assets/icons/social-linkedin.svg";
import InstagramIcon from "@/src/assets/icons/social-instagram.svg";
import EmailIcon from "@/src/assets/icons/social-email.svg";
import { FC, SVGProps } from "react";

type LegalLink = {
  label: string;
  href: string;
  ArrowIcon: FC<SVGProps<SVGElement>>;
};

type SocialLink = {
  label: string;
  href: string;
  Icon: FC<SVGProps<SVGElement>>;
};

const legalLinks: LegalLink[] = [
  { label: "Terms of Service", href: "/terms", ArrowIcon: ArrowRightDark },
  { label: "Privacy", href: "/privacy", ArrowIcon: ArrowRight },
  { label: "Disclaimers", href: "/disclaimers", ArrowIcon: ArrowRight },
];

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: InstagramIcon,
  },
  { label: "Email us", href: "mailto:hello@ilforo.com", Icon: EmailIcon },
];

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-black"
      style={{ backgroundColor: "var(--color-brand-cream)" }}
      aria-label="Site footer"
    >
      <div
        className="flex flex-wrap items-start gap-x-16 gap-y-10"
        style={{
          paddingTop: "clamp(16px, 1.32vw, 19px)",
          paddingBottom: "clamp(40px, 4.1vw, 59px)",
          paddingLeft: "clamp(40px, 6.4vw, 92px)",
          paddingRight: "clamp(40px, 6.4vw, 92px)",
        }}
      >
        {/* ── Left column: Logo + description + copyright + socials ── */}
        <div
          className="flex flex-col"
          style={{
            minWidth: "clamp(180px, 21.3vw, 306px)",
            gap: "clamp(14px, 1.94vw, 28px)",
          }}
        >
          <Link href="/marketing-page" aria-label="IL FORO — go to homepage">
            <Image
              src="/images/il-foro-logo.png"
              width={163}
              height={163}
              alt="IL FORO logo"
              className="object-contain"
              style={{ width: "clamp(80px, 11.32vw, 163px)", height: "auto" }}
            />
          </Link>

          <p
            className="font-[family-name:var(--font-grotesk)] font-medium text-black/50 leading-snug"
            style={{
              fontSize: "clamp(13px, 1.39vw, 20px)",
              maxWidth: "287px",
            }}
          >
            A centralised solution to finding competitions in fields of your
            interest and like-minded teammates.
          </p>

          <p
            className="font-[family-name:var(--font-grotesk)] font-medium text-black/50"
            style={{ fontSize: "clamp(11px, 1.39vw, 20px)" }}
          >
            © 2025 ilforo LLC. All rights reserved.
          </p>

          {/* Social icons */}
          <div
            className="flex items-center"
            style={{ gap: "clamp(12px, 1.11vw, 16px)" }}
          >
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="block hover:opacity-70 transition-opacity"
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon
                  style={{
                    width: "clamp(18px, 1.94vw, 28px)",
                    height: "clamp(18px, 1.94vw, 28px)",
                    stroke: "var(--color-brand-dark)",
                    fill: "none",
                  }}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right column: Legal ── */}
        <div
          className="flex flex-col"
          style={{
            gap: "clamp(14px, 1.94vw, 28px)",
            paddingTop: "clamp(20px, 3.47vw, 50px)",
          }}
        >
          <h2
            className="font-[family-name:var(--font-garamond)] font-semibold"
            style={{
              fontSize: "clamp(22px, 2.5vw, 36px)",
              color: "var(--color-brand-accent)",
            }}
          >
            Legal
          </h2>

          <ul
            className="flex flex-col"
            style={{ gap: "clamp(10px, 1.67vw, 24px)" }}
          >
            {legalLinks.map(({ label, href, ArrowIcon }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="flex items-center hover:opacity-80 transition-opacity"
                  style={{ gap: "clamp(8px, 1.32vw, 19px)" }}
                >
                  <ArrowIcon
                    style={{
                      width: "6px",
                      height: "12px",
                      fill: "rgba(0,0,0,0.5)",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-[family-name:var(--font-grotesk)] font-medium text-black/50"
                    style={{ fontSize: "clamp(13px, 1.39vw, 20px)" }}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
