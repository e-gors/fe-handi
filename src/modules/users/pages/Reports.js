import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import WReports from "./worker/WReports";
import CReports from "./client/CReports";

function Reports() {
  const user = useSelector((state) => state.users.user);

  return (
    <Box sx={{ mt: 8, p: 2 }}>
      {user && user.role === "Worker" && <WReports />}
      {user && user.role === "Client" && <CReports />}
    </Box>
  );
}

export default Reports;
