"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/icons";

/** Botão flutuante: aparece depois do hero e some na seção de contato e no rodapé. */
export function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const contactEl = document.getElementById("contato");
    let contactVisible = false;
    const update = () => setShow(window.scrollY > window.innerHeight * 0.8 && !contactVisible);
    const io = new IntersectionObserver(([e]) => {
      contactVisible = e.isIntersecting || e.boundingClientRect.top < 0;
      update();
    });
    if (contactEl) io.observe(contactEl);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink("geral")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com a Ótima Digital pelo WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 grid size-14 place-items-center rounded-full bg-[#1f6fd1] text-white shadow-[0_14px_34px_-8px_rgba(47,134,232,0.9)] ring-4 ring-night/40"
        >
          <WhatsAppIcon className="size-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
