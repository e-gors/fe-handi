import React from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  wrapper: {
    mt: 8,
    p: 2,
  },
  main: {},
};

function DefaultSettings() {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <Typography>Settings</Typography>
      </Box>
    </Box>
  );
}

export default DefaultSettings;
