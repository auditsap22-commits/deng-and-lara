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

const SILVER_SWATCHES = ["#D9D9D9", "#C0C0C0", "#A8A8A8", "#7A7A7A", "#1A1A1A"] as const

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
        The Wedding Attire
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
        silver <SpecialMark>&</SpecialMark> gray
      </span>
      <span className="sr-only">silver and gray</span>
    </h2>
  )
}

function ColorPalette() {
  return (
    <div
      className="mx-auto flex h-8 w-full max-w-xs overflow-hidden rounded-full border-2 border-white sm:h-9"
      role="img"
      aria-label="Silver and gray color palette"
    >
      {SILVER_SWATCHES.map((color) => (
        <div key={color} className="min-w-0 flex-1" style={{ backgroundColor: color }} title={color} />
      ))}
    </div>
  )
}

function AttireLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p
        className={`${cinzel.className} ${sectionType.label} font-semibold uppercase tracking-[0.16em]`}
        style={{ color: palette.label }}
      >
        {label}
      </p>
      <p
        className={`font-goudy-italic mt-1.5 ${sectionType.textRelaxed}`}
        style={{ color: palette.body }}
      >
        {withSpecialMarks(value)}
      </p>
    </div>
  )
}

function AttireGroup({
  kicker,
  title,
  children,
}: {
  kicker: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="px-2 text-center sm:px-4">
      <p
        className={`${cinzel.className} ${sectionType.label} font-semibold uppercase tracking-[0.22em]`}
        style={{ color: palette.accent }}
      >
        {kicker}
      </p>
      <h3
        className={`${theSeasons.className} mt-2 text-xl uppercase tracking-[0.1em] sm:text-2xl`}
        style={{ color: palette.heading }}
      >
        {withSpecialMarks(title)}
      </h3>
      <div
        className="mx-auto my-4 h-px w-12 sm:my-5"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent), transparent)",
        }}
        aria-hidden
      />
      <div className="space-y-5">{children}</div>
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
        <div className="mx-auto mt-5 max-w-xs sm:mt-6">
          <ColorPalette />
        </div>
        <div className="flex items-center justify-center pt-4 sm:pt-5">
          <span className="h-px w-16 sm:w-24 md:w-32" style={dividerLineStyle} />
        </div>
      </div>

      <div className="relative z-20 mx-auto grid max-w-4xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8 md:px-8">
        <AttireGroup kicker="Our Entourage" title="Formal">
          <AttireLine label="Ladies" value="Silver or Gray Long Gown/Dress" />
          <AttireLine label="Gentlemen" value="Silver or Gray Barong Tagalog with Black Pants" />
        </AttireGroup>

        <div className="hidden md:flex md:min-h-full md:flex-col md:items-center" aria-hidden>
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: palette.accent }}
          />
          <span
            className="mt-2 w-px flex-1 min-h-[12rem]"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in srgb, var(--color-welcome-green) 55%, transparent), color-mix(in srgb, var(--color-motif-deep) 18%, transparent))",
            }}
          />
        </div>

        <AttireGroup kicker="Our Guests" title="Semi-Formal / Cocktail">
          <AttireLine label="Attire" value="Silver or Gray attire only." />
        </AttireGroup>
      </div>
    </section>
  )
}
