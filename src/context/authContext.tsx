import { AuthContextProps } from "@typedefs/context";
import { User } from "@typedefs/user";
import { FC, PropsWithChildren, createContext, useState } from "react";

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
