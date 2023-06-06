import { useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'

export const useNookies = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = (name: string, value: string) => {
    setCookie(null, name, value);
    setValue(value);
  };

  const getItem = (name: string) => {
    const cookies = parseCookies()

    const value = cookies[name]
    setValue(value);
    return value;
  };

  const removeItem = (name: string) => {
    destroyCookie(null, name)
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};