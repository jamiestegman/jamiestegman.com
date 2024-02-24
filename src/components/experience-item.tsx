import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

export interface ExperienceItemProps
    extends React.HTMLAttributes<HTMLAnchorElement> {
    company: string;
    roles: {
        title: string;
        duration: JSX.Element | string;
    }[];
    link: string;
}

const activeDurationWord = "Current";

export const ExperienceItem = ({
    company,
    roles,
    link,
    className,
    ...rest
}: ExperienceItemProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group -m-3 rounded-md p-3 no-underline transition hover:bg-foreground/5",
                className,
            )}
            {...rest}
        >
            <div className="space-y-1">
                <div className="flex items-center justify-between">
                    <span className="font-normal">{company}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4 scale-50 text-muted-foreground opacity-0 transition group-hover:scale-100 group-hover:opacity-100 group-focus:scale-100 group-focus:opacity-100"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </div>
                {roles.map(({ title, duration }) => (
                    <div
                        key={title}
                        className="flex w-full items-center justify-between gap-4 text-muted-foreground"
                    >
                        <span>{title}</span>
                        <span className="h-[1px] grow border-t border-muted-foreground/20" />
                        <span className="flex items-center gap-1.5">
                            {duration === activeDurationWord && (
                                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400/90" />
                            )}
                            {duration}
                        </span>
                    </div>
                ))}
            </div>
        </Link>
    );
};
