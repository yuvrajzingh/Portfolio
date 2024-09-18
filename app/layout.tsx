
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Yuvraj Singh",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} overflow-x-hidden  text-gray-900 relative dark:text-gray-50 dark:text-opacity-90`}
        >       
      <div className="fixed left-0 top-0 -z-10 h-full w-full  bg-no-repeat bg-fixed">
        <div className="relative h-full w-full dark:bg-black bg-lightBg dark:bg-none">
          <div className="absolute  bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
        <ThemeContextProvider> 
          <ActiveSectionContextProvider>
            {children}            
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
    </html>
  );
}