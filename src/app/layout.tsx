import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/Header/Header";
import { Providers } from "@/providers/provider";
import { LAYOUT_CONFIG } from "@/config/layout.config";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";
import AppLoader from "@/hoc/add-loader";
import Title from "@/components/UI/Title/title";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipes Next App",
  description: "Recipes by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <SessionProvider session={session}>
            <AppLoader>
              <Header />
              <Title />
              <main
                className={`flex flex-col w-full justify-start items-center`}
                style={{
                  height: `calc(100vh - ${LAYOUT_CONFIG.footerHeight} - ${LAYOUT_CONFIG.headerHeight})`,
                }}
              >
                {children}
              </main>
              <footer
                className={`flex justify-center items-center`}
                style={{ height: LAYOUT_CONFIG.footerHeight }}
              >
                <p>Footer</p>
              </footer>
            </AppLoader>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
