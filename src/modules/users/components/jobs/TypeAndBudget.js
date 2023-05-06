import { Box } from "@mui/material";
import React from "react";
import SelectDropdown from "../../../../components/SelectDropdown";
import FormField from "../../../../components/FormField";

const categories = ["Carpenter", "Plumber", "Construction Worker"];
const jobTypes = ["Daily", "Fixed"];

function TypeAndBudget(props) {
  const {
    formValues,
    expertise,
    handleMultipleSelect,
    handleChangeFormValues,
  } = props;
  return (
    <Box>
      <Box component="form">
        <SelectDropdown
          label="Job Categories"
          name="job_Catgories"
          // errors={expertise.errors}
          // onChange={handleMultipleSelect}
          // value={expertise.values.job_categories}
          options={categories}
          // multiple
          fullWidth
        />
        <SelectDropdown
          label="Job Categories"
          name="job_Catgories"
          // errors={formValues.errors}
          // onChange={handleChangeFormValues}
          // value={formValues.values.jobTypes}
          options={jobTypes}
          fullWidth
        />
        <FormField
          name="budget"
          label="Estimated Budget"
          // value={formValues.values.budget}
          // onChange={handleChangeFormValues}
          // errors={formValues.errors}
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default TypeAndBudget;
