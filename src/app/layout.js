/* eslint-disable new-cap */
"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins, Karla } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import NavContext from "@/components/dynamic/NavContext";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  weight: ["variable"],
  variable: "--font-karla",
});

export default function RootLayout({ children, session }) {
  const [dropdown, setDropdown] = useState("");
  return (
    <html lang="en" className="h-full">
      <NavContext.Provider value={{ dropdown, setDropdown }}>
        <SessionProvider
          session={session}
          refetchInterval={5 * 60}
          className="h-full"
        >
          <body
            className={`${poppins.variable} ${karla.variable} flex flex-col lg:flex-row h-full w-full bg-cutie-blue-300`}
          >
            <Toaster />
            {children}
          </body>
        </SessionProvider>
      </NavContext.Provider>
    </html>
  );
}
