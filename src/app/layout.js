import { Expletus_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import { Toaster } from 'sonner'
const expletus = Expletus_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Home",
    template: "%s - conveb"
  },
  description:
    "Crafting exceptional digital experiences, our agency designs and develops stunning websites that drive results. Boost your online presence with our expertise in web development, marketing, and more!",
  keywords:
    "web development, website design, digital marketing, SEO, online presence, web design agency, custom websites, web development agency",
  twitter: {
    title: "Conveb",
    image: "/logo2.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={expletus.className}>
        <Header/>
        {children}
        <Footer/>
        <Toaster />
      </body>
    </html>
  );
}

