import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { icons } from "../../../components/Icon";
import { styles } from "../../../assets/styles/styles";
import carpenter from "../../../assets/images/carpenter.jpg";

function JoinUsSection() {
  return (
    <Box
      sx={{
        mt: 5,
        p: { xs: 1, md: 5 },
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: { xs: "wrap", md: "noWrap" },
      }}
    >
      <Box sx={{ width: 420, mb: 3 }} component="img" src={carpenter}></Box>

      <Box sx={{ m: { xs: 0, md: 2 } }}>
        <Box>
          <Typography sx={{ fontSize: { xs: 24, md: 36 }, fontWeight: "bold" }}>
            Join us, it's free.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          {icons.moneyOffIcon}
          <Box>
            <Typography
              sx={{ fontSize: { xs: 18, md: 20 }, fontWeight: "bold" }}
            >
              No cost to join
            </Typography>
            <Typography>
              Register and browse skilled workers, explore jobs and clients.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          {icons.engineeringIcon}
          <Box>
            <Typography
              sx={{ fontSize: { xs: 18, md: 20 }, fontWeight: "bold" }}
            >
              Post a job and hire skilled workers.
            </Typography>
            <Typography>
              Finding skilled workers is easy. Post a job and choose the right
              person for your work!
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          {icons.workIcon}
          <Box>
            <Typography
              sx={{ fontSize: { xs: 18, md: 20 }, fontWeight: "bold" }}
            >
              Work with the best - without breaking the bank.
            </Typography>
            <Typography>
              Handi makes it affordable to you and take advantage of low
              transaction rates.
            </Typography>
          </Box>
        </Box>

        <Button variant="contained" sx={styles.customBlueButton}>
          Register for free
        </Button>
      </Box>
    </Box>
  );
}

export default JoinUsSection;
