import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono, Noto_Serif } from "next/font/google";
import type { ReactNode } from "react";
import { SITE } from "@/lib/data";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { themeInitScript } from "@/components/site/ThemeToggle";
import "./globals.css";

const sans = Be_Vietnam_Pro({ subsets: ["latin", "vietnamese"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sans", display: "swap" });
const serif = Noto_Serif({ subsets: ["latin", "vietnamese"], weight: ["400"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "vietnamese"], weight: ["500", "600", "700"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  openGraph: { type: "website", locale: "vi_VN", siteName: SITE.domain, title: `${SITE.name} — ${SITE.tagline}`, description: SITE.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF8EC" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1221" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
