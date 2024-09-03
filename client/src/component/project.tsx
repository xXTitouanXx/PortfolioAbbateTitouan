import {Typography} from "@/component/typography";
import {Button} from "@/component/button";
import {cn} from "@/lib/utils";
import {ActiveLink} from "@/component/active-link";
import {BorderBeam} from "@/components/magicui/border-beam";
import {LuGithub} from "react-icons/lu";
import {VscDebugStart} from "react-icons/vsc";
import Image from 'next/image';

interface ProjectProps {
    date: number;
    type: string;
    title: string;
    description: string;
    tags: { name: string; url: string }[];
    links: string[];
    image?: string;
    categories: string[];
    reverse?: boolean;
    run: boolean
    experience: boolean
}

export const Project = ({
                            date, type, title, description, tags, links, image, categories, reverse, run
                        }: ProjectProps) => {
    return (
        <div
            className={cn("relative z-10 flex bg-purple-1300 pt-10 pb-10 pl-4 pr-4 rounded-4xl", reverse ? "flex-row-reverse" : "flex-row")}>
            <BorderBeam
                size={300}
                duration={12}
                delay={0}
                colorFrom="#ffaa40"
                colorTo="#9c40ff"
                className="absolute inset-0 rounded-4xl"
            />
            <div
                className="relative bg-gray-300 border border-gray-500 rounded-4xl overflow-hidden max-w-[300px] max-h-[200px]">
                <ActiveLink href={links[0]}>
                    <Image
                        className="w-full h-auto rounded-4xl"
                        src={`/assets/${image}`}
                        alt={title || "Project image"}
                        width={300}
                        height={200}
                    />
                </ActiveLink>
            </div>
            <div className={cn("w-2/3 flex ", reverse ? "flex-row-reverse" : "flex-row")}>
                <div className={cn("w-5/6 p-4 flex flex-col justify-between ", reverse ? "text-right" : "")}>
                    <div className="pb-4">
                        <Typography variant="caption3" theme="MediumPurple">
                            {date} - {type}
                        </Typography>
                        <Typography variant="h4" theme="Mauve">
                            {title}
                        </Typography>
                    </div>
                    <Typography variant="caption2" theme="MidnightPurple">
                        {description}
                    </Typography>
                    <div className={cn("flex pt-4", reverse ? "justify-end  space-x-4" : "justify-start space-x-4")}>
                        <div className={cn(
                            "flex",
                            reverse ? "flex-row-reverse space-x-reverse space-x-4" : "space-x-4"
                        )}>
                            {tags.map((tag) => (
                                <ActiveLink key={tag.url} href={tag.url}>
                                    <Typography variant="caption3" theme="MediumPurple" className="hover:font-bold">
                                        {tag.name}
                                    </Typography>
                                </ActiveLink>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative w-1/6 flex items-end p-2">
                    <div className="absolute bottom-0 flex gap-2 p-2 ">
                        {run && <Button
                            variant="ico"
                            baseUrl={links[3]}
                            icon={{icon: VscDebugStart}}
                            iconTheme="accent"
                        />}
                        <Button variant="ico"
                                baseUrl={links[0]}
                                icon={{icon: LuGithub}}
                                iconTheme="secondary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
