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
  selected_skills: "required",
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

function UpdateSkills(props) {
  const { handleClose, onConfirm } = props;

  const dispatch = useDispatch();

  const skills = useSelector((state) => state.skills.skills);
  const user = useSelector((state) => state.users.user);

  const [loading, setLoading] = React.useState(false);
  const [expertise, setExpertise] = React.useState({
    values: {
      job_categories: [],
      selected_skills: [],
    },
    errors: expertiseValidator.errors,
  });

  React.useEffect(() => {
    if (user) {
      const userJobCategories = user.categories || [];
      const userSkills = user.skills || [];
      const jobCategoriesNames = userJobCategories.map(
        (category) => category.name
      );

      const selectedSkills = userSkills.reduce((acc, category) => {
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
          selected_skills: selectedSkills,
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
    Http.post("/skills/update", expertise.values)
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

  const filteredSkillSubCategories = skills.filter((skill) =>
    expertise.values.job_categories.includes(skill.name)
  );

  return (
    <Box sx={styles.wrapper}>
      <ToastNotificationContainer />
      <Box component="form" sx={styles.main}>
        <Box>
          <SelectDropdown
            subCategories={filteredSkillSubCategories}
            size="small"
            required
            label="Your Skills"
            multiple
            onChange={handleChangeExpertise}
            value={expertise.values.selected_skills}
            name="selected_skills"
            errors={expertise.errors}
          />
          <Typography sx={styles.addressHelper}>
            You can select multiple skills
          </Typography>
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
    </Box>
  );
}

export default UpdateSkills;
