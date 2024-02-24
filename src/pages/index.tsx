import { ExperienceItem } from "@/components/experience-item";
import { LocalTime } from "@/components/local-time";
import { Section } from "@/components/section";
import { experience } from "@/data/experience";
import Balancer from "react-wrap-balancer";

export default function Home() {
    return (
        <main className="prose prose-zinc dark:prose-invert container mx-auto">
            <Section contained className="mt-20 flex justify-center">
                <h1 className="text-xl font-normal leading-normal text-muted-foreground sm:max-w-lg sm:text-center sm:text-2xl">
                    <span className="font-semibold text-foreground">
                        Jamie Stegman
                    </span>{" "}
                    ships products at{" "}
                    <span className="group text-foreground">Stake</span> that
                    help people invest on Wall St and the ASX.
                </h1>

                <span className="mt-2 flex justify-center text-center text-sm text-muted">
                    Local time (MEL):&nbsp;
                    <LocalTime />
                </span>
            </Section>

            <Section title="About" proseGrid contained>
                <p>
                    I currently work on the engineering side of full scale,
                    go-to-market campaigns and projects with the talented team
                    over at Stake.
                </p>
                <br />
                <p>
                    Prior to that, I led the technical direction of the
                    Campaigns, Digital & Insights team at Shine Lawyers as they
                    underwent their digital transformation.
                </p>
            </Section>

            <Section title="Experience" proseGrid contained>
                <div className="flex flex-col gap-6">
                    {experience.map((job) => (
                        <ExperienceItem key={job.company} {...job} />
                    ))}
                </div>
            </Section>

            <Section title="Location" proseGrid contained>
                <p>I work remotely from home in Melbourne, Australia.</p>
                {/* Map with iOS location ping. */}
                {/* TODO: Add higher quality image + dark mode version. */}
                {/* <div className="relative mt-6">
                    <img
                        src="/assets/images/melbourne.png"
                        alt="Melbourne"
                        className="not-prose w-full overflow-hidden rounded-2xl object-contain opacity-70"
                    />
                    <span className="absolute left-1/2 top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#2F7CF6] shadow-md content-none" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                        <div
                            className="h-10 w-10 animate-ping rounded-full bg-[#2F7CF6]/20 content-none"
                            style={{ animationDuration: "2s" }}
                        />
                    </span>
                </div> */}
            </Section>
        </main>
    );
}
