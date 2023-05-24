import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { AuthFormProps } from "@typedefs/auth";

const SignupFormComponent: FC<AuthFormProps> = ({ handleToggle }) => {
  const { signUp } = useAuth();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [password2, setPassword2] = useState<string>();

  const validatePassword = () =>
    password && password2 && password === password2;

  const handleClick = () => {
    const isValidPass = validatePassword();

    //TODO: raise alert badge
    if (!isValidPass) console.error("Passwords do not match");
    if (name && email && password && isValidPass)
      signUp({
        name,
        email,
        password,
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
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
