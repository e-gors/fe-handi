import { Box } from "@mui/material";
import React from "react";
import WorkerMarketplace from "../components/worker/WorkerMarketplace";
import ClientMarketplace from "../components/client/ClientMarketplace";
import { useSelector } from "react-redux";

function DefaultMarketplace() {
  const user = useSelector((state) => state.users.user);
  // const profiles = useSelector((state) => state.profiles.profiles);
  // const posts = useSelector((state) => state.posts.posts);
  const { role } = user;

  return (
    <Box sx={{ mt: 8 }}>
      {role === "Worker" && <WorkerMarketplace posts />}
      {role === "Client" && <ClientMarketplace profiles />}
    </Box>
  );
}

export default DefaultMarketplace;
