import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { UserFormLogin } from "../typedefs/user";
import ApiClient from "../services/api";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, [addUser, getItem]);

  const login = async (userFormLogin: UserFormLogin) => {
    try {
      const res = await ApiClient('user/token/', { method: 'post', data: userFormLogin })

      if (res) {
        const authToken = `Token ${res.token}`
        const user = await ApiClient('user/me/', { headers: { Authorization: authToken } })

        if (user)
          addUser({ ...user, authToken });
      }

    } catch (err: any) {
      //TODO: raise alert on error
      console.error(err)
    }
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};