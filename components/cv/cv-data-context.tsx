"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

// ---------------------------------------------------------------------------
// Default CV data – the single source of truth for all text on the page.
// ---------------------------------------------------------------------------
export interface CVData {
  hero: {
    name: string
    badge1: string
    badge2: string
    badge3: string
    typingText: string
    description: string
    location: string
  }
  about: {
    heading: string
    paragraphs: string[]
  }
  personality: {
    heading: string
    subtitle: string
    traits: {
      title: string
      story: string
      cyberMindset: string
      cyberDetail: string
    }[]
  }
  denhaag: {
    heading: string
    subtitle: string
    items: {
      title: string
      description: string
    }[]
  }
  skills: {
    heading: string
    subtitle: string
    certs: {
      name: string
      detail: string
      status: "earned" | "skill"
    }[]
    categories: {
      title: string
      description: string
      tags: string[]
    }[]
  }
  philosophy: {
    heading: string
    paragraph: string
    pillars: {
      label: string
      description: string
    }[]
  }
  contact: {
    heading: string
    title: string
    description: string
  }
}

const DEFAULT_DATA: CVData = {
  hero: {
    name: "Hi, I'm Nehal",
    badge1: "Dutch Citizen",
    badge2: "Avid Reader",
    badge3: "Aspiring Cybersecurity Professional",
    typingText: "20+ years in IT. Now building a career in cybersecurity.",
    description:
      "I believe that strong security is built on a foundation of discipline and continuous learning. Based in Den Haag, I'm channeling 20+ years of IT infrastructure expertise into cybersecurity, combining hands-on technical skills with structured problem-solving.",
    location: "Den Haag, Netherlands",
  },
  about: {
    heading: "DISCOVER MY STORY",
    paragraphs: [
      "I believe that strong security is built on a foundation of discipline and continuous learning. With over two decades of hands-on IT infrastructure experience\u2014from managing DevOps pipelines and Kubernetes clusters to administering IAM for thousands of users\u2014I've built a deep understanding of how systems work, and how they can break.",
      "Now, I'm channeling that expertise into cybersecurity. My CompTIA Security+ certification (SY0-701) is just the beginning. I'm actively building a home lab with Raspberry Pi and Kubernetes, practicing penetration testing, deploying tools like Snort, Wireshark, and Metasploit, and simulating real-world attacks to sharpen my defensive skills.",
      "Based in Den Haag and fully integrated into Dutch society, I bring a unique combination of entrepreneurial grit, athletic discipline, and relentless curiosity. I'm not just looking for a job\u2014I'm looking to build a lasting cybersecurity career, contributing to the security of Dutch organizations from day one.",
    ],
  },
  personality: {
    heading: "PERSONALITY MEETS PROFESSION",
    subtitle: "How who I am shapes the cybersecurity skills I'm building",
    traits: [
      {
        title: "The Entrepreneurial Soul",
        story: "For five years, I built Koolpick.com from the ground up. Managing a nationwide customer base wasn\u2019t just about sales; it was about mastering the Order-to-Cash process and taking full ownership of every risk.",
        cyberMindset: "Extreme Ownership",
        cyberDetail: "I don\u2019t just learn tools; I understand the business impact behind every vulnerability. Security isn\u2019t theoretical\u2014it\u2019s protecting what matters most to the organization.",
      },
      {
        title: "The Medalist",
        story: "Competing at the district level in multiple sports taught me that victory is a result of structured training and resilience. Whether I\u2019m on the field or hunting vulnerabilities in a lab environment, I approach challenges with discipline and teamwork.",
        cyberMindset: "Discipline & Resilience",
        cyberDetail: "The same structured approach that wins medals drives my systematic vulnerability hunting and security analysis.",
      },
      {
        title: "My Library",
        story: "I read 15\u201320 books a year. This habit fuels my curiosity and keeps me sharp. My recent deep dives include penetration testing methodologies, network security, and threat intelligence, ensuring I stay ahead of evolving threats.",
        cyberMindset: "Continuous Learning",
        cyberDetail: "In cybersecurity, the threat landscape changes daily. My reading habit ensures I\u2019m always learning and adapting.",
      },
      {
        title: "The Urban Jungle",
        story: "My house in Den Haag is full of plants. Tending to them is my daily lesson in continuous monitoring and patience\u2014the same qualities required for effective security operations and threat detection.",
        cyberMindset: "Patience & Monitoring",
        cyberDetail: "Just like plants need consistent care, security infrastructure requires continuous monitoring and proactive attention.",
      },
    ],
  },
  denhaag: {
    heading: "WHY DEN HAAG MATTERS",
    subtitle: "Local roots, global security perspective",
    items: [
      {
        title: "Dutch Citizen",
        description: "Fully integrated into Dutch society. B1 Nederlands certified (March 2022). I understand the culture, the language, and the professional expectations.",
      },
      {
        title: "The Hague Connection",
        description: "Living in the international city of peace and justice. Surrounded by cybersecurity firms, government agencies, and international organizations\u2014the perfect environment for a security career.",
      },
      {
        title: "Local Availability",
        description: "Ready for in-person collaboration, training, and mentorship. No remote delays, no time zone issues. I\u2019m here, committed, and ready to learn from day one.",
      },
      {
        title: "Security-First Mindset",
        description: "Deep interest in EU cybersecurity landscape (NIS2, GDPR, Cyber Resilience Act). I track threat intelligence and understand how regulations shape security practices.",
      },
      {
        title: "Structured Discipline",
        description: "Daily meditation, structured study routines, continuous certification prep. The discipline that built an athlete and entrepreneur now drives my cybersecurity journey.",
      },
      {
        title: "Long-Term Commitment",
        description: "This is home. Family here, life here, career here. I\u2019m not looking to relocate\u2014I\u2019m looking to build a lasting cybersecurity career with a Dutch organization.",
      },
    ],
  },
  skills: {
    heading: "TECHNICAL SKILLS & CERTIFICATIONS",
    subtitle: "20+ years of IT infrastructure expertise transitioning to cybersecurity",
    certs: [
      { name: "CompTIA Security+", detail: "SY0-701 \u2022 Dec 2025", status: "earned" },
      { name: "B1 Nederlands", detail: "Certified \u2022 March 2022", status: "earned" },
      { name: "Python", detail: "Scripting & Automation", status: "skill" },
      { name: "Linux", detail: "System Administration", status: "skill" },
      { name: "Networking", detail: "TCP/IP, DNS, Firewalls", status: "skill" },
    ],
    categories: [
      {
        title: "Infrastructure Foundation",
        description: "20+ years managing DevOps, Kubernetes, Docker, CI/CD pipelines, and Infrastructure as Code. Strong foundation in systems architecture and automation.",
        tags: ["DevOps", "Kubernetes", "Docker", "CI/CD", "IaC"],
      },
      {
        title: "Network Security Understanding",
        description: "Hands-on experience with firewalls, VPNs, network segmentation, and secure configurations. Building home lab for penetration testing practice.",
        tags: ["Firewalls", "VPNs", "Network Segmentation", "TCP/IP", "DNS"],
      },
      {
        title: "Identity & Access Management",
        description: "Managed IAM for 3,000+ users. Deep understanding of least privilege, RBAC, MFA, and authentication protocols (OAuth, SAML, LDAP).",
        tags: ["IAM", "RBAC", "MFA", "OAuth", "SAML", "LDAP"],
      },
      {
        title: "Security Operations Interest",
        description: "Active study of SIEM tools, log analysis, incident response procedures, and threat hunting methodologies. Learning to think like both defender and attacker.",
        tags: ["SIEM", "Log Analysis", "Incident Response", "Threat Hunting"],
      },
      {
        title: "Scripting & Automation",
        description: "Python, Bash, and YAML for security automation. Creating scripts for vulnerability scanning, log parsing, and security task automation.",
        tags: ["Python", "Bash", "YAML", "Automation"],
      },
      {
        title: "Cybersecurity Home Lab",
        description: "Raspberry Pi/Kubernetes setup for hands-on learning: practicing penetration testing, deploying security tools (Snort, Wireshark, Metasploit), and simulating attacks.",
        tags: ["Raspberry Pi", "Snort", "Wireshark", "Metasploit"],
      },
    ],
  },
  philosophy: {
    heading: "CYBERSECURITY PHILOSOPHY",
    paragraph: "Security isn\u2019t just about tools and technologies. I approach it with discipline (structured learning), curiosity (understanding how attacks work), and business awareness (protecting what matters most). My 20+ years in IT infrastructure give me the systems thinking needed to see the bigger picture.",
    pillars: [
      { label: "Discipline", description: "Structured learning" },
      { label: "Curiosity", description: "Understanding how attacks work" },
      { label: "Business Awareness", description: "Protecting what matters most" },
    ],
  },
  contact: {
    heading: "LET'S CONNECT",
    title: "Let\u2019s Grab a Coffee in Den Haag",
    description: "Looking for entry-level cybersecurity opportunities, internships, or mentorship. Ready to bring structured discipline, hands-on technical skills, and 20+ years of IT problem-solving to your security team. I'm here, local, and eager to learn.",
  },
}

