"use client"

import { useCVData } from "./cv-data-context"
import { EditableText } from "./editable-text"

export function AboutSection() {
  const { data } = useCVData()

  return (
    <section className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-8 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <EditableText fieldPath="about.heading" />
      </h2>

      <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
        {data.about.paragraphs.map((_, i) => (
          <EditableText
            key={i}
            fieldPath={`about.paragraphs.${i}`}
            as="p"
            multiline
          />
        ))}
      </div>
    </section>
  )
}
