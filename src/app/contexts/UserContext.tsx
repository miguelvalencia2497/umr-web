"use client";
import { createContext, useContext } from "react";
import { IUser } from "../[lng]/types/Users";
import { useAuth } from "./AuthContext";

const UserContext = createContext<IUser | undefined>(undefined);

const UserProvider: React.FunctionComponent<{ children: any }> = ({
  children,
  ...props
}) => {
  const { data } = useAuth();
  return (
    <UserContext.Provider value={data?.result?.user} {...props}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): IUser | undefined => useContext(UserContext);

export { UserProvider, useUser };
