import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import CustomCursor from "@/components/Cursor/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elias Norta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
