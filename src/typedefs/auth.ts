export interface GenericModalProps {
  handleOpen: () => void
  handleClose: () => void
  title: string
}

export interface AuthFormProps {
  handleToggle: () => void
  setAlert: (msg: string) => void
}