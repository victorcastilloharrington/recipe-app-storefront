import { User } from "./user";

export interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

export interface ModalContextProps {
  modalState: boolean;
  setModalState: (state: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
}
