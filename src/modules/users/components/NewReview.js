import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  FormHelperText,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import Reevalidate from "ree-validate-18";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import Http from "../../../utils/Http";
import { useDispatch, useSelector } from "react-redux";
import { updateWorker } from "../../../redux/actions/profileActions";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { isAuth } from "../../../utils/helpers";
import UpdateReview from "./UpdateReview";

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

function NewReview(props) {
  const { worker, isOwner, user } = props;

  const ratings = worker.ratings;

  const doneReview = ratings.some((rating) => rating.user_id === user.id);

  const dispatch = useDispatch();

  const [openConfirmModal, setOpenConfirmModal] = React.useState(false);
  const [openEditReview, setOpenEditReview] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [onDeleteLoading, setOnDeleteLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [reviews, setReviews] = React.useState({
    values: {
      rating: 0,
      comment: "",
    },
    errors: validator.errors,
  });
  const [hover, setHover] = React.useState(-1);

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

  const handleSubmit = () => {
    setLoading(true);
    Http.post(`/new/rating/${worker.id}`, reviews.values)
      .then((res) => {
        if (res.data.code === 200) {
          ToastNotification("success", res.data.message, options);
          dispatch(updateWorker(res.data.worker));
          setReviews({
            values: {
              rating: 0,
              comment: "",
            },
          });
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
    if (doneReview) {
      ToastNotification("error", "You cannot submit another review!", options);
    } else {
      validator.validateAll(reviews.values).then((success) => {
        if (reviews.values.rating <= 0) {
          setError("Rating is required!");
          ToastNotification("error", error, options);
        } else {
          if (success) {
            handleSubmit();
          } else {
            setReviews((prev) => ({
              ...prev,
              errors: validator.errors,
            }));
          }
        }
      });
    }
  };

  const onEdit = (data) => {
    setSelectedItem(data);
    setOpenEditReview(true);
  };

  const handleDelete = (data) => {
    setSelectedItem(data);
    setOpenConfirmModal(true);
  };

  const onDelete = () => {
    setOnDeleteLoading(true);
    Http.delete(`/remove/review/${selectedItem.id}`)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateWorker(res.data.worker));
          ToastNotification("success", res.data.message, options);
          setOpenConfirmModal(false);
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setOnDeleteLoading(false);
      })
      .catch((err) => {
        setOnDeleteLoading(false);
        ToastNotification("error", err.message, options);
      });
  };

  const handleSubmitEdit = (data) => {
    setOnDeleteLoading(true);
    Http.post(`/update/review/${selectedItem.id}`, data)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateWorker(res.data.worker));
          ToastNotification("success", res.data.message, options);
          setOpenEditReview(false);
        } else {
          ToastNotification("error", res.data.message, options);
        }
        setOnDeleteLoading(false);
      })
      .catch((err) => {
        setOnDeleteLoading(false);
        ToastNotification("error", err.message, options);
      });
  };

  return (
    <Box sx={{ p: 1 }}>
      <ToastNotificationContainer />
      <ConfirmationModal
        loading={onDeleteLoading}
        open={openConfirmModal}
        onConfirm={onDelete}
        onClose={() => setOpenConfirmModal(false)}
        message="You are about to delete your review, proceed?"
      />
      <UpdateReview
        loading={onDeleteLoading}
        open={openEditReview}
        ratingsData={selectedItem}
        handleClose={() => setOpenEditReview(false)}
        onConfirm={(data) => handleSubmitEdit(data)}
      />
      {isAuth() && !isOwner && user.role === "Client" && (
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

          <Box sx={{ mt: 2 }} align="right">
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleValidate}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Submit"}
            </Button>
          </Box>
        </Box>
      )}

      <Box
        sx={{
          mt: 2,
        }}
      >
        {ratings &&
          ratings.map((rating, i) => {
            const isReviewOwner =
              isAuth() && user.role === "Client" && user.id === rating.client.id
                ? true
                : false;
            return (
              <Box
                key={i}
                sx={{
                  mt: 2,
                  backgroundColor: "#EEEEEE",
                  p: 2,
                  borderRadius: 3,
                  boxShadow: 5,
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Avatar src={rating.client.profile_url} />
                  <Box>
                    <Typography sx={{ ml: 1, fontWeight: "bold" }}>
                      {rating.client.fullname}
                    </Typography>
                    <Box sx={{ ml: 1, display: "flex" }}>
                      <Rating value={parseInt(rating.rating)} readOnly />
                      <Typography sx={{ ml: 1, color: "green" }}>
                        {rating.created_at}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mt: 1 }}>
                  <Typography>{rating.comment}</Typography>
                </Box>
                {isReviewOwner && (
                  <Box sx={{ display: "flex", mt: 2, justifyContent: "right" }}>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(rating)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ ml: 1 }}
                      size="small"
                      onClick={() => onEdit(rating)}
                    >
                      Edit
                    </Button>
                  </Box>
                )}
              </Box>
            );
          })}
        {ratings.length <= 0 && (
          <Box
            sx={{
              mt: 2,
              backgroundColor: "#EEEEEE",
              p: 2,
              borderRadius: 3,
              boxShadow: 5,
            }}
          >
            <Typography>No reviews</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default NewReview;
