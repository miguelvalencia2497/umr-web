// contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { AuthNames, IAuthUser, IUser } from "../[lng]/types/Users";
import { authenticateUser } from "../api/auth";
import { useRouter } from "next/navigation";

// Create the context
const AuthContext = createContext<any>(null);

// Custom hook to access the context
export function useAuth() {
  return useContext(AuthContext);
}

// AuthContext provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [auth, setAuth] = useState<{ role: string } | undefined>();

  // Login function
  const login = async (email: string, password: string, role: AuthNames) => {
    try {
      const authToken = await authenticateUser(email, password, role);
      localStorage.setItem("authToken", authToken);
      localStorage.setItem("authRole", role);
      setAuth({ role: role });
    } catch (error) {
      // Handle login errors
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authRole");
    setAuth(undefined);
    router.replace("/staff/login");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
