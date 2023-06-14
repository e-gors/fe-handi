import {
  Badge,
  Box,
  Button,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import FormField from "../../../../components/FormField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReeValidate from "ree-validate-18";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import ArticleIcon from "@mui/icons-material/Article";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const validator = new ReeValidate.Validator({
  title: "required",
});

const styles = {
  wrapper: {
    mt: 2,
  },
  titleWrapper: {
    mt: 2,
    mb: 2,

    ".ql-editor": {
      height: 200,
    },
  },
  jobDesHelperText: { mt: 1, mb: 1 },
  addImagesWrapper: {
    width: "100%",
    border: "2px dashed #BEBEBE",
    p: 2,
    cursor: "pointer",
    borderRadius: 3,

    "&:hover": {
      border: "2px dashed blue",
    },
    backgroundColor: "white",
  },
  addImageLeftWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: { xs: "wrap", md: "noWrap" },
  },
  dragDropText: {
    fontSize: 12,
    textAlign: "center",
  },
  browse: {
    ml: { xs: 0, sm: 1, md: 1 },
    width: { xs: "100%", sm: "auto", md: "auto" },
  },
  addImageRightWrapper: { fontSize: 12, color: "blue" },
  attachments: { fontSize: "inherit", mb: 1, color: "inherit" },
  addFiles: { fontSize: "inherit", color: "inherit" },
  addImageRightBottomWrapper: { display: "flex", alignItems: "center", mt: 1 },
  articleIcon: { fontSize: 24, color: "inherit" },
  fileTypes: { m: 0.5, fontSize: "inherit", color: "inherit" },
  selectedImagesWrapper: {
    display: "flex",
    overflowX: "scroll",
    p: 2,

    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  removeIcon: {
    color: "red",
    display: "none",
  },
  imageWrapper: {
    ml: 2,
    "&:hover": {
      ".remove": {
        display: "block",
      },
    },
  },
  image: {
    width: 200,
    height: 120,
    border: "1px solid #BEBEBE",
    borderRadius: 5,

    "&:hover": {
      border: "1px solid black",
      boxShadow: 10,
    },
  },
  addNewImageWrapper: {
    ml: 2,
    width: 200,
    minWidth: 200,
    height: 120,
    border: "2px dashed #BEBEBE",
    p: 2,
    cursor: "pointer",
    borderRadius: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:hover": {
      border: "2px dashed blue",

      ".add-photo": {
        color: "blue",
      },
    },
    backgroundColor: "#EEEEEE",
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    mt: 5,
  },
  back: {
    transition: "0.5s",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  backArrow: {
    mr: 1,
  },
  cancel: {
    mr: 2,
  },
  next: {
    maxWidth: 200,
    background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
    margin: "0 auto",
    transition: "1s",

    "&:hover": {
      background: `linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)`,
    },
  },
  rightButtons: { display: "flex", justifyContent: "space-between" },
};

const MAX_IMAGES = 10;

