import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormField from "../../../../components/FormField";
import SelectDropdown from "../../../../components/SelectDropdown";
import ReeValidate from "ree-validate-18";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../redux/actions/userActions";
import { options } from "../../../../components/options";
import ToastNotification from "../../../../components/ToastNotification";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import { isAuth } from "../../../../utils/helpers";
import ApplyStepper from "./ApplyStepper";
import Http from "../../../../utils/Http";
import * as service from "../../../register/service";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  overflow: "auto",

  "::-webkit-scrollbar": {
    display: "none",
  },
};

const styles = {
  applyNow: { fontWeight: "bold", fontSize: 24 },
  exitIconWrapper: { p: 2, position: "relative" },
  exitIconButton: { position: "absolute", top: 2, right: 2 },
  jobTitle: {
    fontWeight: "bold",
    fontSize: { xs: 24, sm: 28, md: 32 },
  },
  main: {
    p: { xs: 2, md: 3 },
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
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
    display: "flex",
    justifyContent: "space-evenly",

    ".button": {
      width: "90%",
      ml: 4,
      mr: 4,
    },
  },

  gender: { mt: { xs: 0, md: 0.5 } },
  checkbox: { mt: { xs: -1.5, md: -1.2 } },
  checking: { fontSize: { xs: 12, sm: 14, md: 16 } },
  marginTop2: { mt: 2 },
  registerAsSwitch: { fontSize: 12 },
};

const genders = ["Male", "Female", "Others", "Better Not Tell"];

function ApplyModal(props) {
  const { open, handleClose, selectedItem, onHandleSubmit } = props;

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const skills = useSelector((state) => state.skills.skills);

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
      .registerOnApply(formValues, expertise)
      .then((res) => {
        if (res.data.code === 200) {
          Http.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.access_token}`;
          const user = res.data.user;
          localStorage.setItem("accessToken", res.data.access_token);
          localStorage.setItem("tokenExpiration", res.data.expires_in);
          dispatch(setUser(user));
          ToastNotification("success", res.data.message, options);
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

  const filteredJobSubCategories = categories.filter((category) =>
    expertise.values.job_categories.includes(category.name)
  );

  const filteredSkillSubCategories = skills.filter((skill) =>
    expertise.values.job_categories.includes(skill.name)
  );

  return (
    <Box>
      <ToastNotificationContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Box sx={styles.exitIconWrapper}>
              <IconButton onClick={handleClose} sx={styles.exitIconButton}>
                <CancelIcon color="error" />
              </IconButton>
            </Box>

            {!isAuth() && (
              <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={7}>
                    <Box>
                      <Typography sx={styles.applyNow}>Apply Now</Typography>
                      <Typography>
                        To apply for the job, you need to have an account before
                        you can proceed. Your account credentials will be kept
                        confidential 🔒
                      </Typography>
                      <Box component="form" sx={styles.main}>
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
                            <Typography sx={styles.addressHelper}>
                              09xxxxxxxxx
                            </Typography>
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
                              Purok / Sitio / Subdivision, Barangay,
                              Municipality, Provice
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
                                  onClick={() =>
                                    handleOpenNewTab("terms-of-services")
                                  }
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
                                  onClick={() =>
                                    handleOpenNewTab("privacy-policy")
                                  }
                                >
                                  Privacy Policy
                                </span>
                                ".
                              </Typography>
                            }
                          />
                        </FormGroup>
                      </Box>
                      <Box sx={styles.buttonWrapper}>
                        <Button
                          fullWidth
                          variant="outlined"
                          color="primary"
                          size="small"
                          sx={styles.cancel}
                          className="button"
                          onClick={handleClose}
                        >
                          Cancel
                        </Button>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          size="small"
                          sx={styles.submit}
                          className="button"
                          disabled={!isChecked || loading}
                          onClick={handleValidate}
                        >
                          {loading ? (
                            <CircularProgress
                              size={24}
                              sx={{ color: "white" }}
                            />
                          ) : (
                            "Submit"
                          )}
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={0} md={5}>
                    <Box
                      sx={{
                        backgroundColor: "#4163DD",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#F4F5FB",
                          width: "90%",
                          borderRadius: 3,
                          boxShadow: 5,
                          p: 2,
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                          {selectedItem.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: 14,
                            color: "#BEBEBE",
                          }}
                        >
                          {selectedItem.position}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mt: 1,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: "white",
                              p: "5px 15px",
                              borderRadius: 3,
                              boxShadow: 5,
                            }}
                          >
                            <Avatar
                              alt={selectedItem.client.fullname}
                              src={
                                selectedItem &&
                                selectedItem.client &&
                                selectedItem.client.profile[0].profile_url
                              }
                            />
                            <Typography sx={{ ml: 1 }}>
                              {selectedItem.client.fullname}
                            </Typography>
                          </Box>
                          <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                            {selectedItem.days}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
            {isAuth() && (
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    backgroundColor: "#F4F5FB",
                    width: "90%",
                    m: "10px auto",
                    borderRadius: 3,
                    boxShadow: 5,
                    p: 2,
                  }}
                >
                  <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                    {selectedItem.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                      color: "#BEBEBE",
                    }}
                  >
                    {selectedItem.position}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "white",
                        p: "5px 15px",
                        borderRadius: 3,
                        boxShadow: 5,
                      }}
                    >
                      <Avatar
                        alt={selectedItem.client.fullname}
                        src={
                          selectedItem &&
                          selectedItem.client &&
                          selectedItem.client.profile[0].profile_url
                        }
                      />
                      <Typography sx={{ ml: 1 }}>
                        {selectedItem.client.fullname}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                      {selectedItem.days}
                    </Typography>
                  </Box>
                </Box>
                <ApplyStepper
                  handleCancel={handleClose}
                  selectedItem={selectedItem}
                  onHandleSubmit={onHandleSubmit}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default ApplyModal;
