import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import "animate.css";
import { ActionsProvider } from "@/context/ActionsContext";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://web-profile-ivory.vercel.app"),
  title: "Matheus Rodrigues",
  description:
    "Sou Matheus Rodrigues, engenheiro de software com experiência em Next.js, React, Spring Boot, Flask, Node.js, Docker, Kubernetes, AWS, Azure e muito mais.",
  keywords: [
    "Matheus Rodrigues",
    "Engenheiro de software",
    "portfólio",
    "desenvolvedor fullstack",
    "Next.js",
    "React",
    "Spring Boot",
    "Flask",
    "Quarkus",
    "Node.js",
    "Angular",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "PHP",
    "Docker",
    "Kubernetes",
    "Azure",
    "AWS",
    "Git",
  ],
  authors: [
    { name: "Matheus Rodrigues", url: "https://web-profile-ivory.vercel.app/" },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Matheus Rodrigues • Desenvolvedor Fullstack & Cloud",
    description:
      "Portfólio de Matheus Rodrigues — tecnologias modernas como Next.js, React, Spring Boot, Docker, Kubernetes, AWS, Azure e muito mais.",
    url: "https://web-profile-ivory.vercel.app/",
    siteName: "Portfólio Matheus Rodrigues",
    images: [
      {
        url: "/imgs/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matheus Rodrigues - Desenvolvedor Fullstack e Cloud",
      },
    ],
    type: "website",
  }
};

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${questrial.variable} h-auto`}
      suppressHydrationWarning
    >
      <body className="font-questrial">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActionsProvider>
            <Header />
            {children}
          </ActionsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
