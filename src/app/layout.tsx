import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://eastafricainternationalcup.com"),
  title: {
    default: "East Africa International Cup",
    template: "%s | East Africa International Cup"
  },
  description:
    "A modern youth football tournament platform for academies across East Africa.",
  openGraph: {
    title: "East Africa International Cup",
    description:
      "Celebrating youth football, academy talent, and regional connection across East Africa.",
    images: ["/assets/profile-cover.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
