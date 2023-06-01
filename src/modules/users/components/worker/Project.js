import { Box, CircularProgress, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import Http from "../../../../utils/Http";
import { useDispatch, useSelector } from "react-redux";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import {
  setProjects,
  updateProjects,
} from "../../../../redux/actions/projectActions";
import DeleteIcon from "@mui/icons-material/Delete";

const styles = {
  addImagesWrapper: {
    minWidth: 210,
    height: 280,
    border: "2px dashed #BEBEBE",
    p: 2,
    borderRadius: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    m: 1,

    "&:hover": {
      border: "2px dashed blue",

      ".add-btn": {
        color: "blue",
      },
    },
  },
  loadingWrapper: {
    width: 200,
    height: 280,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    color: "red",
    zIndex: 1,
    display: "none",
  },
};

const MAX_IMAGES = 10;

function Project() {
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects.projects);

  const [loading, setLoading] = React.useState(false);
  const [loadingOnDelete, setLoadingOnDelete] = React.useState(false);
  const [images, setImages] = React.useState([]);

  const handleChangeMultipleImages = (e) => {
    const files = e.target.files;
    const newImages = [];
    if (files && files.length > 0) {
      const totalImages = images.length + files.length;
      const limit =
        totalImages > MAX_IMAGES ? MAX_IMAGES - images.length : files.length;
      for (let i = 0; i < limit; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          const imageUrl = reader.result;
          const fileImage = new File([files[i]], files[i].name, {
            type: "image/jpeg",
          });
          newImages.push({
            file: fileImage,
            url: imageUrl,
          }); // add URL to image object
          if (newImages.length === limit) {
            setImages([...images, ...newImages]);
            handleUploadImages(newImages);
          }
        };
      }
      if (totalImages > MAX_IMAGES) {
        ToastNotification(
          "error",
          `You can only upload ${MAX_IMAGES} images at a time!`,
          options
        );
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    const totalImages = images.length + newFiles.length;
    if (totalImages > MAX_IMAGES) {
      ToastNotification(
        "error",
        `You can only upload ${MAX_IMAGES} images.`,
        options
      );
      return;
    }
    setImages((prevFiles) => [...prevFiles, ...newFiles]);
    handleUploadImages(newFiles);
  };

  const handleUploadImages = (images) => {
    setLoading(true);
    const formData = new FormData();

    images.forEach((image) => {
      formData.append("images[]", image.file);
    });

    Http.post("new/projects", formData)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(setProjects(res.data.projects));
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

  const handleRemoveImage = (id) => {
    setLoadingOnDelete(true);
    Http.delete(`/projects/${id}`)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          dispatch(updateProjects(res.data.projects));
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setLoadingOnDelete(false);
      })
      .catch((err) => {
        setLoadingOnDelete(false);
        ToastNotification("error", err.message, options);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "noWrap", sm: "noWrap", md: "wrap" },
        overflowX: "auto",
      }}
    >
      <ToastNotificationContainer />
      <Box
        component="form"
        encType="multipart/form-data"
        sx={styles.addImagesWrapper}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          id="multiple-images"
          type="file"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          onChange={handleChangeMultipleImages}
        />
        <Box
          component="label"
          htmlFor="multiple-images"
          sx={{ cursor: "pointer", width: "100%", height: "100%" }}
        >
          <Box sx={styles.addButtonWrapper}>
            <AddIcon className="add-btn" />
          </Box>
        </Box>
      </Box>

      {loading && (
        <Box sx={styles.loadingWrapper}>
          <CircularProgress size={36} />
        </Box>
      )}

      {!loading &&
        projects &&
        projects.length > 0 &&
        projects.map((image, i) => (
          <Box
            key={i}
            sx={{
              minWidth: 210,
              height: 280,
              background: `url(${image.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 3,
              boxShadow: 3,
              m: 1,
              position: "relative",

              "&::after": {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                opacity: 0,
                transition: "opacity 0.5s",
                borderRadius: 3,
              },

              "&:hover::after": {
                opacity: 1,
              },

              "&:hover .remove-btn": {
                display: "block",
              },
            }}
          >
            <IconButton
              className="remove-btn"
              sx={styles.deleteButton}
              onClick={() => handleRemoveImage(image.id)}
            >
              {loadingOnDelete ? (
                <CircularProgress size={24} />
              ) : (
                <DeleteIcon
                  color="error"
                  className="remove-btn"
                  sx={styles.deleteButton}
                />
              )}
            </IconButton>
          </Box>
        ))}
    </Box>
  );
}

export default Project;
