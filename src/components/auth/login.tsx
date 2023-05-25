import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { AuthFormProps } from "@typedefs/auth";
import { ValidateForm } from "../../helpers";
import { FIELD_TYPE, FIELD_TYPE_ERRORS } from "../../constants";

const LoginFormComponent: FC<AuthFormProps> = ({ handleToggle, setAlert }) => {
  const { login } = useAuth();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [formErrors, setFormErrors] = useState<string[]>();

  const handleClick = () => {
    setAlert("");
    const errors = new ValidateForm([
      { field: "email", value: email, type: FIELD_TYPE.EMAIL },
      {
        field: "password",
        value: password,
        type: FIELD_TYPE.TEXT,
      },
    ]).validateFormFields();

    setFormErrors(errors);
    if (email && password && errors.length === 0) {
      login({
        email,
        password,
      }).then((res) => {
        if (res?.response?.status !== 200) setAlert("Invalid Credentials.");
      });
    }
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
            error={formErrors?.includes("email")}
            helperText={
              formErrors?.includes("email") && FIELD_TYPE_ERRORS.EMAIL
            }
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
            error={formErrors?.includes("password")}
            helperText={
              formErrors?.includes("password") && FIELD_TYPE_ERRORS.TEXT
            }
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
