import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

function TheirMessageBody() {
  return (
    <Box>
      <Box sx={{ display: "flex", fontSize: { xs: 12, md: 13 }, m: 2 }}>
        <Avatar sx={{ width: { xs: 25, md: 30 }, height: { xs: 25, md: 30 } }}>
          E
        </Avatar>
        <Box sx={{ ml: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "inherit" }}>Username</Typography>
            <Typography sx={{ fontSize: "inherit" }}>Thu 11:40 am</Typography>
          </Box>
          <Typography
            sx={{
              background: "#E4E6EB",
              p: 1,
              fontSize: "inherit",
              borderRadius: 3,
              mt: 1,
              width: "100%",
            }}
          >
            Hi! My name is Criscilla B. Gumanid and I am studying at MLG College
            of Learning, Inc. Brgy. Atabay Hilongos, Leyte. I am currently
            living at Brgy. Atabay Hilongos, Leyte with my new family.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default TheirMessageBody;
