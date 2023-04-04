import { Box, Typography } from '@mui/material';
import React from 'react'
import {icons} from '../../../components/Icon';

const sectionTwoData = [
    {
      icon: icons.workIcon,
      num: 100000,
      text: "Job Offers",
    },
    {
      icon: icons.engineeringIcon,
      num: 100000,
      text: "Skilled Workers",
    },
    {
      icon: icons.peopleIcon,
      num: 100000,
      text: "Active Clients",
    },
    {
      icon: icons.taskIcon,
      num: 100000,
      text: "Completed Projects",
    },
  ];

function CardSet() {
  return (
    <Box
    component="div"
    sx={{
      backgroundColor: "#1976D2",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      p: 1,
    }}
  >
    {sectionTwoData &&
      sectionTwoData.map((data, i) => {
        return (
          <Box key={i} sx={{ display: "flex", alignItems: "center", color: 'white' }}>
            {data.icon}
            <Box>
              <Typography
                sx={{ fontSize: { xs: 18, md: 24 } }}
              >
                +{data.num}
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 14, md: 20 } }}
              >
                {data.text}
              </Typography>
            </Box>
          </Box>
        );
      })}
  </Box>
  )
}

export default CardSet