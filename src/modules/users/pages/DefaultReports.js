import React from "react";
import { Box } from "@mui/material";
import WorkerReports from "../components/worker/WorkerReports";
import ClientReports from "../components/client/ClientReports";
import { useSelector } from "react-redux";

function DefaultReports() {
  const user = useSelector((state) => state.users.user);
  return (
    <Box sx={{ mt: 8, p: 2 }}>
      <Box>
        {/* <WorkerReports /> */}
        <ClientReports />
      </Box>
    </Box>
  );
}

export default DefaultReports;
