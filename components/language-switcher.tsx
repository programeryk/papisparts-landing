"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { type Locale, localeInfo, localePath, locales } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const closeIfOutside = (event: Event) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", closeIfOutside);
    document.addEventListener("focusin", closeIfOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", closeIfOutside);
      document.removeEventListener("focusin", closeIfOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={listId}
        className="flex h-10 items-center gap-1 rounded-lg px-2 text-sm font-bold text-ink uppercase transition-colors hover:bg-surface"
      >
        <Globe className="size-5" aria-hidden="true" />
        <span className="sr-only">{label}:</span>
        {locale}
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <ul
        id={listId}
        hidden={!open}
        className="absolute right-0 mt-2 min-w-44 overflow-hidden rounded-xl border border-line bg-white py-1 shadow-lg"
      >
        {locales.map((code) => {
          const current = code === locale;
          return (
            <li key={code}>
              <a
                href={localePath(code)}
                hrefLang={code}
                lang={code}
                aria-current={current ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between gap-4 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-surface hover:text-brand ${
                  current ? "text-brand" : "text-gray-800"
                }`}
              >
                <span>
                  {localeInfo[code].name}
                  <span className="ml-2 text-xs font-bold text-gray-400 uppercase">
                    {code}
                  </span>
                </span>
                {current && <Check className="size-4" aria-hidden="true" />}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
