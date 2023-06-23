import { useEffect } from "react";
import { useUser } from "./useUser";
import { useNookies } from "./useNookies";
import { UserFormLogin, UserFormSignup, UserFormUpdate } from "../typedefs/user";
import ApiClient from "../services/api";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useNookies();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }

  }, []); // eslint-disable-line

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
      console.error(err)
      return err
    }
  };

  const signUp = async (userFormSignup: UserFormSignup) => {
    try {
      const user = await ApiClient('user/create/', { method: 'post', data: userFormSignup })

      if (user) {
        const tokenRes = await ApiClient('user/token/', { method: 'post', data: userFormSignup })
        const authToken = `Token ${tokenRes.token}`

        if (user)
          addUser({ ...user, authToken });
      }

    } catch (err: any) {
      console.error(err)
      return err
    }
  };

  const update = async (userFormUpdate: UserFormUpdate, authToken: string) => {
    try {
      const res = await ApiClient('user/me/', { method: 'patch', data: userFormUpdate, headers: { Authorization: authToken } })
      if (res && user)
        addUser({ ...user, ...res });

    } catch (err: any) {
      console.error(err)
      return err
    }
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, signUp, logout, update };
};