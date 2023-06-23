import { useState } from "react";
import { Alert, Avatar, Box } from "@mui/material";
import { UserDetailsComponentProps } from "@typedefs/user";
import UserFormComponent from "./form";

const UserDetailsComponent = ({ user }: UserDetailsComponentProps) => {
  const [alert, setAlert] = useState<string>();
  const [success, setSuccess] = useState<string>();
  return (
    <Box
      sx={{
        my: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={user.name}
          sx={{
            bgcolor: "primary",
            width: 30,
            height: 30,
            fontSize: 16,
          }}
        >
          {user.name[0]}
        </Avatar>
        <UserFormComponent
          user={user}
          setAlert={setAlert}
          setSuccess={setSuccess}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      ></Box>
      {alert && <Alert severity="error">{alert}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
    </Box>
  );
};

export default UserDetailsComponent;
