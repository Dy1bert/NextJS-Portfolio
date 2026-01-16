import {ProjectList} from "@/app/ProjectList";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function Home() {
    return (
            <main className="flex flex-col min-h-full min-w-screen items-center py-48 px-16 bg-background-a">
                <h1 className="text-5xl font-bold text-white dark:text-white">
                    Projects
                </h1>
                <div className="mt-32 w-[75%] grid grid-cols-1 md:grid-cols-2 gap-[10vw]">
                    {ProjectList.map((project) => (
                        <ProjectCard
                            key={project.ID}
                            project={project}
                        />
                    ))}
                </div>
            </main>
    );
}
