import Modal from "@components/core/modal";
import { FC, useState } from "react";
import { Box, Button } from "@mui/material";
import { useModal } from "@hooks/useModal";
import { AccountCircle } from "@mui/icons-material";
import LoginFormComponent from "./login";
import SignupFormComponent from "./signup";

const AuthComponent: FC = () => {
  const [openModal, toggleModal] = useModal();
  const [isSignup, sestIsSignup] = useState<boolean>(false);

  const handleModal = () => {
    sestIsSignup(false);
    toggleModal();
  };

  const handleToggle = () => sestIsSignup(!isSignup);
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
          <LoginFormComponent handleToggle={handleToggle} />
        ) : (
          <SignupFormComponent handleToggle={handleToggle} />
        )}
      </Modal>
    </Box>
  );
};

export default AuthComponent;
