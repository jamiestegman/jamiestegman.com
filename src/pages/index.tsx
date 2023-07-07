import { ProjectCard, ProjectCardProps } from "@/components/project-card";
import Link from "next/link";

const work: ProjectCardProps[] = [
    {
        title: "shine.com.au",
        description: "Australia’s #1 law firm’s digital transformation.",
        icon: "/assets/images/shine-logo.jpg",
        image: "/assets/images/shine-website.webp",
        link: "https://shine.com.au",
    },
    {
        title: "Shine Lawyers Booking System",
        description: "Justice, now within reach.",
        icon: "/assets/images/shine-logo.jpg",
        image: "/assets/images/online-booking-tool.webp",
        link: "https://shine.com.au/check-my-case/motor-vehicle-accident",
    },
    {
        title: "Recollect",
        description: "Your team’s extra brain.",
        // icon: "/images/shine.png",
    },
];

export default function Home() {
    return (
        <main className="container">
            <div className="mt-14 text-4xl leading-loose tracking-tight md:mt-28 md:text-6xl">
                <h1 className="font-medium md:mb-6">Hey, I’m Jamie.</h1>
                <h2 className="text-2xl text-muted-foreground md:text-3xl lg:text-4xl">
                    Software Engineer & Optimist{" "}
                    <br className="block sm:hidden" />
                    at{" "}
                    <Link
                        href="https://shine.com.au"
                        target="_blank"
                        rel="noreferrer nofollow"
                        className="border-b-4 transition-colors hover:border-zinc-300 hover:text-zinc-600 dark:hover:border-zinc-500 dark:hover:text-zinc-300"
                    >
                        Shine Lawyers
                    </Link>
                </h2>
            </div>

            <div className="mt-8 md:mt-24">
                <section>
                    <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2">
                        {work.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
