import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import WDashboard from "./worker/WDashboard";
import CDashboard from "./client/CDashboard";

function Dashboard() {
  const user = useSelector((state) => state.users.user);

  return (
    <Box>
      {user && user.role === "Worker" && <WDashboard />}
      {user && user.role === "Client" && <CDashboard />}
    </Box>
  );
}

export default Dashboard;
