import {Project} from "@/component/project";
import DotPattern from "@/lib/magicui/components/dot-pattern";
import {cn} from "@/lib/utils";
import {experiences} from "@/ressources/experiences";
import {Typography} from "@/component/typography";

export const ExperiencesList = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center overflow-hidden bg-purple-1500 md:shadow-xl pt-20 py-20"
        >
            <div className="pt-16 relative z-10"><Typography variant="h2" theme="Mauve">My experiences</Typography>
            </div>
            <div className="pt-16 pb-16 pl-14 pr-14 space-y-8">
                {experiences.map((experience, index) => (
                    <Project
                        key={index}
                        date={experience.date}
                        type={experience.type}
                        title={experience.title}
                        description={experience.description}
                        tags={experience.tags}
                        links={experience.links}
                        image={experience.image}
                        categories={experience.categories}
                        reverse={index % 2 === 1}
                        run={experience.run}
                        experience={experience.experience}
                    />
                ))}
            </div>
            <DotPattern
                className={cn(
                    `absolute inset-0 z-0 [mask-image:radial-gradient(900px_circle_at_center,blue,transparent)]`
                )}
            />
        </div>
    );
};
