import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { AuthFormProps } from "@typedefs/auth";

const LoginFormComponent: FC<AuthFormProps> = ({ handleToggle }) => {
  const { login } = useAuth();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleClick = () => {
    //TODO: raise badge if error is returned
    if (email && password)
      login({
        email,
        password,
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Button
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
