import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { AppProps } from "next/app";

import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Head>
                <title>Jamie Stegman - Software Engineer</title>
            </Head>
            <div className={`${GeistSans.variable} font-sans antialiased`}>
                <Component {...pageProps} />
            </div>
            <Analytics />
        </ThemeProvider>
    );
}
