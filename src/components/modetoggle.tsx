import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle({
    theme,
    setTheme,
}: {
    theme: string
    setTheme: (t: string) => void
}) {
    const isDark = theme === "dark"

    return (
        <Button
        variant="link"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
            className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-transparent border-none shadow-none focus:outline-none transition-opacity duration-300"
        >
            {isDark ? (
                <Sun className="h-5 w-5 " /> // white icon in dark mode
            ) : (
                <Moon className="h-5 w-5" /> // black icon in light mode
            )}
        </Button>
    )
}
