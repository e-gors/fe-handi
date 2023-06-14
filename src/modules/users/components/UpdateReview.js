import {
  Box,
  Button,
  CircularProgress,
  FormHelperText,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import Reevalidate from "ree-validate-18";
import { useDispatch } from "react-redux";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "60%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const validator = new Reevalidate.Validator({
  rating: "required|min:1|max:5",
  comment: "required|min:50|max:500",
});

const labels = {
  0: "Useless",
  1: "Poor",
  2: "Ok",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};

const getLabelText = (value) => {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
};

function UpdateReview(props) {
  const { open, ratingsData, handleClose, onConfirm, loading } = props;
  const dispatch = useDispatch();

  const [error, setError] = React.useState(null);
  const [reviews, setReviews] = React.useState({
    values: {
      rating: 0,
      comment: "",
    },
    errors: validator.errors,
  });
  const [hover, setHover] = React.useState(-1);

  React.useEffect(() => {
    if (ratingsData) {
      setReviews((prev) => ({
        ...prev,
        values: {
          ...ratingsData,
        },
      }));
    }
  }, [ratingsData]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setReviews((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    if (name === "rating") {
      if (value <= 0) {
        setError("Rating is required!");
      } else {
        setError(null);
      }
    }

    const { errors } = validator;

    validator.validate(name, value).then((success) => {
      if (!success) {
        setReviews((prev) => ({
          ...prev,
          errors: errors,
        }));
      }
    });
  };

  const handleValidate = () => {
    validator.validateAll(reviews.values).then((success) => {
      if (reviews.values.rating <= 0) {
        setError("Rating is required!");
        ToastNotification("error", error, options);
      } else {
        if (success) {
          onConfirm(reviews.values);
        } else {
          setReviews((prev) => ({
            ...prev,
            errors: validator.errors,
          }));
        }
      }
    });
  };

  return (
    <Box>
      <ToastNotificationContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              backgroundColor: "#EEEEEE",
              p: 2,
              borderRadius: 3,
              boxShadow: 5,
            }}
          >
            <Typography sx={{ mb: 2, fontSize: 18, fontWeight: "bold" }}>
              Review
            </Typography>
            <Box>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <Rating
                    name="rating"
                    value={parseInt(reviews.values.rating)}
                    onChange={handleChange}
                    getLabelText={getLabelText}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  <Typography sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : reviews.values.rating]}
                  </Typography>
                </Box>
                <FormHelperText error sx={{ ml: 2 }}>
                  {error}
                </FormHelperText>
              </Box>
              <FormField
                fullWidth
                name="comment"
                label="Comment"
                placeholder="What can you say..."
                multiline
                rows={4}
                value={reviews.values.comment}
                onChange={handleChange}
                errors={reviews.errors}
              />
            </Box>
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
        </Box>
      </Modal>
    </Box>
  );
}

export default UpdateReview;
