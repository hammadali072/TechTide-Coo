import localFont from "next/font/local";
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
    <html lang="en" className={`${schibstedGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

