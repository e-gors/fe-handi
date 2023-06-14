import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import ReeValidate from "ree-validate-18";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router-dom";
import * as service from "../service";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import SelectDropdown from "../../../components/SelectDropdown";
import Http from "../../../utils/Http";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/actions/userActions";

const validator = new ReeValidate.Validator({
  first_name: "required",
  last_name: "required",
  email: "required|email|regex:^[a-zA-Z0-9]+.[^s@]+@gmail.com$",
  password: "required|min:6",
  background: "required",
  number: "required|numeric|regex:^09[0-9]{9}$",
  gender: "required",
  address: "required",
});

const styles = {
  wrapper: {
    mt: 10,
    p: 2,
  },
  main: {
    p: 3,
    backgroundColor: "#F8F9F9",
    maxWidth: 700,
    margin: "10px auto",
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    borderRadius: 10,
    boxShadow: 5,
  },
  registerAs: {
    fontSize: { xs: 24, md: 30 },
    fontWeight: 400,
    mb: 2,
  },
  addressHelper: {
    color: "#888888",
    pl: 1,
    fontSize: 12,
  },
  error: {
    color: "red",
    pl: 1,
    fontSize: 12,
  },
  buttonWrapper: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    margin: "20px auto",
  },
  back: {
    width: "45%",
    maxWidth: 200,
  },
  next: {
    width: "45%",
    maxWidth: 200,
    backgroundColor: "#B9326F",
    "&:hover": {
      backgroundColor: "#ED563E",
    },
  },
  submit: {
    width: "100%",
    transition: ".5s",
    background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,

    "&:hover": {
      boxShadow: 5,
    },
  },
  gender: { mt: { xs: 0, md: 0.5 } },
  checkbox: { mt: { xs: -1.5, md: -1.2 } },
  formgroup: { mt: 2 },
  checkingThis: { fontSize: { xs: 12, sm: 14, md: 16 } },
  terms: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
  clickHereWrapper: { mt: 2 },
  clickHere: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
  registerAsWorker: { fontSize: 12 },
};

const genders = ["Male", "Female", "Others", "Better Not Tell"];

function JoinAsClient() {
  let role = localStorage.getItem("selectedRole");
  const history = useHistory();
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      number: "",
      gender: "",
      address: "",
    },
    errors: validator.errors,
  });

  const handdleChangeCheck = (e) => {
    setIsChecked(!isChecked);
  };

  const handleChangeFormValues = (e) => {
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
      .clientRegister(role, formValues)
      .then((res) => {
        if (res.data.code === 200) {
          Http.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.access_token}`;
          const user = res.data.user;
          localStorage.setItem("accessToken", res.data.access_token);
          localStorage.setItem("tokenExpiration", res.data.expires_in);
          dispatch(setUser(user));
          if (user.role === "Super Admin") {
            history.push("/admin/dashboard");
          } else {
            history.push("/dashboard");
          }
          localStorage.removeItem("selectedRole");
        } else {
          setLoading(false);
          ToastNotification("error", res.data.message, options);
        }
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOpenNewTab = (link) => {
    let baseUrl = process.env.REACT_APP_BASE_URL;
    window.open(`${baseUrl}/${link}`, "_blank");
  };

  const handleChangeRole = (role) => {
    localStorage.setItem("selectedRole", role);
    history.push(`/join-us/${role}`);
  };

  return (
    <Box sx={styles.wrapper}>
      <ToastNotificationContainer />
      <Box sx={styles.main}>
        <Typography sx={styles.registerAs}>Register as {role}</Typography>
        <Box component="form">
          <Grid container spacing={0.5}>
            <Grid item xs={12} md={6}>
              <FormField
                errors={formValues.errors}
                onChange={handleChangeFormValues}
                margin="dense"
                value={formValues.values.first_name}
                label="First Name"
                name="first_name"
                fullWidth
                required
                autoFocus
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField
                errors={formValues.errors}
                onChange={handleChangeFormValues}
                margin="dense"
                value={formValues.values.last_name}
                label="Last Name"
                name="last_name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField
                required
                type="email"
                name="email"
                errors={formValues.errors}
                onChange={handleChangeFormValues}
                value={formValues.values.email}
                size="small"
                margin="normal"
                fullWidth
                label="Working Email "
                autoComplete="email"
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
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField
                required
                name="password"
                errors={formValues.errors}
                value={formValues.values.password}
                onChange={handleChangeFormValues}
                size="small"
                margin="normal"
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
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
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField
                errors={formValues.errors}
                onChange={handleChangeFormValues}
                margin="dense"
                value={formValues.values.number}
                label="Contact Number"
                name="number"
                required
                fullWidth
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 11,
                }}
              />
              <Typography sx={styles.addressHelper}>09xxxxxxxxx</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectDropdown
                size="small"
                options={genders}
                onChange={handleChangeFormValues}
                value={formValues.values.gender}
                name="gender"
                label="Gender"
                required
                sx={styles.gender}
                errors={formValues.errors}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormField
                errors={formValues.errors}
                onChange={handleChangeFormValues}
                margin="dense"
                value={formValues.values.address}
                label="Complete Address"
                name="address"
                fullWidth
                required
              />

              <Typography sx={styles.addressHelper}>
                Purok / Sitio / Subdivision, Barangay, Municipality, Provice
              </Typography>
            </Grid>
          </Grid>

          <FormGroup sx={styles.formgroup}>
            <FormControlLabel
              required
              control={
                <Checkbox
                  sx={styles.checkbox}
                  checked={isChecked}
                  onChange={handdleChangeCheck}
                />
              }
              labelPlacement="end"
              label={
                <Typography sx={styles.checkingThis}>
                  Checking this means that you agree to our "
                  <span
                    style={styles.terms}
                    onClick={() => handleOpenNewTab("terms-of-services")}
                  >
                    Terms and Condition
                  </span>
                  " and "
                  <span
                    style={styles.terms}
                    onClick={() => handleOpenNewTab("privacy-policy")}
                  >
                    Privacy Policy
                  </span>
                  ".
                </Typography>
              }
            />
            {!isChecked && (
              <FormHelperText error>
                Please read the conditions stated above and check the checkbox
                to proceed.
              </FormHelperText>
            )}
          </FormGroup>

          <Box sx={styles.buttonWrapper}>
            <Button
              size="small"
              variant="contained"
              sx={styles.submit}
              disabled={!isChecked || loading}
              onClick={handleValidate}
              type="submit"
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  disableShrink
                  sx={{ color: "white" }}
                />
              ) : !isChecked ? (
                "Disabled"
              ) : (
                "Submit"
              )}
            </Button>
          </Box>
        </Box>
        <Box sx={styles.clickHereWrapper}>
          <Typography sx={styles.registerAsWorker}>
            Register as a Worker?{" "}
            <span
              style={styles.clickHere}
              onClick={() => handleChangeRole("Worker")}
            >
              Click here.
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default JoinAsClient;
