"use client"

import { Shield, Terminal, Network, Lock, Bug, Cloud, Award } from "lucide-react"
import { useCVData } from "./cv-data-context"
import { EditableText } from "./editable-text"

const SKILL_ICONS = [
  <Network key="net" className="w-5 h-5" />,
  <Shield key="shield" className="w-5 h-5" />,
  <Lock key="lock" className="w-5 h-5" />,
  <Bug key="bug" className="w-5 h-5" />,
  <Terminal key="term" className="w-5 h-5" />,
  <Cloud key="cloud" className="w-5 h-5" />,
]

export function SkillsSection() {
  const { data } = useCVData()

  return (
    <section id="skills" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-2 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <EditableText fieldPath="skills.heading" />
      </h2>
      <p className="text-sm text-muted-foreground mb-8 lg:ml-11">
        <EditableText fieldPath="skills.subtitle" />
      </p>

      {/* Credentials Bar */}
      <div className="flex flex-wrap gap-3 mb-8">
        {data.skills.certs.map((cert, i) => (
          <div
            key={i}
            className={`flex items-center gap-2.5 rounded-lg border px-4 py-2.5 ${
              cert.status === "earned"
                ? "border-primary/30 bg-primary/5"
                : "border-border bg-card"
            }`}
          >
            <Award
              className={`w-4 h-4 shrink-0 ${
                cert.status === "earned" ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <div>
              <p
                className={`text-xs font-semibold ${
                  cert.status === "earned" ? "text-primary" : "text-foreground"
                }`}
              >
                <EditableText fieldPath={`skills.certs.${i}.name`} />
              </p>
              <p className="text-xs text-muted-foreground">
                <EditableText fieldPath={`skills.certs.${i}.detail`} />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.skills.categories.map((category, i) => (
          <div
            key={i}
            className="group rounded-lg border border-border bg-card p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/20">
                {SKILL_ICONS[i]}
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                <EditableText fieldPath={`skills.categories.${i}.title`} />
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              <EditableText fieldPath={`skills.categories.${i}.description`} />
            </p>

            <div className="flex flex-wrap gap-1.5">
              {category.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
