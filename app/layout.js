import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CB - Certificate Builder",
  description:
    "Create and customize professional certificates effortlessly with CB.",
  keywords: "certificate, builder, customization, professional, design, create",
  author: "CB Team",
  og: {
    title: "CB - Certificate Builder",
    description:
      "Create and customize professional certificates effortlessly with CB.",
    type: "website",
    url: "https://yourwebsite.com",
    image: "https://yourwebsite.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "CB - Certificate Builder",
    description:
      "Create and customize professional certificates effortlessly with CB.",
    image: "https://yourwebsite.com/twitter-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black bg-[#E0E0E0]`}
      >
        {" "}
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
