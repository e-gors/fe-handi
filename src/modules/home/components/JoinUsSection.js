import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { icons } from "../../../components/Icon";
import { styles } from "../../../assets/styles/styles";
import carpenter from "../../../assets/images/carpenter.jpg";
import { useHistory } from "react-router-dom";

const innerStyles = {
  wrapper: {
    mt: 5,
    p: { xs: 1, md: 5 },
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: { xs: "wrap", md: "noWrap" },
  },
  carpenterImage: { width: 420, mb: 3 },
  main: { m: { xs: 0, md: 2 } },
  joinUsForFree: { fontSize: { xs: 20, md: 24 }, fontWeight: "bold" },
  card: { display: "flex", alignItems: "center", mb: 2 },
  cardHeader: { fontSize: { xs: 18, md: 20 }, fontWeight: "bold" },
};

function JoinUsSection() {
  const history = useHistory();
  return (
    <Box sx={innerStyles.wrapper}>
      <Box
        sx={innerStyles.carpenterImage}
        component="img"
        src={carpenter}
      ></Box>

      <Box sx={innerStyles.main}>
        <Box>
          <Typography sx={innerStyles.joinUsForFree}>
            Join us, it's free.
          </Typography>
        </Box>

        <Box sx={innerStyles.card}>
          {icons.moneyOffIcon}
          <Box>
            <Typography sx={innerStyles.cardHeader}>No cost to join</Typography>
            <Typography>
              Register and browse skilled workers, explore jobs and clients.
            </Typography>
          </Box>
        </Box>

        <Box sx={innerStyles.card}>
          {icons.engineeringIcon}
          <Box>
            <Typography
              sx={innerStyles.cardHeader}
            >
              Post a job and hire skilled workers.
            </Typography>
            <Typography>
              Finding skilled workers is easy. Post a job and choose the right
              person for your work!
            </Typography>
          </Box>
        </Box>

        <Box sx={innerStyles.card}>
          {icons.workIcon}
          <Box>
            <Typography
              sx={innerStyles.cardHeader}
            >
              Work with the best - without breaking the bank.
            </Typography>
            <Typography>
              Handi makes it affordable to you and take advantage of low
              transaction rates.
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={styles.customBlueButton}
          onClick={() => history.push("/register")}
        >
          Register for free
        </Button>
      </Box>
    </Box>
  );
}

export default JoinUsSection;
