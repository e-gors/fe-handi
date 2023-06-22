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
import PersonIcon from "@mui/icons-material/Person";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import { CircularProgress, InputAdornment } from "@mui/material";
import { styles } from "../../../assets/styles/styles";
import publicHttp from "../../../utils/publicHttp";
import { options } from "../../../components/options";

const validator = new ReeValidate.Validator({
  email: "required|email",
});

const theme = createTheme();

export default function ForgotPassword() {
  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      email: "",
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

  console.log(formValues);

  const handleSubmit = () => {
    setLoading(true);
    publicHttp
      .post("/forgot-password", formValues.values)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleValidate();
    }
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
              Forgot Password?
            </Typography>
            <Typography>
              No worries, we will send reset password instruction to your email
            </Typography>
            <Box sx={styles.loginForm}>
              <FormField
                onKeyPress={handleKeyPress}
                required
                name="email"
                errors={formValues.errors}
                onChange={handleChange}
                value={formValues.values.email}
                size="small"
                margin="normal"
                fullWidth
                id="email"
                label="Enter your Email"
                autoFocus
                InputProps={{
                  style: {
                    background: "rgba(255, 255, 255, 0.5)",
                    color: "black",
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={styles.loginSubmitButton}
                onClick={handleValidate}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Send"}
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
