import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PublicIcon from "@mui/icons-material/Public";
import LockIcon from "@mui/icons-material/Lock";
import ToastNotification from "../../../../components/ToastNotification";
import { options } from "../../../../components/options";
import Http from "../../../../utils/Http";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import { useHistory } from "react-router-dom";

const styles = {
  wrapper: {
    mt: 5,
  },

  jobTypeWrapper: {
    display: "flex",
    flexWrap: { xs: "wrap", md: "noWrap" },
    justifyContent: "space-between",
  },
  jobTypeCard: {
    border: "1px solid blue",
    borderRadius: 2,
    p: 1,
    width: { xs: "100%", md: "48%" },
    m: 1,
  },
  card: {
    width: "100%",
    position: "relative",
    backgroundColor: "green",
  },
  input: { position: "absolute", top: 0, right: 0 },
  cardDesWrapper: { display: "flex", alignItems: "center" },
  typeIcon: { fontSize: 36, mr: 1 },
  cardTitle: { fontWeight: "bold", fontSize: 14 },
  cardDescription: { fontSize: 12 },

  selectedImagesWrapper: {
    display: "flex",
    overflowX: "scroll",
    p: 2,

    "::-webkit-scrollbar": {
      display: "none",
    },
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

function ReviewAndPost(props) {
  const {
    activeStep,
    handleCancel,
    handleBack,
    titles,
    descriptions,
    imagesContainer = [],
    typeAndBudget = [],
    ques = [],
    skillses = [],
    locations,
  } = props;

  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [visibility, setVisibility] = React.useState("Public");

  const handleChangeVisibility = (status) => {
    setVisibility(status);
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", titles);
    formData.append("description", descriptions);
    formData.append("typeAndBudget", JSON.stringify([typeAndBudget]));
    formData.append("status", visibility);
    if (imagesContainer && imagesContainer.length > 0) {
      imagesContainer.forEach((image) => {
        formData.append("images[]", image.file);
      });
    }
    if (ques && ques.length > 0) {
      formData.append("questions", JSON.stringify(ques));
    }
    if (skillses && skillses.length > 0) {
      formData.append("skills", JSON.stringify(skillses));
    }
    if (locations && locations.length > 0) {
      formData.append("locations", JSON.stringify(locations));
    }

    Http.post("/new/job-post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          localStorage.setItem("postedUrl", res.data.url);
          setTimeout(() => history.push("/new/job/posted"), 2000);
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

  return (
    <Box sx={styles.wrapper}>
      <ToastNotificationContainer />
      <Box>
        <Box sx={{ mb: 1, p: 2 }}>
          {typeAndBudget && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Box align="left">
                <Typography
                  sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: "bold" }}
                >
                  {titles}
                </Typography>

                <Typography>
                  {typeAndBudget.category}{" "}
                  <DoubleArrowIcon sx={{ fontSize: 11 }} />
                  {typeAndBudget.sub_category}
                </Typography>
              </Box>
              <Box align="right">
                <Typography
                  sx={{
                    p: 1,
                    backgroundColor: "#FF9100",
                    borderRadius: 1,
                  }}
                >
                  {typeAndBudget.type}
                </Typography>
                {typeAndBudget.type === "Daily Rate" && (
                  <Typography>{typeAndBudget.rate} / Day</Typography>
                )}
                {typeAndBudget.type === "Fixed Cost" && (
                  <Typography>{typeAndBudget.budget}</Typography>
                )}
              </Box>
            </Box>
          )}
          {descriptions && (
            <div dangerouslySetInnerHTML={{ __html: descriptions }} />
          )}

          <Box sx={styles.selectedImagesWrapper}>
            {imagesContainer &&
              imagesContainer.length > 0 &&
              imagesContainer.map((image, i) => (
                <Box key={i} sx={{ m: 0.5 }}>
                  <img style={styles.image} src={image.url} alt={image.name} />
                </Box>
              ))}
          </Box>
        </Box>

        <Box sx={{ mb: 1, p: 2 }}>
          <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
            Details
          </Typography>
          {typeAndBudget && typeAndBudget.type === "Daily Rate" && (
            <Box>
              <Typography>
                <span>Estimated days:</span> {typeAndBudget.days}
              </Typography>
            </Box>
          )}
          {locations && (
            <Box sx={{ display: "flex", mt: 1 }}>
              <Typography>Prefered Worker Location: </Typography>
              <Box sx={{ ml: 1 }}>
                {locations &&
                  locations.map((location, i) => (
                    <Chip
                      key={i}
                      label={location}
                      color="primary"
                      variant="outlined"
                      sx={{ m: 0.2 }}
                    />
                  ))}
              </Box>
            </Box>
          )}

          {skillses && skillses.length !== 0 && (
            <Box sx={{ display: "flex", mt: 1 }}>
              <Typography>Skills:</Typography>
              <Box sx={{ ml: 1 }}>
                {skillses &&
                  skillses.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      color="primary"
                      variant="outlined"
                      sx={{ m: 0.2 }}
                    />
                  ))}
              </Box>
            </Box>
          )}
        </Box>

        {ques && ques.length > 0 && (
          <Box sx={{ mb: 2, p: 2 }}>
            <Typography>Questions</Typography>
            <Box component="ol">
              {ques &&
                ques.map((que, i) => (
                  <Typography key={i} component="li">
                    {que.text}
                  </Typography>
                ))}
            </Box>
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          <Typography>Job Visibility *</Typography>
          <Box sx={styles.jobTypeWrapper}>
            <Box sx={styles.jobTypeCard}>
              <Box component="label" htmlFor="daily-rate" sx={styles.card}>
                <input
                  id="daily-rate"
                  type="radio"
                  name="type"
                  value="Daily Rate"
                  checked={visibility === "Public"}
                  onChange={() => handleChangeVisibility("Public")}
                  style={styles.input}
                />
                <Box sx={styles.cardDesWrapper}>
                  <PublicIcon color="primary" sx={styles.typeIcon} />
                  <Box>
                    <Typography sx={styles.cardTitle}>Public</Typography>
                    <Typography sx={styles.cardDescription}>
                      Your job is shown in search results and workers can freely
                      apply to it.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={styles.jobTypeCard}>
              <Box component="label" htmlFor="fixed-rate" sx={styles.card}>
                <input
                  id="fixed-rate"
                  type="radio"
                  name="type"
                  value="Fixed Cost"
                  checked={visibility === "Private"}
                  onChange={() => handleChangeVisibility("Private")}
                  style={styles.input}
                />
                <Box sx={styles.cardDesWrapper}>
                  <LockIcon color="primary" sx={styles.typeIcon} />
                  <Box>
                    <Typography sx={styles.cardTitle}>Private</Typography>
                    <Typography sx={styles.cardDescription}>
                      Not shown in search results, but you can invite workers to
                      apply.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
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
              onClick={handleSubmit}
              size="small"
              sx={styles.next}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Post my job"
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ReviewAndPost;
