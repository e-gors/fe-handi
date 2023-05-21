import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Http from "../../../../utils/Http";
import ToastNotification from "../../../../components/ToastNotification";
import ToastNotificationContainer from "../../../../components/ToastNotificationContainer";
import { options } from "../../../../components/options";
import { formatValue } from "../../../../utils/helpers";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../../redux/actions/userActions";

const styles = {
  wrapper: {
    mt: 5,
  },
  rateLabel: {
    fontWeight: "bold",
    fontSize: 24,
    mb: 2,
  },
  rateText: {
    backgroundColor: "#FF9100",
    p: 1,
    borderRadius: 3,
  },
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
function ReviewAndSubmit(props) {
  const {
    activeStep,
    handleCancel,
    handleClose,
    onHandleSubmit,
    handleBack,
    proposal,
    rate,
    images,
    id,
  } = props;

  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("rate", rate);
    formData.append("proposal", proposal);
    if (images && images.length > 0) {
      images.forEach((image) => {
        formData.append("images[]", image.file);
      });
    }

    Http.post(`/new/proposal/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          dispatch(updateUser(res.data.user));
          onHandleSubmit();
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
        {rate && (
          <Box sx={{ mb: 2 }}>
            <Typography sx={styles.rateLabel}>Rate</Typography>
            <Typography sx={styles.rateText} component="span">
              ₱ {rate && formatValue(rate)}
            </Typography>
          </Box>
        )}
        {proposal && (
          <Box sx={{ mt: 5 }}>
            <Typography sx={styles.rateLabel}>My Proposal</Typography>
            {proposal && <div dangerouslySetInnerHTML={{ __html: proposal }} />}
          </Box>
        )}
        {images && images.length > 0 && (
          <Box>
            <Typography sx={styles.rateLabel}>Completed Projects</Typography>
            <Box sx={styles.selectedImagesWrapper}>
              {images.map((image, i) => (
                <Box key={i} sx={{ m: 0.5 }}>
                  <img style={styles.image} src={image.url} alt={image.name} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
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
            {loading ? <CircularProgress size={24} /> : "Submit"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ReviewAndSubmit;
