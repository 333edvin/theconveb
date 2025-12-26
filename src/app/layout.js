// app/layout.jsx
import { Bruno_Ace } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

const inter = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });

const IS_MAINTENANCE =
  process.env.NEXT_PUBLIC_MAINTENANCE === "true";
const MAINTENANCE_URL =
  process.env.NEXT_PUBLIC_MAINTENANCE_URL;

export const metadata = {
  title: {
    default: "CONVEB",
    template: "%s - conveb",
  },
  description:
    "Crafting exceptional digital experiences, our agency designs and develops stunning websites that drive results. Boost your online presence with our expertise in web development, marketing, and more!",
  keywords:
    "web development, website design, digital marketing, SEO, online presence, web design agency, custom websites, web development agency",
  twitter: {
    title: "Conveb",
    image: "/logo2.jpg",
  },
};

export default function RootLayout({ children }) {
  if (IS_MAINTENANCE && MAINTENANCE_URL) {
    return (
      <html lang="en">
        <body className={inter.className} style={{ margin: 0 }}>
          <iframe
            src={MAINTENANCE_URL}
            style={{
              border: "none",
              width: "100vw",
              height: "100vh",
            }}
          />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
