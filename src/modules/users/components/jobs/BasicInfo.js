import { Box, FormHelperText, Typography } from "@mui/material";
import React from "react";
import FormField from "../../../../components/FormField";
import SelectDropdown from "../../../../components/SelectDropdown";

const requiredSkills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"];

function BasicInfo(props) {
  const {
    formValues,
    handleChangeFormValues,
    job_description,
    required_skills,
  } = props;

  return (
    <Box sx={{ mt: 2 }}>
      <Box component="form">
        <Box>
          <Typography>Job Title *</Typography>
          <FormField
            fullWidth
            size="small"
            name="title"
            label="Job Title"
            margin="dense"
            // value={formValues.values.title}
            // errors={formValues.errors}
            // onChange={handleChangeFormValues}
          />
        </Box>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography>Job Description *</Typography>
          <FormHelperText sx={{ mt: 1, mb: 1 }}>
            Use job requirements, desired experience, expectations, a company
            bio or details about yourself.
          </FormHelperText>
          <FormField
            label="Job Description"
            name="job_description"
            fullWidth
            multiline
            minRows={3}
            maxRows={5}
          />
        </Box>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography>Required Skills (optional)</Typography>
          <SelectDropdown
            value={[""]}
            name="required_skills"
            label="Required Skills"
            options={requiredSkills}
            multiple
            fullWidth
          />
        </Box>
      </Box>
    </Box>
  );
}

export default BasicInfo;
