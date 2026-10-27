"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Messages } from "@/i18n/messages";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

type FloatingActionsProps = {
  m: Messages["floating"] & Messages["common"];
};

export function FloatingActions({ m }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0 })}
            aria-label={m.scrollTop}
            className="fixed bottom-6 left-6 z-40 grid size-12 place-items-center rounded-full bg-ink text-white shadow-lg transition-colors hover:bg-brand"
          >
            <ArrowUp className="size-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={m.writeWhatsapp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group fixed right-6 bottom-6 z-40 flex items-center rounded-full bg-whatsapp p-3 text-white shadow-lg transition-colors hover:bg-whatsapp-dark"
      >
        <WhatsAppIcon className="size-7" />
        <span className="max-w-0 overflow-hidden font-semibold whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-48 group-focus-visible:ml-2 group-focus-visible:max-w-48">
          {m.writeWhatsapp}
        </span>
      </motion.a>
    </>
  );
}
