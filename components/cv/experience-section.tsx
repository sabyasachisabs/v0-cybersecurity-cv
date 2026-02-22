import { ExternalLink } from "lucide-react"

interface ExperienceItem {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  tags: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2025 — PRESENT",
    title: "Security Operations Intern",
    company: "CyberShield Solutions",
    companyUrl: "#",
    description:
      "Monitor security alerts using SIEM tools, assist with incident response procedures, and conduct vulnerability assessments on client infrastructure. Collaborate with senior analysts to investigate potential threats and document findings for remediation.",
    tags: ["SIEM", "Splunk", "Incident Response", "Vulnerability Assessment"],
  },
  {
    period: "2024 — 2025",
    title: "IT Security Assistant",
    company: "TechForward Inc.",
    companyUrl: "#",
    description:
      "Assisted in implementing security policies and procedures across the organization. Performed regular security audits, managed firewall configurations, and helped deploy endpoint detection and response solutions across 200+ workstations.",
    tags: ["Firewalls", "EDR", "Security Auditing", "Policy Implementation"],
  },
  {
    period: "2023 — 2024",
    title: "Help Desk Technician",
    company: "DataVault Systems",
    companyUrl: "#",
    description:
      "Provided tier-1 technical support while gaining hands-on experience with network administration and security fundamentals. Identified and reported multiple phishing attempts, leading to the implementation of enhanced email filtering protocols.",
    tags: ["Network Admin", "Technical Support", "Phishing Analysis", "Email Security"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-8 lg:hidden flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        EXPERIENCE
      </h2>

      <div className="flex flex-col gap-8">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.title}
            className="group relative rounded-lg p-5 -mx-5 transition-all hover:bg-secondary/50 hover:border-border"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <p className="text-xs font-mono text-muted-foreground tracking-wide whitespace-nowrap pt-1 md:w-40 shrink-0">
                {exp.period}
              </p>

              <div className="flex-1">
                <h3 className="text-foreground font-medium mb-1">
                  {exp.title} &middot;{" "}
                  <a
                    href={exp.companyUrl}
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    {exp.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
