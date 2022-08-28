import { localStorageKeys } from "../Constants/constants";

export const getToken = () => {
  return localStorage.getItem(localStorageKeys.token);
};
