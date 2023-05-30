import { LayoutDashboard } from "@/components";
import { Card } from "flowbite-react";

export const metadata = {
  title: "Dashboard | Scrape Dex - Scrape Email & Phone Scrapper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutDashboard>
      <main className="bg-gray-50 w-full min-h-screen">{children}</main>
    </LayoutDashboard>
  );
}
