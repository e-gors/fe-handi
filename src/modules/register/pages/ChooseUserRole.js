import { Box, Button, Typography } from "@mui/material";
import React from "react";
import checked from "../../../assets/images/checked.png";
import client from "../../../assets/images/client.png";
import worker from "../../../assets/images/worker.png";

const styles = {
  userRoleWrapper: {
    p: 3,
    maxWidth: 800,
    margin: "0 auto",
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  skilledWorkerWrapperSelected: {
    position: "relative",
    mb: 2,
    height: 144,
    backgroundColor: "#F9F9F9",
    cursor: "pointer",
    border: "2px solid blue",
    p: 1,
    display: "flex",
    flexWrap: "noWrap",
    width: "48%",
    "&:hover": {
      boxShadow: 4,
    },

    "@media(max-width: 600px )": {
      width: "95%",
    },
  },

  skilledWorkerWrapper: {
    position: "relative",
    mb: 2,
    height: 144,
    backgroundColor: "#F9F9F9",
    cursor: "pointer",
    border: "2px solid #F9F9F9",
    p: 1,
    display: "flex",
    flexWrap: "noWrap",
    width: "48%",
    "&:hover": {
      boxShadow: 4,
    },

    "@media(max-width: 600px )": {
      width: "95%",
    },
  },

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
    "&:hover": {
      boxShadow: 4,
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
    "&:hover": {
      boxShadow: 4,
    },

    "@media(max-width: 600px )": {
      width: "95%",
    },
  },
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
    width: "45%",
    maxWidth: 200,
    backgroundColor: "#B9326F",
    "&:hover": {
      backgroundColor: "#ED563E",
    },
  },
};

function ChooseUserRole(props) {
  const { role, activeStep, handleBack, handleNext, steps, handleSetRole } =
    props;

  const [selectedRole, setSelectedRole] = React.useState("Worker");

  React.useEffect(() => {
    if (role) {
      setSelectedRole(role);
    }
  }, [role]);

  const isClient = () => {
    return selectedRole === "Client";
  };

  const handlePaymentType = (value) => {
    setSelectedRole(value);
  };

  const handlePassSelectedRole = () => {
    handleSetRole(selectedRole);
    handleNext();
  };

  return (
    <Box>
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

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box component="img" src={worker} alt="Worker"></Box>
            <Box>
              <Typography sx={{ color: "blue", fontWeight: "bold" }}>
                Skilled Worker
              </Typography>
              <Typography>You are looking for a job.</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={isClient() ? styles.clientWrapperSelected : styles.clientWrapper}
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

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={client}
              alt="Client"
              sx={{ width: 110 }}
            ></Box>
            <Box>
              <Typography sx={{ color: "blue", fontWeight: "bold" }}>
                Client
              </Typography>
              <Typography>You are looking for a worker.</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.buttonWrapper}>
          <Button
            size="small"
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={styles.back}
          >
            Back
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={handlePassSelectedRole}
            sx={styles.next}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ChooseUserRole;
