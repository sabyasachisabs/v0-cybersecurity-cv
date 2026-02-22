import { HeroSection } from "@/components/cv/hero-section"
import { SidebarNav } from "@/components/cv/sidebar-nav"
import { ExperienceSection } from "@/components/cv/experience-section"
import { SkillsSection } from "@/components/cv/skills-section"
import { CertificationsSection } from "@/components/cv/certifications-section"
import { ProjectsSection } from "@/components/cv/projects-section"
import { EducationSection } from "@/components/cv/education-section"
import { Footer } from "@/components/cv/footer"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="lg:flex lg:gap-16">
          {/* Sticky Left Column */}
          <div className="lg:w-[340px] lg:shrink-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-12">
            <div>
              <HeroSection />
              <SidebarNav />
            </div>

            <div className="hidden lg:block">
              <Footer />
            </div>
          </div>

          {/* Scrollable Right Column */}
          <main className="flex-1 lg:pt-24" id="about">
            <section className="py-12">
              <h2 className="text-xs font-medium tracking-widest text-foreground mb-8 lg:hidden flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                ABOUT
              </h2>

              <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  My journey into cybersecurity began when I discovered a critical XSS vulnerability
                  in my university&apos;s student portal during my sophomore year. That experience
                  ignited a passion for understanding how systems can be exploited and, more importantly,
                  how they can be defended.
                </p>
                <p>
                  Since then, I&apos;ve immersed myself in the world of information security
                  — from building out a full home lab SOC environment to competing in national
                  Collegiate Cyber Defense Competitions. I thrive on the challenge of staying
                  one step ahead of threats and translating complex security concepts into
                  actionable strategies.
                </p>
                <p>
                  When I&apos;m not diving into packet captures or writing detection rules,
                  you&apos;ll find me contributing to open-source security tools, participating
                  in CTF competitions, or mentoring fellow students in our university&apos;s
                  cybersecurity club.
                </p>
              </div>
            </section>

            <div className="h-px bg-border" />
            <ExperienceSection />

            <div className="h-px bg-border" />
            <SkillsSection />

            <div className="h-px bg-border" />
            <CertificationsSection />

            <div className="h-px bg-border" />
            <ProjectsSection />

            <div className="h-px bg-border" />
            <EducationSection />

            <div className="lg:hidden">
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
