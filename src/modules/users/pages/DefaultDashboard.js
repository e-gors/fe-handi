import { Box } from "@mui/material";
import React from "react";
import WorkerDashboard from "../components/worker/WorkerDashboard";

function DefaultDashboard() {
  return (
    <Box
      sx={{
        mt: 8,
        backgroundColor: "white",
        pt: { xs: 1, md: 5 },
      }}
    >
      <WorkerDashboard />
    </Box>
  );
}

export default DefaultDashboard;
