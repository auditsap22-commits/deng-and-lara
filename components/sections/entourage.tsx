"use client"

import React, { useEffect, useRef, useState } from "react"
import localFont from "next/font/local"
import { useSiteConfig } from "@/hooks/use-site-config"
import { SectionCornerDecorations } from "@/components/section-corner-decorations"
import { layeredSectionTitleSize, sectionType } from "@/lib/section-typography"
import { Cinzel } from "next/font/google"

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

const cardStyle = {
  background: "var(--color-welcome-bg)",
  borderColor: "color-mix(in srgb, var(--color-motif-deep) 14%, transparent)",
  borderWidth: "1px",
  borderStyle: "solid",
  boxShadow:
    "0 8px 28px color-mix(in srgb, var(--color-motif-deep) 7%, transparent), inset 0 1px 0 color-mix(in srgb, white 70%, transparent)",
} as const

const ambientGlowStyle = {
  background:
    "linear-gradient(135deg, color-mix(in srgb, var(--color-motif-deep) 18%, transparent) 0%, color-mix(in srgb, var(--color-welcome-green) 12%, transparent) 48%, color-mix(in srgb, var(--color-motif-deep) 10%, transparent) 100%)",
} as const

const dividerLineStyle = {
  background:
    "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent), transparent)",
} as const

const palette = {
  body: "var(--color-welcome-text)",
  heading: "var(--color-welcome-navy)",
  label: "var(--color-welcome-heading)",
  accent: "var(--color-welcome-green)",
} as const

const nameStyle: React.CSSProperties = {
  fontSize: "clamp(0.92rem, min(2.8vw, 3.4cqi), 1.2rem)",
  lineHeight: 1.4,
}

const featuredNameStyle: React.CSSProperties = {
  fontSize: "clamp(1.02rem, min(3.1vw, 3.8cqi), 1.32rem)",
  lineHeight: 1.35,
}

const ct = {
  label: sectionType.label,
  chapter: `${sectionType.label} lg:text-base`,
  role: "text-[11px] sm:text-xs md:text-sm",
  blurb: "text-[0.8rem] sm:text-[0.875rem] md:text-[0.9375rem] leading-[1.65] sm:leading-[1.7]",
} as const

type Couple = readonly [string, string]

const PARENTS: Couple[] = [
  ["Dr. Nollie Lara (+)", "Dra. Joy Lara"],
  ["Mr. Manuel Lopez (+)", "Tootsie Lopez(+)"],
]

const PRINCIPAL_INTRO =
  "To stand as our primary witnesses, representing the spiritual foundation, guidance, and continuous intercession that sustain our domestic church."

const ORIGINAL_SPONSORS = {
  title: "Original Principal Sponsors",
  description:
    "With deepest gratitude for the guidance and love that have brought us to this 25-year milestone, and for continuing to journey with us.",
  couples: [
    ["Mr. Ben Gamez", "Mrs. Tita Gamez"],
    ["Mr. Steve Basilla", "Mrs. Connie Basilla"],
    ["Mr. Danny Lopez", "Mrs. Dina Lopez"],
    ["Mr. Peter Tan", "Mrs. Nida Tan"],
    ["Mr. Jo Tecson", "Mrs. Flora Tecson"],
    ["Engr. Dodie Tecson (+)", "Mrs. Jojie Tecson"],
  ] as Couple[],
}

const MILESTONE_SPONSORS = {
  title: "Milestone Principal Sponsors",
  description:
    "To witness our 25-year covenant: anchoring our domestic church with the same spiritual foundation, love, and guidance that brought us from our wedding day to this silver milestone.",
  couples: [
    ["Mr. Orly Araujo", "Mrs. Gina Araujo"],
    ["Mr. Rene Marcos", "Mrs. Amor Marcos"],
    ["Mr. Noel Griño", "Mrs. Deanna Griño"],
    ["Atty. Arnel Santos", "Atty. Bing Santos"],
    ["Engr. Demi Aquino", "Mrs. Jean Aquino"],
    ["Dr. Edilberto Cavaneyro", "Mrs. Lucita Cavaneyro"],
  ] as Couple[],
}

const BEST_MAN = {
  title: "Best Man",
  description:
    "Our very responsible beloved son, standing to honor our twenty-five year journey: a lifelong confidant who has walked alongside us, enriched our marriage, and guarded our love through every season.",
  name: "Emanuel DenGabriel L. Lara",
}

