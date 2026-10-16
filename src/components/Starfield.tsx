"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; r: number; tw: number; sp: number };

/**
 * Campo de estrelas em canvas 2D com 3 profundidades.
 * Deriva lenta + paralaxe pelo cursor. Pausa fora da tela.
 * Movimento reduzido: desenha uma vez, sem animação.
 */
export function Starfield({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    const lowPower = (navigator.hardwareConcurrency ?? 8) <= 4;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let raf = 0;
    let running = false;
    let t = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = small || lowPower ? 0.00028 : 0.00055;
      const count = Math.min(small ? 380 : 900, Math.round(w * h * density));
      stars = Array.from({ length: count }, () => {
        const z = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: 0.35 + z * 1.25,
          tw: Math.random() * Math.PI * 2,
          sp: 0.004 + z * 0.012,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      for (const s of stars) {
        if (!reduce) {
          s.y -= s.sp;
          if (s.y < -4) s.y = h + 4;
        }
        const px = s.x + pointer.x * (s.z * 18);
        const py = s.y + pointer.y * (s.z * 12);
        const tw = reduce ? 0.8 : 0.55 + Math.sin(t * 0.02 + s.tw) * 0.35;
        ctx.globalAlpha = Math.max(0.08, tw * (0.35 + s.z * 0.65));
        ctx.fillStyle = s.z > 0.85 ? "#cfefff" : "#ffffff";
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      t++;
    };

    const loop = () => {
      draw();
      if (running) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    build();
    draw();

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer.tx = e.clientX / window.innerWidth - 0.5;
      pointer.ty = e.clientY / window.innerHeight - 0.5;
    };
    const onResize = () => {
      build();
      draw();
    };

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    // começa a animar só quando o navegador estiver livre (não disputa com o carregamento)
    const idle: (cb: () => void) => void =
      "requestIdleCallback" in window ? (cb) => window.requestIdleCallback(cb, { timeout: 1500 }) : (cb) => window.setTimeout(cb, 400);
    idle(() => io.observe(canvas));
    const onVis = () => (document.hidden ? stop() : start());

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
