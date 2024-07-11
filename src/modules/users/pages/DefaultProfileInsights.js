import { Box } from "@mui/material";
import React from "react";
import WorkerProfileInsight from "../components/worker/WorkerProfileInsight";
import ClientProfileInsight from "../components/client/ClientProfileInsight";

function DefaultProfileInsights() {
  return (
    <Box>
      <Box>
        <WorkerProfileInsight />
        <ClientProfileInsight />
      </Box>
    </Box>
  );
}

export default DefaultProfileInsights;
