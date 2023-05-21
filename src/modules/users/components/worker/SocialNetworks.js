import { Box, Typography } from "@mui/material";
import React from "react";

const styles = {
  wrapper: {
    mt: 1,
    p: 1,
    border: "1px solid #BEBEBE",
    cursor: "pointer",
    borderRadius: 3,

    "&:hover": {
      ".title": {
        color: "blue",
      },
    },
  },
  main: {
    display: "flex",
    alignItems: "center",
  },
  textsWrapper: {
    ml: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: { xs: 12, md: 14 },
  },
  text: { fontSize: { xs: 11, md: 12 } },
};

function SocialNetworks(props) {
  const { handleOpen, title, content, Icon } = props;
  return (
    <Box sx={styles.wrapper} onClick={() => handleOpen("Social Networks")}>
      <Box sx={styles.main}>
        <Icon color="primary" />
        <Box sx={styles.textsWrapper}>
          <Typography sx={styles.title} className="title">
            {title}
          </Typography>
          <Typography sx={styles.text}>{content}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SocialNetworks;
