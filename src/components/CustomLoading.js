import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CustomLoading() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <CircularProgress size="3rem" />
    </Box>
  );
}
