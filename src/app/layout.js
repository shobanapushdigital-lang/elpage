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
  title: "Pushdigital | EL",
  description: "Electroluminescence",
  icons: {
    icon: "/web_logo.png"
    },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
   
      <body>{children}</body>
    </html>
  );
}
