import React from "react";
import Link from "next/link";
import {ContactIcon, FolderGit2, HomeIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/lib/magicui/components/ui/button";
import {Separator} from "@/lib/magicui/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/lib/magicui/components/ui/tooltip";
import {Dock, DockIcon} from "@/lib/magicui/components/dock";
import {Icons} from "@/type/dock-icon-type";

const DATA = {
    startnavbar: [
        {href: "#", icon: HomeIcon, label: "Home"},
    ],
    myself: {
        About: {
            name: "About",
            url: "#presentation",
            icon: FolderGit2,
        },
        Projects: {
            name: "Projects",
            url: "#projects",
            icon: FolderGit2,
        },
        Skills: {
            name: "Skills",
            url: "#skills",
            icon: Icons.gmail,
        },
        Experience: {
            name: "Experience",
            url: "#experience",
            icon: Icons.gmail,
        },
    },
    endnavbar: [
        {href: "#contact", icon: ContactIcon, label: "Contact"},
    ]
};

export const Header = () => {
    return (
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
            <span
                className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Portfolio Abbate Titouan
            </span>
            <TooltipProvider>
                <Dock direction="middle"
                      className="flex gap-x-6 bg-transparent text-purple-100 border border-purple-600">
                    {DATA.startnavbar.map((item) => (
                        <DockIcon key={item.label} className="mx-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            buttonVariants({variant: "link", size: "icon"}),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        <item.icon
                                            className="size-4 text-purple-100 hover:text-purple-600 transition-all duration-300"/>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full py-2 bg-purple-600"/>
                    {Object.entries(DATA.myself).map(([name, data]) => (
                        <DockIcon key={name} className="mx-8">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={data.url}
                                        className={cn(
                                            buttonVariants({variant: "link", size: "icon"}),
                                            "size-24 rounded-l"
                                        )}
                                    >
                                        <span
                                            className="text-xl text-purple-100 hover:text-purple-600 transition-all duration-300">{data.name}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full py-2 bg-purple-600"/>
                    {DATA.endnavbar.map((item) => (
                        <DockIcon key={item.label} className="mx-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            buttonVariants({variant: "link", size: "icon"}),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        <item.icon
                                            className="size-4 text-purple-100 hover:text-purple-600 transition-all duration-300"/>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                </Dock>
            </TooltipProvider>
        </div>
    );
}