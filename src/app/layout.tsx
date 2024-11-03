import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import CustomCursor from "@/components/Cursor/Cursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Elias Norta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="favicon.png" />
      </head>
      <body>
        <ThemeProvider>
          <div className="container">
            {/* <CustomCursor /> */}
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
