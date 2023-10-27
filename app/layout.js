import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/topbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Defending Squad of Goshairhat",
  description: "created by Md Shaiadul Bashar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
