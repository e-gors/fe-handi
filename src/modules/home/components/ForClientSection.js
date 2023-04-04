import { Box, Typography } from '@mui/material'
import React from 'react'
import client from "../../../assets/images/client-finding.jpg";
import { icons } from '../../../components/Icon';

function ForClientSection() {
  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mt: 3,
      flexWrap: { xs: "wrap", md: "wrap", lg: "noWrap" },
      p: 1,
    }}
  >
    <Box sx={{ p: 1 }}>
      <Typography sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}>
        For Client
      </Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: { xs: 24, md: 36 } }}>
        Find skilled workers
      </Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: { xs: 24, md: 36 } }}>
        in your best way
      </Typography>
      <Typography>
        Work with so many skilled workers and find clients based on your
        expertise! You can also post job for your project.
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid gray",
          mt: 1,
          p: 1,
          mb: 1,
        }}
      >
        {icons.workIcon}
        <Box>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: 18, md: 24 } }}
          >
            Find job
          </Typography>
          <Typography>
            Filter the job posts and find the job that are align to your
            skills and talents.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid gray",
          p: 1,
          mb: 1,
        }}
      >
        {icons.engineeringIcon}

        <Box>
          <Typography
            sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: "bold" }}
          >
            Browse skilled workers
          </Typography>
          <Typography>
            Find the best skilled workers base on their rating for your
            project.
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box
      sx={{ width: { xs: "100%", md: 820 }, m: "0 auto" }}
      component="img"
      src={client}
    ></Box>
  </Box>
  )
}

export default ForClientSection