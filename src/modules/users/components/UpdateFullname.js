import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import Reevalidate from "ree-validate-18";
import Http from "../../../utils/Http";
import { useDispatch } from "react-redux";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import { updateUser } from "../../../redux/actions/userActions";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";

const validator = new Reevalidate.Validator({
  first_name: "required",
  last_name: "required",
});

function UpdateFullname(props) {
  const { full_name, handleClose, onConfirm } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const [fullname, setFullname] = React.useState({
    values: {
      first_name: "",
      last_name: "",
    },
    errors: validator.errors,
  });

  React.useEffect(() => {
    if (full_name) {
      setFullname((prev) => ({
        ...prev,
        values: {
          ...full_name,
        },
      }));
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFullname((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = validator;

    validator.validate(name, value).then((success) => {
      if (!success) {
        setFullname((prev) => ({
          ...prev,
          errors,
        }));
      }
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    Http.post("/update/fullname", fullname.values)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
          onConfirm();
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
    validator.validateAll(fullname.values).then((success) => {
      if (success) {
        handleSubmit();
      } else {
        setFullname((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  return (
    <Box>
      <ToastNotificationContainer />
      <Box>
        <Typography>First Name *</Typography>
        <FormField
          fullWidth
          label="First Name"
          name="first_name"
          value={fullname.values.first_name}
          errors={fullname.errors}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Typography>Last Name *</Typography>
        <FormField
          fullWidth
          label="Last Name"
          name="last_name"
          value={fullname.values.last_name}
          errors={fullname.errors}
          onChange={handleChange}
        />
      </Box>

      <Box
        align="right"
        sx={{ backgroundColor: "#F4F5FB", p: 2, borderRadius: 3, mt: 5 }}
      >
        <Button size="small" variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ ml: 1 }}
          onClick={handleValidate}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "white" }} thickness={5} />
          ) : (
            "Save"
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default UpdateFullname;
