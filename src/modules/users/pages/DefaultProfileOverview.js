import { Box } from "@mui/material";
import React from "react";
// import WorkerProfileOcerview from "../components/worker/WorkerProfileOverview";
// import ClientProfileOverview from "../components/client/ClientProfileOverview";
import { useSelector } from "react-redux";

function DefaultProfile() {
  const user = useSelector((state) => state.users.user);
  const { role } = user;

  return (
    <Box sx={{ mt: 10, p: 2 }}>
      <Box>
        {/* {user && role === "Worker" && <WorkerProfileOcerview />} */}
        {/* {user && role === "Client" && <ClientProfileOverview />} */}
      </Box>
    </Box>
  );
}

export default DefaultProfile;
