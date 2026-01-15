import {ProjectList} from "@/app/ProjectList";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function Home() {
    return (
            <main className="flex flex-col min-h-screen min-w-screen items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-2xl font-bold text-white dark:text-white">
                    Projects Page
                </h1>
                <div className="mt-8 w-[50%] mx-auto h-screen grid grid-cols-1 md:grid-cols-2 gap-8">
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
