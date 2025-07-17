import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/modetoggle"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { InfoCard } from "@/components/ui/project-card"
import { SkillCard } from "@/components/ui/skill-card"
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
            <Avatar className="h-32 w-16">
              <AvatarImage src="./arijitkar_photo.jpg" alt="Arijit kar" />
            </Avatar>
            <div className="space-y-1 text-left">
              <h1 className="text-2xl font-semibold text-foreground text-left">{data.about.name}</h1>
              <p className="text-base text-muted-foreground text-left">{data.about.role}</p>
              <a
                className="inline-block text-sm text-muted-foreground text-left"
                href="https://arijitkar.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                arijitkar.com
              </a>
            </div>
          </div>
          <ModeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-lg font-medium text-foreground text-left mb-4">About</h2>
          <p className="text-sm text-muted-foreground leading-relaxed text-left">
            {data.about.bio}
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
        {/* Skills & Interests */}
          <section className="mb-8 my-12">
            <h2 className="text-lg font-medium text-foreground text-left mb-6">Skills & Interests</h2>
            {/* Skills Grid */}
          <div>
              {data.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>

            {/* Areas of Interest */}
            <div>
              <h3 className="text-base font-medium text-foreground text-left mb-2">Areas of Interest</h3>
              <p className="text-sm text-muted-foreground text-left mb-3">Focus Areas</p>
              <p className="text-sm text-muted-foreground text-left leading-relaxed">
                Software Development, Genrative AI, ML, Frontend, UI Design
              </p>
            </div>
          </section>

    
        {/* Contact */}
        <section>
          <h2 className="text-lg font-medium text-foreground text-left mb-6">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors">
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Email</span>
                <a
                  href="mailto:connect@arijitkar.com"
                  className="text-sm text-foreground hover:text-primary transition-colors block"
                >
                  connect@arijitkar.com ↗
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors">
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Github</span>
                <a
                  href="https://github.com/DemonicAK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-primary transition-colors block"
                >
                  DemonicAK ↗
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors">
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/arijitkar0x7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-primary transition-colors block"
                >
                  Arijit kar ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
