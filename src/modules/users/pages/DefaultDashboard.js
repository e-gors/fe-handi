import { Box } from "@mui/material";
import React from "react";
import WorkerDashboard from "../components/worker/WorkerDashboard";
import ClientDashboard from "../components/client/ClientDashboard";
import { useSelector } from "react-redux";

function DefaultDashboard() {
  const user = useSelector((state) => state.users.user);
  const { role } = user;

  return (
    <Box
      sx={{
        mt: 8,
        backgroundColor: "white",
        pt: { xs: 1, md: 5 },
      }}
    >
      {role && role === "Worker" && <WorkerDashboard />}
      {role && role === "Client" && <ClientDashboard />}
    </Box>
  );
}

export default DefaultDashboard;
