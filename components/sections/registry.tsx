"use client"

import { useEffect, useState, type CSSProperties, type ReactNode } from "react"
import { Cinzel } from "next/font/google"
import localFont from "next/font/local"
import { X } from "lucide-react"
import Image from "next/image"
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

const INTRO_TEXT =
  "As we honor our parents’ 25 years of marriage, your blessings and company are what they desire most. Should you wish to celebrate this milestone with a gesture, a selection from their registry or a contribution to our Digital Wishing Well would be warmly appreciated."

const SM_REGISTRY_URL =
  "https://www.thesmstoregiftregistry.com/eventdetail/6aa3c13b2333eb17e4203509?eventCode=8256374"

const REGISTRY_OPTIONS = [
  {
    id: "sm-registry",
    tab: "SM Registry",
    title: "SM Gift Registry",
    src: "/QR/thesmstoregiftregistry.png",
    href: SM_REGISTRY_URL,
    actionLabel: "Open SM Gift Registry",
    hint: "Scan or open their SM Gift Registry",
  },
  {
    id: "instapay",
    tab: "Wishing Well",
    title: "Digital Wishing Well – InstaPay",
    src: "/QR/maribank.png",
    hint: "Scan to send via InstaPay",
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

function withSpecialMarks(text: string): ReactNode {
  const parts = text.split(/([&\-/—–])/g)
  return parts.map((part, index) =>
    /[&\-/—–]/.test(part) ? <SpecialMark key={`${part}-${index}`}>{part}</SpecialMark> : part,
  )
}

function RegistryTitle() {
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
        The Silver Registry
      </span>
      <span
        aria-hidden
        className={`${aboveTheBeyond.className} relative z-10 mx-auto block w-fit max-w-full px-1 leading-[0.88] sm:leading-[0.9]`}
        style={{
          marginTop: "var(--script-overlap)",
          fontSize: "var(--script-size)",
          color: palette.accent,
          textShadow:
            "0 1px 0 color-mix(in srgb, var(--color-welcome-bg) 95%, white), 0 0 10px color-mix(in srgb, var(--color-welcome-bg) 65%, white)",
        }}
      >
        with gratitude
      </span>
      <span className="sr-only">with gratitude</span>
    </h2>
  )
}

export function Registry() {
  const [activeId, setActiveId] = useState<(typeof REGISTRY_OPTIONS)[number]["id"]>("sm-registry")
  const [enlarged, setEnlarged] = useState(false)
  const activeItem = REGISTRY_OPTIONS.find((item) => item.id === activeId) ?? REGISTRY_OPTIONS[0]

  useEffect(() => {
    if (!enlarged) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setEnlarged(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [enlarged])

  return (
    <section
      id="registry"
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative z-10 overflow-hidden pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <SectionCornerDecorations />

      <div className="relative z-20 mx-auto mb-6 max-w-5xl px-6 text-center @container/registry sm:mb-8 sm:px-10 md:mb-10 md:px-12">
        <p
          className={`${cinzel.className} ${sectionType.label} mb-2 font-semibold uppercase tracking-[0.34em] min-[400px]:tracking-[0.38em] sm:tracking-[0.44em]`}
          style={{ color: palette.label }}
        >
          Gift Guide
        </p>
        <div className="my-4 sm:my-5 md:my-6">
          <RegistryTitle />
        </div>
        <p
          className={`font-goudy-italic mx-auto max-w-2xl px-2 ${sectionType.textRelaxed}`}
          style={{ color: palette.body }}
        >
          {INTRO_TEXT}
        </p>
        <div className="flex items-center justify-center pt-4 sm:pt-5">
          <span className="h-px w-16 sm:w-24 md:w-32" style={dividerLineStyle} />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-xl px-4 sm:px-6 md:px-8">
        <div className="mb-6 flex justify-center" role="tablist" aria-label="Registry options">
          <div
            className="inline-flex rounded-full border p-1"
            style={{
              borderColor: "color-mix(in srgb, var(--color-motif-deep) 14%, transparent)",
              background: "color-mix(in srgb, white 42%, transparent)",
            }}
          >
            {REGISTRY_OPTIONS.map((option) => {
              const isActive = option.id === activeId
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`registry-tab-${option.id}`}
                  aria-controls="registry-panel"
                  onClick={() => setActiveId(option.id)}
                  className={`${cinzel.className} rounded-full px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.18em]`}
                  style={
                    isActive
                      ? {
                          backgroundColor: palette.accent,
                          color: "var(--color-welcome-bg)",
                          boxShadow: "0 4px 14px color-mix(in srgb, var(--color-welcome-green) 28%, transparent)",
                        }
                      : {
                          backgroundColor: "transparent",
                          color: palette.heading,
                        }
                  }
                >
                  {option.tab}
                </button>
              )
            })}
          </div>
        </div>

        <div
          id="registry-panel"
          role="tabpanel"
          aria-labelledby={`registry-tab-${activeItem.id}`}
          className="flex flex-col items-center px-2 py-2 text-center sm:px-4"
        >
          <h3
            className={`${theSeasons.className} text-lg uppercase tracking-[0.1em] sm:text-xl`}
            style={{ color: palette.heading }}
          >
            {withSpecialMarks(activeItem.title)}
          </h3>
          <p className={`font-goudy-italic mt-2 ${sectionType.textRelaxed}`} style={{ color: palette.body }}>
            {activeItem.hint}
          </p>

          <button
            type="button"
            onClick={() => setEnlarged(true)}
            className="mt-5 rounded-xl bg-white p-3 shadow-sm transition hover:scale-[1.02] active:scale-[0.99] sm:mt-6 sm:p-4"
            style={{
              border: "1px solid color-mix(in srgb, var(--color-motif-deep) 12%, transparent)",
            }}
            aria-label={`Enlarge ${activeItem.title} QR code`}
          >
            <Image
              key={activeItem.id}
              src={activeItem.src}
              alt={`${activeItem.title} QR code`}
              width={280}
              height={280}
              className="h-[220px] w-[220px] object-contain sm:h-[260px] sm:w-[260px] md:h-[280px] md:w-[280px]"
              sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 280px"
              priority
            />
          </button>
          <p className={`font-goudy-italic mt-3 ${sectionType.label}`} style={{ color: palette.label }}>
            Tap QR to enlarge
          </p>

          {"href" in activeItem && activeItem.href ? (
            <a
              href={activeItem.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cinzel.className} ${sectionType.text} mt-5 inline-flex items-center justify-center rounded-full border px-5 py-2.5 font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
              style={{
                backgroundColor: "var(--color-welcome-green)",
                borderColor: "color-mix(in srgb, var(--color-welcome-navy) 35%, transparent)",
                color: "var(--color-welcome-bg)",
                boxShadow: "0 6px 20px color-mix(in srgb, var(--color-welcome-green) 35%, transparent)",
              }}
            >
              {activeItem.actionLabel}
            </a>
          ) : null}
        </div>
      </div>

      {enlarged && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setEnlarged(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} QR code`}
        >
          <button
            type="button"
            onClick={() => setEnlarged(false)}
            className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/40 p-2 text-white transition hover:bg-black/60 sm:right-6 sm:top-6"
            aria-label="Close QR code"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="w-full max-w-[22rem] rounded-2xl bg-white p-5 sm:max-w-md sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <p
              className={`${cinzel.className} mb-4 text-center ${sectionType.label} font-semibold uppercase tracking-[0.16em]`}
              style={{ color: palette.heading }}
            >
              {activeItem.title}
            </p>
            <Image
              src={activeItem.src}
              alt={`${activeItem.title} QR code`}
              width={480}
              height={480}
              className="mx-auto h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}
