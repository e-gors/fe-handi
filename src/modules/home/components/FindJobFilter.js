import { Box, Button } from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import SelectDropdown from "../../../components/SelectDropdown";

const salaryRange = [
  "250 - 500",
  "500 - 1000",
  "1000 - 5000",
  "5000 - 10000",
  "10000 - 20000",
];
const location = ["Hilongos", "Hindang", "Bato", "Hindang", "Matalom"];

function FindJobFilter() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "space-evenly",
        border: "1px solid gray",
        width: "80%",
        m: "0 auto",
      }}
    >
      <FormField
        size="small"
        variant="standard"
        sx={{ width: 360 }}
        label="Search"
      />
      <SelectDropdown
        size="small"
        sx={{ width: 360 }}
        variant="standard"
        label="Salary range"
        options={salaryRange}
      />
      <SelectDropdown
        size="small"
        sx={{ width: 320 }}
        variant="standard"
        label="Location"
        options={location}
      />
      <Button
        variant="contained"
        size="large"
        sx={{
          minWidth: 150,
          background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
        }}
      >
        Find Offers
      </Button>
    </Box>
  );
}

export default FindJobFilter;
