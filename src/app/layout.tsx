import { Lato, Noto_Sans_JP } from "next/font/google";

import { HeaderContainer } from "@/components/layout/Header/";
import { FooterContainer } from "@/components/layout/Footer/";

import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${lato.variable} ${notoSansJP.variable} antialiased`}>
        <HeaderContainer />
        {children}
        <FooterContainer />
      </body>
    </html>
  );
}
