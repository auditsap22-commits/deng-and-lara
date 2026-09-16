"use client"

import { Section } from "@/components/section"
import { SectionCornerDecorations } from "@/components/section-corner-decorations"
import { useEffect, useState, type ReactNode } from "react"
import { QRCodeSVG } from "qrcode.react"
import { useSiteConfig } from "@/hooks/use-site-config"
import { layeredSectionTitleSize, sectionType } from "@/lib/section-typography"
import Image from "next/image"
import localFont from "next/font/local"
import { Cinzel } from "next/font/google"
import { Copy, Check, Navigation, MapPin, X } from "lucide-react"

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

const detailText = {
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

const softPanelStyle = {
  borderColor: "color-mix(in srgb, var(--color-motif-deep) 10%, transparent)",
  backgroundColor: "var(--color-welcome-bg-soft)",
} as const

const QR_FG = "var(--color-motif-deep)"
const QR_BG = "#FAF7F2"

const RECEPTION = {
  name: "San Pablo MPC Pavilion",
  city: "Malolos, Bulacan",
  fullAddress: "San Pablo MPC Pavilion, Malolos, Bulacan",
  mapsUrl: "https://maps.app.goo.gl/nyXehbkv6yCjHQLM6",
  venueImage: "/Details/venue.jpg",
  mapImage: "/Details/map_image.jpg",
} as const

const ct = {
  label: sectionType.label,
  body: sectionType.text,
  bodyLg: sectionType.subheader,
  btn: sectionType.text,
  month: "text-lg sm:text-2xl md:text-3xl lg:text-4xl",
  dayNum: "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
  year: "text-lg sm:text-2xl md:text-3xl lg:text-4xl",
} as const

function SectionIconDivider({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 pt-1 sm:pt-2">
      <span
        className="h-px w-8 sm:w-12 md:w-16"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent))",
        }}
      />
      {icon}
      <span
        className="h-px w-8 sm:w-12 md:w-16"
        style={{
          background:
            "linear-gradient(to left, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent))",
        }}
      />
    </div>
  )
}

function DetailsTitle() {
  return (
    <h2
      className="welcome-title-lockup relative mx-auto w-full max-w-full text-center"
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
        Reception
      </span>
      <span
        aria-hidden
        className={`${aboveTheBeyond.className} relative z-10 mx-auto block w-fit max-w-full px-1 leading-[0.88] sm:leading-[0.9]`}
        style={{
          marginTop: "var(--script-overlap)",
          fontSize: "var(--script-size)",
          color: "var(--color-motif-accent)",
          textShadow:
            "0 1px 0 color-mix(in srgb, var(--color-welcome-bg) 95%, white), 0 0 10px color-mix(in srgb, var(--color-welcome-bg) 65%, white)",
        }}
      >
        join us
      </span>
      <span className="sr-only">join us</span>
    </h2>
  )
}

