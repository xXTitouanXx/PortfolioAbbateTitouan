import IconCloud from "@/lib/magicui/components/icon-cloud";

export const Skills = ()=>{
    const iconSlugs = [
        "react", "javascript", "typescript", "node-dot-js", "next-dot-js",
        "html5", "css3", "git", "github", "docker"
    ];
    return (
        <div className="bg-white">
            <h2 className="text-center text-2xl font-bold mb-8">Skills</h2>
            <IconCloud iconSlugs={iconSlugs}/>
        </div>
    )
}