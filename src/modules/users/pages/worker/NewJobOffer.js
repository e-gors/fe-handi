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
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Reevalidate from "ree-validate-18";
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
import Http from "../../../../utils/Http";
import { useHistory } from "react-router-dom";
import ConfirmationModal from "../../../../components/ConfirmationModal";

const validator = new Reevalidate.Validator({
  type: "required",
  rate: "required",
  budget: "required",
  days: "required",
});

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

function NewJobOffer() {
  const posts = useSelector((state) => state.users.user.jobs) ?? [];

  const history = useHistory();
  const dispatch = useDispatch();
  const imageContainerRef = useRef(null);

  const [workers, setWorkers] = React.useState([]);
  const [openCancelModal, setOpenCancelModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [loadingOnLoad, setLoadingOnLoad] = React.useState(false);
  const [selectedContractor, setSelectedContractor] = React.useState({});
  const [selectedJob, setSelectedJob] = React.useState({});
  const [formValues, setFormValues] = React.useState({
    values: {
      contractor: "",
      post: "",
      rate: "",
      days: "",
      type: "Daily Rate",
      images: [],
      instruction: "",
    },
    errors: validator.errors,
  });
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    fetchWorkers();
  }, []);

  React.useEffect(() => {
    if (selectedJob) {
      if (selectedJob.job_type === "Daily Rate") {
        setFormValues((prev) => ({
          ...prev,
          values: {
            contractor: selectedContractor.fullname,
            post: selectedJob.title,
            rate: selectedJob.rate,
            days: selectedJob.days,
            type: selectedJob.job_type,
            images: selectedJob.images,
            instruction: selectedJob.description,
          },
        }));
      } else {
        setFormValues((prev) => ({
          ...prev,
          values: {
            contractor: selectedContractor.fullname,
            post: prev.values.post,
            budget: selectedJob.budget,
            type: selectedJob.job_type,
            images: selectedJob.images,
            instruction: selectedJob.description,
          },
        }));
      }
    }
  }, [selectedJob]);

  const fetchWorkers = () => {
    setLoadingOnLoad(true);
    Http.get("/user/workers")
      .then((res) => {
        if (res.data.data) {
          setWorkers(res.data.data);
        }
        setLoadingOnLoad(false);
      })
      .catch((err) => {
        setLoadingOnLoad(false);
        console.warn(err.message);
      });
  };

  const handleChangeSelectedItem = (e, item) => {
    setSelectedContractor(item);
  };

  const handleChangeSelectedJob = (e, item) => {
    setSelectedJob(item);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("worker", JSON.stringify([selectedContractor]));
    formData.append("job", JSON.stringify([selectedJob]));

    Http.post("/new/job-offer", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          setTimeout(() => history.push("/my-offers"), 500);
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
        if (selectedContractor && selectedJob) {
          handleSubmit();
        } else {
          ToastNotification(
            "error",
            "Contractor and Job post is required!",
            options
          );
        }
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

  // Calculate the average rating
  const length = selectedContractor?.ratings?.length;
  const averageRating =
    length > 0
      ? selectedContractor?.ratings?.reduce(
          (sum, rating) => sum + rating.rating,
          0
        ) / length
      : 0;

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
            loading={loadingOnLoad}
            options={workers}
            getOptionLabel={(contractor) => contractor.fullname}
            renderInput={(params) => (
              <FormField
                size="small"
                {...params}
                label="Contractor"
                name="contractor"
                variant="outlined"
              />
            )}
            onChange={handleChangeSelectedItem}
          />
          {selectedContractor && selectedContractor.profile && (
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
                  alt={selectedContractor && selectedContractor.fullname}
                  src={
                    selectedContractor &&
                    selectedContractor.profile &&
                    selectedContractor.profile[0] &&
                    selectedContractor.profile[0].profile_url
                  }
                />
                <Box sx={{ ml: 1 }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                    {selectedContractor && selectedContractor.fullname}
                  </Typography>
                  {selectedContractor &&
                    selectedContractor.profile &&
                    selectedContractor.profile.about && (
                      <div
                        style={{ fontSize: 11 }}
                        dangerouslySetInnerHTML={{
                          __html:
                            selectedContractor &&
                            selectedContractor.profile &&
                            selectedContractor.profile.about,
                        }}
                      />
                    )}
                  {selectedContractor &&
                    selectedContractor.profile &&
                    selectedContractor.profile.about === null && (
                      <Typography sx={{ fontSize: 11 }}>
                        The user has no background set
                      </Typography>
                    )}
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ mr: 2, fontWeight: "bold" }}>
                  {selectedContractor &&
                  selectedContractor.profile &&
                  selectedContractor.profile.daily_rate
                    ? selectedContractor.profile.daily_rate
                    : 0}{" "}
                  /hr
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <StarBorderIcon />
                  <Typography sx={{ fontWeight: "bold" }}>
                    {averageRating ? averageRating : 0}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
          <Typography>Posted Jobs *</Typography>
          <Autocomplete
            name="post"
            size="small"
            options={posts}
            getOptionLabel={(post) => post.title}
            renderInput={(params) => (
              <FormField
                size="small"
                {...params}
                label="Posted Jobs"
                name="post"
                variant="outlined"
              />
            )}
            onChange={handleChangeSelectedJob}
          />
        </Box>
        {selectedJob && Object.keys(selectedJob).length > 0 && (
          <Box>
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
                >
                  {formValues.values.type === "Daily Rate" && (
                    <FormControlLabel
                      value="Daily Rate"
                      control={
                        <Radio
                          checked={formValues.values.type === "Daily Rate"}
                        />
                      }
                      label="Pay by the day"
                    />
                  )}
                  {formValues.values.type === "Fixed Cost" && (
                    <FormControlLabel
                      value="Fixed Cost"
                      control={
                        <Radio
                          checked={formValues.values.type === "Fixed Cost"}
                        />
                      }
                      label="Fixed price"
                    />
                  )}
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
                    For pay by the day contracts, your freelancer should provide
                    you with accurate time tracking details so you can:
                  </Typography>
                  <Box sx={{ ml: 2 }}>
                    <Typography component="li">
                      Track your freelancer's working hours
                    </Typography>
                    <Typography component="li">
                      Stay informed about their activity level
                    </Typography>
                    <Typography component="li">
                      If you have specific requirements or tasks for the
                      freelancer, ensure they provide progress updates
                    </Typography>
                    <Typography component="li">
                      For accurate payment, you may request the freelancer to
                      provide manual time tracking details
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
                    Fixed price contracts require a refundable deposit. The
                    budget below is an estimate. You can change the deposit
                    amount after the contract is created and before you make the
                    deposit.
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
                          <FormField
                            label="Estiimated Days"
                            name="days"
                            value={formValues.values.days}
                            readOnly
                            fullWidth
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Box>
                          <Typography>Estimated Rate *</Typography>
                          <FormHelperText>
                            What is the estimated rate per day?
                          </FormHelperText>
                          <FormField
                            fullWidth
                            label="Estimated Rate"
                            name="rate"
                            value={formatValue(formValues.values.rate)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  ₱
                                </InputAdornment>
                              ),
                            }}
                            readOnly
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
                      value={formatValue(formValues.values.budget)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">₱</InputAdornment>
                        ),
                      }}
                      readOnly
                    />
                  </Box>
                )}

                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    onClick={handleDropdownToggle}
                    sx={{
                      cursor: " pointer",
                    }}
                  >
                    Instuctions (optional)
                  </Typography>
                  <span
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      marginLeft: "4px",
                      cursor: " pointer",
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
                        Use job requirements, desired experience, expectations,
                        a company bio or details about yourself.
                      </FormHelperText>
                      <ReactQuill
                        theme="snow"
                        name="job_description"
                        value={formValues.values.instruction}
                        placeholder="Describe your job. The more details the better."
                        style={{ backgroundColor: "white" }}
                        readOnly
                      />
                    </Box>

                    {(formValues.values.images ||
                      formValues.values.images?.length > 0) && (
                      <Box
                        component="form"
                        encType="multipart/form-data"
                        sx={styles.addImagesWrapper}
                      >
                        <Box component="label" htmlFor="multiple-images">
                          {(!formValues.values.images ||
                            formValues.values.images.length <= 0) && (
                            <Grid
                              container
                              spacing={1}
                              sx={{ alignItems: "center" }}
                            >
                              <Grid item xs={12} sm={6} md={6}>
                                <Box align="center">
                                  <ContentCopyIcon
                                    sx={{ fontSize: 36, color: "blue" }}
                                  />
                                  <Box
                                    sx={styles.addImageLeftWrapper}
                                    align="center"
                                  >
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
                                    Add files to help describe what needs to be
                                    done and for the workers' visual references.
                                    You can add <span>up to 10 photos.</span>
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
                          {formValues.values.images &&
                            formValues.values.images.length > 0 &&
                            formValues.values.images.map((image, i) => (
                              <Badge key={i} sx={styles.imageWrapper}>
                                <img
                                  style={styles.image}
                                  key={i}
                                  src={image.url}
                                  alt={image.name}
                                />
                              </Badge>
                            ))}
                        </Box>
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        )}

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
