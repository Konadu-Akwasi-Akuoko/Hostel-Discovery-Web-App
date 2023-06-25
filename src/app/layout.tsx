import NavBar from "@/components/NavBar";
import "./globals.css";
import { ubuntu } from "@/utils/fonts";

export const metadata = {
  title: "Phynda",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className + " bg-[--tomato-1] min-h-screen"}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
