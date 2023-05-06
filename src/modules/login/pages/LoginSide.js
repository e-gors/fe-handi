import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReeValidate from "ree-validate-18";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/actions/userActions";
import { options } from "../../../components/options";
import { isAuth } from "../../../utils/helpers";
import { useHistory } from "react-router-dom";
import * as service from "../service";
import FormField from "../../../components/FormField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import Http from "../../../utils/Http";
import {
  CircularProgress,
  FormGroup,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styles } from "../../../assets/styles/styles";

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
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginSide() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      email: "",
      password: "",
    },
    errors: validator.errors,
  });
  const [checkStatus, setCheckStatus] = React.useState(false);

  React.useEffect(() => {
    if (isAuth()) {
      history.push("/dashboard/client");
    }
  }, []);

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
    setLoading(true);
    service
      .login(formValues.values)
      .then((res) => {
        if (res.data.code === 200) {
          Http.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.access_token}`;
          localStorage.setItem("accessToken", res.data.access_token);
          dispatch(setUser(res.data.user));
          history.push("/dashboard");
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

  const handleCheckChange = () => {
    setCheckStatus(!checkStatus);
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
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
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
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkStatus}
                      onChange={handleCheckChange}
                    />
                  }
                  label="Remember me"
                  labelPlacement="end"
                />
              </FormGroup>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={styles.loginSubmitButton}
                onClick={handleValidate}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Login"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
