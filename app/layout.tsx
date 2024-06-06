import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Affordable Web & App Development | Black Box Devspace",
  description: "Black Box Devspace specializes in creating professional websites and applications within budget. Expert web development and application services to help your business thrive online. Located in Croatia, we offer tailored solutions to meet your business needs.",
  keywords: "affordable web development, budget web development, professional websites, application development, Black Box Devspace, web and app development, custom web applications, Croatia, web development services Croatia, app development services Croatia",
  author: "Black Box Devspace",
  "og:title": "Affordable Web & App Development | Black Box Devspace",
  "og:description": "Expert web and application development services in Croatia. Black Box Devspace offers affordable and professional solutions to help your business thrive online.",
  "og:type": "website",
  "robots": "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
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
    </html>
  );
}
