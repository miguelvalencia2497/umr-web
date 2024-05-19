"use client";
import { createContext, useContext, useEffect } from "react";
import { IUser } from "../[lng]/types/Users";
import { useAuth } from "./AuthContext";
import { useQuery } from "react-query";
import axios from "../api/http-common";

const UserContext = createContext<IUser | undefined>(undefined);

const UserProvider: React.FunctionComponent<{ children: any }> = ({
  children,
  ...props
}) => {
  const { data } = useAuth();
  console.log("🚀 ~ data:", data);

  const retrieveUser = async () => {
    const response = await axios.get(`/staff/user/info`);
    return response.data;
  };

  const { data: user } = useQuery("user", retrieveUser, {
    enabled: !!data && !!Object.keys(data).length,
  });

  return (
    <UserContext.Provider value={user} {...props}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): IUser | undefined => useContext(UserContext);

export { UserProvider, useUser };
