import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { AuthFormProps } from "@typedefs/auth";
import { FIELD_TYPE, FIELD_TYPE_ERRORS } from "../../constants";
import { ValidateForm } from "../../helpers";

const SignupFormComponent: FC<AuthFormProps> = ({ handleToggle }) => {
  const { signUp } = useAuth();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [password2, setPassword2] = useState<string>();

  const [formErrors, setFormErrors] = useState<string[]>();

  const handleClick = () => {
    const errors = new ValidateForm([
      { field: "name", value: name, type: FIELD_TYPE.TEXT },
      { field: "email", value: email, type: FIELD_TYPE.EMAIL },
      {
        field: "password",
        value: password,
        type: FIELD_TYPE.PASSWORD,
        compareValue: password2,
      },
    ]).validateFormFields();

    setFormErrors(errors);

    if (name && email && password && errors.length === 0)
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
            error={formErrors?.includes("name")}
            helperText={formErrors?.includes("name") && FIELD_TYPE_ERRORS.TEXT}
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
            error={formErrors?.includes("email")}
            helperText={
              formErrors?.includes("email") && FIELD_TYPE_ERRORS.EMAIL
            }
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
            error={formErrors?.includes("password")}
            helperText={
              formErrors?.includes("password") && FIELD_TYPE_ERRORS.PASSWORD
            }
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
            error={formErrors?.includes("password")}
            helperText={
              formErrors?.includes("password") && FIELD_TYPE_ERRORS.PASSWORD
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
