import { Github, ExternalLink, Star } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  stars?: number
}

const PROJECTS: Project[] = [
  {
    title: "NetScan Toolkit",
    description:
      "Built a Python-based network scanning toolkit that automates reconnaissance tasks including port scanning, service enumeration, and vulnerability detection. Integrates with CVE databases for real-time threat intelligence.",
    tags: ["Python", "Nmap", "CVE API", "Socket Programming"],
    githubUrl: "#",
    stars: 128,
  },
  {
    title: "Phishing URL Detector",
    description:
      "Developed a machine learning model that detects phishing URLs with 96.3% accuracy using feature extraction from URL patterns, WHOIS data, and SSL certificate analysis. Deployed as a browser extension.",
    tags: ["Python", "scikit-learn", "Flask", "Chrome Extension"],
    githubUrl: "#",
    liveUrl: "#",
    stars: 87,
  },
  {
    title: "Home Lab SOC Environment",
    description:
      "Designed and deployed a full Security Operations Center lab using VirtualBox, featuring Splunk SIEM, Suricata IDS, and a Windows Active Directory environment for realistic attack simulation and detection.",
    tags: ["Splunk", "Suricata", "Active Directory", "VirtualBox"],
    githubUrl: "#",
    stars: 245,
  },
  {
    title: "Incident Response Playbook",
    description:
      "Created a comprehensive incident response playbook covering ransomware, DDoS, and data breach scenarios. Includes automated triage scripts, communication templates, and evidence collection procedures.",
    tags: ["IR Planning", "Bash", "Documentation", "NIST"],
    githubUrl: "#",
    stars: 56,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-8 lg:hidden flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        PROJECTS
      </h2>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group rounded-lg border border-border bg-card p-5 hover:border-primary/30 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-foreground font-medium">{project.title}</h3>
              <div className="flex items-center gap-3 shrink-0 ml-4">
                {project.stars && (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3.5 h-3.5 fill-primary/40 text-primary/60" />
                    {project.stars}
                  </span>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="sr-only">GitHub repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="sr-only">Live demo</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
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
