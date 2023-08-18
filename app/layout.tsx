import TopBar from "@/src/components/wrapper/topbar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/src/styles/build.scss";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Rick and Morty Human Database",
  description:
    "Rick and Morty Human Database, get all characters that are humans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
