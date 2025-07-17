interface InfoCardProps {
    date: string
    title: string
    shortDescription: string
    longDescription: string
    link?: string
    badge?: string
}

export function InfoCard({
    date,
    title,
    shortDescription,
    longDescription,
    link,
    badge
}: InfoCardProps) {
    return (
        <div className="grid grid-cols-12 gap-6">
            {/* Left column - Duration */}
            <div className="col-span-3 text-left">
                <span className="text-sm text-muted-foreground text-left">{date}</span>
            </div>

            {/* Right column - Content */}
            <div className="col-span-9 text-left">
                {/* Title with optional link */}
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-foreground">{title}</h3>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            ↗
                        </a>
                    )}
                    {badge && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded ml-2">{badge}</span>
                    )}
                </div>

                {/* Short description */}
                <p className="text-sm text-muted-foreground text-left">{shortDescription}</p>

                {/* Long description */}
                <p className="text-sm text-muted-foreground leading-relaxed text-left mt-2">
                    {longDescription}
                </p>
            </div>
        </div>
    )
}

// Export both names for backward compatibility
export const ProjectCard = InfoCard
