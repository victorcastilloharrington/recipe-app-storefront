export interface GenericModalProps {
  handleOpen: () => void
  handleClose: () => void
  title: string
}

export interface GenericFormProps {
  setAlert: (msg: string) => void
}

export interface AuthFormProps extends GenericFormProps {
  handleToggle: () => void
}