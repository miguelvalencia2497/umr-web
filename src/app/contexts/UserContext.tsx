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

  const retrieveUser = async () => {
    const response = await axios.get(`/patient/user/${data?.userId}`);
    return response.data;
  };

  const { data: user, error, isLoading } = useQuery("user", retrieveUser);

  return (
    <UserContext.Provider value={user} {...props}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): IUser | undefined => useContext(UserContext);

export { UserProvider, useUser };
