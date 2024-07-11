import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function DashboardCard() {
  return (
    <Grid container gap={1}>
      <Grid
        item
        sm={12}
        md={3.8}
        lg={2.9}
        sx={{
          background: "linear-gradient(to right, #FEBE96, #FE8496)",
          width: { xs: "100%", sm: 240, md: 280 },
          height: 200,
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
      <Grid
        item
        sm={12}
        md={3.8}
        lg={2.9}
        sx={{
          background: "linear-gradient(to right, #8FCAF9, #2992E6)",
          width: { xs: "100%", sm: 240, md: 280 },
          height: 200,
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
      <Grid
        item
        sm={12}
        md={3.8}
        lg={2.9}
        sx={{
          background: "linear-gradient(to right, #83D9D1, #27D0B7)",
          width: { xs: "100%", sm: 240, md: 280 },
          height: 200,
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
      <Grid
        item
        sm={12}
        md={3.8}
        lg={2.9}
        sx={{
          background: "linear-gradient(to right, #815EF6, #E972E8)",
          width: { xs: "100%", sm: 240, md: 280 },
          height: 200,
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

export default DashboardCard;
