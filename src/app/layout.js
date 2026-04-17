import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { logDisallowedDynamicError } from "next/dist/server/app-render/dynamic-rendering";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Push Digital | Flexible Electronics & Prototyping",
  description: "Enabling the future of electronics. From concept to small-scale manufacturing, we empower innovation with advanced flexible electronics production and rapid prototyping.",
  icons: {
    icon: "/web_logo.png",
    shortcut: "/web_logo.png",
    apple: "/web_logo.png",
  },
  openGraph: {
    title: "Push Digital | Flexible Electronics",
    description: "Enabling the future of electronics.",
    images: ["/web_logo.png"],
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
   
      <body>{children}</body>
    </html>
  );
}
