import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function ConfirmRegistration() {
  const user = useSelector((state) => state.users.user);
  const {first_name, email} = user;
  return (
    <Box sx={{ mt: 8, minHeight: { md: "61.1vh", xs: "100%" } }}>
      <Box sx={{ width: { xs: "100%", md: 600 }, margin: "0 auto", p: {xs: 4, md: 5} }}>
        <Typography sx={{ mb: 1, fontSize: { xs: 18, md: 22 } }}>
          Hello {first_name}, thank you for subscribing!
        </Typography>
        <Typography sx={{ mb: 1, fontSize: { xs: 18, md: 22 } }}>
          We have sent you an activation email on{" "}
          <span style={{ fontWeight: "600" }}>{email}</span>
        </Typography>
        <Typography sx={{ mb: 1, fontSize: { xs: 18, md: 22 } }}>
          Go to your email inbox and follow the instructions to verify your
          email and proceed to earn money and meet your needs!
        </Typography>
      </Box>
    </Box>
  );
}

export default ConfirmRegistration;
