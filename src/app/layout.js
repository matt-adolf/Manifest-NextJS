import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

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
        <div className="py-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
