import { ProjectCard, ProjectCardProps } from "@/components/project-card";
import Link from "next/link";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";

export default function Home() {
    return (
        <main className="container">
            <div className="mt-14 text-center text-4xl leading-loose tracking-tight md:mt-28 md:text-6xl">
                <h1 className="font-semibold md:mb-6">Hey, I’m Jamie.</h1>
                <h2 className="text-2xl text-muted-foreground md:text-3xl lg:text-4xl">
                    Software Engineer & Optimist{" "}
                    <br className="block sm:hidden" />
                    at{" "}
                    <Link
                        href="https://hellostake.com"
                        target="_blank"
                        rel="noreferrer nofollow"
                        className="border-b-4 transition-colors hover:border-zinc-300 hover:text-zinc-600 dark:hover:border-zinc-500 dark:hover:text-zinc-300"
                    >
                        Stake
                    </Link>
                </h2>

                <div className="mx-auto mt-8 flex items-center justify-center space-x-8 text-sm">
                    {socials.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer nofollow"
                            className="p-2 opacity-20 transition dark:hover:opacity-30"
                        >
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-8 md:mt-20">
                <section>
                    <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
