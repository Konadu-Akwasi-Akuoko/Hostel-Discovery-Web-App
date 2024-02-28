import NavBar from "@/components/NavBar";
import "./globals.css";
import { ubuntu } from "@/utils/fonts";
import Footer from "@/components/Footer";
import StoreProvider from "@/components/providers/StoreProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "@/components/providers/AuthProvider";

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
      <StoreProvider>
        <body className={ubuntu.className}>
          <AuthProvider>
            <ThemeProvider>
              <NavBar />
              {children}
              <Footer />
            </ThemeProvider>
          </AuthProvider>
        </body>
      </StoreProvider>
    </html>
  );
}
