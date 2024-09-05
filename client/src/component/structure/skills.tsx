import IconCloud from "@/lib/magicui/components/icon-cloud";
import {Typography} from "@/component/typography";

export const Skills = () => {
    const iconSlugs = [
        "react", "javascript", "typescript", "node-dot-js", "next-dot-js",
        "html5", "css3", "git", "github", "docker", "python", "php", "java",
        "angular", "tailwind", "spring-boot", "jupyter", "kotlin", "c#",
        "jetbrains", "sql", "asp-dot-net", "visualstudio", "firebase", "androidstudio",
        "figma", "unity", "apache"
    ];
    return (
        <div className="pt-20 pb-20 justify-center text-center">
            <Typography variant="h2" theme="Mauve">My skills</Typography>
            <div className="pt-4 pb-20">
                <IconCloud iconSlugs={iconSlugs}/>
            </div>
        </div>
    )
}