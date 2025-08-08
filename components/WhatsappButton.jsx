import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsappButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href="https://wa.me/48888399666"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
        aria-label="Napisz na WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          width="28"
          height="28"
        >
          <path d="M16.001 3.2C9.373 3.2 3.8 8.773 3.8 15.4c0 2.723.888 5.243 2.38 7.326L4 28l5.422-1.741A12.164 12.164 0 0 0 16 27c6.627 0 12.2-5.573 12.2-12.2S22.627 3.2 16.001 3.2zm0 22c-1.96 0-3.781-.57-5.32-1.553l-.38-.237L6 25l1.59-4.32-.276-.444A10.812 10.812 0 0 1 5.2 15.4c0-5.95 4.851-10.8 10.8-10.8 5.95 0 10.8 4.85 10.8 10.8 0 5.95-4.85 10.8-10.8 10.8zm5.934-8.786c-.163-.082-1.004-.495-1.16-.551-.155-.056-.268-.082-.381.082-.112.163-.438.55-.538.664-.099.112-.199.123-.362.041-.163-.082-1.171-.43-2.23-1.37-.824-.735-1.381-1.641-1.543-1.804-.163-.163-.017-.252.062-.334.064-.064.144-.165.216-.247.072-.082.096-.14.144-.231.048-.093.024-.173-.012-.255-.037-.082-.381-.914-.523-1.251-.138-.33-.277-.28-.381-.285l-.325-.006c-.112 0-.296.041-.451.198s-.593.58-.593 1.414.607 1.64.692 1.754c.082.112 1.195 1.826 2.899 2.56 1.704.735 1.704.49 2.01.457.307-.033 1.004-.404 1.147-.795.144-.39.144-.725.101-.795-.041-.07-.15-.112-.313-.194z" />
        </svg>
        
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="text-white font-semibold whitespace-nowrap overflow-hidden"
            >
              Napisz na WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
}
