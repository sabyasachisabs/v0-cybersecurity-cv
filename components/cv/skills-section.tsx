"use client"

import { Shield, Terminal, Network, Lock, Bug, Eye } from "lucide-react"

interface SkillCategory {
  icon: React.ReactNode
  title: string
  skills: { name: string; level: number }[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: <Network className="w-5 h-5" />,
    title: "Network Security",
    skills: [
      { name: "Firewalls & IDS/IPS", level: 85 },
      { name: "TCP/IP & OSI Model", level: 90 },
      { name: "VPN Configuration", level: 75 },
      { name: "Wireshark", level: 80 },
    ],
  },
  {
    icon: <Bug className="w-5 h-5" />,
    title: "Penetration Testing",
    skills: [
      { name: "Nmap & Reconnaissance", level: 80 },
      { name: "Burp Suite", level: 75 },
      { name: "Metasploit", level: 70 },
      { name: "OWASP Top 10", level: 85 },
    ],
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Threat Analysis",
    skills: [
      { name: "SIEM (Splunk / QRadar)", level: 80 },
      { name: "Malware Analysis", level: 65 },
      { name: "MITRE ATT&CK", level: 75 },
      { name: "Threat Intelligence", level: 70 },
    ],
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "Bash Scripting", level: 80 },
      { name: "SQL", level: 75 },
      { name: "PowerShell", level: 70 },
    ],
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Compliance & GRC",
    skills: [
      { name: "NIST Framework", level: 80 },
      { name: "ISO 27001", level: 70 },
      { name: "Risk Assessment", level: 75 },
      { name: "Incident Response", level: 80 },
    ],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Cloud Security",
    skills: [
      { name: "AWS Security", level: 70 },
      { name: "Azure AD", level: 65 },
      { name: "Docker Security", level: 60 },
      { name: "IAM Policies", level: 75 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{name}</span>
        <span className="font-mono text-primary/70">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary/70 transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-8 lg:hidden flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        SKILLS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border border-border bg-card p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary border border-primary/20">
                {category.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
