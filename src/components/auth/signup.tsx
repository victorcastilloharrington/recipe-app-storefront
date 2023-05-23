import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useAuth } from "@hooks/useAuth";
import { AuthFormProps } from "@typedefs/auth";

const SignupFormComponent: FC<AuthFormProps> = ({ handleToggle }) => {
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
            autoComplete="name"
            name="name"
            required
            fullWidth
            id="name"
            label="Username"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="email"
            name="email"
            required
            fullWidth
            id="email"
            label="Email"
            inputProps={{ type: "email" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="password"
            name="password"
            required
            fullWidth
            id="password"
            label="Password"
            inputProps={{ type: "password" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="password2"
            name="password2"
            required
            fullWidth
            id="password2"
            label="Repeat Password"
            inputProps={{ type: "password" }}
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
        Sign Up
      </Button>
      <Typography gutterBottom textAlign="center" justifyContent="center">
        Already have an account?{" "}
        <Link onClick={handleToggle} sx={{ cursor: "pointer" }}>
          Log In
        </Link>
      </Typography>
    </Box>
  );
};

export default SignupFormComponent;
