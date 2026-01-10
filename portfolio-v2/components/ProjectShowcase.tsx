import React from 'react';
import { ProjectList } from "@/app/ProjectList";
import ProjectCard from "@/components/ProjectCard";

const ProjectShowcase = () => {
    return (
        <section className="w-full h-[87.5vh] flex flex-col items-center bg-background-a text-center">
            <h1 className="mt-[10%] text-6xl font-bold text-white text-shadow-background-b text-shadow-lg">
                Project Showcase
            </h1>

            <h2 className="mt-4 text-md text-gray-400 max-w-5xl text-shadow-background-b text-shadow-lg">
                See the below highlighted projects!
            </h2>
            {ProjectList.map((project, index) => (
                <ProjectCard/>
            ))}
        </section>
    );
};

export default ProjectShowcase;