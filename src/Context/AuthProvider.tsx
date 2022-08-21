import React, { useState } from "react";
import { useMutation } from "react-relay";
import Message from "../Components/Message/Message";
import { User } from "../Constants/Interfaces";
import { LoginMutation } from "../Queries/User/Auth";
import { getToken } from "../Utils/GetToken";
import { UserContext } from "./AuthContext";

type Props = {
  children: any;
};

const AuthProvider: React.FC<Props> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!getToken());

  const currentUser = localStorage.getItem("zblog-user")
    ? JSON.parse(localStorage.getItem("zblog-user")!)
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
            localStorage.setItem("zblog-token", data.user.token);
            setUser(data.user.user);
            localStorage.setItem("zblog-user", JSON.stringify(data.user.user));
            setIsLoggedIn(true);
            Message({ text: "Login Success", type: "success" });
          }
        }
      },
    });
  };

  const logout = () => {
    localStorage.removeItem("zblog-token");
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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
