import { dir } from "i18next";
import { Inter } from "next/font/google";
import { languages } from "../i18n/settings";
import type { Metadata } from "next";
import ChakraUiProvider from "@/provider/chakra-ui.provider";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMS Site",
  description: "HMS Site",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  );
}
