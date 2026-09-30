"use client"

import Image from "next/image"

export function PreActivities() {
  return (
    <section
      id="pre-activities"
      className="relative z-10 w-full"
      style={{ background: "var(--color-welcome-bg)" }}
    >
      <h2 className="sr-only">Pre-Wedding Festivities</h2>
      <div className="relative h-[100svh] w-full sm:h-auto sm:mx-auto sm:max-w-3xl sm:px-6 sm:py-10 md:px-8 md:py-12">
        <Image
          src="/decoration/decorations/pre-wedding-festivities.png"
          alt="Pre-Wedding Festivities: refreshment station, perfume bar, selfie mirror, magazine photobooth, and pica-pica station starting at 4:00 PM"
          width={1600}
          height={2200}
          className="h-full w-full object-cover object-top sm:h-auto sm:w-full sm:object-contain"
          sizes="(max-width: 640px) 100vw, 768px"
          priority
        />
      </div>
    </section>
  )
}
