import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

export function ProjectCard({
    icon,
    image,
    title,
    description,
    link,
}: ProjectCardProps) {
    const component = (
        <Card className="group relative flex h-full w-full select-none flex-col justify-between rounded-xl border border-transparent bg-white text-center shadow-md transition hover:border-zinc-500/20 dark:bg-zinc-800/20 dark:hover:border-zinc-600/40 dark:hover:bg-zinc-900/50">
            {link && (
                <ArrowUpRightIcon className="absolute right-2 top-2 h-6 w-6 -translate-x-2 translate-y-2 text-zinc-300 opacity-0 transition group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-zinc-500" />
            )}
            <CardHeader className="mx-auto">
                {icon && (
                    <div className="relative mx-auto mb-2 h-10 w-10 overflow-hidden rounded-lg border border-zinc-400/10 dark:border-zinc-600/10">
                        <Image src={icon} alt="" fill />
                    </div>
                )}
                <h3 className="text-base font-normal text-muted-foreground">
                    {title}
                </h3>
                <h4 className="mx-auto max-w-md text-center text-xl font-medium leading-tight lg:text-2xl">
                    {description}
                </h4>
            </CardHeader>
            <CardContent className="relative w-full overflow-hidden pb-0">
                {image && (
                    <div className="relative mx-auto h-[180px] w-full md:h-[250px] lg:h-[350px]">
                        <Image
                            src={image}
                            alt=""
                            fill
                            className="object-contain object-bottom"
                        />
                        {/* <img
                        src={image || ""}
                        alt=""
                        className="object-contain object-top"
                    /> */}
                    </div>
                )}
            </CardContent>
        </Card>
    );
    return link ? (
        <Link href={link} target="_blank" rel="noreferrer nofollow">
            {component}
        </Link>
    ) : (
        component
    );
}

export interface ProjectCardProps {
    icon?: string;
    image?: string;
    title: string;
    description: string;
    link?: string;
}
