import { Box, Button, InputAdornment } from "@mui/material";
import React from "react";
import FormField from "../../../components/FormField";
import SearchIcon from "@mui/icons-material/Search";
import SelectDropdown from "../../../components/SelectDropdown";

function FindJobFilter() {
  return (
    <Box>
      <Box
        sx={{
          mt: 2,
          width: "80%",
          margin: "0 auto",
          display: "flex",
        }}
      >
        <FormField
          fullWidth
          name="search"
          placeholder="Job title or keywork"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mt: 0.5 }}
        />
        <SelectDropdown
          fullWidth
          name="location"
          label="Location"
          size="small"
        />
        <SelectDropdown
          fullWidth
          name="location"
          label="Location"
          size="small"
        />
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{ minWidth: 100, height: 45, borderRadius: 10 }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default FindJobFilter;