export function Details() {
  const siteConfig = useSiteConfig()
  const [copied, setCopied] = useState(false)
  const [showMap, setShowMap] = useState(false)

  const eventDate = new Date(siteConfig.reception.date)
  const day = siteConfig.reception.day
  const time = siteConfig.reception.time

  useEffect(() => {
    if (!showMap) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowMap(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [showMap])

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(RECEPTION.fullAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy address: ", err)
    }
  }

  const openInMaps = () => {
    window.open(RECEPTION.mapsUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative w-full`}
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <Section
        id="details"
        className="relative z-10 overflow-hidden pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14"
      >
        <SectionCornerDecorations />

        <div className="relative z-20 mx-auto mb-6 max-w-5xl px-6 text-center @container/details sm:mb-8 sm:px-10 md:mb-10 md:px-12">
          <p
            className={`${cinzel.className} ${sectionType.label} mb-2 font-semibold uppercase tracking-[0.34em] min-[400px]:tracking-[0.38em] sm:tracking-[0.44em]`}
            style={{ color: "var(--color-welcome-heading)" }}
          >
            Our Celebration
          </p>
          <div className="my-4 sm:my-5 md:my-6">
            <DetailsTitle />
          </div>
          <p
            className={`font-goudy-italic mx-auto max-w-2xl px-2 ${sectionType.textRelaxed}`}
            style={{ color: "var(--color-welcome-text)" }}
          >
            We look forward to celebrating with you at San Pablo MPC Pavilion.
          </p>

          <SectionIconDivider
            icon={
              <MapPin
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                style={{ color: "var(--color-welcome-green)" }}
                aria-hidden
              />
            }
          />
        </div>

        <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="relative group">
            <div
              className="absolute -inset-1 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(to bottom right, color-mix(in srgb, var(--color-welcome-green) 15%, transparent), transparent)",
              }}
            />

            <div
              className="relative overflow-hidden rounded-xl border transition-all duration-300 sm:rounded-2xl"
              style={cardStyle}
            >
              <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-[26rem] lg:h-[30rem]">
                <Image
                  src={RECEPTION.venueImage}
                  alt={RECEPTION.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 z-10 sm:bottom-5 sm:left-5 sm:right-5 md:bottom-7 md:left-7 md:right-7">
                  <span
                    className={`${cinzel.className} mb-2 inline-block rounded-full border border-white/30 bg-white/20 px-3 py-1 uppercase tracking-[0.2em] text-white backdrop-blur-sm ${sectionType.label}`}
                  >
                    Reception
                  </span>
                  <h3
                    className={`${theSeasons.className} mb-1 text-lg font-semibold uppercase leading-tight tracking-[0.1em] text-white drop-shadow-lg sm:text-xl md:text-2xl lg:text-3xl`}
                  >
                    {RECEPTION.name}
                  </h3>
                  <p
                    className={`${theSeasons.className} ${sectionType.textSnug} tracking-[0.06em] text-white/95 drop-shadow-md lg:text-lg`}
                  >
                    {RECEPTION.city}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="mb-6 space-y-2 text-center sm:mb-8 md:mb-10 sm:space-y-2.5">
                  <p
                    className={`${cinzel.className} ${ct.label} font-semibold uppercase tracking-[0.2em]`}
                    style={{ color: detailText.heading }}
                  >
                    {day}
                  </p>
                  <p
                    className={`${cinzel.className} ${ct.month} font-semibold leading-none`}
                    style={{ color: detailText.heading }}
                  >
                    {eventDate.toLocaleString("default", { month: "long" })}
                  </p>
                  <div className="flex items-center justify-center gap-3 py-1 sm:gap-4 md:gap-5 sm:py-2">
                    <p
                      className={`${cinzel.className} ${ct.dayNum} font-semibold leading-none`}
                      style={{ color: detailText.accent }}
                    >
                      {eventDate.getDate()}
                    </p>
                    <div
                      className="h-10 w-[2px] rounded-full sm:h-12 md:h-14"
                      style={{ backgroundColor: "var(--color-welcome-green)" }}
                    />
                    <p
                      className={`${cinzel.className} ${ct.year} font-semibold leading-none`}
                      style={{ color: detailText.heading }}
                    >
                      {eventDate.getFullYear()}
                    </p>
                  </div>
                  <p
                    className={`${cinzel.className} text-sm font-semibold uppercase tracking-[0.14em] sm:text-base md:text-lg lg:text-xl`}
                    style={{ color: detailText.heading }}
                  >
                    At {time}
                  </p>
                </div>

                <div className="mb-5 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6">
                  <button
                    type="button"
                    onClick={() => setShowMap(true)}
                    className="group/map relative overflow-hidden rounded-xl border text-left transition-transform duration-300 hover:scale-[1.01] active:scale-[0.995]"
                    style={softPanelStyle}
                    aria-label="Open route map"
                  >
                    <div className="relative aspect-[4/5] w-full bg-[#E8F0E4] sm:aspect-[5/6] lg:aspect-auto lg:h-full lg:min-h-[22rem]">
                      <Image
                        src={RECEPTION.mapImage}
                        alt="Route map to San Pablo Pavilion from Ayala Malls Cloverleaf"
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </div>
                    <span
                      className={`${cinzel.className} absolute bottom-3 left-3 rounded-full border border-white/40 bg-black/45 px-3 py-1 uppercase tracking-[0.16em] text-white backdrop-blur-sm ${sectionType.label}`}
                    >
                      Tap to enlarge
                    </span>
                  </button>

                  <div className="flex flex-col justify-between gap-5 rounded-xl border p-4 sm:p-5 md:p-6" style={softPanelStyle}>
                    <div className="text-center lg:text-left">
                      <p
                        className={`${cinzel.className} ${ct.label} mb-2 font-semibold uppercase tracking-wide`}
                        style={{ color: detailText.label }}
                      >
                        Reception Venue
                      </p>
                      <p
                        className={`${theSeasons.className} text-base font-semibold uppercase leading-snug tracking-[0.06em] sm:text-lg md:text-xl`}
                        style={{ color: detailText.heading }}
                      >
                        {RECEPTION.name}
                      </p>
                      <p
                        className={`${theSeasons.className} ${ct.body} mt-1 tracking-[0.04em]`}
                        style={{ color: detailText.body }}
                      >
                        {RECEPTION.city}
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="rounded-lg border p-2 shadow-sm sm:p-2.5"
                        style={{
                          backgroundColor: "var(--color-welcome-bg)",
                          borderColor: "color-mix(in srgb, var(--color-motif-deep) 14%, transparent)",
                        }}
                      >
                        <QRCodeSVG
                          value={RECEPTION.mapsUrl}
                          size={128}
                          level="M"
                          includeMargin={false}
                          fgColor={QR_FG}
                          bgColor={QR_BG}
                        />
                      </div>
                      <p
                        className={`font-goudy-italic ${ct.label} text-center`}
                        style={{ color: detailText.label }}
                      >
                        Scan for directions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 md:gap-4">
                  <button
                    type="button"
                    onClick={openInMaps}
                    className={`${cinzel.className} ${ct.btn} flex flex-1 items-center justify-center gap-1.5 rounded-full border px-4 py-2.5 font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] sm:gap-2 sm:px-5 sm:py-3 md:py-3.5`}
                    style={{
                      backgroundColor: "var(--color-welcome-green)",
                      borderColor: "color-mix(in srgb, var(--color-welcome-navy) 35%, transparent)",
                      color: "var(--color-welcome-bg)",
                      boxShadow:
                        "0 6px 20px color-mix(in srgb, var(--color-welcome-green) 35%, transparent)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--color-welcome-navy)"
                      e.currentTarget.style.borderColor = "var(--color-welcome-green)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--color-welcome-green)"
                      e.currentTarget.style.borderColor =
                        "color-mix(in srgb, var(--color-welcome-navy) 35%, transparent)"
                    }}
                    aria-label="Get directions to the reception venue"
                  >
                    <Navigation className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    <span>Get Directions</span>
                  </button>
                  <button
                    type="button"
                    onClick={copyAddress}
                    className={`${cinzel.className} ${ct.btn} flex flex-1 items-center justify-center gap-1.5 rounded-full border-2 px-4 py-2.5 font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] sm:gap-2 sm:px-5 sm:py-3 md:py-3.5`}
                    style={{
                      color: detailText.heading,
                      backgroundColor: "var(--color-welcome-bg-soft)",
                      borderColor: "color-mix(in srgb, var(--color-motif-deep) 20%, transparent)",
                    }}
                    aria-label="Copy reception venue address"
                  >
                    {copied ? (
                      <Check
                        className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5"
                        style={{ color: "var(--color-welcome-green)" }}
                      />
                    ) : (
                      <Copy className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    )}
                    <span>{copied ? "Copied!" : "Copy Address"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {showMap && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setShowMap(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Route map"
        >
          <button
            type="button"
            onClick={() => setShowMap(false)}
            className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/40 p-2 text-white transition hover:bg-black/60 sm:right-6 sm:top-6"
            aria-label="Close map"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={RECEPTION.mapImage}
              alt="Route map to San Pablo Pavilion from Ayala Malls Cloverleaf"
              width={1200}
              height={1500}
              className="h-auto max-h-[92vh] w-full object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
