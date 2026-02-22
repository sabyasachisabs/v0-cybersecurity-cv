import { Award, ExternalLink } from "lucide-react"

interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  status: "earned" | "in-progress"
}

const CERTIFICATIONS: Certification[] = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Jan 2025",
    credentialId: "COMP001234567",
    status: "earned",
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    date: "Aug 2024",
    credentialId: "COMP001234568",
    status: "earned",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "Expected Jun 2026",
    status: "in-progress",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Mar 2024",
    credentialId: "AWS-CCP-98765",
    status: "earned",
  },
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    date: "Nov 2023",
    credentialId: "GCC-2023-4521",
    status: "earned",
  },
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC2",
    date: "Expected Dec 2026",
    status: "in-progress",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-12">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-8 lg:hidden flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        CERTIFICATIONS
      </h2>

      <div className="flex flex-col gap-4">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.name}
            className="group flex items-start gap-4 rounded-lg p-4 -mx-4 transition-all hover:bg-secondary/50"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
              <Award className={`w-5 h-5 ${cert.status === "earned" ? "text-primary" : "text-muted-foreground"}`} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-medium text-foreground">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {cert.status === "in-progress" ? (
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-muted-foreground border border-border">
                      In Progress
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      Earned
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span className="font-mono">{cert.date}</span>
                {cert.credentialId && (
                  <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <span>ID: {cert.credentialId}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
