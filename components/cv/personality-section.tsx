"use client"

import { Rocket, Medal, BookOpen, Leaf } from "lucide-react"
import { useCVData } from "./cv-data-context"
import { EditableText } from "./editable-text"

const ICONS = [
  <Rocket key="rocket" className="w-5 h-5" />,
  <Medal key="medal" className="w-5 h-5" />,
  <BookOpen key="book" className="w-5 h-5" />,
  <Leaf key="leaf" className="w-5 h-5" />,
]

export function PersonalitySection() {
  const { data } = useCVData()

  return (
    <section id="personality" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-2 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <EditableText fieldPath="personality.heading" />
      </h2>
      <p className="text-sm text-muted-foreground mb-8 lg:ml-11">
        <EditableText fieldPath="personality.subtitle" />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.personality.traits.map((trait, i) => (
          <div
            key={i}
            className="group rounded-lg border border-border bg-card p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/20">
                {ICONS[i]}
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                <EditableText fieldPath={`personality.traits.${i}.title`} />
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              <EditableText fieldPath={`personality.traits.${i}.story`} />
            </p>

            <div className="rounded-md bg-secondary/70 border border-border p-3">
              <p className="text-xs font-medium text-primary mb-1">
                {"Cybersecurity Mindset: "}
                <EditableText fieldPath={`personality.traits.${i}.cyberMindset`} />
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <EditableText fieldPath={`personality.traits.${i}.cyberDetail`} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
