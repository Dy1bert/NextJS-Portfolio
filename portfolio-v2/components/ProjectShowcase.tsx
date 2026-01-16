import React from 'react';
import { ProjectList } from "@/app/ProjectList";
import ProjectCard from "@/components/ProjectCard";

const ProjectShowcase = () => {
    return (
        <section className="w-full min-h-[87.5vh] flex flex-col items-center bg-background-a text-center">
            <h1 className="mt-[10%] text-6xl font-bold text-white text-shadow-background-b text-shadow-lg">
                Project Showcase
            </h1>

            <h1 className="mt-4 text-md text-gray-400 max-w-5xl text-shadow-background-b text-shadow-lg">
                Select the project card to see more information!
            </h1>
            <div className="mt-20 mb-8 md:mb-0 w-[80%] h-full grid grid-cols-1 md:grid-cols-3 gap-[5vw]">
                {ProjectList.slice(0, 3).map((project) => (
                    <ProjectCard
                        key={project.ID}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectShowcase;