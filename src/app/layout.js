/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import Navigation from "./components/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-popping",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} flex flex-col lg:flex-row `}>
        <Navigation />
        <div className="flex justify-center items-start w-full lg:w-[88%] bg-hackathon-page justify-self-end z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
