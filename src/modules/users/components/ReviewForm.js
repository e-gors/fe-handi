import React, { useState } from "react";
import { TextField, Button, Rating, Box, Modal } from "@mui/material";
import Reevalidate from "ree-validate-18";
import FormField from "../../../components/FormField";

const validator = new Reevalidate.Validator({
  comment: "required|min: 50",
  rating: "required|numeric",
});

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

function ReviewForm(props) {
  const { open = true, handleClose, handleCancel, onSubmit } = props;

  const [formValues, setFormValues] = React.useState({
    values: {
      comment: "",
      rating: 0,
    },
    errors: validator.errors,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(value);
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

  const handleSubmit = () => {
    // const reviewData = {
    //   comment,
    //   rating,
    //   reviewable_type: reviewableType,
    //   reviewable_id: reviewableId,
    // };
    // axios
    //   .post("/api/reviews", reviewData)
    //   .then((response) => {
    //     console.log(response.data);
    //     // Handle success, e.g., show a success message
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // Handle error, e.g., show an error message
    //   });
  };

  const handleValidate = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
        console.log(formValues.values);
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Box sx={{ mb: 2 }}>
            <Rating
              name="rating"
              value={formValues.values.rating}
              onChange={handleChange}
              errors={formValues.errors}
            />
            <FormField
              sixe="small"
              fullWidth
              name="comment"
              label="Comment"
              multiline
              rows={4}
              value={formValues.values.comment}
              onChange={handleChange}
              errors={formValues.errors}
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleValidate}>
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default ReviewForm;
