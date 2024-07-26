import {Typography} from "@/component/typography";
import {Button} from "@/component/button";
import {cn} from "@/lib/utils";
import {ActiveLink} from "@/component/active-link";
import {BorderBeam} from "@/components/magicui/border-beam";
import {LuGithub} from "react-icons/lu";
import {VscDebugStart} from "react-icons/vsc";
import {Video} from "lucide-react";

interface ProjectProps {
    date: number;
    type: string;
    title: string;
    description: string;
    tags: { name: string; url: string }[];
    links: string[];
    video: string;
    image: string;
    logo: string;
    categories: string[];
    reverse?: boolean;
    run: boolean
}

export const Project = ({
                            date, type, title, description, tags, links, video, image, logo, categories, reverse, run
                        }: ProjectProps) => {
    return (
        <div
            className={cn("relative z-10 flex bg-white pt-4 pb-4 pl-4 pr-4 rounded-4xl", reverse ? "flex-row-reverse" : "flex-row")}>
            <BorderBeam
                size={500}
                duration={12}
                delay={0}
                colorFrom="#ffaa40"
                colorTo="#9c40ff"
                className="absolute inset-0 rounded-4xl"
            />
            <div
                className="w-1/3 bg-gray-300 border border-gray-500 rounded-4xl">
                {/*<ActiveLink href={links[0]}>*/}
                {/*</ActiveLink>*/}
            </div>
            <div className={cn("w-2/3 flex ", reverse ? "flex-row-reverse" : "flex-row")}>
                <div className={cn("w-5/6 p-4 flex flex-col justify-between ", reverse ? "text-right" : "")}>
                    <div>
                        <Typography variant="caption3">
                            {date} - {type}
                        </Typography>
                        <Typography variant="h4">
                            {title}
                        </Typography>
                    </div>
                    <Typography variant="caption2">
                        {description}
                    </Typography>
                    <div className={cn("flex", reverse ? "justify-end" : "justify-start")}>
                        <div className={cn("flex space-x-4", reverse ? "flex-row-reverse" : "")}>
                            {tags.map((tag) => (
                                <ActiveLink key={tag.url} href={tag.url}>
                                    <Typography variant="caption3">
                                        {tag.name}
                                    </Typography>
                                </ActiveLink>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative w-1/6 flex items-end p-2">
                    <div className="absolute bottom-0  flex gap-2 p-2">
                        {run && <Button
                            variant="ico"
                            baseUrl={links[3]}
                            icon={{icon: VscDebugStart}}
                            iconTheme="accent"
                        />}
                        <Button variant="ico"
                                baseUrl={links[0]}
                                icon={{icon: LuGithub}}
                                iconTheme="gray"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
