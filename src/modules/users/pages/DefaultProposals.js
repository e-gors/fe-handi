import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import WorkerProposal from "../components/worker/WorkerProposal";
import ClientProposal from "../components/client/ClientProposal";

function DefaultProposals() {
  const user = useSelector((state) => state.users.user);
  const { role } = user;
  return (
    <Box sx={{ mt: 8, p: 2 }}>
      <Box>
        {user && role === "Worker" && <WorkerProposal />}
        {user && role === "Client" && <ClientProposal />}
      </Box>
    </Box>
  );
}

export default DefaultProposals;
