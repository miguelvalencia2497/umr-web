"use client";
import { dir } from "i18next";
import ChakraUiProvider from "@/app/contexts/ChakraContext";
import { AuthProvider } from "../contexts/AuthContext";
import { UserProvider } from "../contexts/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import RouteGuard from "../components/common/RouteGuard/RouteGuard";

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
      mutations: {},
    },
  });

  return (
    <html lang={lng} dir={dir(lng)}>
      <body style={{ background: "#FFF" }}>
        <ChakraUiProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <RouteGuard>
                <UserProvider>{children}</UserProvider>
              </RouteGuard>
            </AuthProvider>
          </QueryClientProvider>
        </ChakraUiProvider>
      </body>
    </html>
  );
}
