import { dir } from "i18next";
import { Inter } from "next/font/google";
import { languages } from "../i18n/settings";
import type { Metadata } from "next";
import ChakraUiProvider from "@/app/contexts/ChakraContext";
import { background } from "@chakra-ui/react";
import { AuthProvider } from "../contexts/AuthContext";
import { UserProvider } from "../contexts/UserContext";

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
      <body style={{ background: "#FFF" }}>
        <ChakraUiProvider>
          <AuthProvider>
            <UserProvider>{children}</UserProvider>
          </AuthProvider>
        </ChakraUiProvider>
      </body>
    </html>
  );
}
