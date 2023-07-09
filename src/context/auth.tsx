import apiClient from "@/lib/apiClient";
import React, { ReactNode, useContext, useEffect, useState } from "react";

type UserType = null | {
  id: number;
  email: string;
  username: string;
};
interface AuthContextType {
  user: UserType;
  login: (token: string) => void;
  logout: () => void;
}
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserType>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
      apiClient
        .get("/users/find")
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  const login = async (token: string) => {
    localStorage.setItem("auth_token", token);
    apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
    apiClient
      .get("/users/find")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
    delete apiClient.defaults.headers["Authorization"];
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
