import {Project} from "@/component/project"; // Assurez-vous que le chemin est correct
import {projects} from "@/ressources/projects";
import DotPattern from "@/lib/magicui/components/dot-pattern";
import {cn} from "@/lib/utils";
import {Typography} from "@/component/typography"; // Assurez-vous que le chemin est correct

export const ProjectsList = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center overflow-hidden bg-purple-1500 md:shadow-xl pt-20 py-20"
        >
            <div className="pt-16 relative z-10"><Typography variant="h2" theme="Mauve">My projects</Typography></div>

            <div className="pt-16 pb-16 space-y-8">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        date={project.date}
                        type={project.type}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        links={project.links}
                        video={project.video}
                        image={project.image}
                        logo={project.logo}
                        categories={project.categories}
                        reverse={index % 2 === 1}
                        run={project.run}
                    />
                ))}
            </div>
            <DotPattern
                className={cn(
                    "absolute inset-0 z-0 [mask-image:radial-gradient(750px_circle_at_center,blue,transparent)]"
                )}
            />
        </div>
    );
};
