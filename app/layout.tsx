import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { NotificationProvider } from "@/components/launch-notifications";
import NotificationsView from "@/components/notification-view";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexlayer.com"),
  title: {
    template: "%s | Nexlayer",
    default: "Nexlayer - AI-native Cloud Platform",
  },
  description:
    "Deploy full-stack AI applications in seconds, not weeks. One simple launchfile deploys your entire app stack—frontend, backend, database, vector store, AI model —instantly to production. Built for AI agents, not humans",
  keywords:
    "AI deployment, cloud platform, full-stack deployment, AI-native cloud, launchfile, instant deployment, AI agents, nexlayer yaml, AI developer tools, AI cloud infrastructure",
  openGraph: {
    title: {
      template: "%s | Nexlayer",
      default: "Nexlayer - AI-native Cloud Platform",
    },
    description:
      "Deploy full-stack AI applications in seconds, not weeks. One launchfile. Full stack. Live instantly. Built for the age of AI agents.",
    type: "website",
    url: new URL("https://nexlayer.com"),
    images: [
      {
        url: new URL("https://nexlayer.com/og-image.png"),
        alt: "Nexlayer Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexlayer",
    title: {
      template: "%s | Nexlayer",
      default: "Nexlayer - AI-native Cloud Platform",
    },
    description:
      "Deploy full-stack AI applications in seconds, not weeks. One launchfile. Full stack. Live instantly.",
    creator: "@nexlayer",
    images: [
      {
        url: new URL("https://nexlayer.com/og-image.png"),
        alt: "Nexlayer Twitter Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-52PTF9R3');
          `}
        </Script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={`${inter.className} bg-near-black`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-52PTF9R3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NotificationProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
            <NotificationsView />
          </ThemeProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
