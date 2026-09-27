"use client"

import type { CSSProperties, ReactNode } from "react"
import { layeredSectionTitleSize, sectionType } from "@/lib/section-typography"
import { SectionCornerDecorations } from "@/components/section-corner-decorations"
import { Cinzel } from "next/font/google"
import localFont from "next/font/local"

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

const cardStyle = {
  background: "var(--color-welcome-bg)",
  borderColor: "color-mix(in srgb, var(--color-motif-deep) 14%, transparent)",
  borderWidth: "1px",
  borderStyle: "solid",
  boxShadow:
    "0 8px 28px color-mix(in srgb, var(--color-motif-deep) 7%, transparent), inset 0 1px 0 color-mix(in srgb, white 70%, transparent)",
} as const

interface TimelineEvent {
  time?: string
  title: string
  description?: string
  note?: string
}

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

function withSpecialMarks(text: string): ReactNode {
  const parts = text.split(/([&\-/—])/g)
  return parts.map((part, index) =>
    /[&\-/—]/.test(part) ? <SpecialMark key={`${part}-${index}`}>{part}</SpecialMark> : part,
  )
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    time: "4:00 PM",
    title: "Arrival / Pre-Activities",
    description: "Guests may enjoy the prepared pre-activities while waiting for the ceremony.",
  },
  {
    time: "5:00 PM",
    title: "Wedding Ceremony / Mass",
  },
  {
    time: "6:00 PM",
    title: "Photos",
    note: "Dinner follows after the Mass",
  },
  {
    title: "Movie Premiere",
    description: "Edg's thesis film: “Rodel and Ronel”",
    note: "Running time: 20 minutes",
  },
  {
    title: "Short Program",
  },
  {
    title: "Dance & Music",
  },
  {
    time: "9:00 PM",
    title: "Send-Off",
  },
]

function TimelineTitle() {
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
        Timeline
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
        our day together
      </span>
      <span className="sr-only">our day together</span>
    </h2>
  )
}

export function WeddingTimeline() {
  return (
    <section
      id="wedding-timeline"
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative z-10 overflow-hidden pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <SectionCornerDecorations />

      <div className="relative z-20 mx-auto mb-6 max-w-5xl px-6 text-center @container/timeline sm:mb-8 sm:px-10 md:mb-10 md:px-12">
        <p
          className={`${cinzel.className} ${sectionType.label} mb-2 font-semibold uppercase tracking-[0.34em] min-[400px]:tracking-[0.38em] sm:tracking-[0.44em]`}
          style={{ color: palette.label }}
        >
          Event Details
        </p>
        <div className="my-4 sm:my-5 md:my-6">
          <TimelineTitle />
        </div>
        <p
          className={`font-goudy-italic mx-auto max-w-xl px-2 ${sectionType.textRelaxed}`}
          style={{ color: palette.body }}
        >
          Ceremony, dinner, and celebration {withSpecialMarks("—")} all in one venue.
        </p>
      </div>

      <div className="relative z-20 mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
        <div className="rounded-xl border px-4 py-6 sm:rounded-2xl sm:px-7 sm:py-8 md:px-10 md:py-10" style={cardStyle}>
          <ol className="relative space-y-0">
            {TIMELINE_EVENTS.map((event, index) => {
              const isLast = index === TIMELINE_EVENTS.length - 1
              return (
                <li key={`${event.title}-${event.time ?? index}`} className="relative grid grid-cols-[4.75rem_1.25rem_minmax(0,1fr)] gap-x-3 sm:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)] sm:gap-x-4">
                  <div className="pt-0.5 text-right">
                    {event.time ? (
                      <p
                        className={`${cinzel.className} text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.08em] sm:text-xs`}
                        style={{ color: palette.accent }}
                      >
                        {event.time}
                      </p>
                    ) : (
                      <p
                        className={`${cinzel.className} text-[0.65rem] font-semibold uppercase tracking-[0.12em] sm:text-[0.7rem]`}
                        style={{ color: palette.label }}
                      >
                        Then
                      </p>
                    )}
                  </div>

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

                  <div className={isLast ? "pb-0" : "pb-6 sm:pb-7"}>
                    <h3
                      className={`${theSeasons.className} text-base uppercase leading-snug tracking-[0.08em] sm:text-lg`}
                      style={{ color: palette.heading }}
                    >
                      {withSpecialMarks(event.title)}
                    </h3>
                    {event.description && (
                      <p
                        className={`font-goudy-italic mt-1 ${sectionType.textRelaxed}`}
                        style={{ color: palette.body }}
                      >
                        {event.description}
                      </p>
                    )}
                    {event.note && (
                      <p
                        className={`font-goudy-italic mt-1 ${sectionType.text}`}
                        style={{ color: palette.label }}
                      >
                        {event.note}
                      </p>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>

          <p
            className={`${aboveTheBeyond.className} mt-8 text-center leading-none sm:mt-10`}
            style={{
              fontSize: "clamp(1.5rem, 4.5vw, 2.25rem)",
              color: palette.accent,
            }}
          >
            Thank you for joining us!
          </p>
        </div>
      </div>
    </section>
  )
}
