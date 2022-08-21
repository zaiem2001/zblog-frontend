import { createContext } from "react";
import { getToken } from "../Utils/GetToken";

interface UserContextInterface {
  isLoggedIn: boolean;
  login: (email: string, password: string) => any;
  logout: () => any;
  user: any;
  isLoading: boolean;
  setUser: (args: any) => any;
}

const initialValues = {
  isLoading: false,
  user: null,
  isLoggedIn: !!getToken(),
  login: () => {},
  logout: () => {},
  setUser: (args: any) => {},
};

export const UserContext = createContext<UserContextInterface>(initialValues);
