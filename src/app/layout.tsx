import type { Metadata } from "next";
import { JetBrains_Mono, Michroma } from "next/font/google";
import Script from "next/script";
import { meta, profile } from "@/content/portfolio";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  authors: [{ name: profile.name }],
  openGraph: {
    title: meta.title,
    description: meta.socialDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.socialDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrains.variable} ${michroma.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-mono antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");var dark=!t||t==="dark";document.documentElement.classList.toggle("dark",dark);}catch(e){}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
