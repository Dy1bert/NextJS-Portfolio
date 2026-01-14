import { ProjectList } from "@/app/ProjectList";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;

    const project = ProjectList.find(
        (p) => p.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen p-16 text-white bg-background-a">
            <h1 className="mt-6 text-4xl font-bold">
                {project.Name}
            </h1>

            <Image
                src={project.ImgSrc}
                alt={project.Name}
                width={600}
                height={400}
                className="mt-6 rounded-xl"
            />

            <p className="mt-6 text-gray-300">
                {project.LongDescription}
            </p>
        </main>
    );
}
