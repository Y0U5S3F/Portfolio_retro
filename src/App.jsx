import { navigation } from './data/navigation'
import { useActiveSection } from './hooks/useActiveSection'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { SiteHeader } from './components/layout/SiteHeader'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { GitHubSection } from './components/sections/GitHubSection'
import { ProfileSection } from './components/sections/ProfileSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { StatsSection } from './components/sections/StatsSection'

const SECTION_IDS = navigation.map(({ id }) => id)

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <div id="app">
      <Navbar activeSection={activeSection} />
      <SiteHeader />

      <main>
        <ProfileSection />
        <StatsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <GitHubSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
