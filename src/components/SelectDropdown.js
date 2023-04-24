import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

function SelectDropdown(props) {
  const {
    label,
    errors,
    options = [],
    customError,
    ...rest
  } = props;

  let error = false;
  let helperText = "";

  // handle customError
  if (customError) {
    error = customError.error || false;
    helperText = customError.message || "";
  }

  if (errors) {
    error = (errors && errors.has(props.name)) || false;
    helperText = (errors && errors.first(props.name)) || "";
  }

  const newProps = {
    margin: "dense",
    error,
    ...rest,
  };

  return (
    <FormControl size="small" sx={{ width: "100%", mt: 0.5, mb: 0.5 }}>
      <InputLabel id="dropdown-label">{label}</InputLabel>
      <Select
        labelId="dropdown-label"
        input={<OutlinedInput label={label} />}
        {...newProps}
      >
        {options.map((option, i) => (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default SelectDropdown;
