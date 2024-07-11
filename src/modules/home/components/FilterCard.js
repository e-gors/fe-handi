import React from "react";
import { Badge, Box, Button, Rating, Typography } from "@mui/material";

function FilterCard() {
  const [value, setValue] = React.useState(5);
  return (
    <Box
      sx={{
        border: "1px solid gray",
        borderRadius: "10px 10px",
        p: 2,
        maxWidth: 800,
        width: "auto",
        m: { xs: "5px auto", md: 1 },
        background: "rgb(30, 36, 46)",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ mr: 2 }}>Efren Goron</Typography>
          <Rating name="read-only" value={value} readOnly />
        </Box>
        <Typography>04/03/2023</Typography>
      </Box>
      <Typography sx={{ mt: "10px" }}>Carpenter</Typography>

      <Box sx={{ display: "flex", mb: "10px" }}>
        <Typography sx={{ mr: 2 }}>P500</Typography>
        <Typography>Hilongos, Leyte</Typography>
      </Box>

      <Typography>
        About the job offer Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: 2,
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
          }}
        >
          Apply
        </Button>
        <Badge badgeContent={3} color="primary">
          <Button variant="outlined">Comments</Button>
        </Badge>
      </Box>
    </Box>
  );
}

export default FilterCard;
