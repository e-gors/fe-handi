import { Box } from "@mui/material";
import React from "react";
import WorkerMarketplace from "../components/worker/WorkerMarketplace";
import ClientMarketplace from "../components/client/ClientMarketplace";

function DefaultMarketplace() {
  return (
    <Box sx={{ mt: 8 }}>
      <WorkerMarketplace />
      <ClientMarketplace />
    </Box>
  );
}

export default DefaultMarketplace;
