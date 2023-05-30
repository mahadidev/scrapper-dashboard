import { Layout } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import { ContextProvider } from "@/context";
import { Alert } from "@/modules";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login | Scrape Dex - Scrapper Tool",
  description: "Scrape Email & Phone Number from website by importing url.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContextProvider>
        <html lang="en">
          <body className={inter.className}>
            <Alert />
            <Layout>{children}</Layout>
          </body>
        </html>
      </ContextProvider>
    </>
  );
}
