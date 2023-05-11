import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import WDashboard from "./worker/WDashboard";
import CDashboard from "./client/CDashboard";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();

  const user = useSelector((state) => state.users.user);

  const profile_completeness =
    user &&
    user.role !== "Super Admin" &&
    user.profile &&
    user.profile[0].profile_completeness
      ? user.profile[0].profile_completeness
      : null;

  // React.useEffect(() => {
  //   if (profile_completeness && profile_completeness <= 3) {
  //     history.push("/onboarding");
  //   }
  // }, []);

  return (
    <Box>
      {user && user.role === "Worker" && <WDashboard />}
      {user && user.role === "Client" && <CDashboard />}
    </Box>
  );
}

export default Dashboard;
