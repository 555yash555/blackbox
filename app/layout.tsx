import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head component from Next.js for managing head elements

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Affordable Web & App Development | Black Box Devspace",
  description: "Black Box Devspace specializes in creating professional websites and applications within budget. Expert web development and application services to help your business thrive online. Located in Croatia, we offer tailored solutions to meet your business needs.",
  keywords: "affordable web development, budget web development, professional websites, application development, Black Box Devspace, web and app development, custom web applications, Croatia, web development services Croatia, app development services Croatia",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        {/* Add other Open Graph meta tags as needed */}
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </>
  );
}
