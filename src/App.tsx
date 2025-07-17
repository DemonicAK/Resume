import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/modetoggle"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { InfoCard } from "@/components/ui/project-card"
import data from "./data/mydata.json"
// import "./styles/globals.css"
import "./App.css"


export default function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <div className="max-w-2xl mx-auto py-16 px-8 bg-transparent">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Aadarsh Kr." />
            </Avatar>
            <div className="space-y-1 text-left">
              <h1 className="text-2xl font-semibold text-foreground text-left">Arijit kar</h1>
              <p className="text-base text-muted-foreground text-left">Developer && Student</p>
              <span className="inline-block text-sm text-muted-foreground text-left">
                arijitkar.com
              </span>
            </div>
          </div>
          <ModeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-lg font-medium text-foreground text-left mb-4">About</h2>
          <p className="text-sm text-muted-foreground leading-relaxed text-left">
            Software Developer Intern at Unity Innovate 🏆 Creating web applications and AI solutions. Before that, I built ML models and interfaces at DRDO.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-lg font-medium text-foreground text-left mb-6">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <InfoCard
                key={index}
                date={exp.duration}
                title={exp.title}
                shortDescription={exp.company}
                longDescription={exp.details}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-lg font-medium text-foreground text-left mb-6">Projects</h2>
          <div className="space-y-6">
            {data.projects.map((project, index) => (
              <InfoCard
                key={index}
                date="2024 - Present"
                title={project.title}
                shortDescription="Interactive portfolio website"
                longDescription={project.description}
                link={project.link}
                badge={project.stack}
              />
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg font-medium text-foreground text-left mb-6">Education</h2>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <InfoCard
                key={index}
                date={edu.year}
                title={edu.degree}
                shortDescription={edu.institution}
                longDescription={edu.details}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
