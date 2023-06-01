import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function Project() {
  const worker = useSelector((state) => state.profiles.worker);

  if (!worker) {
    return;
  }

  const { projects } = worker;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "noWrap", sm: "noWrap", md: "wrap" },
        overflowX: "auto",
      }}
    >
      {projects && (projects === null || projects.length === 0) && (
        <Typography>No Uploaded Projects</Typography>
      )}
      {projects &&
        projects.length > 0 &&
        projects.map((image, i) => (
          <Box
            key={i}
            sx={{
              minWidth: 210,
              height: 280,
              background: `url(${image.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 3,
              boxShadow: 3,
              m: 1,
            }}
          ></Box>
        ))}
    </Box>
  );
}

export default Project;
