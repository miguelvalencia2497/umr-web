"use client";
import { createContext, useContext, useEffect } from "react";
import { IUser } from "../[lng]/types/Users";
import { useAuth } from "./AuthContext";
import { useQuery, useQueryClient } from "react-query";
import axios from "../api/http-common";
import { useRouter } from "next/navigation";

const UserContext = createContext<IUser | undefined>(undefined);

const UserProvider: React.FunctionComponent<{ children: any }> = ({
  children,
  ...props
}) => {
  const authToken = localStorage.getItem("authToken");
  const router = useRouter();
  const queryClient = useQueryClient();
  const { auth, logout } = useAuth();

  const retrieveUser = async () => {
    // try {
    const response = await axios.get(`/staff/user/info`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return response.data;
    // }
    //  catch (error) {
    // logout?.();
    // }
  };

  const { data: user, isLoading } = useQuery("user", retrieveUser, {
    enabled: !!authToken,
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["user"] });
  }, [queryClient, auth, router]);

  return (
    <UserContext.Provider value={user} {...props}>
      {isLoading ? "..." : children}
    </UserContext.Provider>
  );
};

const useUser = (): IUser | undefined => useContext(UserContext);

export { UserProvider, useUser };
