import React from "react";
import Link from "next/link";
import { FolderGit2, HomeIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/magicui/components/ui/button";
import { Separator } from "@/lib/magicui/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/lib/magicui/components/ui/tooltip";
import { Dock, DockIcon } from "@/lib/magicui/components/dock";
import { ModeToggle } from "@/lib/magicui/components/mode-toggle";
import { Icons } from "@/type/dock-icon-type";

const DATA = {
    navbar: [
        { href: "#", icon: HomeIcon, label: "Home" },
    ],
    myself: {
        About: {
            name: "About",
            url: "#",
            icon: FolderGit2,
        },
        Projects: {
            name: "Projects",
            url: "#",
            icon: FolderGit2,
        },
        Skills: {
            name: "Skills",
            url: "#",
            icon: Icons.gmail,
        },
        Experience: {
            name: "Experience",
            url: "#",
            icon: Icons.gmail,
        },
    },
};

export const Header= () => {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Dock
            </span>
            <TooltipProvider>
                <Dock direction="middle" className="flex gap-x-6">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label} className="mx-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full py-2" />
                    {Object.entries(DATA.myself).map(([name, data]) => (
                        <DockIcon key={name} className="mx-2">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={data.url}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        <span className="text-xl">{data.name}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full py-2" />
                    <DockIcon className="mx-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ModeToggle className="rounded-full" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
}
