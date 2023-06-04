import {
  Box,
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
import React from "react";
import SelectDropdown from "../../../../components/SelectDropdown";
import FormField from "../../../../components/FormField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Reevalidate from "ree-validate-18";
import { useSelector } from "react-redux";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { formatValue } from "../../../../utils/helpers";

const validator = new Reevalidate.Validator({
  category: "required",
  sub_category: "required",
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
  wrapper: {
    mt: 5,
  },
  titleWrapper: {
    mt: 2,
    mb: 2,
  },
  jobDesHelperText: { mt: 1, mb: 1 },
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

function TypeAndBudget(props) {
  const {
    steps,
    activeStep,
    handleCancel,
    handleNext,
    handleBack,
    typeAndBudget,
    setTypeAndBudget,
  } = props;

  const categories = useSelector((state) => state.categories.categories);

  const [formValues, setFormValues] = React.useState({
    values: {
      category: "",
      sub_category: "",
      rate: "",
      days: "",
      type: "Daily Rate",
    },
    errors: validator.errors,
  });

  const type = formValues.values.type;

  React.useEffect(() => {
    if (typeAndBudget) {
      setFormValues({
        values: {
          ...typeAndBudget,
        },
      });
    }
  }, []);

  React.useEffect(() => {
    if (type === "Daily Rate") {
      setFormValues((prev) => ({
        ...prev,
        values: {
          category: prev.values.category,
          sub_category: prev.values.sub_category,
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
          category: prev.values.category,
          sub_category: prev.values.sub_category,
          type: prev.values.type,
          budget: "",
        },
      }));
    }
  }, [type]);

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

  const filteredJobSubCategories = categories.filter((category) =>
    formValues.values.category.includes(category.name)
  );

  const handleValidate = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
        setTypeAndBudget(formValues.values);
        handleNext();
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  return (
    <Box sx={styles.wrapper}>
      <Box component="form">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography>Job Category *</Typography>
            <FormHelperText>
              Select a Job Category that describes your job best.
            </FormHelperText>
            <SelectDropdown
              label="Job Category"
              name="category"
              errors={formValues.errors}
              onChange={handleChange}
              value={formValues.values.category}
              categories={categories}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Job Position *</Typography>
            <FormHelperText>
              Select a Job position that describes your job best.
            </FormHelperText>
            <SelectDropdown
              disabled={!formValues.values.category}
              label={
                !formValues.values.category
                  ? "Please select Job Category"
                  : "Job Position"
              }
              name="sub_category"
              errors={formValues.errors}
              onChange={handleChange}
              value={formValues.values.sub_category}
              subCategories={filteredJobSubCategories}
              required
              readOnly={!formValues.values.category}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Typography>Job Type *</Typography>
          <Box sx={styles.jobTypeWrapper}>
            <Box sx={styles.jobTypeCard}>
              <Box component="label" htmlFor="daily-rate" sx={styles.card}>
                <input
                  id="daily-rate"
                  type="radio"
                  name="type"
                  value="Daily Rate"
                  checked={formValues.values.type === "Daily Rate"}
                  onChange={handleChange}
                  style={styles.input}
                />
                <Box sx={styles.cardDesWrapper}>
                  <HourglassTopIcon color="primary" sx={styles.typeIcon} />
                  <Box>
                    <Typography sx={styles.cardTitle}>Daily Rate</Typography>
                    <Typography sx={styles.cardDescription}>
                      Based on worker's daily rate and number of days tracked
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
                  checked={formValues.values.type === "Fixed Cost"}
                  onChange={handleChange}
                  style={styles.input}
                />
                <Box sx={styles.cardDesWrapper}>
                  <MonetizationOnIcon color="primary" sx={styles.typeIcon} />
                  <Box>
                    <Typography sx={styles.cardTitle}>Fixed Cost</Typography>
                    <Typography sx={styles.cardDescription}>
                      A fixed cost amount paid when the project or each
                      milestone is completed
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {formValues && formValues.values.type === "Daily Rate" && (
          <Box sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Box>
                  <Typography>Estimated Days *</Typography>
                  <FormHelperText>What is the estimated days?</FormHelperText>
                  <SelectDropdown
                    label="Estiimated Days"
                    name="days"
                    errors={formValues.errors}
                    value={formValues.values.days}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
              onChange={handleChange}
              errors={formValues.errors}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₱</InputAdornment>
                ),
              }}
            />
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
            onClick={() => handleValidate()}
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

export default TypeAndBudget;
