"use client"

import type { CSSProperties, ReactNode } from "react"
import localFont from "next/font/local"
import { Cinzel } from "next/font/google"
import { SectionCornerDecorations } from "@/components/section-corner-decorations"
import { layeredSectionTitleSize, sectionType } from "@/lib/section-typography"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const theSeasons = localFont({
  src: "../../Font/Fontspring-DEMO-theseasons-reg.otf",
  display: "swap",
  variable: "--font-the-seasons",
})

const aboveTheBeyond = localFont({
  src: "../../Font/above-the-beyond-script.otf",
  display: "swap",
  variable: "--font-above-beyond",
})

const palette = {
  body: "var(--color-welcome-text)",
  heading: "var(--color-welcome-navy)",
  label: "var(--color-welcome-heading)",
  accent: "var(--color-welcome-green)",
} as const

const dividerLineStyle = {
  background:
    "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent), transparent)",
} as const

const COLOR_SEALS = [
  { name: "Metallic Silver", color: "#C8C8C8" },
  { name: "Dove Gray", color: "#A8A8A8" },
  { name: "Steel Gray", color: "#8A8F96" },
] as const

function SpecialMark({
  children,
  className = "",
}: {
  children: string
  className?: string
}) {
  return (
    <span
      className={`${aboveTheBeyond.className} mx-1 inline-block normal-case tracking-normal sm:mx-1.5 ${className}`}
      style={{
        fontSize: "0.72em",
        color: palette.accent,
        verticalAlign: "0.08em",
        lineHeight: 1,
      }}
      aria-hidden
    >
      {children}
    </span>
  )
}

function withSpecialMarks(text: string): ReactNode {
  const parts = text.split(/([&\-/])/g)
  return parts.map((part, index) =>
    /[&\-/]/.test(part) ? <SpecialMark key={`${part}-${index}`}>{part}</SpecialMark> : part,
  )
}

function SectionTitle() {
  return (
    <h2
      className="welcome-title-lockup relative mx-auto w-full max-w-full text-center"
      style={
        {
          "--title-size": layeredSectionTitleSize.main,
          "--script-size": layeredSectionTitleSize.script,
          "--script-overlap": layeredSectionTitleSize.overlap,
        } as CSSProperties
      }
    >
      <span
        className={`${theSeasons.className} block uppercase leading-[0.86] tracking-[0.06em] min-[400px]:tracking-[0.1em] sm:tracking-[0.12em]`}
        style={{
          fontSize: "var(--title-size)",
          color: palette.heading,
        }}
      >
        Wedding Attire
      </span>
      <span
        aria-hidden
        className={`${aboveTheBeyond.className} relative z-10 mx-auto block w-fit max-w-full px-1 leading-[0.88] sm:leading-[0.9]`}
        style={{
          marginTop: "var(--script-overlap)",
          fontSize: "var(--script-size)",
          color: "var(--color-welcome-green)",
          textShadow:
            "0 1px 0 color-mix(in srgb, var(--color-welcome-bg) 95%, white), 0 0 10px color-mix(in srgb, var(--color-welcome-bg) 65%, white)",
        }}
      >
        <SpecialMark>&</SpecialMark> details
      </span>
      <span className="sr-only">and details</span>
    </h2>
  )
}

function AttireLine({ children }: { children: ReactNode }) {
  return (
    <p className={`font-goudy-italic ${sectionType.textRelaxed}`} style={{ color: palette.body }}>
      {children}
    </p>
  )
}

function AttireLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className={`${cinzel.className} ${sectionType.label} mt-4 font-semibold uppercase tracking-[0.16em] first:mt-0`}
      style={{ color: palette.label }}
    >
      {children}
    </p>
  )
}

function ColorSeals() {
  return (
    <div className="mt-10 flex flex-wrap items-start justify-center gap-6 sm:mt-12 sm:gap-10">
      {COLOR_SEALS.map((seal) => (
        <div key={seal.name} className="flex w-20 flex-col items-center gap-2.5 sm:w-24">
          <span
            className="h-12 w-12 rounded-full shadow-sm sm:h-14 sm:w-14"
            style={{
              backgroundColor: seal.color,
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.55), 0 4px 10px color-mix(in srgb, var(--color-motif-deep) 16%, transparent)",
              border: "1px solid color-mix(in srgb, var(--color-motif-deep) 12%, transparent)",
            }}
            aria-hidden
          />
          <p
            className={`${cinzel.className} text-center text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.12em] sm:text-[0.68rem]`}
            style={{ color: palette.label }}
          >
            {seal.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export function DressCode() {
  return (
    <section
      id="dress-code"
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative z-10 overflow-hidden pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <SectionCornerDecorations />

      <div className="relative z-20 mx-auto mb-6 max-w-5xl px-6 text-center @container/dress-code sm:mb-8 sm:px-10 md:mb-10 md:px-12">
        <p
          className={`${cinzel.className} ${sectionType.label} mb-2 font-semibold uppercase tracking-[0.34em] min-[400px]:tracking-[0.38em] sm:tracking-[0.44em]`}
          style={{ color: palette.label }}
        >
          Dress Code
        </p>
        <div className="my-4 sm:my-5 md:my-6">
          <SectionTitle />
        </div>
        <p
          className={`font-goudy-italic mx-auto max-w-2xl px-2 ${sectionType.textRelaxed}`}
          style={{ color: palette.body }}
        >
          We kindly ask our guests to join us in our color theme.
        </p>
        <div className="flex items-center justify-center pt-4 sm:pt-5">
          <span className="h-px w-16 sm:w-24 md:w-32" style={dividerLineStyle} />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-xl px-6 text-center sm:px-8">
        <div>
          <h3
            className={`${cinzel.className} ${sectionType.label} font-semibold uppercase tracking-[0.28em]`}
            style={{ color: palette.heading }}
          >
            Entourage
          </h3>
          <div className="mt-5 space-y-1.5">
            <AttireLabel>Ladies</AttireLabel>
            <AttireLine>Silver or Gray Long Gown</AttireLine>
            <AttireLabel>Gentlemen</AttireLabel>
            <AttireLine>Silver or Gray Barong Tagalog</AttireLine>
            <AttireLine>Black Pants</AttireLine>
          </div>
        </div>

        <div
          className="mx-auto my-8 h-px w-16 sm:my-10"
          style={dividerLineStyle}
          aria-hidden
        />

        <div>
          <h3
            className={`${cinzel.className} ${sectionType.label} font-semibold uppercase tracking-[0.28em]`}
            style={{ color: palette.heading }}
          >
            Guests
          </h3>
          <div className="mt-5 space-y-1.5">
            <AttireLine>{withSpecialMarks("Semi-Formal / Cocktail")}</AttireLine>
            <AttireLine>Silver or Gray Attire Only</AttireLine>
          </div>
        </div>

        <ColorSeals />
      </div>
    </section>
  )
}
