import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  CircularProgress,
  IconButton,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import Http from "../../../utils/Http";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Favicon from "../../../assets/images/favicon.png";
import { isAuth } from "../../../utils/helpers";
import { useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import ReeValidate from "ree-validate-18";
import { styles } from "../../../assets/styles/styles";
import AgreementModal from "../components/AgreementModal";

const validator = new ReeValidate.Validator({
  email: "required|email",
  password: "required",
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        {process.env.REACT_APP_NAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const options = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  draggable: true,
  draggableDirection: "x" | "y",
  draggablePercent: 60,
  theme: "colored",
};

export default function Register() {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checkStatus, setCheckStatus] = React.useState(false);
  const [agree, setAgree] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      email: "",
      password: "",
    },
    errors: validator.errors,
  });

  React.useEffect(() => {
    if (isAuth()) {
      history.push("/profile");
    }

    if (agree) {
      setCheckStatus(true);
      setOpen(false);
    }
    setOpen(false);
  }, [agree, checkStatus, history]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  const handleSubmit = () => {
    console.log(formValues.values);
    history.push("/registration-process");
    // setLoading(true);
    // Http.post("register", formValues.values)
    //   .then((res) => {
    //     if (res.data.code === 200) {
    //       Http.defaults.headers.common[
    //         "Authorization"
    //       ] = `Bearer ${res.data.access_token}`;
    //       localStorage.setItem("accessToken", res.data.access_token);
    //       history.push("/profile");
    //     } else {
    //       ToastNotification("error", res.data.message, options);
    //     }
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     ToastNotification("error", err, options);
    //   });
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

  const handleCheckChange = () => {
    handleOpen();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleValidate();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastNotificationContainer />
      <AgreementModal
        open={open}
        setClose={handleClose}
        setAgree={setAgree}
        setOpen={setOpen}
      />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={styles.loginContentWrapper}>
          <Avatar sx={styles.loginAvatar}>
            <img src={Favicon} alt="Favicon" />
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" sx={styles.loginForm}>
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
              label="Email Address"
              autoComplete="email"
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
            <FormField
              required
              onKeyPress={handleKeyPress}
              name="password"
              errors={formValues.errors}
              value={formValues.values.password}
              onChange={handleChange}
              size="small"
              margin="normal"
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
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
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormGroup
              sx={{
                position: "relative",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ position: "absolute", top: -5, left: 0 }}
                    checked={checkStatus}
                    onChange={handleCheckChange}
                  />
                }
                label={`I agree to the "Terms of Services" and "Privacy Policy" of this system.`}
                labelPlacement="end"
                sx={{ textAlign: "justify", ml: 5 }}
              />
              <FormHelperText>
                If you check this means that you agree to our{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => history.push("/terms-of-services")}
                >
                  "Terms of Services"
                </span>{" "}
                and{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => history.push("/privacy-policy")}
                >
                  "Privacy Policy"
                </span>{" "}
                of this systen. Thank you for your cooperation.
              </FormHelperText>
            </FormGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={styles.loginSubmitButton}
              onClick={handleValidate}
              disabled={!checkStatus || loading}
            >
              {loading ? <CircularProgress size={24} /> : "Submit"}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={styles.copyright} />
      </Container>
    </ThemeProvider>
  );
}
