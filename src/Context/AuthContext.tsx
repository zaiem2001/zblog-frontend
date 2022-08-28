import { createContext } from "react";
import { getToken } from "../Utils/GetToken";

interface UserContextInterface {
  isLoggedIn: boolean;
  login: (email: string, password: string) => any;
  logout: () => any;
  user: any;
  isLoading: boolean;
  setUser: (args: any) => any;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const initialValues = {
  isLoading: false,
  user: null,
  isLoggedIn: !!getToken(),
  login: () => {},
  logout: () => {},
  setUser: (args: any) => {},
  isDarkMode: false,
  toggleDarkMode: () => {},
};

export const UserContext = createContext<UserContextInterface>(initialValues);
