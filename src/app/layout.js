import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manifest",
  description: "Document change.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-12">
          {children}
        </div>
      </body>
    </html>
  );
}
