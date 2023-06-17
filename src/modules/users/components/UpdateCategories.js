import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import SelectDropdown from "../../../components/SelectDropdown";
import { useHistory } from "react-router-dom";
import ToastNotificationContainer from "../../../components/ToastNotificationContainer";
import ToastNotification from "../../../components/ToastNotification";
import { options } from "../../../components/options";
import { useDispatch, useSelector } from "react-redux";
import ReeValidate from "ree-validate-18";
import Http from "../../../utils/Http";
import { updateUser } from "../../../redux/actions/userActions";

const expertiseValidator = new ReeValidate.Validator({
  job_categories: "required",
  selected_jobs: "required",
});

const styles = {
  wrapper: {
    p: 1,
  },
  main: {
    maxWidth: 700,
    margin: "10px auto",
    height: "auto",
  },
  addressHelper: {
    color: "#888888",
    pl: 1,
    fontSize: 12,
  },
  error: {
    color: "red",
    pl: 1,
    fontSize: 12,
  },
};

function UpdateCategories(props) {
  const { handleClose, onConfirm } = props;

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const user = useSelector((state) => state.users.user);

  const [loading, setLoading] = React.useState(false);
  const [expertise, setExpertise] = React.useState({
    values: {
      job_categories: [],
      selected_jobs: [],
    },
    errors: expertiseValidator.errors,
  });

  React.useEffect(() => {
    if (user) {
      const userJobCategories = user.categories || [];
      const jobCategoriesNames = userJobCategories.map(
        (category) => category.name
      );

      const selectedJobs = userJobCategories.reduce((acc, category) => {
        if (category.children && category.children.length > 0) {
          const childrenNames = category.children.map((child) => child.name);
          return [...acc, ...childrenNames];
        }
        return acc;
      }, []);

      setExpertise((prev) => ({
        ...prev,
        values: {
          job_categories: jobCategoriesNames,
          selected_jobs: selectedJobs,
        },
      }));
    }
  }, [user]);

  const handleChangeExpertise = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newValue = typeof value === "string" ? value.split(",") : value;

    setExpertise((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: newValue,
      },
    }));

    const { errors } = expertiseValidator;

    expertiseValidator.validate(name, value).then(() => {
      setExpertise((prev) => ({
        ...prev,
        errors,
      }));
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    Http.post("/categories/update", expertise.values)
      .then((res) => {
        if (res.data.code === 200) {
          dispatch(updateUser(res.data.user));
          ToastNotification("success", res.data.message, options);
          onConfirm();
        } else {
          ToastNotification("success", res.data.message, options);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        ToastNotification("success", err.message, options);
      });
  };

  const handleValidate = () => {
    expertiseValidator.validateAll(expertise.values).then((success) => {
      if (success) {
        handleSubmit();
      } else {
        setExpertise((prev) => ({
          ...prev,
          errors: expertiseValidator.errors,
        }));
      }
    });
  };

  const filteredJobSubCategories = categories.filter((category) =>
    expertise.values.job_categories.includes(category.name)
  );

  return (
    <Box sx={styles.wrapper}>
      <ToastNotificationContainer />
      <Box component="form" sx={styles.main}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <SelectDropdown
              categories={categories}
              size="small"
              required
              label="Job Categories"
              multiple
              onChange={handleChangeExpertise}
              value={expertise.values.job_categories}
              name="job_categories"
              errors={expertise.errors}
            />
            <Typography sx={styles.addressHelper}>
              You can select multiple job categories
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <SelectDropdown
              subCategories={filteredJobSubCategories}
              size="small"
              required
              label="Your Job Interests"
              multiple
              onChange={handleChangeExpertise}
              value={expertise.values.selected_jobs}
              name="selected_jobs"
              errors={expertise.errors}
            />

            <Typography sx={styles.addressHelper}>
              You can select multiple jobs
            </Typography>
          </Grid>
        </Grid>

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
    </Box>
  );
}

export default UpdateCategories;
