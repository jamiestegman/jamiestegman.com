import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

export function ProjectCard({
    icon,
    image,
    title,
    description,
    url,
}: ProjectCardProps) {
    const component = (
        <Card className="group relative flex h-full w-full select-none flex-col justify-between rounded-xl border border-transparent bg-card pb-4 text-center shadow-md transition hover:border-zinc-500/20 dark:hover:border-zinc-600/40 dark:hover:bg-zinc-800/50">
            {url && (
                <ArrowUpRightIcon className="absolute right-2 top-2 h-6 w-6 -translate-x-2 translate-y-2 text-zinc-300 opacity-0 transition group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-zinc-500" />
            )}
            <CardHeader className="flex">
                {/* {icon && (
                    <div className="relative mx-auto mb-2 h-10 w-10 overflow-hidden rounded-lg border border-zinc-400/10 dark:border-zinc-600/10">
                        <Image src={icon} alt="" fill />
                    </div>
                )} */}
                <h3 className="text-lg font-normal text-muted-foreground">
                    {title}
                </h3>
                <h4 className="text-2xl font-medium">{description}</h4>
            </CardHeader>
            <CardContent className="relative mx-auto mt-4 w-full max-w-[90%] lg:max-w-[80%]">
                {image && (
                    <div className="relative h-0 w-full overflow-hidden rounded-sm pt-[62.5%] shadow-lg transition duration-300 group-hover:-translate-y-2">
                        <img
                            src={image}
                            alt=""
                            className="absolute inset-0 m-0 h-full w-full rounded-sm border border-zinc-200 object-cover dark:border-zinc-700"
                        />
                    </div>
                )}
            </CardContent>
        </Card>
    );
    return url ? (
        <Link href={url} target="_blank" rel="noreferrer nofollow">
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
    url?: string;
}
