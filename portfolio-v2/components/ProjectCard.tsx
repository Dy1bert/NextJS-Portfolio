import Image from "next/image";
import { Project } from "@/app/ProjectList";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="w-80 rounded-xl bg-background-b p-6 text-white shadow-lg">
                <Image
                    src={project.ImgSrc}
                    alt={project.Name}
                    width={300}
                    height={200}
                    className="rounded-md"
                />

                <h3 className="mt-4 text-xl font-semibold">
                    {project.Name}
                </h3>

                <p className="mt-2 text-gray-400">
                    {project.ShortDescription}
                </p>
            </div>
        </Link>
    );
};

export default ProjectCard;
