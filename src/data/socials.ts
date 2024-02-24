import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

interface Social {
    name: string;
    url: string;
}

export const socials: Social[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jamiestegman/",
    },
    {
        name: "GitHub",
        url: "https://github.com/jamiestegman",
    },
];
