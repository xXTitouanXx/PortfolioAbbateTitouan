"use client";

import {Project} from "@/component/project";
import {ProjectsList} from "@/component/projects-list";

export const Projects = () => {
    return (
        <div className="h-96 bg-purple-950">
            <ProjectsList/>
        </div>
    );
}
