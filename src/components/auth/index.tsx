import Modal from "@components/core/modal";
import { FC, useState } from "react";
import { Alert, Box, Button } from "@mui/material";
import { useModal } from "@hooks/useModal";
import { AccountCircle } from "@mui/icons-material";
import LoginFormComponent from "./login";
import SignupFormComponent from "./signup";

const AuthComponent: FC = () => {
  const [openModal, toggleModal] = useModal();
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [alert, setAlert] = useState<string>();
  const handleModal = () => {
    setIsSignup(false);
    toggleModal();
  };

  const handleToggle = () => {
    setAlert("");
    setIsSignup(!isSignup);
  };

  return (
    <Box>
      <Button
        variant="text"
        color="secondary"
        startIcon={<AccountCircle />}
        onClick={handleModal}
      >
        LogIn
      </Button>
      <Modal
        title={!isSignup ? "Log In" : "Sign Up"}
        open={openModal}
        handleClose={toggleModal}
      >
        {!isSignup ? (
          <LoginFormComponent handleToggle={handleToggle} setAlert={setAlert} />
        ) : (
          <SignupFormComponent
            handleToggle={handleToggle}
            setAlert={setAlert}
          />
        )}
        {alert && <Alert severity="error">{alert}</Alert>}
      </Modal>
    </Box>
  );
};

export default AuthComponent;
