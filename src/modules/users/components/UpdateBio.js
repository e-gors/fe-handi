import {
  Box,
  Button,
  CircularProgress,
  FormHelperText,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import { useDispatch, useSelector } from "react-redux";
import Http from "../../../utils/Http";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import { updateUser } from "../../../redux/actions/userActions";
import Reevalidate from "ree-validate-18";

const validator = new Reevalidate.Validator({
  about: "required|min:100|max:150",
});

function UpdateBio(props) {
  const { handleClose, onConfirm } = props;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const { profile } = user;

  const header = profile[0].about;

  const [about, setData] = React.useState({
    values: {
      about: "",
    },
    errors: validator.errors,
  });
  const [charCount, setCharCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (header) {
      setData((prev) => ({
        ...prev,
        values: {
          about: header,
        },
      }));
      setCharCount(header.length);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = validator;

    validator.validate(name, value).then((success) => {
      if (!success) {
        setData((prev) => ({
          ...prev,
          errors,
        }));
      }
    });
  };

  const handleKeyPress = (e) => {
    const value = e.target.value;
    setCharCount(value.length);
  };

  const handleSubmit = () => {
    setLoading(true);
    Http.post("/update/about", about.values)
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
    validator.validateAll(about.values).then((success) => {
      if (success) {
        handleSubmit();
      } else {
        setData((prev) => ({
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
        <Box>
          <FormField
            fullWidth
            multiline
            label="Update Bio"
            name="about"
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            value={about.values.about}
            errors={about.errors}
          />
          <FormHelperText
            sx={{
              color: charCount > 100 ? "green" : "red",
              textAlign: "right",
            }}
          >
            {charCount}/150
          </FormHelperText>
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
              <CircularProgress
                size={24}
                sx={{ color: "white" }}
                thickness={5}
              />
            ) : (
              "Save"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default UpdateBio;
