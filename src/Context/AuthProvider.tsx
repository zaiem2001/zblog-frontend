import React, { useState } from "react";
import { useMutation } from "react-relay";
import Message from "../Components/Message/Message";
import { localStorageKeys } from "../Constants/constants";
import { User } from "../Constants/Interfaces";
import { LoginMutation } from "../Queries/User/Auth";
import { getToken } from "../Utils/GetToken";
import { UserContext } from "./AuthContext";

type Props = {
  children: any;
};

const AuthProvider: React.FC<Props> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!getToken());

  const savedThemeMode =
    localStorage.getItem(localStorageKeys.darkMode) || "true";
  const [isDarkMode, setIsDarkMode] = useState(savedThemeMode === "true");

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem(localStorageKeys.darkMode, String(!prev));
      return !prev;
    });
  };

  const currentUser = localStorage.getItem(localStorageKeys.user)
    ? JSON.parse(localStorage.getItem(localStorageKeys.user)!)
    : null;
  const [user, setUser] = useState<User | null>(currentUser);

  const [commitLogin, isLoading] = useMutation(LoginMutation);

  const login = (email: string, password: string) => {
    commitLogin({
      variables: {
        email,
        password,
      },
      onCompleted(data: any, error) {
        if (error?.length) {
          Message({ text: error[0]?.message, type: "error" });
        } else {
          if (data.user) {
            localStorage.setItem(localStorageKeys.token, data.user.token);
            setUser(data.user.user);
            localStorage.setItem(
              localStorageKeys.user,
              JSON.stringify(data.user.user)
            );
            setIsLoggedIn(true);
            Message({ text: "Login Success", type: "success" });
          }
        }
      },
    });
  };

  const logout = () => {
    localStorage.removeItem(localStorageKeys.token);
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        setUser,
        logout,
        isLoggedIn,
        isLoading,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
