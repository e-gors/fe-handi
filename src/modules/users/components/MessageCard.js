import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function MessageCard() {
  return (
    <Grid container gap={1}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          background: "linear-gradient(to right, #643FD7, #646FFD)",
          width: { xs: "100%", sm: 240, md: 300 },
          height: 350,
          p: 2,
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "50%",
            }}
          >
            <Box>
              <Typography>Title</Typography>
              <Typography>Number</Typography>
            </Box>
            <Typography>Icon</Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            It is a long established fact that a reader will be distracted.
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MessageCard;
