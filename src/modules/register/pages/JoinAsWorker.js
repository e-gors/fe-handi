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
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/actions/userActions";
import ReeValidate from "ree-validate-18";

const formValuesValidator = new ReeValidate.Validator({
  email: "required|email|regex:^[a-zA-Z0-9]+.[^s@]+@gmail.com$",
  first_name: "required",
  last_name: "required",
  password: "required|min:6",
  number: "required|numeric|regex:^09[0-9]{9}$",
  gender: "required",
  address: "required",
});

const expertiseValidator = new ReeValidate.Validator({
  job_categories: "required",
  selected_jobs: "required",
  selected_skills: "required",
});

const styles = {
  wrapper: {
    mt: 10,
    p: 1,
    minHeight: "50vh",
  },
  main: {
    p: { xs: 2, md: 3 },
    backgroundColor: "#EEEEEE",
    maxWidth: 700,
    margin: "10px auto",
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    borderRadius: 5,
    boxShadow: 10,
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
  gender: { mt: { xs: 0, md: 0.5 } },
  checkbox: { mt: { xs: -1.5, md: -1.2 } },
  checking: { fontSize: { xs: 12, sm: 14, md: 16 } },
  marginTop2: { mt: 2 },
  registerAsSwitch: { fontSize: 12 },
};

const genders = ["Male", "Female", "Others", "Better Not Tell"];

function JoinAsWorker() {
  let role = localStorage.getItem("selectedRole");
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const skills = useSelector((state) => state.skills.skills);

  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [expertise, setExpertise] = React.useState({
    values: {
      job_categories: [],
      selected_jobs: [],
      selected_skills: [],
    },
    errors: expertiseValidator.errors,
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
    errors: formValuesValidator.errors,
  });

  const handdleChangeCheck = (e) => {
    setIsChecked(!isChecked);
  };

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

    const { errors } = expertiseValidator;

    expertiseValidator.validate(name, value).then(() => {
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

    const { errors } = formValuesValidator;

    formValuesValidator.validate(name, value).then(() => {
      setFormValues((prev) => ({
        ...prev,
        errors,
      }));
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    service
      .workerRegister(role, formValues, expertise)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          localStorage.removeItem("selectedRole");
          history.push("/login");
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
    formValuesValidator.validateAll(formValues.values).then((success) => {
      if (success) {
        expertiseValidator.validateAll(expertise.values).then((success) => {
          if (success) {
            handleSubmit();
          } else {
            setFormValues((prev) => ({
              ...prev,
              errors: formValuesValidator.errors,
            }));
          }
        });
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: formValuesValidator.errors,
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

  const filteredJobSubCategories = categories.filter((category) =>
    expertise.values.job_categories.includes(category.name)
  );

  const filteredSkillSubCategories = skills.filter((skill) =>
    expertise.values.job_categories.includes(skill.name)
  );

  return (
    <Box sx={styles.wrapper}>
      <ToastNotificationContainer />
      <Box component="form" sx={styles.main}>
        <Typography sx={styles.registerAs}>Register as {role}</Typography>
        <Grid container spacing={0.5}>
          <Grid item xs={12} md={6}>
            <FormField
              autoFocus
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
              required
              type="email"
              name="email"
              errors={formValues.errors}
              onChange={handleChangeValues}
              value={formValues.values.email}
              size="small"
              margin="normal"
              fullWidth
              label="Working Email"
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
              sx={styles.gender}
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
              categories={categories}
              size="small"
              required
              label="Job Categories"
              multiple
              onChange={handleChangeExpertise}
              value={expertise.values.job_categories}
              name="job_categories"
              errors={expertise.errors}
            />

            <Typography sx={styles.addressHelper}>
              You can select multiple job categories
            </Typography>
          </Grid>
          {expertise.values.job_categories.length !== 0 && (
            <Grid item xs={12} md={12}>
              <SelectDropdown
                subCategories={filteredJobSubCategories}
                size="small"
                required
                label="Your Job Interests"
                multiple
                onChange={handleChangeExpertise}
                value={expertise.values.selected_jobs}
                name="selected_jobs"
                errors={expertise.errors}
              />

              <Typography sx={styles.addressHelper}>
                You can select multiple jobs
              </Typography>
            </Grid>
          )}
          {expertise.values.job_categories.length !== 0 &&
            expertise.values.selected_jobs.length !== 0 && (
              <Grid item xs={12} md={12}>
                <SelectDropdown
                  subCategories={filteredSkillSubCategories}
                  size="small"
                  required
                  label="Your Skills"
                  multiple
                  onChange={handleChangeExpertise}
                  value={expertise.values.selected_skills}
                  name="selected_skills"
                  errors={expertise.errors}
                />
                <Typography sx={styles.addressHelper}>
                  You can select multiple skills
                </Typography>
              </Grid>
            )}
        </Grid>

        <FormGroup sx={styles.marginTop2}>
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
              <Typography sx={styles.checking}>
                Checking this means that you agree to our "
                <span
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpenNewTab("terms-of-services")}
                >
                  Terms and Condition
                </span>
                " and "
                <span
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
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
              Please read the conditions stated above and check the checkbox to
              proceed.
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

        <Box sx={styles.marginTop2}>
          <Typography sx={styles.registerAsSwitch}>
            Register as a Worker?{" "}
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => handleChangeRole("Client")}
            >
              Click here.
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default JoinAsWorker;
