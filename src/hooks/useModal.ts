import { useState } from "react";

export const useModal = ():[boolean, ()=> void] => {
  const [open, setOpen] = useState<boolean>(false)

  const toggle = () => {
    setOpen(!open)
  };


  return [ open, toggle ];
};