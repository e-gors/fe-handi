import { Box, Button, InputAdornment, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormField from "../../../../../components/FormField";
import Reevalidate from "ree-validate-18";
import { formatValue } from "../../../../../utils/helpers";

const styles = {
  wrapper: {
    mt: 5,
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

const validator = new Reevalidate.Validator({
  rate: "required",
});

function RateForm(props) {
  const {
    steps,
    activeStep,
    handleCancel,
    handleNext,
    handleBack,
    rate,
    setRate,
  } = props;

  const [formValues, setFormValues] = React.useState({
    values: {
      rate: "",
    },
    errors: validator.errors,
  });

  React.useEffect(() => {
    if (rate) {
      setFormValues({
        values: {
          ...rate,
        },
      });
    }
  }, [rate]);

  const handleChange = (e) => {
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
          errors,
        }));
      }
    });
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

  const handleValidate = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
        setRate(formValues);
        handleNext();
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleValidate();
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: 24, md: 30 }, mb: 1 }}
        >
          Terms
        </Typography>

        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Your Bid</Typography>
            <FormField
              label="Your Bid"
              name="rate"
              errors={formValues.errors}
              value={formValues.values.rate}
              onBlur={() => handleBlur("rate")}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₱</InputAdornment>
                ),
              }}
            />
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

export default RateForm;
