import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useAuth } from "@hooks/useAuth";
import { AuthFormProps } from "@typedefs/auth";

const LoginFormComponent: FC<AuthFormProps> = ({ handleToggle }) => {
  const { login } = useAuth();

  const handleClick = () => {
    login({
      id: 1,
      name: "Victor Castillo",
      email: "victor@example.com",
      authToken: "Token 1234",
    });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="email"
            name="email"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
            inputProps={{ type: "email" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            inputProps={{ type: "password" }}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleClick}
      >
        Login
      </Button>
      <Typography gutterBottom textAlign="center" justifyContent="center">
        Do not have an account?{" "}
        <Link onClick={handleToggle} sx={{ cursor: "pointer" }}>
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginFormComponent;
