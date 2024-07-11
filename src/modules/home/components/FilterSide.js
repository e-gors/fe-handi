import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";

function FilterSide() {
  return (
    <Box>
      <Box>
      <Typography>Salary Range</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="250-500" />
        <FormControlLabel control={<Checkbox />} label="500-1000" />
        <FormControlLabel control={<Checkbox />} label="1000-5000" />
        <FormControlLabel control={<Checkbox />} label="5000-10000" />
        <FormControlLabel control={<Checkbox />} label="10000-20000" />
      </FormGroup>
      </Box>

      <Box>
      <Typography>Location</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Inopacan" />
        <FormControlLabel control={<Checkbox />} label="Hilongos" />
        <FormControlLabel control={<Checkbox />} label="Hindang" />
        <FormControlLabel control={<Checkbox />} label="Bato" />
        <FormControlLabel control={<Checkbox />} label="Matalom" />
      </FormGroup>
      </Box>

    </Box>
  );
}

export default FilterSide;
