import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

interface Social {
    name: string;
    url: string;
    icon: JSX.Element;
}

const props = {
    className: "h-6 w-6",
};

export const socials: Social[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jamiestegman/",
        icon: <LinkedInLogoIcon {...props} />,
    },
    {
        name: "GitHub",
        url: "https://github.com/jamiestegman",
        icon: <GitHubLogoIcon {...props} />,
    },
];
