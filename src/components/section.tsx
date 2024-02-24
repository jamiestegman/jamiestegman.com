import useOnScreen from "@/hooks/useOnScreen";
import { cn } from "@/lib/utils";
import { PropsWithChildren, useRef } from "react";

interface SectionProps
    extends PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
    title?: string;
    proseGrid?: boolean;
    contained?: boolean;
    animate?: boolean;
}

export const Section = ({
    title,
    children,
    proseGrid,
    contained,
    animate,
    className,
    ...rest
}: SectionProps) => {
    const ref = useRef(null);
    const { hasBeenVisible } = useOnScreen(ref, "-15%");
    const shouldAnimate = hasBeenVisible && animate;
    return (
        <section
            id={title?.toLowerCase()}
            ref={ref}
            className={cn(
                "my-20 sm:my-24",
                animate && "opacity-0 fade-in duration-1000",
                shouldAnimate && "animate-in transition-opacity opacity-100",
                contained && "mx-auto max-w-2xl",
                proseGrid && "grid md:grid-cols-4 gap-4",
                className,
            )}
            {...rest}
        >
            {title && (
                <h3
                    className={cn(
                        "text-base font-medium text-muted-foreground m-0 leading-relaxed",
                        proseGrid && "col-span-1",
                    )}
                >
                    {title}
                </h3>
            )}
            <div className={cn(proseGrid && "col-span-3")}>{children}</div>
        </section>
    );
};
