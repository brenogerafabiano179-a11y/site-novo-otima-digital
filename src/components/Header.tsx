"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandLink } from "./ui/Brand";
import { nav } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // seção ativa (indicador de navegação)
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // menu mobile: trava rolagem, Esc fecha, foco no primeiro link
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-white/[0.06] bg-[rgba(5,12,28,0.78)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] xl:px-12">
        <BrandLink size="sm" />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-[0.9rem] xl:px-4 xl:text-[0.92rem] font-medium transition-colors ${
                      isActive ? "text-white" : "text-body-dark hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-[#14b8a6]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:justify-self-end">
          <a
            href={whatsappLink("geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-teal group hidden whitespace-nowrap !min-h-[46px] !rounded-xl !px-5 text-sm sm:inline-flex"
          >
            <WhatsAppIcon className="size-[18px] lg:max-xl:hidden" />
            Fale com um especialista
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:max-xl:hidden" aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#14b8a6] lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto overscroll-contain bg-[rgba(5,12,28,0.97)] px-5 pb-10 pt-6 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Navegação mobile">
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="border-b border-white/[0.07]"
                  >
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-5 font-display text-2xl font-extrabold uppercase text-white"
                    >
                      {item.label}
                      <span className="text-cyan" aria-hidden="true">→</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <a
              href={whatsappLink("geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-teal mt-8 w-full !rounded-xl"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="size-5" />
              Fale com um especialista
            </a>
            <div className="signature-line mt-10 w-24" aria-hidden="true" />
            <p className="eyebrow mt-4 text-muted-dark">Brasil • Estados Unidos</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
