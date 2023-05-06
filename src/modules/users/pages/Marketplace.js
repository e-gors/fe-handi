import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import WMarketplace from "./worker/WMarketplace";
import CMarketplace from "./client/CMarketplace";

function Marketplace() {
  const user = useSelector((state) => state.users.user);

  return (
    <Box>
      {user && user.role === "Worker" && <WMarketplace />}
      {user && user.role === "Client" && <CMarketplace />}
    </Box>
  );
}

export default Marketplace;