function BasicInfo(props) {
  const {
    activeStep,
    steps,
    handleCancel,
    handleNext,
    handleBack,
    descriptions,
    setDescriptions,
    titles,
    setTitles,
    imagesContainer,
    setImagesContainer,
  } = props;

  const imageContainerRef = useRef(null);

  const [jobDescription, setJobDescription] = React.useState("");
  const [error, setError] = React.useState();
  const [title, setTitle] = React.useState({
    values: {
      title: "",
    },
    errors: validator.errors,
  });
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollLeft =
        imageContainerRef.current.scrollWidth;
    }
  }, [images]);

  React.useEffect(() => {
    if (titles) {
      setTitle({
        values: {
          title: titles,
        },
      });
    }
    if (descriptions) {
      setJobDescription(descriptions);
    }

    if (imagesContainer && imagesContainer.length > 0) {
      setImages(imagesContainer);
    }
  }, []);

  const handleChangeJobDescription = (content, delta, source, editor) => {
    setJobDescription(content);

    if (content.length <= 200) {
      setError("Job Description characters must be at least 200 or more.");
    } else {
      setError(null);
    }
  };

  const handleChangeTitle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTitle((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = validator;

    validator.validate(name, value).then(() => {
      setTitle((prev) => ({
        ...prev,
        errors,
      }));
    });
  };

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
          }
        };
      }
      if (totalImages > MAX_IMAGES) {
        ToastNotification(
          "error",
          `You can only upload ${MAX_IMAGES} images.`,
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
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleValidate = () => {
    validator.validateAll(title.values).then((success) => {
      if (success) {
        if (!jobDescription || jobDescription.trim().length === 0) {
          setError("Job Description is required.");
          return;
        }
        if (error) {
          ToastNotification("error", error, options);
          return;
        }
        setTitles(title.values.title);
        setDescriptions(jobDescription);
        if (images && images.length > 0) {
          setImagesContainer(images);
        }
        handleNext();
      } else {
        setTitle((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  return (
    <Box sx={styles.wrapper}>
      <ToastNotificationContainer />
      <Box>
        <Box>
          <Typography>Job Title *</Typography>
          <FormField
            fullWidth
            size="small"
            name="title"
            label="Job Title"
            margin="dense"
            value={title.values.title}
            errors={title.errors}
            onChange={handleChangeTitle}
            required
            InputProps={{
              style: {
                backgroundColor: "white",
              },
            }}
          />
        </Box>
        <Box sx={styles.titleWrapper}>
          <Typography>Job Description *</Typography>
          <FormHelperText sx={styles.jobDesHelperText}>
            Use job requirements, desired experience, expectations, a company
            bio or details about yourself.
          </FormHelperText>
          <ReactQuill
            theme="snow"
            name="job_description"
            value={jobDescription}
            onChange={handleChangeJobDescription}
            placeholder="Describe your job. The more details the better."
            style={{ backgroundColor: "white" }}
          />
          {error && <FormHelperText error>{error}</FormHelperText>}
        </Box>
      </Box>

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
          sx={{ cursor: "pointer" }}
        >
          {images && images.length === 0 && (
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item xs={12} sm={6} md={6}>
                <Box align="center">
                  <ContentCopyIcon sx={{ fontSize: 36, color: "blue" }} />
                  <Box sx={styles.addImageLeftWrapper} align="center">
                    <Typography sx={styles.dragDropText}>
                      Drag and Drop file or
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      sx={styles.browse}
                      component="label"
                      htmlFor="multiple-images"
                    >
                      Browse
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box sx={styles.addImageRightWrapper}>
                  <Typography sx={styles.attachments}>
                    Attachments (optional)
                  </Typography>
                  <Typography sx={styles.addFiles}>
                    Add files to help describe what needs to be done and for the
                    workers' visual references. You can add{" "}
                    <span>up to 10 photos.</span>
                  </Typography>

                  <Box sx={styles.addImageRightBottomWrapper}>
                    <ArticleIcon sx={styles.articleIcon} />
                    <Box>
                      <Typography sx={styles.addFiles}>
                        Max. size: 2mb each
                      </Typography>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={styles.fileTypes}>JPEG</Typography>
                        <Typography sx={styles.fileTypes}>PNG</Typography>
                        <Typography sx={styles.fileTypes}>JPG</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>

        <Box sx={styles.selectedImagesWrapper} ref={imageContainerRef}>
          {images &&
            images.length > 0 &&
            images.map((image, i) => (
              <Badge
                onClick={() => removeImage(i)}
                key={i}
                badgeContent={
                  <RemoveCircleIcon
                    className="remove"
                    sx={styles.removeIcon}
                    onClick={() => removeImage(i)}
                  />
                }
                sx={styles.imageWrapper}
              >
                <img
                  style={styles.image}
                  key={i}
                  src={image.url}
                  alt={image.name}
                />
              </Badge>
            ))}
          {images && images.length > 0 && (
            <Box sx={styles.addNewImageWrapper}>
              <Box component="label" htmlFor="multiple-images">
                <AddToPhotosIcon className="add-photo" sx={{ fontSize: 50 }} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <Box sx={styles.buttonWrapper}>
        <Button
          color="primary"
          onClick={handleBack}
          size="small"
          sx={styles.back}
          disabled={activeStep === 0 ? true : false}
          type="text"
        >
          <ArrowBackIcon sx={styles.backArrow} />
          <span>Back</span>
        </Button>
        <Box sx={styles.rightButtons}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCancel}
            size="small"
            sx={styles.cancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleValidate}
            size="small"
            sx={styles.next}
          >
            {activeStep + 1 === steps.length ? "Post my job" : "Next Step"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BasicInfo;
