"use client"

import type { CSSProperties } from "react"
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

const PRE_ACTIVITIES = [
  {
    number: "01",
    title: "Coffee, Milk Tea or Other Refreshments",
    description: "A warm welcome drink while you settle in and find your people.",
  },
  {
    number: "02",
    title: "Selfie Mirror",
    description: "Strike a pose and capture a keepsake before the ceremony begins.",
  },
  {
    number: "03",
    title: "Perfume Bar",
    description: "Select your own scent and take a little fragrance of the day with you.",
  },
  {
    number: "04",
    title: "Magazine Photobooth",
    description: "Step into a silver-anniversary cover and make a memory together.",
  },
  {
    number: "05",
    title: "Pica Pica Station",
    description: "Light bites to enjoy while waiting for the Wedding Ceremony / Mass.",
  },
] as const

function SpecialMark({ children }: { children: string }) {
  return (
    <span
      className={`${aboveTheBeyond.className} mx-1 inline-block normal-case tracking-normal sm:mx-1.5`}
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
        className={`${theSeasons.className} block uppercase leading-[0.78] tracking-[0.08em] min-[400px]:tracking-[0.11em] sm:tracking-[0.13em] md:tracking-[0.14em]`}
        style={{
          fontSize: "var(--title-size)",
          color: palette.heading,
        }}
      >
        Pre
        <SpecialMark>-</SpecialMark>
        Activities
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
        while you wait
      </span>
      <span className="sr-only">Pre-Activities while you wait</span>
    </h2>
  )
}

export function PreActivities() {
  return (
    <section
      id="pre-activities"
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative z-10 overflow-hidden pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <SectionCornerDecorations />

      <div className="relative z-20 mx-auto mb-6 max-w-5xl px-6 text-center @container/pre-activities sm:mb-8 sm:px-10 md:mb-10 md:px-12">
        <p
          className={`${cinzel.className} ${sectionType.label} mb-2 font-semibold uppercase tracking-[0.34em] min-[400px]:tracking-[0.38em] sm:tracking-[0.44em]`}
          style={{ color: palette.label }}
        >
          Arrive by 4:00 PM
        </p>
        <div className="my-4 sm:my-5 md:my-6">
          <SectionTitle />
        </div>
        <p
          className={`font-goudy-italic mx-auto max-w-2xl px-2 ${sectionType.textRelaxed}`}
          style={{ color: palette.body }}
        >
          We&apos;ve prepared stations for you to enjoy our special day while waiting for the
          Wedding Ceremony / Mass.
        </p>
        <div className="flex items-center justify-center pt-4 sm:pt-5">
          <span className="h-px w-16 sm:w-24 md:w-32" style={dividerLineStyle} />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
        <ol>
          {PRE_ACTIVITIES.map((activity, index) => {
            const isLast = index === PRE_ACTIVITIES.length - 1
            return (
              <li
                key={activity.number}
                className="relative grid grid-cols-[3.25rem_1.25rem_minmax(0,1fr)] gap-x-3 sm:grid-cols-[4rem_1.5rem_minmax(0,1fr)] sm:gap-x-4"
              >
                <p
                  className={`${cinzel.className} pt-0.5 text-right text-[0.7rem] font-semibold tracking-[0.18em] sm:text-xs`}
                  style={{ color: palette.accent }}
                >
                  {activity.number}
                </p>

                <div className="relative flex flex-col items-center">
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: palette.accent }}
                    aria-hidden
                  />
                  {!isLast && (
                    <span
                      className="mt-1 w-px flex-1"
                      style={{
                        background:
                          "linear-gradient(to bottom, color-mix(in srgb, var(--color-welcome-green) 55%, transparent), color-mix(in srgb, var(--color-motif-deep) 18%, transparent))",
                      }}
                      aria-hidden
                    />
                  )}
                </div>

                <div className={isLast ? "pb-0" : "pb-7 sm:pb-8"}>
                  <h3
                    className={`${theSeasons.className} text-[0.95rem] uppercase leading-snug tracking-[0.08em] sm:text-lg`}
                    style={{ color: palette.heading }}
                  >
                    {activity.title}
                  </h3>
                  <p
                    className={`font-goudy-italic mt-1.5 max-w-lg ${sectionType.textRelaxed}`}
                    style={{ color: palette.body }}
                  >
                    {activity.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
