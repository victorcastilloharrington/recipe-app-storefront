import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { ModalComponentProps } from "@typedefs/core";

const Modal = ({ title, children, open, handleClose }: ModalComponentProps) => {
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
