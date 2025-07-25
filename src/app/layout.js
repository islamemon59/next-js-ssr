import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning Nextjs",
    template: "%s | Learning Nextjs",
  },
  keywords: ["Next.js", "React", "JavaScript", "Learning", "Playground"],
  description: "Trying to learning NextJs as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${poppins.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
