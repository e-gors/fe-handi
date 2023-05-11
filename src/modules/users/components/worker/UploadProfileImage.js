import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import ToastNotification from "../../../../components/ToastNotification";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import { options } from "../../../../components/options";
import Http from "../../../../utils/Http";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../redux/actions/userActions";
import Cropper from "react-easy-crop";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import CropImage from "../../../../components/CropImage";

function UploadProfileImage(props) {
  const { handleClose, onConfirm } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [crop, setCrop] = React.useState({
    x: 0,
    y: 0,
  });
  const [zoom, setZoom] = React.useState(1);
  const [croppedArea, setCroppedArea] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setImage(event.target.result);
      };
    }
    return;
  };

  const handleCropChange = (crop, zoom) => {
    setCrop(crop);
    setZoom(zoom);
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const croppedImg = await CropImage(image, croppedArea);

      const formData = new FormData();
      formData.append("profile_img", croppedImg);

      const res = await Http.post("/upload/profile-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.code === 200) {
        setImage(null);
        dispatch(updateUser(res.data.user));
        ToastNotification("success", res.data.message, options);
        onConfirm();
      } else {
        ToastNotification("error", res.data.message, options);
      }
    } catch (error) {
      if (error.response.status === 413) {
        ToastNotification(
          "error",
          "Image is too large. Please choose another image!",
          options
        );
      } else {
        ToastNotification("error", error.message, options);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <ToastNotificationContainer />
      <form encType="multipart/form-data">
        <input
          accept="image/*"
          id="image-upload"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          required
        />
      </form>

      {!image && (
        <Box>
          <Box
            sx={{ width: { xs: "100%", sm: "50%", md: "50%" }, m: "0 auto" }}
          >
            <Box sx={{ fontSize: { xs: 12, md: 14 } }}>
              <Typography component="li" sx={{ fontSize: "inherit" }}>
                Recommended dimensions 400 x 400 px
              </Typography>
              <Typography component="li" sx={{ fontSize: "inherit" }}>
                JPG, JPEG, PNG
              </Typography>
              <Typography component="li" sx={{ fontSize: "inherit" }}>
                Max size: 5mb
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 4 }} align="center">
            <label htmlFor="image-upload">
              <Button
                variant="outlined"
                color="primary"
                component="span"
                startIcon={<UploadOutlinedIcon />}
                sx={{ mt: 2 }}
              >
                choose an image
              </Button>
            </label>
          </Box>
        </Box>
      )}

      {image && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: 260,
            p: 2,

            img: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            },
          }}
        >
          <Cropper
            image={image}
            crop={crop}
            aspect={1}
            onCropChange={handleCropChange}
            cropShape="rect"
            showGrid
            zoomWithScroll
            restrictPosition
            zoom={zoom}
            onZoomChange={setZoom}
            dragCrop
            dragImage={false}
            pinchToZoom={false}
            allowCropOutOfBounds={false}
            onCropComplete={onCropComplete}
            interaction={{
              dragCrop: true,
              pinchToZoom: false,
              dragImage: false,
            }}
          />
        </Box>
      )}

      {image && (
        <Box sx={{ mt: 1 }} align="center">
          <label htmlFor="image-upload">
            <Button
              variant="outlined"
              color="primary"
              component="span"
              startIcon={<UploadOutlinedIcon />}
              sx={{ mt: 2 }}
            >
              choose another image
            </Button>
          </label>
        </Box>
      )}

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
            <CircularProgress size={24} sx={{ color: "white" }} thickness={5} />
          ) : (
            "Save"
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default UploadProfileImage;
