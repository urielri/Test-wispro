import { useContext, createContext } from "react";
import { User } from "components/interface";
export const user: User = {
  user: "",
  psswd: "",
  logged: false,
};
export const userContext = createContext(user);
export const useUser = () => {
  return useContext(userContext);
};
export const UserProvider = userContext.Provider;
