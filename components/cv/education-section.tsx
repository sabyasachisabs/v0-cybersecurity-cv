import { GraduationCap, BookOpen } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  period: string
  gpa?: string
  highlights: string[]
}

const EDUCATION: EducationItem[] = [
  {
    degree: "B.S. in Computer Science, Cybersecurity Concentration",
    institution: "University of California, Berkeley",
    period: "2021 — 2025",
    gpa: "3.8/4.0",
    highlights: [
      "Dean's List — 6 consecutive semesters",
      "Cybersecurity Club President (2023-2025)",
      "Participated in National CCDC Competition",
      "Relevant coursework: Cryptography, Network Security, Digital Forensics, Secure Software Engineering",
    ],
  },
]

const COURSES = [
  "TryHackMe — SOC Level 1 Path (Complete)",
  "HackTheBox — Penetration Testing Path (In Progress)",
  "SANS Cyber Aces Online — Network Security Fundamentals",
  "Cybrary — Advanced Penetration Testing",
]

export function EducationSection() {
  return (
    <section id="education" className="py-12 pb-24">
      <h2 className="text-xs font-medium tracking-widest text-foreground mb-8 lg:hidden flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        EDUCATION
      </h2>

      <div className="flex flex-col gap-8">
        {EDUCATION.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-1">
                  <h3 className="text-foreground font-medium text-sm">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm text-primary mb-1">{edu.institution}</p>
                {edu.gpa && (
                  <p className="text-xs text-muted-foreground font-mono mb-3">
                    GPA: {edu.gpa}
                  </p>
                )}

                <ul className="flex flex-col gap-1.5">
                  {edu.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary/60 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 border border-primary/20">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">
              Continuous Learning
            </h3>
          </div>

          <ul className="flex flex-col gap-2">
            {COURSES.map((course) => (
              <li
                key={course}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary font-mono text-xs mt-0.5 shrink-0">
                  {">"}
                </span>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
