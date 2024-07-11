import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

function MyMessageBody(props) {
  const {messages, username, profile_url} = props;

  let today = new Date();
  let time = today.getHours() + ":" + today;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          fontSize: { xs: 12, md: 13 },
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", position: "absolute", right: 0 }}>
          <Avatar
            sx={{ width: { xs: 25, md: 30 }, height: { xs: 25, md: 30 } }}
          >
            E
          </Avatar>
          <Box sx={{ ml: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "inherit" }}>{username}</Typography>
              <Typography sx={{ fontSize: "inherit" }}>{time}</Typography>
            </Box>
            <Typography
              sx={{
                background: "#0084FF",
                p: 1,
                fontSize: "inherit",
                borderRadius: 3,
                mt: 1,
                width: "100%",
                color: "white",
              }}
            >
             {messages}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MyMessageBody;
