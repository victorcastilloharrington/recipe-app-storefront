import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNookies } from "./useNookies";
import { User } from "../typedefs/user";



export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useNookies();

  const addUser = (user: User) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser };
};