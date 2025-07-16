import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/modetoggle"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import data from "./data/mydata.json"
// import "./styles/globals.css"
import "./App.css"


export default function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors justify-center items-center">
      <div className="max-w-3xl mx-auto py-12 px-8 space-y-12">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-5">
            <Avatar className="h-16 w-16 ring-2 ring-border">
              <AvatarImage src={data.about.avatar} alt={data.about.name} />
            </Avatar>
            <div className="space-y-1.5">
              <h1 className="text-3xl font-bold tracking-tight">{data.about.name}</h1>
              <p className="text-lg text-muted-foreground font-medium">{data.about.role}</p>
              <span className="inline-block text-sm bg-muted px-3 py-1.5 rounded-lg font-medium">
                {data.about.link}
              </span>
            </div>
          </div>
          <ModeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* About */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">About</h2>
          <p className="text-muted-foreground leading-relaxed">{data.about.bio}</p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-6">Experience</h2>
          <div className="space-y-4">
            {data.experience.map((item, i) => (
              <Card key={i} className="border-border/40 hover:border-border/60 transition-colors">
                <CardContent className="py-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <span className="text-sm text-muted-foreground font-medium">{item.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-6">Projects</h2>
          <div className="space-y-4">
            {data.projects.map((item, i) => (
              <Card key={i} className="border-border/40 hover:border-border/60 transition-colors">
                <CardContent className="py-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          ↗
                        </a>
                      )}
                    </div>
                    {item.stack && (
                      <span className="inline-block text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md font-medium">
                        {item.stack}
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-6">Education</h2>
          <div className="space-y-4">
            {data.education.map((item, i) => (
              <Card key={i} className="border-border/40 hover:border-border/60 transition-colors">
                <CardContent className="py-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{item.degree}</h3>
                      <span className="text-sm text-muted-foreground font-medium">{item.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-6">Contact</h2>
          <Card className="border-border/40">
            <CardContent className="py-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Email:</span>
                  <a href={`mailto:${data.contact.email}`} className="text-sm text-foreground hover:text-primary transition-colors">
                    {data.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">GitHub:</span>
                  <a
                    href={data.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {data.contact.github.replace('https://', '')}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">LinkedIn:</span>
                  <a
                    href={data.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {data.contact.linkedin.replace('https://', '')}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground pt-8 border-t border-border/20">
          <p>&copy; {new Date().getFullYear()} {data.about.name}. Built with ❤️</p>
        </footer>
      </div>
    </div>
  )
}
