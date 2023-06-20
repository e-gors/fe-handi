/** @format */

import React from "react";
import {
  Box,
  CircularProgress,
  Divider,
  FormHelperText,
  IconButton,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import FormField from "../../../components/FormField";
import ReeValidate from "ree-validate-18";
import Http from "../../../utils/Http";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import { useDispatch } from "react-redux";
import { options } from "../../../components/options";
import ToastNotification from "../../../components/ToastNotification";
import { updateUser } from "../../../redux/actions/userActions";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { useHistory } from "react-router-dom";

const emailValidator = new ReeValidate.Validator({
  email: "required|email|regex:^[a-zA-Z0-9]+.[^s@]+@gmail.com$",
  retype_email: "required|email",
});

const addressValidator = new ReeValidate.Validator({
  address: "required",
  retype_address: "required",
});

const numberValidator = new ReeValidate.Validator({
  contact_number: "required|max:11|numeric|regex:^09[0-9]{9}$",
  retype_contact_number: "required|max:11|numeric|regex:^09[0-9]{9}$",
});

const styles = {
  mainWrapper: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  bigIcon: { mr: 2, color: "green", fontSize: { xs: 30, md: 40 } },
  editIcon: { fontSize: 18, color: "blue" },
  iconButton: { ml: 0.5 },
  left: {
    display: "flex",
    width: { xs: "100%", sm: "50%", md: "50%" },
    alignItems: "center",
    justifyContent: { xs: "center", sm: "left", md: "left" },
    mb: { xs: 2, md: 0 },
  },
  right: { width: { xs: "100%", sm: "50%", md: "50%" } },
  title: { fontWeight: 700, fontSize: { xs: 14, md: 18 } },
  dataWrapper: {
    mt: 1,
  },
  data: { display: "flex", alignItems: "center" },
  center: { textAlign: { xs: "center", sm: "left", md: "left" } },
  divider: {
    mt: 5,
    mb: 5,
    boxShaodw: 3,
  },
};

const checkMatchValue = (firstValue, secondValue) => {
  let match = false;
  if (firstValue === secondValue) {
    match = true;
  } else {
    match = false;
  }
  return match;
};

function MyAccountSettings(props) {
  const { user } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState(null);
  const [phoneError, setPhoneError] = React.useState(null);
  const [addressError, setAddressError] = React.useState(null);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  const [newEmail, setNewEmail] = React.useState({
    values: {
      email: "",
      retype_email: "",
    },
    errors: emailValidator.errors,
  });

  const [newPhone, setNewPhone] = React.useState({
    values: {
      contact_number: "",
      retype_contact_number: "",
    },
    errors: numberValidator.errors,
  });

  const [newAddress, setNewAddress] = React.useState({
    values: {
      address: "",
      retype_address: "",
    },
    errors: addressValidator.errors,
  });

  const handleOpenForm = (type) => {
    setOpen(!open);
    setType(type);
  };

  const handleChangeEMail = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewEmail((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = emailValidator;

    emailValidator.validate(name, value).then(() => {
      setNewEmail((prev) => ({
        ...prev,
        errors,
      }));
    });
  };

  const handleChangeNumber = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewPhone((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = numberValidator;

    numberValidator.validate(name, value).then(() => {
      setNewPhone((prev) => ({
        ...prev,
        errors,
      }));
    });
  };

  const handleChangeAddress = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewAddress((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = addressValidator;

    addressValidator.validate(name, value).then(() => {
      setNewAddress((prev) => ({
        ...prev,
        errors,
      }));
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (type === "email") {
        handleValidate(newEmail.values, emailValidator, "email");
      } else if (type === "phone") {
        handleValidate(newPhone.values, numberValidator, "email");
      } else {
        handleValidate(newAddress.values, addressValidator, "email");
      }
    }
  };

  const handleKeyPressUp = (e, type) => {
    let emails = newEmail.values;
    let phones = newPhone.values;
    let addresses = newAddress.values;

    if (type === "email") {
      let matched = checkMatchValue(emails.email, emails.retype_email);
      if (!matched) {
        setEmailError("Email do not match!");
      } else {
        setEmailError(null);
      }
    } else if (type === "phone") {
      let matched = checkMatchValue(
        phones.contact_number,
        phones.retype_contact_number
      );

      if (!matched) {
        setPhoneError("Contact Number do not match!");
      } else {
        setPhoneError(null);
      }
    } else {
      let matched = checkMatchValue(
        addresses.address,
        addresses.retype_address
      );

      if (!matched) {
        setAddressError("Address do not match!");
      } else {
        setAddressError(null);
      }
    }
  };

  const handleSubmitEmail = () => {
    setLoading(true);
    Http.post("/account/update/email", newEmail.values)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          setOpen(false);
          setType("");
          setNewEmail({
            values: {
              email: "",
            },
          });
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

  const handleSubmitNumber = () => {
    setLoading(true);
    Http.post("/account/update/phone", newPhone.values)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          setOpen(false);
          setType("");
          setNewPhone({
            values: {
              contact_number: "",
            },
          });
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

  const handleSubmitAddress = () => {
    setLoading(true);
    Http.post("/update/address", newAddress.values)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          setOpen(false);
          setType("");
          setNewAddress({
            values: {
              address: "",
            },
          });
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

  const handleRemoveAccount = () => {
    Http.delete("/account/terminate")
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          localStorage.clear();
          setTimeout(() => history.push("/login", 300));
        } else {
          ToastNotification("error", res.data.message, options);
        }
      })
      .catch((err) => {
        ToastNotification("error", err.message, options);
      });
  };

  const handleValidate = (data, validator, type) => {
    validator.validateAll(data).then((success) => {
      if (success) {
        if (type === "email") {
          let matched = checkMatchValue(data.email, data.retype_email);
          if (matched) {
            handleSubmitEmail();
          } else {
            setEmailError("Email do not match");
          }
        } else if (type === "phone") {
          let matched = checkMatchValue(
            data.contact_number,
            data.retype_contact_number
          );
          if (matched) {
            handleSubmitNumber();
          }
        } else {
          let matched = checkMatchValue(data.address, data.retype_address);
          if (matched) {
            handleSubmitAddress();
          }
        }
      } else {
        if (type === "email") {
          setNewEmail((prev) => ({
            ...prev,
            errors: emailValidator.errors,
          }));
        } else if (type === "phone") {
          setNewPhone((prev) => ({
            ...prev,
            errors: numberValidator.errors,
          }));
        } else {
          setNewAddress((prev) => ({
            ...prev,
            errors: addressValidator.errors,
          }));
        }
      }
    });
  };

  return (
    <Box>
      <ToastNotificationContainer />
      <ConfirmationModal
        open={openConfirm}
        title="Delete you account?"
        message="This will delete your account forever."
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleRemoveAccount}
      />
      <Box sx={styles.mainWrapper}>
        <Box sx={styles.left}>
          <AccountCircleOutlinedIcon sx={styles.bigIcon} />
          <Typography sx={styles.title}>BASIC INFO</Typography>
        </Box>

        <Box sx={styles.right}>
          <Box sx={styles.dataWrapper}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Email</Typography>
              <IconButton
                sx={styles.iconButton}
                onClick={() => handleOpenForm("email")}
              >
                <EditOutlinedIcon sx={styles.editIcon} />
              </IconButton>
            </Box>
            <Box sx={styles.data}>
              <Typography>{user?.email}</Typography>
            </Box>

            {open && type === "email" && (
              <Box>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ fontSize: 12 }}>New Email *</Typography>
                  <FormField
                    name="email"
                    label="New Email"
                    size="small"
                    fullWidth
                    onKeyPress={handleKeyPress}
                    onKeyUp={(e) => handleKeyPressUp(e, "email")}
                    value={newEmail.values.email}
                    onChange={handleChangeEMail}
                    errors={newEmail.errors}
                    InputProps={{
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        coor: "black",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ fontSize: 12 }}>Retype Email *</Typography>
                  <FormField
                    name="retype_email"
                    label="Retype New Email"
                    size="small"
                    fullWidth
                    onKeyPress={handleKeyPress}
                    onKeyUp={(e) => handleKeyPressUp(e, "email")}
                    value={newEmail.values.retype_email}
                    onChange={handleChangeEMail}
                    errors={newEmail.errors}
                    InputProps={{
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        coor: "black",
                      },
                    }}
                  />
                  {emailError && (
                    <FormHelperText error>{emailError}</FormHelperText>
                  )}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => handleOpenForm("email")}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ ml: 1 }}
                    onClick={() =>
                      handleValidate(newEmail.values, emailValidator, "email")
                    }
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Submit"}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
          <Box sx={styles.dataWrapper}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Phone</Typography>
              <IconButton
                sx={styles.iconButton}
                onClick={() => handleOpenForm("phone")}
              >
                <EditOutlinedIcon sx={styles.editIcon} />
              </IconButton>
            </Box>
            <Box sx={styles.data}>
              {user.contact_number && (
                <Typography>{user?.contact_number}</Typography>
              )}
              {!user.contact_number && <Typography>Not Set</Typography>}
            </Box>
            {open && type === "phone" && (
              <Box>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ fontSize: 12 }}>
                    New phone number *
                  </Typography>
                  <FormField
                    name="contact_number"
                    label="Phone Number"
                    size="small"
                    fullWidth
                    onKeyPress={handleKeyPress}
                    onKeyUp={(e) => handleKeyPressUp(e, "phone")}
                    value={newPhone.values.contact_number}
                    onChange={handleChangeNumber}
                    errors={newPhone.errors}
                    InputProps={{
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        coor: "black",
                      },
                    }}
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      maxLength: 11,
                    }}
                  />
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ fontSize: 12 }}>
                    New phone number *
                  </Typography>
                  <FormField
                    name="retype_contact_number"
                    label="Retype Phone Number"
                    size="small"
                    fullWidth
                    onKeyPress={handleKeyPress}
                    onKeyUp={(e) => handleKeyPressUp(e, "phone")}
                    value={newPhone.values.retype_contact_number}
                    onChange={handleChangeNumber}
                    errors={newPhone.errors}
                    InputProps={{
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        coor: "black",
                      },
                    }}
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      maxLength: 11,
                    }}
                  />
                  {phoneError && (
                    <FormHelperText error>{phoneError}</FormHelperText>
                  )}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => handleOpenForm("phone")}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ ml: 1 }}
                    onClick={() =>
                      handleValidate(newPhone.values, numberValidator, "phone")
                    }
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Submit"}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
          <Box sx={styles.dataWrapper}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Location</Typography>
              <IconButton
                sx={styles.iconButton}
                onClick={() => handleOpenForm("address")}
              >
                <EditOutlinedIcon sx={styles.editIcon} />
              </IconButton>
            </Box>
            <Box sx={styles.data}>
              {user.profile[0].address && (
                <Typography>{user.profile[0].address}</Typography>
              )}
              {!user.profile[0].address && <Typography>Not Set</Typography>}
            </Box>
            {open && type === "address" && (
              <Box>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ fontSize: 12 }}>New Address *</Typography>
                  <FormField
                    name="address"
                    label="New Address"
                    size="small"
                    fullWidth
                    onKeyPress={handleKeyPress}
                    onKeyUp={(e) => handleKeyPressUp(e, "address")}
                    value={newAddress.values.address}
                    onChange={handleChangeAddress}
                    errors={newAddress.errors}
                    InputProps={{
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        coor: "black",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ fontSize: 12 }}>
                    Retype New Address *
                  </Typography>
                  <FormField
                    name="retype_address"
                    label="Retype New Address"
                    size="small"
                    fullWidth
                    onKeyPress={handleKeyPress}
                    onKeyUp={(e) => handleKeyPressUp(e, "address")}
                    value={newAddress.values.retype_address}
                    onChange={handleChangeAddress}
                    errors={newAddress.errors}
                    InputProps={{
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        coor: "black",
                      },
                    }}
                  />
                  {addressError && (
                    <FormHelperText error>{addressError}</FormHelperText>
                  )}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => handleOpenForm("address")}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ ml: 1 }}
                    onClick={() =>
                      handleValidate(
                        newAddress.values,
                        addressValidator,
                        "address"
                      )
                    }
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Submit"}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
      <Box sx={styles.mainWrapper}>
        <Box sx={styles.left}>
          <BuildCircleOutlinedIcon sx={styles.bigIcon} />
          <Typography sx={styles.title}> SYSTEM USAGE</Typography>
        </Box>

        <Box sx={styles.right}>
          <Box sx={styles.center}>
            <Typography>
              {user.role === "Client" ? "Hire only" : "Work only"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
      <Box sx={styles.mainWrapper}>
        <Box sx={styles.left}>
          <DeleteForeverOutlinedIcon sx={styles.bigIcon} />
          <Typography sx={styles.title}>DELETE ACCOUNT</Typography>
        </Box>

        <Box sx={styles.right}>
          <Box sx={styles.center}>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => setOpenConfirm(true)}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
  );
}

export default MyAccountSettings;
