"use client";

import {cn} from "@/lib/utils";
import DotPattern from "@/lib/magicui/components/dot-pattern";

export const Projects=()=> {
    return (
        <div
            className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                <section className="section" id="projects_section">
                    <div className="content leaning">
                        <span className="section_title">Some of my Projects</span>
                        <div className="sort_choices">
                            <span className="label">Sort by</span>
                            <div className="choice selected">Default</div>
                            <div className="choice">Date</div>
                            <div className="choice">School</div>
                            <div className="choice">Personal</div>
                            <div className="choice">Web</div>
                            <div className="choice">Simulations</div>
                            <div className="choice">AI</div>
                        </div>
                        <div className="projects_content"></div>
                        <div className="other_projects_content"></div>
                    </div>
                </section>
            </p>
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    );
}
