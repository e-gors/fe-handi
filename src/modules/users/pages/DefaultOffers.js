import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Offers from "./Offers";

function DefaultOffers() {
  const user = useSelector((state) => state.users.user);
  const { role } = user;

  return (
    <Box sx={{ mt: 8, p: 2 }}>
      <Box>
        <Offers role={role} />
      </Box>
    </Box>
  );
}

export default DefaultOffers;
