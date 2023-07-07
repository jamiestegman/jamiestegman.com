import { ThemeProvider } from "@/components/theme/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                    letter-spacing: -0.025em;
                }
            `}</style>
            <Component {...pageProps} />
            <Analytics />
        </ThemeProvider>
    );
}
