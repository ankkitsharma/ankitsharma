import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankit Sharma",
  description: "Portfolio of Ankit Sharma",
  openGraph: {
    type: "website",
    url: "https://ankitsharma.vercel.app",
    title: "Ankit Sharma",
    description: "Portfolio of Ankit Sharma",
    images: [
      {
        url: "https://og-image.vercel.app/Ankit%20Sharma%20Portfolio.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&height=630&width=1200",
        width: 1200,
        height: 630,
      },
      {
        url: "https://og-image.vercel.app/Ankit%20Sharma%20Portfolio.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&height=630&width=1200",
        width: 1200,
        height: 630,
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
    <html lang="en">
      <body className={inter.className} data-theme="light">
        <div>{children}</div>
      </body>
    </html>
  );
}
