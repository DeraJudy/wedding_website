import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dera & Gozie 💍",
  description: "Two hearts, one journey. Welcome to our love story.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Dera & Gozie Wedding 💍",
    description: "Join us as we celebrate our love story and begin our journey together as one.",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dw7khzaml/image/upload/v1766186481/Screenshot_from_2025-12-20_00-19-10_xrq1hu.png",
        width: 1200,
        height: 630,
        alt: "Dera & Gozie Wedding"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dera & Gozie Wedding 💍",
    description: "Join us as we celebrate our love story and begin our journey together as one.",
    images: ["https://res.cloudinary.com/dw7khzaml/image/upload/v1766186481/Screenshot_from_2025-12-20_00-19-10_xrq1hu.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
