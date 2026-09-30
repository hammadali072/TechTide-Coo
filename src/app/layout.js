import localFont from "next/font/local";
import clsx from "clsx";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "./globals.css";

const schibstedGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/SchibstedGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SchibstedGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SchibstedGrotesk-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SchibstedGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-schibsted-grotesk",
  display: "swap",
});

export const metadata = {
  title: "TechTide Corporate LLP | Software & Digital Solutions",
  description: "Accelerate your business with modern web, software, and digital solutions from TechTide Corporate LLP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(schibstedGrotesk.variable, "h-full antialiased")}>
      <body className="min-h-full flex flex-col bg-black">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <div className="fixed border border-white left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] duration-300 bg-[#2f2f2f]/50" />
      </body>
    </html>
  );
}

