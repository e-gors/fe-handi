import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";

function SelectDropdown(props) {
  const {
    label,
    errors,
    options = [],
    categories = [],
    subCategories = [],
    contracts,
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
    <FormControl
      size="small"
      sx={{
        width: "100%",
        mt: 0.5,
        mb: 0.5,
      }}
    >
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
        {categories.map((category, i) => (
          <MenuItem key={i} value={category.name}>
            {category.name}
          </MenuItem>
        ))}
        {subCategories.map((category) =>
          category.children.map((child, i) => (
            <MenuItem key={i} value={child.name}>
              {child.name}
            </MenuItem>
          ))
        )}
        {contracts && contracts.map((contract, i) => (
          <MenuItem key={i} value={contract}>
            {contract.post.title}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default SelectDropdown;
