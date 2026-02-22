import { HeroSection } from "@/components/cv/hero-section"
import { SidebarNav } from "@/components/cv/sidebar-nav"
import { PersonalitySection } from "@/components/cv/personality-section"
import { DenHaagSection } from "@/components/cv/denhaag-section"
import { SkillsSection } from "@/components/cv/skills-section"
import { PhilosophySection } from "@/components/cv/philosophy-section"
import { ContactSection } from "@/components/cv/contact-section"
import { Footer } from "@/components/cv/footer"
import { CVDataProvider } from "@/components/cv/cv-data-context"
import { EditModeToggle } from "@/components/cv/edit-mode-toggle"
import { AboutSection } from "@/components/cv/about-section"

export default function CVPage() {
  return (
    <CVDataProvider>
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
              <AboutSection />

              <div className="h-px bg-border" />
              <PersonalitySection />

              <div className="h-px bg-border" />
              <DenHaagSection />

              <div className="h-px bg-border" />
              <SkillsSection />

              <div className="h-px bg-border" />
              <PhilosophySection />

              <div className="h-px bg-border" />
              <ContactSection />

              <div className="lg:hidden">
                <Footer />
              </div>
            </main>
          </div>
        </div>

        <EditModeToggle />
      </div>
    </CVDataProvider>
  )
}
