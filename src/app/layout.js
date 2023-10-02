/* eslint-disable new-cap */
"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins, Karla } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

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
  return (
    <html lang="en" className="h-full">
      <SessionProvider
        session={session}
        refetchInterval={5 * 60}
        className="h-full"
      >
        <body
          className={`${poppins.variable} ${karla.variable} flex flex-col lg:flex-row h-full w-full`}
        >
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
