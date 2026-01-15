import Image from "next/image";
import { Project } from "@/app/ProjectList";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="w-[100%] h-[75%] rounded-xl bg-background-b p-6 text-white shadow-lg">
                <div className="contain-content w-full h-[75%]">
                    <Image
                        src={project.ImgSrc}
                        alt={project.Name}
                        fill
                        className="rounded-md"
                    />
                </div>
                <div className="mt-[7%] h-auto w-full justify-items-center align-items-bottom text-center">
                    <h1 className="text-xl font-semibold text-shadow-background-a text-shadow-lg md:text-2xl">
                        {project.Name}
                    </h1>

                    <p className="mt-2 text-gray-400 text-shadow-background-a text-shadow-md text-sm md:text-md">
                        {project.ShortDescription}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
