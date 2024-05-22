"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";

export default function RouteGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [isPublicPath, setIsPublicPath] = useState(false);
  const { auth } = useAuth();
  const authToken =
    global?.window !== undefined ? localStorage?.getItem("authToken") : "";

  useEffect(() => {
    authCheck(location.pathname);

    function authCheck(url: string) {
      const publicPaths = ["/en/login", "/en/staff/login"]; // Public paths (e.g., login page)
      const path = url.split("?")[0];

      if (publicPaths.includes(path)) {
        setIsPublicPath(true);
      }

      if (!authToken && !auth && !publicPaths.includes(path)) {
        // Redirect to login page if not logged in
        setAuthorized(false);
        router.push("/staff/login");
        setIsPublicPath(true);
      } else {
        setAuthorized(true);
        if (authToken && publicPaths.includes(path)) {
          router.replace("/dashboard");
        }
      }
    }
  }, [authToken, auth, router]);

  if (authorized || isPublicPath) return children;
}