const MAIDS_OF_HONOR = {
  title: "Maids of Honor",
  description:
    "Our dear cousins, standing as joyful witnesses to celebrate twenty-five years of shared faith, deep devotion, and continuous family love.",
  names: ["Dra. Christine Corina Grace L. Basilla", "Ms. Fe Alexandra T. Lopez"],
}

const GROOMSMEN_BRIDESMAIDS = {
  description:
    "To stand beside us in our silver year, symbolizing a quarter-century of shared joys, steadfast friendship, and unwavering support on our journey.",
  couples: [
    ["Dr. Ding Regino", "Dra. Maricel Regino"],
    ["Mr. Bong Tolentino", "Mrs. Ritchie Tolentino"],
    ["Mr. Raffy Geraldez", "Mrs. Judith Geraldez"],
    ["Mr. Matt Barba", "Mrs. Hazel Barba"],
  ] as Couple[],
}

const SECONDARY_SPONSORS = [
  {
    title: "Candle Sponsors",
    description:
      "To light the candle, symbolizing Christ's continued presence and light in our marriage.",
    couple: ["Dr. Thomas Suarez", "Engr. Emi Paraguas"] as Couple,
  },
  {
    title: "Veil Sponsors",
    description:
      "To clothe us in the mantle of grace that has sheltered, protected, and blessed our marriage for twenty-five years.",
    couple: ["Mr. Derrick Lara", "Mrs. Kathleen Lara"] as Couple,
  },
  {
    title: "Cord Sponsors",
    description:
      "To encircle us in the symbol of infinity, celebrating the unbreakable bond and lifelong unity that has held us together for twenty-five years.",
    couple: ["Mr. Darren Lara", "Dr. Cherrie Rose Lara"] as Couple,
  },
]

const JUNIOR_ATTENDANTS = [
  {
    title: "Junior Groomsman",
    description:
      "Our amazing nephew. He missed the original wedding by a couple of decades, but he’s here now to take notes on how to survive 25 years of marriage.",
    name: "Dominic Miguel P. Lara",
  },
  {
    title: "Junior Bridesmaid",
    description:
      "Walking gracefully ahead, she symbolizes the youthful joy and bright future of the family's next generation.",
    name: "Claire Isabel P. Lara",
  },
  {
    title: "Bible Bearer",
    description:
      "Our beloved nephew and godson, bringing forward the Holy Word to represent the spiritual foundation that has guided our family for a quarter-century.",
    name: "Juancho Rafael B. Camara",
  },
  {
    title: "Ring Bearer",
    description:
      "Our super adorable youngest son, carrying the sacred tokens of our enduring love to symbolize twenty-five years of an unbroken and blessed covenant.",
    name: "Imanuel Yoshua L. Lara",
  },
]

function Ampersand({ className = "" }: { className?: string }) {
  return (
    <span
      className={`${aboveTheBeyond.className} inline-block shrink-0 px-0.5 leading-none ${className}`}
      style={{
        fontSize: "1.15em",
        color: palette.accent,
        verticalAlign: "middle",
      }}
      aria-hidden
    >
      &
    </span>
  )
}

function OrnamentDot() {
  return (
    <span
      className="h-1 w-1 shrink-0 rounded-full sm:h-1.5 sm:w-1.5"
      style={{ background: "color-mix(in srgb, var(--color-welcome-green) 70%, transparent)" }}
      aria-hidden
    />
  )
}

function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden>
      <span className="h-px w-10 sm:w-16 md:w-24" style={dividerLineStyle} />
      <OrnamentDot />
      <span className="h-px w-10 sm:w-16 md:w-24" style={dividerLineStyle} />
    </div>
  )
}

function EntourageCoupleLabel({ groom, bride }: { groom: string; bride: string }) {
  const lineStyle = {
    background:
      "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-welcome-navy) 35%, transparent))",
  }

  return (
    <div className="flex items-center justify-center gap-2.5 pt-10 sm:gap-3.5 sm:pt-12 md:pt-14 lg:pt-16">
      <span className="h-px w-5 sm:w-7 md:w-9" style={lineStyle} aria-hidden />
      <p
        className={`${cinzel.className} ${sectionType.label} shrink-0 py-0.5 font-semibold uppercase leading-normal tracking-[0.34em] min-[400px]:tracking-[0.38em] sm:tracking-[0.44em]`}
        style={{ color: "var(--color-welcome-navy)" }}
      >
        With {groom}
        <Ampersand className="mx-1.5 sm:mx-2" />
        {bride}
      </p>
      <span
        className="h-px w-5 sm:w-7 md:w-9"
        style={{
          background:
            "linear-gradient(to left, transparent, color-mix(in srgb, var(--color-welcome-navy) 35%, transparent))",
        }}
        aria-hidden
      />
    </div>
  )
}

