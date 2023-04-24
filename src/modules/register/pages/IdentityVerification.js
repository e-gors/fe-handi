import { Box, Button, Card, CardMedia } from "@mui/material";
import FormField from "../../../components/FormField";
import React from "react";
import Http from "../../../utils/Http";

const styles = {
  next: {
    backgroundColor: "#AF0C64",
    "&:hover": {
      backgroundColor: "#AF0C64",
    },
  },
  buttonWrapper: {
    mt: 3,
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
  },
};

function IdentityVerification(props) {
  const {
    selectedRole,
    skills,
    jobs,
    basicInfo,
    activeStep,
    steps,
    handleBack,
    handleNext,
  } = props;

  const [image, setImage] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState(null);

  const handleFileChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("skills", skills);
    formData.append("jobs", jobs);
    formData.append("selectedRole", selectedRole);
    formData.append("basicInfo", JSON.stringify(basicInfo));

    Http.post("register/confirmed/user", formData)
      .then((res) => {
        if (res.data.code === 200) {
          handleNext();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      <Box sx={{ maxWidth: 500, margin: "0 auto", mt: 2 }}>
        {previewUrl && (
          <Card>
            <CardMedia component="img" src={previewUrl} />
          </Card>
        )}
        <form encType="multipart/form-data">
          <FormField
            size="small"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleFileChange}
          />

          <Box sx={styles.buttonWrapper}>
            <Button
              size="small"
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={handleSubmit}
              sx={styles.next}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Continue"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default IdentityVerification;
