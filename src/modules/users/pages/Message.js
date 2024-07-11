import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MessageContainer from "../components/MessageContainer";
import RecentMessageContainer from "../components/RecentMessageContainer";

function Message() {
  return (
    <Box>
      <Typography>All Messages</Typography>

      <Box sx={{ display: "flex" }}>
        <RecentMessageContainer />

        <Box
          sx={{
            border: "1px solid black",
            width: "100%",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Efren Goron" sx={{ width: 40, height: 40 }} />
              </Stack>
              <Box sx={{ ml: 1, mr: 1 }}>
                <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 18 } }}>
                  Efren Goron
                </Typography>
                <Typography sx={{ fontSize: { xs: 11, sm: 13, md: 16 } }}>
                  @username
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: 11,
                  color: "green",
                  mt: { xs: 0, md: 1 },
                }}
              >
                • online
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                sx={{ mr: 1, mt: { md: 1 } }}
              >
                <CallIcon /> Call
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                sx={{ mr: 1, mt: { md: 1 } }}
              >
                Archive
              </Button>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                sx={{ mr: 1, mt: { md: 1 } }}
              >
                View profile
              </Button>
            </Box>
          </Box>
          <Divider />

          <Box>
            <MessageContainer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Message;
