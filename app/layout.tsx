import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import NavBar from "@/components/navbar";
import {Providers} from "../GlobalRedux/provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
          <UserProvider>
            <body
              className={`mx-auto min-h-screen justify-center w-full ${inter.className}`}
            >
              {/* <NavBar /> */}
              <div className="p-8">{children}</div>
            </body>
          </UserProvider>
          </Providers>
    </html>
  );
}
