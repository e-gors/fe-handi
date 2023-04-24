import {
  Box,
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

const validator = new ReeValidate.Validator({
  email: "required",
  password: "required",
  background: "required",
  number: "required",
  gender: "required",
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
    borderRadius: 10,
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

function JoinUsClient() {
  let role = localStorage.getItem("selectedRole");

  const [showPassword, setShowPassword] = React.useState(false);
  const [expertise, setExpertise] = React.useState({
    values: {
      skills: [],
      jobs: [],
    },
  });

  const [formValues, setFormValues] = React.useState({
    values: {
      email: "",
      password: "",
      background: "",
      number: "",
      gender: "",
    },
    errors: validator.errors,
  });

  const handleChangeSelect = (e) => {
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

  const handlePassFormValues = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
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
      <Box component="form" sx={styles.main}>
        <Typography sx={styles.registerAs}>Register as {role}</Typography>
        <Grid container spacing={0.5}>
          <Grid item xs={12} md={6}>
            <FormField
              required
              type="email"
              name="email"
              errors={formValues.errors}
              onChange={handleChange}
              value={formValues.values.email}
              size="small"
              margin="normal"
              fullWidth
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
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField
              required
              name="password"
              errors={formValues.errors}
              value={formValues.values.password}
              onChange={handleChange}
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
              onChange={handleChange}
              margin="dense"
              value={formValues.values.number}
              label="Contact Number"
              name="number"
              type="number"
              fullWidth
              required
              InputProps={{
                maxLength: 11,
              }}
            />
            <Typography sx={styles.addressHelper}>09xxxxxxxxx</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default JoinUsClient;
