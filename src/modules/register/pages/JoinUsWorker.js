import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import ReeValidate from "ree-validate-18";
import SelectDropdown from "../../../components/SelectDropdown";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useHistory } from "react-router-dom";
import * as service from "../service";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";

const validator = new ReeValidate.Validator({
  email: "required|email",
  first_name: "required",
  last_name: "required",
  password: "required",
  number: "required|numeric",
  gender: "required",
  address: "required",
  skills: "required",
  jobs: "required",
});

const styles = {
  wrapper: {
    mt: 10,
    p: 2,
  },
  main: {
    p: 3,
    backgroundColor: "#F8F9F9",
    maxWidth: 600,
    margin: "10px auto",
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    borderRadius: 5,
  },
  registerAs: {
    fontSize: { xs: 18, md: 24 },
    fontWeight: 400,
    mb: 1,
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
    mt: 5,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
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
};

const jobInterest = [
  "Carpenter",
  "Plumber",
  "Construction Worker",
  "Electrician",
  "Machine Operator",
];
const skillOptions = [
  "Loyal",
  "Time management",
  "Machine operation",
  "Flexible",
  "Creative",
  "Leadership",
  "Positive",
];

const genders = ["Male", "Female", "Others", "Better Not Tell"];

function JoinUsWorker() {
  let role = localStorage.getItem("selectedRole");
  let history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [expertise, setExpertise] = React.useState({
    values: {
      skills: [],
      jobs: [],
    },
    errors: validator.errors,
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    values: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      number: "",
      gender: "",
      address: "",
    },
    errors: validator.errors,
  });

  const handleChangeExpertise = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newValue = typeof value === "string" ? value.split(",") : value;

    setExpertise((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: newValue,
      },
    }));

    const { errors } = validator;

    validator.validate(name, value).then(() => {
      setExpertise((prev) => ({
        ...prev,
        errors,
      }));
    });
  };

  const handleChangeValues = (e) => {
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

  // const handleSubmit = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         let latitude = position.coords.latitude;
  //         let longitude = position.coords.longitude;

  //         service.workerRegister(role, formValues)
  //           .then((res) => {
  //             if (res.data.code === 200) {
  //               console.log(res.data);
  //               // history.push("/confirm-registration");
  //             } else {
  //               console.log(res.data.message);
  //             }
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       },
  //       (error) => {
  //         console.log(error.message);
  //       }
  //     );
  //   } else {
  //     console.log("Geolocation is not supported in your browser!");
  //   }
  // };

  const handleSubmit = () => {
    setLoading(true);
    service
      .workerRegister(role, formValues, expertise)
      .then((res) => {
        if (res.data.code === 200) {
          localStorage.setItem("accessToken", res.data.access_token);
          history.push("/confirm-registration");
          setLoading(false);
        } else {
          ToastNotification("error", res.data.message, options);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
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

  return (
    <Box sx={styles.wrapper}>
      <ToastNotificationContainer />
      <Box component="form" sx={styles.main}>
        <Typography sx={styles.registerAs}>Register as {role}</Typography>
        <Grid container spacing={0.5}>
          <Grid item xs={12} md={6}>
            <FormField
              required
              type="email"
              name="email"
              errors={formValues.errors}
              onChange={handleChangeValues}
              value={formValues.values.email}
              size="small"
              margin="normal"
              fullWidth
              label="Email Address"
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
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField
              required
              name="password"
              errors={formValues.errors}
              value={formValues.values.password}
              onChange={handleChangeValues}
              size="small"
              margin="normal"
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
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
              onChange={handleChangeValues}
              margin="dense"
              value={formValues.values.first_name}
              label="First Name"
              name="first_name"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField
              errors={formValues.errors}
              onChange={handleChangeValues}
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
              errors={formValues.errors}
              onChange={handleChangeValues}
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
              onChange={handleChangeValues}
              value={formValues.values.gender}
              name="gender"
              label="Gender"
              required
              sx={{ mt: { xs: 0, md: 0.5 } }}
              errors={formValues.errors}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <FormField
              errors={formValues.errors}
              onChange={handleChangeValues}
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
          <Grid item xs={12} md={12}>
            <SelectDropdown
              options={jobInterest}
              size="small"
              required
              label="Job Interest"
              multiple
              onChange={handleChangeExpertise}
              value={expertise.values.jobs}
              name="jobs"
              errors={expertise.errors}
            />

            <Typography sx={styles.addressHelper}>
              You can select Multiple Jobs
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <SelectDropdown
              options={skillOptions}
              size="small"
              required
              label="Your Skills"
              multiple
              onChange={handleChangeExpertise}
              value={expertise.values.skills}
              name="skills"
              errors={expertise.errors}
            />
            <Typography sx={styles.addressHelper}>
              You can select multiple skills
            </Typography>
          </Grid>
        </Grid>

        <Box sx={styles.buttonWrapper}>
          <Button
            size="small"
            variant="contained"
            sx={styles.submit}
            disabled={loading}
            onClick={handleValidate}
          >
            {loading ? (
              <CircularProgress
                size={24}
                disableShrink
                sx={{ color: "white" }}
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default JoinUsWorker;
