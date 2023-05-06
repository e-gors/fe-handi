import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import checked from "../../../assets/images/checked.png";
import client from "../../../assets/images/client.png";
import worker from "../../../assets/images/worker.png";
import { useHistory } from "react-router-dom";

const styles = {
  wrapper: { mt: 10 },
  main: {
    p: 3,
    maxWidth: 800,
    margin: "0 auto",
  },
  cardWrapper: {
    display: "flex",
    alignItems: "center",
  },
  chooseRoleHeader: {
    fontSize: { xs: 20, md: 24 },
    fontWeight: "bold",
  },
  chooseRole: {
    mb: 5,
    fontSize: 14,
  },
  userRoleWrapper: {
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  skilledWorkerWrapperSelected: {
    position: "relative",
    mb: 2,
    height: 144,
    backgroundColor: "#F4F5F8",
    cursor: "pointer",
    border: "2px solid blue",
    p: 1,
    display: "flex",
    flexWrap: "noWrap",
    width: "48%",
    boxShadow: 10,

    "&:hover": {
      boxShadow: 5,
    },

    "@media(max-width: 600px )": {
      width: "95%",
    },
  },

  skilledWorkerWrapper: {
    position: "relative",
    mb: 2,
    height: 144,
    backgroundColor: "#F4F5F8",
    cursor: "pointer",
    border: "2px solid #F9F9F9",
    p: 1,
    display: "flex",
    flexWrap: "noWrap",
    width: "48%",
    boxShadow: 10,

    "&:hover": {
      boxShadow: 5,
    },
    "@media(max-width: 600px )": {
      width: "95%",
    },
  },

  cardHeader: { color: "blue", fontWeight: "bold" },

  checkSelected: {
    width: 50,
    position: "absolute",
    right: -10,
    top: -15,
  },

  check: {
    width: 30,
    position: "absolute",
    right: 0,
    top: 0,
    display: "none",
  },

  clientWrapperSelected: {
    position: "relative",
    mb: 2,
    height: 144,
    backgroundColor: "#F9F9F9",
    cursor: "pointer",
    border: "2px solid blue",
    display: "flex",
    flexWrap: "noWrap",
    p: 1,
    width: "48%",
    boxShadow: 10,

    "&:hover": {
      boxShadow: 5,
    },

    "@media(max-width: 600px )": {
      width: "95%",
    },
  },
  clientWrapper: {
    position: "relative",
    mb: 2,
    height: 144,
    backgroundColor: "#F9F9F9",
    cursor: "pointer",
    border: "2px solid #F9F9F9",
    display: "flex",
    flexWrap: "noWrap",
    p: 1,
    width: "48%",
    boxShadow: 10,

    "&:hover": {
      boxShadow: 5,
    },

    "@media(max-width: 600px )": {
      width: "95%",
    },
  },
  clientImage: { width: 110 },
  buttonWrapper: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    margin: "20px auto",
  },
  back: {
    width: "45%",
    maxWidth: 200,
  },
  next: {
    width: { xs: "100%", md: "45%" },
    maxWidth: 200,
    background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
    margin: "0 auto",
    transition: "1s",
    boxShadow: 10,

    "&:hover": {
      background: `linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)`,
    },
  },
};

function Register() {
  const history = useHistory();
  const [selectedRole, setSelectedRole] = React.useState("Worker");

  React.useEffect(() => {
    let role = localStorage.getItem("selectedRole");

    if (role) {
      setSelectedRole(role);
    }
  }, []);

  const isClient = () => {
    return selectedRole === "Client";
  };

  const handlePaymentType = (value) => {
    setSelectedRole(value);
  };

  const handlePassSelectedRole = () => {
    localStorage.setItem("selectedRole", selectedRole);
    history.push(`/join-us/${selectedRole}`);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <Typography sx={styles.chooseRoleHeader}>Get Started</Typography>
        <Typography sx={styles.chooseRole}>Start by choosing your role.</Typography>
        <Box sx={styles.userRoleWrapper}>
          <Box
            sx={
              !isClient()
                ? styles.skilledWorkerWrapperSelected
                : styles.skilledWorkerWrapper
            }
            boxShadow={1}
            selected={!isClient()}
            onClick={() => handlePaymentType("Worker")}
          >
            {!isClient() && (
              <Box
                component="img"
                alt="Checked"
                src={checked}
                sx={styles.checkSelected}
              />
            )}

            <Box sx={styles.cardWrapper}>
              <Box component="img" src={worker} alt="Worker"></Box>
              <Box>
                <Typography sx={styles.cardHeader}>Skilled Worker</Typography>
                <Typography>You are looking for a job.</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={
              isClient() ? styles.clientWrapperSelected : styles.clientWrapper
            }
            boxShadow={1}
            selected={isClient()}
            onClick={() => handlePaymentType("Client")}
          >
            {isClient() && (
              <Box
                component="img"
                alt="Checked"
                src={checked}
                sx={styles.checkSelected}
              />
            )}

            <Box sx={styles.cardWrapper}>
              <Box
                component="img"
                src={client}
                alt="Client"
                sx={styles.clientImage}
              ></Box>
              <Box>
                <Typography sx={styles.cardHeader}>Client</Typography>
                <Typography>You are looking for a worker.</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.buttonWrapper}>
            <Button
              variant="contained"
              onClick={handlePassSelectedRole}
              sx={styles.next}
              disabled={selectedRole ? false : true}
            >
              Join as {selectedRole}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
