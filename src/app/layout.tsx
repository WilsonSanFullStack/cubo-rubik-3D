import type { Metadata } from "next";
import "./globals.css";
import { Victor_Mono } from "next/font/google";

const VictorMono = Victor_Mono({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Cubo Rubik 3D",
  description: "creacion de un cubo rubik en 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={VictorMono.className}>{children}</body>
    </html>
  );
}
