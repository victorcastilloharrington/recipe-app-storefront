import { Box, Button, Grid, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { FIELD_TYPE, FIELD_TYPE_ERRORS } from "../../constants";
import { ValidateForm } from "../../helpers";
import { UserFormUpdateComponent } from "@typedefs/user";

const UserDataFormComponent: FC<UserFormUpdateComponent> = ({
  user,
  setAlert,
  setSuccess,
}) => {
  const { update } = useAuth();

  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);
  const [password, setPassword] = useState<string>();
  const [password2, setPassword2] = useState<string>();

  const [formErrors, setFormErrors] = useState<string[]>();

  const handleClickDetails = () => {
    setAlert("");
    const errors = new ValidateForm([
      { field: "name", value: name, type: FIELD_TYPE.TEXT },
      { field: "email", value: email, type: FIELD_TYPE.EMAIL },
    ]).validateFormFields();

    setFormErrors(errors);

    if (name && email && errors.length === 0)
      update(
        {
          name,
          email,
        },
        user.authToken
      ).then((res) => {
        console.log(res);
        if (res?.response?.status && res?.response?.status !== 200)
          setAlert("Unable to complete update. Please try again later.");
        else setSuccess("User details updated successfully");
      });
  };

  const handleClickPassword = () => {
    setAlert("");
    const errors = new ValidateForm([
      {
        field: "password",
        value: password,
        type: FIELD_TYPE.PASSWORD,
        compareValue: password2,
      },
    ]).validateFormFields();

    setFormErrors(errors);

    if (password && errors.length === 0)
      update(
        {
          password,
        },
        user.authToken
      ).then((res) => {
        if (res?.response?.status && res?.response?.status !== 200)
          setAlert("Unable to complete update. Please try again later.");
        else setSuccess("User password updated successfully");
      });
  };

  return (
    <>
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
              helperText={
                formErrors?.includes("name") && FIELD_TYPE_ERRORS.TEXT
              }
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
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleClickDetails}
        >
          Update Details
        </Button>
      </Box>
      <Box>
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
          onClick={handleClickPassword}
        >
          Update Password
        </Button>
      </Box>
    </>
  );
};

export default UserDataFormComponent;
