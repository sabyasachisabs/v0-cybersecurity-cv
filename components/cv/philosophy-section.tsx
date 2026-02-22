"use client"

import { Brain, Search, Briefcase } from "lucide-react"
import { useCVData } from "./cv-data-context"
import { EditableText } from "./editable-text"

const PILLAR_ICONS = [
  <Brain key="brain" className="w-5 h-5" />,
  <Search key="search" className="w-5 h-5" />,
  <Briefcase key="brief" className="w-5 h-5" />,
]

export function PhilosophySection() {
  const { data } = useCVData()

  return (
    <section id="philosophy" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-2 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <EditableText fieldPath="philosophy.heading" />
      </h2>

      <div className="rounded-lg border border-border bg-card p-6 mt-8">
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          <EditableText fieldPath="philosophy.paragraph" />
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.philosophy.pillars.map((pillar, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-md bg-secondary/70 border border-border p-4"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/20 shrink-0">
                {PILLAR_ICONS[i]}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  <EditableText fieldPath={`philosophy.pillars.${i}.label`} />
                </p>
                <p className="text-xs text-muted-foreground">
                  <EditableText fieldPath={`philosophy.pillars.${i}.description`} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
