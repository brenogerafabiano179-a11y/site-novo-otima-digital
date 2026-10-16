import { Reveal } from "./Reveal";

/** Cabeçalho de seção: linha-assinatura + rótulo + título grande + texto de apoio. */
export function SectionHeading({
  label,
  title,
  text,
  tone = "dark",
  align = "left",
  id,
}: {
  label: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  id?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-4xl ${centered ? "mx-auto text-center" : ""}`}>
      <div className={`signature-line w-28 ${centered ? "mx-auto" : ""}`} aria-hidden="true" />
      <p className={`eyebrow mt-5 ${tone === "dark" ? "text-cyan" : "text-blue-ink"}`}>{label}</p>
      <h2
        id={id}
        className={`display mt-4 text-[clamp(1.9rem,4vw,3.3rem)] ${tone === "dark" ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 text-[1.08rem] leading-relaxed sm:text-lg ${tone === "dark" ? "text-body-dark" : "text-body-light"} ${centered ? "mx-auto" : ""} max-w-2xl`}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}
