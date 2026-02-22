"use client"

import { Flag, Building2, MapPin, ShieldCheck, Target, Heart } from "lucide-react"
import { useCVData } from "./cv-data-context"
import { EditableText } from "./editable-text"

const ICONS = [
  <Flag key="flag" className="w-5 h-5" />,
  <Building2 key="building" className="w-5 h-5" />,
  <MapPin key="map" className="w-5 h-5" />,
  <ShieldCheck key="shield" className="w-5 h-5" />,
  <Target key="target" className="w-5 h-5" />,
  <Heart key="heart" className="w-5 h-5" />,
]

export function DenHaagSection() {
  const { data } = useCVData()

  return (
    <section id="denhaag" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-2 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <EditableText fieldPath="denhaag.heading" />
      </h2>
      <p className="text-sm text-muted-foreground mb-8 lg:ml-11">
        <EditableText fieldPath="denhaag.subtitle" />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.denhaag.items.map((item, i) => (
          <div
            key={i}
            className="group rounded-lg border border-border bg-card p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary border border-primary/20 mb-4">
              {ICONS[i]}
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-2">
              <EditableText fieldPath={`denhaag.items.${i}.title`} />
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <EditableText fieldPath={`denhaag.items.${i}.description`} />
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
