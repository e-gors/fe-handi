import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import ToastNotification from "../../../../components/ToastNotification";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import { options } from "../../../../components/options";
import Http from "../../../../utils/Http";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../redux/actions/userActions";

function UploadBGImage(props) {
  const { handleClose, onConfirm } = props;
  const dispatch = useDispatch();

  const [data, setData] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setData(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("background_img", data);

    Http.post("/upload/bg-image", formData)
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
        ToastNotification("error", err, options);
      });
  };

  return (
    <Box>
      <ToastNotificationContainer />
      <Box>
        <form encType="multipart/form-data">
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography component="li">
                    Recommended dimensions 1440 x 180 px
                  </Typography>
                  <Typography component="li">JPG, PNG</Typography>
                  <Typography component="li">Max Size: 5mb</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 100, sm: 200, md: 100 },
                    mb: 5,
                    backgroundImage: `url(${previewUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: previewUrl && "transparent",
                    border: "2px dashed #BEBEBE",
                  }}
                ></Box>
                <label htmlFor="image-upload">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<AddAPhotoOutlinedIcon />}
                    sx={{ mt: 2 }}
                  >
                    Upload Image
                  </Button>
                </label>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>

      <Box
        align="right"
        sx={{ backgroundColor: "#F4F5FB", p: 2, borderRadius: 3, mt: 5 }}
      >
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ ml: 1 }}
          onClick={() => handleSubmit(data)}
          disabled={data ? false : true}
        >
          {loading ? (
            <CircularProgress size={24} color="primary" thickness={5} />
          ) : (
            "Save"
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default UploadBGImage;
