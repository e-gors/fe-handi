/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReeValidate from "ree-validate-18";
import FormField from "../../../components/FormField";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import {
  CircularProgress,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styles } from "../../../assets/styles/styles";
import publicHttp from "../../../utils/publicHttp";
import { options } from "../../../components/options";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useParams, useHistory } from "react-router-dom";

const validator = new ReeValidate.Validator({
  password: "required|min:5|max:20|regex:^(?=.*[!@#$%^&*])",
  retype_password: "required|min:5|max:20",
});

const theme = createTheme();

const checkMatchValue = (firstValue, secondValue) => {
  let match = false;
  if (firstValue === secondValue) {
    match = true;
  } else {
    match = false;
  }
  return match;
};

export default function PasswordReset() {
  const params = useParams();
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [showFirstPass, setShowFirstPass] = React.useState(false);
  const [showSecondPass, setShowSecondPass] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(null);
  const [formValues, setFormValues] = React.useState({
    values: {
      password: "",
      retype_password: "",
    },
    errors: validator.errors,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = validator;

    validator.validate(name, value).then(() => {
      setFormValues((prev) => ({
        ...prev,
        errors,
      }));
    });
  };

  const handleKeyPress = (e) => {
    let passwords = formValues.values;
    let matched = checkMatchValue(
      passwords.password,
      passwords.retype_password
    );

    if (matched) {
      setPasswordError("Password do not match!");
    } else {
      setPasswordError(null);
    }

    if (e.key === "Enter") {
      handleValidate();
    }
  };

  const handleClickShowFirstPass = (type) => {
    if (type === "first") {
      setShowFirstPass(!showFirstPass);
    } else {
      setShowSecondPass(!showSecondPass);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleKeyUp = (e) => {
    let passwords = formValues.values;

    let matched = checkMatchValue(
      passwords.password,
      passwords.retype_password
    );
    if (!matched) {
      setPasswordError("Password not match!");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    publicHttp
      .post(
        `/reset-password/${params.token}/${params.email}`,
        formValues.values
      )
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          setTimeout(() => history.push("/login"), 500);
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        ToastNotification("error", err.message, options);
      });
  };

  const handleValidate = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
        handleSubmit();
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastNotificationContainer />
      <Grid container component="main" sx={{ height: "100vh", mt: 8 }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="h5">
              New Password
            </Typography>
            <Typography>
              Please check your password before you click submit:
            </Typography>
            <Box sx={styles.loginForm}>
              <Box>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ fontSize: 12 }}>New Password *</Typography>
                  <FormField
                    required
                    name="password"
                    errors={formValues.errors}
                    value={formValues.values.password}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onKeyUp={handleKeyUp}
                    size="small"
                    margin="normal"
                    fullWidth
                    label="New Password"
                    type={showFirstPass ? "text" : "password"}
                    InputProps={{
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        coor: "black",
                      },
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => handleClickShowFirstPass("first")}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showFirstPass ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ fontSize: 12 }}>
                    Retype New Password *
                  </Typography>
                  <FormField
                    required
                    name="retype_password"
                    errors={formValues.errors}
                    value={formValues.values.retype_password}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onKeyUp={handleKeyUp}
                    size="small"
                    margin="normal"
                    fullWidth
                    label="Retype New Password"
                    type={showSecondPass ? "text" : "password"}
                    InputProps={{
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        coor: "black",
                      },
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => handleClickShowFirstPass("second")}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showSecondPass ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {passwordError && (
                    <FormHelperText error>{passwordError}</FormHelperText>
                  )}
                </Box>
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={styles.loginSubmitButton}
                onClick={handleValidate}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Submit"}
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://resources.workable.com/wp-content/uploads/2019/12/how_to_hire_in_construction.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
