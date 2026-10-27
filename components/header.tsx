"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { format } from "@/i18n/format";
import type { Messages } from "@/i18n/messages";
import { navigation, site } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { LanguageSwitcher } from "./language-switcher";

type HeaderProps = {
  locale: Locale;
  nav: Messages["nav"];
  m: Messages["header"];
};

export function Header({ locale, nav, m }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || menuOpen
          ? "border-line shadow-sm"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4">
        <a href="#top" aria-label={format(m.home, { name: site.name })}>
          <Image
            src="/logo.png"
            alt=""
            width={570}
            height={132}
            preload
            className="h-9 w-auto select-none sm:h-10"
          />
        </a>

        <nav aria-label={m.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-semibold text-gray-700">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition-colors hover:text-brand"
                >
                  {nav[item.label]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher locale={locale} label={m.language} />
          <span className="hidden sm:block">
            <ButtonLink href={site.phone.href} size="sm">
              <Phone className="size-4" aria-hidden="true" />
              {site.phone.display}
            </ButtonLink>
          </span>
          <a
            href={site.phone.href}
            aria-label={format(m.call, { phone: site.phone.display })}
            className="grid size-10 place-items-center rounded-lg bg-brand text-white sm:hidden"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? m.closeMenu : m.openMenu}
            className="grid size-10 place-items-center rounded-lg text-ink hover:bg-surface lg:hidden"
          >
            {menuOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={m.mobileNav}
          className="border-t border-line bg-white lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-base font-semibold text-gray-800 hover:text-brand"
                >
                  {nav[item.label]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