function EntourageTitle() {
  return (
    <h2
      className="welcome-title-lockup relative mx-auto w-full max-w-full pt-2 text-center sm:pt-3 md:pt-4"
      style={
        {
          "--title-size": layeredSectionTitleSize.main,
          "--script-size": layeredSectionTitleSize.script,
          "--script-overlap": layeredSectionTitleSize.overlap,
        } as React.CSSProperties
      }
    >
      <span
        className={`${theSeasons.className} block uppercase leading-[0.78] tracking-[0.08em] min-[400px]:tracking-[0.11em] sm:tracking-[0.13em] md:tracking-[0.14em]`}
        style={{
          fontSize: "var(--title-size)",
          color: "var(--color-welcome-navy)",
        }}
      >
        Entourage
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
        our silver year
      </span>
      <span className="sr-only">our silver year</span>
    </h2>
  )
}

function ChapterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 text-center sm:mb-6 md:mb-7">
      <h3
        className={`${cinzel.className} ${ct.chapter} font-semibold uppercase leading-tight tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.26em]`}
        style={{ color: palette.heading }}
      >
        {children}
      </h3>
      <OrnamentalDivider className="mt-2.5 sm:mt-3" />
    </div>
  )
}

function RoleTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className={`${cinzel.className} ${ct.role} font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em]`}
      style={{ color: palette.label }}
    >
      {children}
    </h4>
  )
}

function Blurb({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`font-goudy-italic mx-auto mt-2 max-w-xl text-pretty text-center ${ct.blurb}`}
      style={{ color: palette.body }}
    >
      {children}
    </p>
  )
}

function PersonName({
  children,
  featured = false,
}: {
  children: React.ReactNode
  featured?: boolean
}) {
  return (
    <p
      className="font-goudy-italic text-pretty font-medium"
      style={{ ...(featured ? featuredNameStyle : nameStyle), color: palette.heading }}
    >
      {children}
    </p>
  )
}

function CoupleName({ couple, featured = false }: { couple: Couple; featured?: boolean }) {
  const [left, right] = couple
  return (
    <p
      className="font-goudy-italic flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 text-pretty font-medium sm:gap-x-2"
      style={{ ...(featured ? featuredNameStyle : nameStyle), color: palette.heading }}
    >
      <span>{left}</span>
      <Ampersand />
      <span>{right}</span>
    </p>
  )
}

function CoupleList({ couples }: { couples: Couple[] }) {
  return (
    <ul className="mt-4 flex flex-col items-center gap-2 sm:mt-5 sm:gap-2.5">
      {couples.map(([left, right]) => (
        <li key={`${left}-${right}`}>
          <CoupleName couple={[left, right]} />
        </li>
      ))}
    </ul>
  )
}

function RoleBlock({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="text-center">
      <RoleTitle>{title}</RoleTitle>
      {description ? <Blurb>{description}</Blurb> : null}
      <div className="mt-3 sm:mt-3.5">{children}</div>
    </div>
  )
}

function ProgramPanel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-full rounded-xl border px-4 py-6 sm:px-5 sm:py-7 md:px-6 md:py-8"
      style={{
        borderColor: "color-mix(in srgb, var(--color-motif-deep) 12%, transparent)",
        background: "color-mix(in srgb, white 38%, transparent)",
      }}
    >
      {children}
    </div>
  )
}

function ChapterRule() {
  return (
    <div className="flex justify-center py-7 sm:py-8 md:py-10" aria-hidden>
      <span className="h-px w-full max-w-xs sm:max-w-sm" style={dividerLineStyle} />
    </div>
  )
}

