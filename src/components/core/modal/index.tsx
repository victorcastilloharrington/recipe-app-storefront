import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  handleClose: () => void;
  title: string;
}

const Modal = ({ open, handleClose, title, children }: ModalProps) => {
  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
export default Modal;
