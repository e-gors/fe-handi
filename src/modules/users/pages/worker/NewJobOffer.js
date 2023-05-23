import {
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import FormField from "../../../../components/FormField";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  setSearchResult,
} from "../../../../redux/actions/profileActions";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Reevalidate from "ree-validate-18";
import SelectDropdown from "../../../../components/SelectDropdown";
import { formatValue } from "../../../../utils/helpers";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import ArticleIcon from "@mui/icons-material/Article";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Http from "../../../../utils/Http";
import { useHistory } from "react-router-dom";
import ConfirmationModal from "../../../../components/ConfirmationModal";

const validator = new Reevalidate.Validator({
  title: "required|min: 5",
  type: "required",
  rate: "required",
  budget: "required",
  days: "required",
});

const days = [
  "41+ days",
  "31-40 days",
  "21-30 days",
  "11-20 days",
  "1-10 days",
];

const styles = {
  wrapper: { mt: 8, p: 3 },
  main: {
    maxWidth: 800,
    backgroundColor: "#EEEEEE",
    m: "20px auto",
    boxShadow: 5,
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
};

const MAX_IMAGES = 10;

function NewJobOffer() {
  const searchQuery = useSelector((state) => state.profiles.searchQuery) ?? "";
  const searchResult =
    useSelector((state) => state.profiles.searchResult) ?? [];
  const workers = useSelector((state) => state.profiles.workers) ?? [];

  const history = useHistory();
  const dispatch = useDispatch();
  const imageContainerRef = useRef(null);

  const [openCancelModal, setOpenCancelModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});
  const [instruction, setInstruction] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [formValues, setFormValues] = React.useState({
    values: {
      contractor: "",
      title: "",
      rate: "",
      days: "",
      type: "Daily Rate",
    },
    errors: validator.errors,
  });
  const [isOpen, setIsOpen] = React.useState(false);

  // Update search results when searchQuery or users change
  React.useEffect(() => {
    performSearch();
  }, [searchQuery, workers]);

  const type = formValues.values.type;
  React.useEffect(() => {
    if (type === "Daily Rate") {
      setFormValues((prev) => ({
        ...prev,
        values: {
          contractor: prev.values.contractor,
          title: prev.values.title,
          rate: prev.values.rate,
          days: prev.values.days,
          type: prev.values.type,
        },
      }));
    }
    if (type === "Fixed Cost") {
      setFormValues((prev) => ({
        ...prev,
        values: {
          contractor: prev.values.contractor,
          title: prev.values.title,
          type: prev.values.type,
          budget: "",
        },
      }));
    }
  }, [type]);

  const handleChangeFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    const { errors } = validator;

    validator.validate(name, value).then((success) => {
      if (!success) {
        setFormValues((prev) => ({
          ...prev,
          errors: errors,
        }));
      }
    });
  };
  const handleChangeJobDescription = (content, delta, source, editor) => {
    setInstruction(content);
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

  const handleInputChange = (event, value) => {
    dispatch(setSearchQuery(value));
  };

  const performSearch = () => {
    const filterWorkers =
      workers &&
      workers.filter((worker) => {
        return worker.fullname
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
    dispatch(setSearchResult(filterWorkers));
  };

  const handleChangeSelectedItem = (e, item) => {
    setSelectedItem(item);
  };

  const handleBlur = (fieldName) => {
    const formattedValue = formatValue(formValues.values[fieldName]);
    setFormValues((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [fieldName]: formattedValue,
      },
    }));
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("formValues", JSON.stringify([formValues.values]));
    formData.append("worker", JSON.stringify([selectedItem]));
    if (images && images.length > 0) {
      images.forEach((image) => {
        formData.append(`images[]`, image.file);
      });
    }
    if (instruction && instruction.trim().length > 0) {
      formData.append("instruction", instruction);
    }

    Http.post("/new/job-offer", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          setTimeout(() => history.goBack(), 500);
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
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
        handleSubmit();
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  const handleCancel = () => {
    setOpenCancelModal(true);
  };

  return (
    <Box sx={styles.wrapper}>
      <ConfirmationModal
        open={openCancelModal}
        onClose={() => setOpenCancelModal(false)}
        message="Your activity will not be save!"
        onConfirm={() => history.goBack()}
        title="Exit Offer"
      />
      <ToastNotificationContainer />
      <Box sx={styles.main}>
        <Box sx={{ p: 3 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { xs: 24, md: 30 } }}>
            Create Offer
          </Typography>
          <Typography>
            Send an offer to a worker on {process.env.REACT_APP_NAME}.
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: "#CCCCCC", p: 2 }}>
          <Typography>Basic Information</Typography>
        </Box>
        <Box sx={{ mt: 2, p: 3 }}>
          <Typography>Contractor *</Typography>
          <Autocomplete
            name="contractor"
            size="small"
            options={searchResult}
            getOptionLabel={(worker) => worker.fullname}
            renderInput={(params) => (
              <FormField
                size="small"
                {...params}
                label="Contractor"
                variant="outlined"
                value={searchQuery}
                onChange={handleInputChange}
              />
            )}
            onChange={handleChangeSelectedItem}
          />
          {selectedItem && selectedItem.profile && (
            <Box
              sx={{
                mt: 2,
                mb: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Avatar
                  alt={selectedItem && selectedItem.fullname}
                  src={
                    selectedItem &&
                    selectedItem.profile &&
                    selectedItem.profile[0] &&
                    selectedItem.profile[0].profile_url
                  }
                />
                <Box sx={{ ml: 1 }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                    {selectedItem && selectedItem.fullname}
                  </Typography>
                  {selectedItem &&
                    selectedItem.profile &&
                    selectedItem.profile[0].background && (
                      <div
                        style={{ fontSize: 11 }}
                        dangerouslySetInnerHTML={{
                          __html:
                            selectedItem &&
                            selectedItem.profile &&
                            selectedItem.profile[0].background,
                        }}
                      />
                    )}
                  {selectedItem &&
                    selectedItem.profile &&
                    selectedItem.profile[0].background === null && (
                      <Typography sx={{ fontSize: 11 }}>
                        The user has no background set
                      </Typography>
                    )}
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ mr: 2, fontWeight: "bold" }}>
                  {selectedItem &&
                  selectedItem.profile &&
                  selectedItem.profile[0].daily_rate
                    ? selectedItem.profile[0].daily_rate
                    : 0}{" "}
                  /hr
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <StarBorderIcon />
                  <Typography sx={{ fontWeight: "bold" }}>
                    {selectedItem && selectedItem.rating && selectedItem.rating
                      ? selectedItem.rating.length
                      : 0}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
          <Typography>Title *</Typography>
          <FormField
            name="title"
            label="Title"
            fullWidth
            value={formValues.values.title}
            errors={formValues.errors}
            onChange={handleChangeFormValues}
          />
        </Box>
        <Box sx={{ backgroundColor: "#CCCCCC", p: 2 }}>
          <Typography>Offer Details</Typography>
        </Box>

        <Box sx={{ p: 3 }}>
          <FormControl>
            <FormLabel id="rate-type">Payment Type *</FormLabel>
            <RadioGroup
              row
              aria-labelledby="rate-type"
              name="type"
              value={formValues.values.type}
              onChange={handleChangeFormValues}
            >
              <FormControlLabel
                value="Daily Rate"
                control={<Radio />}
                label="Pay by the day"
              />
              <FormControlLabel
                value="Fixed Cost"
                control={<Radio />}
                label="Fixed price"
              />
            </RadioGroup>
          </FormControl>
          {formValues && formValues.values.type === "Daily Rate" && (
            <Box
              sx={{
                backgroundColor: "#BEBEBE",
                borderRadius: 3,
                boxShadow: 5,
                p: 2,
              }}
            >
              <Typography>
                For pay by the hour contracts, your freelancer should use our
                goMeter so you can:
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography component="li">
                  Track your freelancer's time
                </Typography>
                <Typography component="li">
                  See programs and websites your freelancer is using
                </Typography>
                <Typography component="li">
                  See screenshots of their work
                </Typography>
                <Typography component="li">See their activity level</Typography>
                <Typography component="li">
                  If you don't require your freelancer to use the goMeter, you
                  should allow them to add manual time below
                </Typography>
              </Box>
            </Box>
          )}
          {formValues && formValues.values.type === "Fixed Cost" && (
            <Box
              sx={{
                backgroundColor: "#BEBEBE",
                borderRadius: 3,
                boxShadow: 5,
                p: 2,
              }}
            >
              <Typography>
                Fixed price contracts require a refundable deposit. The budget
                below is an estimate. You can change the deposit amount after
                the contract is created and before you make the deposit.
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ p: 2 }}>
          <Box>
            {formValues && formValues.values.type === "Daily Rate" && (
              <Box sx={{ mt: 2, mb: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box>
                      <Typography>Estimated Days *</Typography>
                      <FormHelperText>
                        What is the estimated days?
                      </FormHelperText>
                      <SelectDropdown
                        label="Estiimated Days"
                        name="days"
                        errors={formValues.errors}
                        value={formValues.values.days}
                        onChange={handleChangeFormValues}
                        options={days}
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ mt: 0.5 }}>
                      <Typography>Estimated Rate *</Typography>
                      <FormHelperText>
                        What is the estimated rate per day?
                      </FormHelperText>
                      <FormField
                        fullWidth
                        label="Estimated Rate"
                        name="rate"
                        errors={formValues.errors}
                        value={formValues.values.rate}
                        onBlur={() => handleBlur("rate")}
                        onChange={handleChangeFormValues}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">₱</InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
            {formValues && formValues.values.type === "Fixed Cost" && (
              <Box sx={{ mt: 2 }}>
                <Typography>Estimated Budget *</Typography>
                <FormHelperText>
                  What is your estimated budget for this job?
                </FormHelperText>
                <FormField
                  name="budget"
                  label="Estimated Budget"
                  value={formValues.values.budget}
                  onBlur={() => handleBlur("budget")}
                  onChange={handleChangeFormValues}
                  errors={formValues.errors}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₱</InputAdornment>
                    ),
                  }}
                />
              </Box>
            )}

            <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={handleDropdownToggle}
              >
                Instuctions (optional)
              </Typography>
              <span
                style={{
                  transition: "transform 0.3s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  marginLeft: "4px",
                }}
              >
                <IconButton onClick={handleDropdownToggle}>
                  {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                </IconButton>
              </span>
            </Box>

            {isOpen && (
              <Box>
                <Box sx={styles.titleWrapper}>
                  <Typography>Job Description *</Typography>
                  <FormHelperText sx={styles.jobDesHelperText}>
                    Use job requirements, desired experience, expectations, a
                    company bio or details about yourself.
                  </FormHelperText>
                  <ReactQuill
                    theme="snow"
                    name="job_description"
                    value={instruction}
                    onChange={handleChangeJobDescription}
                    placeholder="Describe your job. The more details the better."
                    style={{ backgroundColor: "white" }}
                  />
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
                            <ContentCopyIcon
                              sx={{ fontSize: 36, color: "blue" }}
                            />
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
                              Add files to help describe what needs to be done
                              and for the workers' visual references. You can
                              add <span>up to 10 photos.</span>
                            </Typography>

                            <Box sx={styles.addImageRightBottomWrapper}>
                              <ArticleIcon sx={styles.articleIcon} />
                              <Box>
                                <Typography sx={styles.addFiles}>
                                  Max. size: 2mb each
                                </Typography>
                                <Box sx={{ display: "flex" }}>
                                  <Typography sx={styles.fileTypes}>
                                    JPEG
                                  </Typography>
                                  <Typography sx={styles.fileTypes}>
                                    PNG
                                  </Typography>
                                  <Typography sx={styles.fileTypes}>
                                    JPG
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    )}
                  </Box>

                  <Box
                    sx={styles.selectedImagesWrapper}
                    ref={imageContainerRef}
                  >
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
                          <AddToPhotosIcon
                            className="add-photo"
                            sx={{ fontSize: 50 }}
                          />
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        <Divider />
        <Box sx={{ p: 2 }} align="right">
          <Button
            variant="outlined"
            color="primary"
            sx={{ mr: 2 }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            disabled={loading}
            variant="contained"
            color="primary"
            onClick={handleValidate}
          >
            {loading ? <CircularProgress size={24} /> : "Send Offer"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default NewJobOffer;
