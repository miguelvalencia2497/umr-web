"use client";
import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";
import http from "../api/http-common";
import { resetApplicationData } from "../utils/application";
import { useRouter } from "next/navigation";
import { IAuthUser, IUser, UserRole } from "../[lng]/types/Users";
import { getRedirectPathFromLocation } from "../utils/location";

export interface IAuthState {
  status?: string;
  error?: string | null;
  data?: any;
}

const AuthContext = createContext<
  IAuthState & {
    login?: (
      email: string,
      password: string,
      callback: () => void,
      role?: UserRole,
    ) => void;
    logout?: () => void;
  }
>({});

export function getTokenData() {
  let data = null;
  const cached = localStorage.getItem("auth_state");
  if (cached) {
    data = JSON.parse(cached).data.token;
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
    if (data) {
      const redirectPath = getRedirectPathFromLocation()
        ? `?redirectPath=${getRedirectPathFromLocation()}`
        : "/dashboard";
      router.push(`${redirectPath}`);
    } else {
      router.push("/login");
    }
  }, [router]);

  function handleResponse(data: IAuthUser) {
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

  const login = (
    email: string,
    password: string,
    callback: () => any,
    role?: UserRole,
  ) => {
    //? Implement login logic
    http
      .post<IAuthUser>(`/${role ? role : UserRole.PATIENT}/signin`, {
        username: email,
        password: password,
        domain: "test",
      })
      .then((res) => {
        handleResponse({ ...res.data, role: role || UserRole.PATIENT });
        router.push("/dashboard");
      });
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
