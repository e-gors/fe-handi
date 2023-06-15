import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React from "react";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import FormField from "../../../components/FormField";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ReeValidate from "ree-validate-18";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Http from "../../../utils/Http";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { useHistory } from "react-router-dom";

const passwordValidator = new ReeValidate.Validator({
  password: "required|min:5|max:20",
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

function Security() {
  const history = useHistory();

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState({
    values: {
      password: "",
    },
    errors: passwordValidator.errors,
  });

  const handleOpenForm = () => {
    setOpen(!open);
  };

  const handleChangePassword = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewPassword((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = passwordValidator;

    passwordValidator.validate(name, value).then(() => {
      setNewPassword((prev) => ({
        ...prev,
        errors,
      }));
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleValidate();
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    Http.post("/account/update/password", newPassword.values)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          setOpenConfirm(true);
        } else {
          ToastNotification("success", res.data.message, options);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        ToastNotification("success", err.message, options);
      });
  };

  const handleValidate = () => {
    passwordValidator.validateAll(newPassword.values).then((success) => {
      if (success) {
        handleSubmit();
      } else {
        setNewPassword((prev) => ({
          ...prev,
          errors: passwordValidator.errors,
        }));
      }
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Box>
      <ToastNotificationContainer />
      <ConfirmationModal
        open={openConfirm}
        title="Continue logged in or sign out?"
        message="You will need to login again with your new password if you proceed!"
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleLogout}
      />
      <Box sx={styles.mainWrapper}>
        <Box sx={styles.left}>
          <LockResetRoundedIcon sx={styles.bigIcon} />
          <Typography sx={styles.title}>PASSWORD</Typography>
        </Box>

        <Box sx={styles.right}>
          <Box sx={styles.dataWrapper}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>change</Typography>
              <IconButton sx={styles.iconButton} onClick={handleOpenForm}>
                <EditOutlinedIcon sx={styles.editIcon} />
              </IconButton>
            </Box>

            {open && (
              <Box>
                <Box sx={{ mb: 1 }}>
                  <Typography sx={{ fontSize: 12 }}>New Password *</Typography>
                  <FormField
                    required
                    name="password"
                    errors={newPassword.errors}
                    value={newPassword.values.password}
                    onChange={handleChangePassword}
                    onKeyPress={handleKeyPress}
                    size="small"
                    margin="normal"
                    fullWidth
                    label="New Password"
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
                </Box>
                <Box sx={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={handleOpenForm}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ ml: 1 }}
                    onClick={handleValidate}
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
    </Box>
  );
}

export default Security;
