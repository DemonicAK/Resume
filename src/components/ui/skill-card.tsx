
export const SkillCard = ({ skill }: { skill: { name: string; items: string[] } }) => {
    return (
        <div className="bg-card  rounded-lg p-3 hover:bg-accent/5 transition-colors">
            <div className="grid grid-cols-3 gap-4 items-start">
                <div className="col-span-1 ">
                    <h3 className="text-sm font-medium text-foreground text-left py-1">{skill.name}</h3>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-wrap ">
                        {skill.items.map((item, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-accent/10 text-accent-foreground text-s rounded-md "
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}