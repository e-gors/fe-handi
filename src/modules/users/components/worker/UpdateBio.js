import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";
import FormField from "../../../../components/FormField";
import { useDispatch, useSelector } from "react-redux";
import Http from "../../../../utils/Http";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import { updateUser } from "../../../../redux/actions/userActions";

function UpdateBio(props) {
  const { handleClose, onConfirm } = props;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const { profile } = user;

  const [background, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (profile[0]) {
      setData(profile[0].background);
    }
  }, []);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("background", background);

    Http.post("update/background", formData)
      .then((res) => {
        if (res.data.code === 200) {
          setLoading(false);
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
          onConfirm();
        } else {
          ToastNotification("error", res.data.message, options);
        }
      })
      .catch((err) => {
        setLoading(false);
        ToastNotification("error", err.message, options);
      });
  };
  return (
    <Box>
      <ToastNotificationContainer />
      <Box>
        <form encType="multipart/form-data">
          <FormField
            fullWidth
            multiline
            label="Update Bio"
            name="background"
            onChange={handleChange}
            value={background}
          />
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
              onClick={handleSubmit}
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
        </form>
      </Box>
    </Box>
  );
}

export default UpdateBio;
