
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import { Providers } from "../GlobalRedux/provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ProjectBuddy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <Providers>
        <UserProvider>
          <body className={` ${inter.className}`}>
            <Toaster />
            <div className="">{children}</div>
          </body>
        </UserProvider>
      </Providers>
    </html>
  );
}