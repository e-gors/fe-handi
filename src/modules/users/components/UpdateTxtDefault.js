import { Box, Typography } from "@mui/material";
import React from "react";

const styles = {
  wrapper: {
    p: 1,
    border: "1px solid black",
    borderRadius: 3,
    display: "flex",
    alignItems: "center",
    transition: "0.5s",
    cursor: "pointer",

    "&:hover": {
      border: "1px solid blue",

      ".title": {
        color: "blue",
      },
    },
  },
  title: { fontWeight: "bold", fontSize: 13 },
};
function UpdateTxtDefault(props) {
  const { icon, title, content, handleSetType } = props;

  return (
    <Box>
      <Box sx={styles.wrapper} onClick={() => handleSetType(title)}>
        {icon}
        <Box sx={{ ml: 2 }}>
          <Typography sx={styles.title} className="title">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>{content}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default UpdateTxtDefault;