export function Entourage() {
  const siteConfig = useSiteConfig()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.08 }
    )

    const node = sectionRef.current
    if (node) observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [])

  return (
    <div
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative w-full`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <section
        ref={sectionRef}
        id="entourage"
        className="relative z-10 overflow-hidden pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14"
      >
        <SectionCornerDecorations />

        <div
          className={`relative z-20 mx-auto mb-6 max-w-5xl px-6 text-center @container/entourage sm:mb-8 sm:px-10 md:mb-10 md:px-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <EntourageCoupleLabel
            groom={siteConfig.couple.groomNickname || siteConfig.couple.groom}
            bride={siteConfig.couple.brideNickname || siteConfig.couple.bride}
          />

          <p
            className={`${cinzel.className} ${sectionType.label} mt-5 font-semibold uppercase tracking-[0.28em] sm:mt-6 sm:tracking-[0.34em]`}
            style={{ color: "var(--color-welcome-heading)" }}
          >
            The Silver Wedding
          </p>

          <div className="my-3 sm:my-4 md:my-5">
            <EntourageTitle />
          </div>

          <p
            className={`font-goudy-italic mx-auto max-w-xl px-2 ${sectionType.textRelaxed}`}
            style={{ color: "var(--color-welcome-text)" }}
          >
            Honoring those who stand with us as we celebrate twenty-five years of faith, family, and
            covenant love.
          </p>

          <div className="flex items-center justify-center pt-3 sm:pt-4">
            <span className="h-px w-16 sm:w-24 md:w-32" style={dividerLineStyle} />
          </div>
        </div>

        <div
          className={`relative z-20 mx-auto max-w-5xl px-4 pb-2 sm:px-6 sm:pb-3 md:px-8 @container/entourage-card transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-1 rounded-2xl opacity-50 blur-2xl sm:-inset-2"
              style={ambientGlowStyle}
              aria-hidden
            />
            <div
              className="relative z-20 overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-500 sm:rounded-2xl sm:backdrop-blur-2xl"
              style={cardStyle}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, color-mix(in srgb, var(--color-motif-deep) 8%, transparent), transparent 45%)",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/35 sm:rounded-2xl"
                aria-hidden
              />
              <div className="wedding-frame-inner" aria-hidden />

              <div className="relative z-20 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
                <section>
                  <ChapterHeading>Our Parents</ChapterHeading>
                  <ul className="flex flex-col items-center gap-3 sm:gap-3.5">
                    {PARENTS.map((couple) => (
                      <li key={couple[0]}>
                        <CoupleName couple={couple} featured />
                      </li>
                    ))}
                  </ul>
                </section>

                <ChapterRule />

                <section>
                  <ChapterHeading>Principal Sponsors</ChapterHeading>
                  <Blurb>{PRINCIPAL_INTRO}</Blurb>

                  <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 md:gap-6 lg:gap-8">
                    {[ORIGINAL_SPONSORS, MILESTONE_SPONSORS].map((group) => (
                      <ProgramPanel key={group.title}>
                        <RoleBlock title={group.title} description={group.description}>
                          <CoupleList couples={group.couples} />
                        </RoleBlock>
                      </ProgramPanel>
                    ))}
                  </div>
                </section>

                <ChapterRule />

                <section>
                  <ChapterHeading>The Core Attendants</ChapterHeading>
                  <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:items-stretch md:gap-6 lg:gap-8">
                    <ProgramPanel>
                      <RoleBlock title={BEST_MAN.title} description={BEST_MAN.description}>
                        <PersonName featured>{BEST_MAN.name}</PersonName>
                      </RoleBlock>
                    </ProgramPanel>
                    <ProgramPanel>
                      <RoleBlock title={MAIDS_OF_HONOR.title} description={MAIDS_OF_HONOR.description}>
                        <ul className="flex flex-col items-center gap-2">
                          {MAIDS_OF_HONOR.names.map((name) => (
                            <li key={name}>
                              <PersonName featured>{name}</PersonName>
                            </li>
                          ))}
                        </ul>
                      </RoleBlock>
                    </ProgramPanel>
                  </div>
                </section>

                <ChapterRule />

                <section>
                  <ChapterHeading>Groomsmen &amp; Bridesmaids</ChapterHeading>
                  <ProgramPanel>
                    <Blurb>{GROOMSMEN_BRIDESMAIDS.description}</Blurb>
                    <CoupleList couples={GROOMSMEN_BRIDESMAIDS.couples} />
                  </ProgramPanel>
                </section>

                <ChapterRule />

                <section>
                  <ChapterHeading>Secondary Sponsors</ChapterHeading>
                  <div className="grid gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-6">
                    {SECONDARY_SPONSORS.map((sponsor) => (
                      <ProgramPanel key={sponsor.title}>
                        <RoleBlock title={sponsor.title} description={sponsor.description}>
                          <CoupleName couple={sponsor.couple} />
                        </RoleBlock>
                      </ProgramPanel>
                    ))}
                  </div>
                </section>

                <ChapterRule />

                <section>
                  <ChapterHeading>Junior Attendants</ChapterHeading>
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                    {JUNIOR_ATTENDANTS.map((attendant) => (
                      <ProgramPanel key={attendant.title}>
                        <RoleBlock title={attendant.title} description={attendant.description}>
                          <PersonName featured>{attendant.name}</PersonName>
                        </RoleBlock>
                      </ProgramPanel>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
