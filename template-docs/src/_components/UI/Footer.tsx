import Link from "next/link";
import { FaGithub, FaEnvelope, FaCube, FaBuilding } from "react-icons/fa";
import { IconType } from "react-icons";

import ThemeSwitcher from "@/widgets/switcher/theme";
// import LocaleSwitcher from "@/widgets/switcher/locale";
import { Icon } from "@/widgets/Icon";
import { settings } from "@/lib";

type FooterLink = {
  label: string;
  href: string;
  new?: boolean;
  isDisabled?: boolean;
};

type FooterSection = {
  title: string;
  icon: IconType;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "Principal",
    icon: FaCube,
    links: [
      { label: "Pricing", href: "/pricing", isDisabled: true },
      { label: "Changelog", href: "/changelog", new: true, isDisabled: false },
    ],
  },
  {
    title: "Importante",
    icon: FaBuilding,
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Suporte",
    icon: FaEnvelope,
    links: [
      { label: "FAQ", href: "/faq", isDisabled: true },
      { label: "Docs", href: "/docs", isDisabled: false },
      { label: "Terms", href: "/terms", isDisabled: true },
    ],
  },
];

const socialLinks = [
  { icon: FaGithub, href: settings.links.github, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background pt-12 pb-6 border-t border-foreground/10 text-foreground/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center">
              <Icon />
            </div>

            <p className="text-sm">
              Desenvolvido por{" "}
              <Link
                href="https://github.com/yeytaken"
                target="_blank"
                className="hover:underline"
              >
                {settings.author}
              </Link>
            </p>

            <p className="text-xs">
              © {new Date().getFullYear()} ARC Studio. All rights reserved.
            </p>

            <div className="flex space-x-4 mt-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider flex items-center space-x-2">
                <section.icon className="w-4 h-4" />
                <span>{section.title}</span>
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="flex items-center space-x-2">
                    {link.isDisabled ? (
                      <span className="text-sm text-foreground/40 cursor-not-allowed">
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        target={
                          link.href.startsWith("http") || link.href.startsWith("mailto:")
                            ? "_blank"
                            : "_self"
                        }
                        className="text-sm hover:underline transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}

                    {link.new && (
                      <span className="text-xs font-extrabold bg-primary/20 text-primary py-1 px-1 rounded-md uppercase tracking-widest">
                        NEW
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-foreground/60 text-center md:text-left">
            Template Docs v{settings.version} — Feito com ♥ por {settings.author}
          </p>

          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            {/* <span className="h-5 w-px bg-foreground/30" /> */}
            {/* <LocaleSwitcher /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