const STORAGE_KEY = "cv-data"

// ---------------------------------------------------------------------------
// Helper: get a nested value by dot-path  e.g. "hero.name"
// ---------------------------------------------------------------------------
function getByPath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[key]
    return undefined
  }, obj)
}

// ---------------------------------------------------------------------------
// Helper: set a nested value by dot-path (immutable)
// ---------------------------------------------------------------------------
function setByPath(obj: Record<string, unknown>, path: string, value: unknown): Record<string, unknown> {
  const keys = path.split(".")
  if (keys.length === 1) {
    return { ...obj, [keys[0]]: value }
  }
  const [head, ...rest] = keys
  return {
    ...obj,
    [head]: setByPath(
      (obj[head] as Record<string, unknown>) ?? {},
      rest.join("."),
      value
    ),
  }
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------
interface CVDataContextValue {
  data: CVData
  isEditMode: boolean
  toggleEditMode: () => void
  updateField: (path: string, value: unknown) => void
  getField: (path: string) => unknown
  resetToDefaults: () => void
}

const CVDataContext = createContext<CVDataContextValue | null>(null)

export function CVDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CVData>(DEFAULT_DATA)
  const [isEditMode, setIsEditMode] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as CVData
        setData(parsed)
      }
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  // Persist on change (skip initial hydration)
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch {
      // ignore
    }
  }, [data, hydrated])

  const toggleEditMode = useCallback(() => setIsEditMode((p) => !p), [])

  const updateField = useCallback((path: string, value: unknown) => {
    setData((prev) => setByPath(prev as unknown as Record<string, unknown>, path, value) as unknown as CVData)
  }, [])

  const getField = useCallback(
    (path: string): unknown => getByPath(data as unknown as Record<string, unknown>, path),
    [data]
  )

  const resetToDefaults = useCallback(() => {
    setData(DEFAULT_DATA)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }, [])

  return (
    <CVDataContext.Provider value={{ data, isEditMode, toggleEditMode, updateField, getField, resetToDefaults }}>
      {children}
    </CVDataContext.Provider>
  )
}

export function useCVData() {
  const ctx = useContext(CVDataContext)
  if (!ctx) throw new Error("useCVData must be used within CVDataProvider")
  return ctx
}
