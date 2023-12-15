"use client";
import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";
import { resetApplicationData } from "../utils/application";
import { useRouter } from "next/navigation";
import { IAuthUser, IUser, UserRole } from "../[lng]/types/Users";
import { getRedirectPathFromLocation } from "../utils/location";

//!! DUMMY USER DATA ONLY !!
const adminUser: IUser = {
  email: "admin@example.com",
  first_name: "Admin",
  last_name: "User",
  user_roles: [UserRole.ADMIN, UserRole.USER],
};

const patientUser: IUser = {
  email: "patient@example.com",
  first_name: "Patient",
  last_name: "User",
  user_roles: [UserRole.USER],
};
//!! END OF DUMMY USER DATA !!

export interface IAuthState {
  status?: string;
  error?: string | null;
  data?: any;
}

const AuthContext = createContext<
  IAuthState & {
    login?: (email: string, password: string, callback: () => void) => void;
    logout?: () => void;
  }
>({});

export const TOKEN_KEY = "__uhr_token__";

export function getTokenData() {
  let data = null;
  const cached = localStorage.getItem(TOKEN_KEY);
  if (cached) {
    data = JSON.parse(cached);
  }
  return data;
}

export function refreshToken() {
  //?? Fill this up with refresh token logic
}

const AuthProvider: React.FC<{ children: any }> = (props) => {
  const [authState, setAuthState] = useLocalStorageState<IAuthState>(
    "auth_state",
    {
      status: "loading",
      error: null,
      data: {},
    },
  );
  const router = useRouter();

  useEffect(() => {
    const data = getTokenData();
    if (data && data.access_token) {
      const redirectPath = getRedirectPathFromLocation()
        ? `?redirectPath=${getRedirectPathFromLocation()}`
        : "/dashboard";
      router.push(`${redirectPath}`);
    } else {
      router.push("/login");
    }
  }, [router]);

  function handleResponse(data: IAuthUser) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
    setAuthState((state: IAuthState) => ({
      ...state,
      status: "done",
      data,
      error: null,
    }));
  }

  const logout = () => {
    resetApplicationData();
    setAuthState((state: IAuthState) => ({
      ...state,
      data: null,
      error: null,
    }));
    router.push("/login");
  };

  const login = (email: string, password: string, callback: () => any) => {
    //? Implement login logic
    if (email === adminUser.email) {
      handleResponse({
        access_token: "123ASD",
        created_at: new Date().getTime(),
        expires_in: new Date().getTime(),
        result: { user: adminUser },
      });
    } else {
      handleResponse({
        access_token: "123ASD",
        created_at: new Date().getTime(),
        expires_in: new Date().getTime(),
        result: { user: patientUser },
      });
    }
    router.push("/dashboard");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        getTokenData,
        refreshToken,
        ...authState,
      }}
      {...props}
    />
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
