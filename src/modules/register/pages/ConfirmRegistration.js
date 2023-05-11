import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const styles = {
  wrapper: {
    mt: 10,
    p: 1,
  },
  main: {
    width: { xs: "100%", sm: 500, md: 600 },
    margin: "30px auto",
    p: { xs: 4, md: 5 },
    backgroundColor: "#EEEEEE",
    borderRadius: 3,
  },
  headerHello: {
    mb: 3,
    fontSize: { xs: 18, md: 22 },
  },
  descriptions: { mb: 2, fontSize: { xs: 14, md: 18 } },
  email: {
    fontWeight: "600",
  },
};

function ConfirmRegistration() {
  const history = useHistory();

  const verifiedUser = useSelector((state) => state.users.user);
  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    if (verifiedUser && verifiedUser.email_verified_at !== null) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <Typography sx={styles.headerHello}>
          Hello there {user && user.first_name}, thank you for
          Joining {process.env.REACT_APP_NAME}!
        </Typography>
        <Typography sx={styles.descriptions}>
          We have sent you an activation email on{" "}
          <span style={styles.email}>{user && user.email}</span>
        </Typography>
        <Typography sx={styles.descriptions}>
          Go to your email inbox and follow the instructions to verify your
          email and proceed!
        </Typography>
        <Typography sx={styles.descriptions}>
          You cannot proceed to dashboard if your account is not verified.
        </Typography>
      </Box>
    </Box>
  );
}

export default ConfirmRegistration;
