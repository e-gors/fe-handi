import { Box, Button, CircularProgress, FormHelperText } from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import { useDispatch, useSelector } from "react-redux";
import Http from "../../../utils/Http";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import { updateUser } from "../../../redux/actions/userActions";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function UpdateBackground(props) {
  const { handleClose, onConfirm } = props;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const { profile } = user;

  const [error, setError] = React.useState(null);
  const [background, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (profile[0]) {
      setData(profile[0].background);
    }
  }, []);

  const handleChangeJobDescription = (content, delta, source, editor) => {
    setData(content);

    if (content.length <= 200) {
      setError("Background characters must be at least 200 or more.");
    } else {
      setError(null);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("background", background);

    Http.post("/update/background", formData)
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

  const handleValidate = () => {
    if (!background || background.trim().length === 0) {
      setError("Job Description is required.");
      return;
    }
    if (error) {
      ToastNotification("error", error, options);
      return;
    }
    handleSubmit();
  };
  return (
    <Box>
      <ToastNotificationContainer />
      <Box>
        <form encType="multipart/form-data">
          <Box
            sx={{
              ".ql-editor": {
                height: 200,
              },
            }}
          >
            <ReactQuill
              theme="snow"
              name="job_description"
              value={background}
              onChange={handleChangeJobDescription}
              placeholder="Describe yourself in words so that workers will be able to know your worth."
              style={{ backgroundColor: "white" }}
            />
            {error && <FormHelperText error>{error}</FormHelperText>}
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
        </form>
      </Box>
    </Box>
  );
}

export default UpdateBackground;
