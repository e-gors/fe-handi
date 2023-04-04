import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import RegistrationProgress from "../components/RegistrationProgress";
import { useHistory } from "react-router-dom";
import checked from "../../../assets/images/checked.png";
import client from "../../../assets/images/client.png";
import worker from "../../../assets/images/worker.png";
import FormField from "../../../components/FormField";
import SelectDropdown from "../../../components/SelectDropdown";

const styles = {
  next: {
    backgroundColor: "#AF0C64",
    "&:hover": {
      backgroundColor: "#AF0C64",
    },
  },

  wrapper: {
    overflow: "auto",
  },

  titleTop: {
    mt: 4,
    mb: 2,
    display: "flex",
    alignItems: "flex-end",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    mr: 1,
    "@media (max-width: 880px)": {
      fontSize: 20,
      textAlign: "center",
    },
  },

  smallTitle: {
    color: "gray",
    "@media (max-width: 880px)": {
      fontSize: 11,
      textAlign: "center",
    },
  },

  paymentMethodWrapper: {
    mt: 3,
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  cashPaymentMethodWrapperSelected: {
    position: "relative",
    minWidth: 250,
    mb: 2,
    width: "45%",
    height: 144,
    backgroundColor: "#F9F9F9",
    cursor: "pointer",
    border: "2px solid red",
    p: 1,

    "&:hover": {
      boxShadow: 4,
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

  cashPaymentMethodWrapper: {
    position: "relative",
    minWidth: 250,
    mb: 2,
    width: "45%",
    height: 144,
    backgroundColor: "#F9F9F9",
    cursor: "pointer",
    border: "2px solid #F9F9F9",
    p: 1,

    "&:hover": {
      boxShadow: 4,
    },
  },

  cashPaymentMethod: {
    width: "30%",
    m: "40px auto",
  },

  gcashPaymentMethodWrapperSelected: {
    position: "relative",
    minWidth: 250,
    mb: 1,
    width: "45%",
    height: 144,
    backgroundColor: "#F9F9F9",
    cursor: "pointer",
    border: "2px solid red",

    "&:hover": {
      boxShadow: 4,
    },
  },
  gcashPaymentMethodWrapper: {
    position: "relative",
    minWidth: 250,
    mb: 1,
    width: "45%",
    height: 144,
    backgroundColor: "#F9F9F9",
    cursor: "pointer",
    border: "2px solid #F9F9F9",

    "&:hover": {
      boxShadow: 4,
    },
  },

  gcashPaymentMethod: {
    width: "60%",
    m: "53px auto",
  },

  checkbox: {
    position: "absolute",
    top: -5,
    left: 0,
  },

  policy: {
    position: "relative",
    mb: 3,
    mt: 2,

    "@media(max-width: 1128px)": {
      mt: 5,
    },

    "@media(max-width: 665px)": {
      mt: 5,
    },
  },
};

const jobInterest = [
  "Carpenter",
  "Plumber",
  "Construction Worker",
  "Electrician",
  "Machine Operator",
];
const skillOptions = [
  "Loyal",
  "Time management",
  "Machine operation",
  "Flexible",
  "Creative",
  "Leadership",
  "Positive",
];

export default function RegisterFlow() {
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [selectedRole, setSelectedRole] = React.useState("worker");
  const [checkStatus, setCheckStatus] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [skills, setSkills] = React.useState([]);
  const [jobs, setJobs] = React.useState([]);

  const isClient = () => {
    return selectedRole === "client";
  };

  const handleChangeSkills = (event) => {
    const {
      target: { value },
    } = event;
    setSkills(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeJobs = (event) => {
    const {
      target: { value },
    } = event;
    setJobs(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const steps = [
    {
      label: "Choose between Client and Skilled Worker",
      body: (
        <Box sx={styles.paymentMethodWrapper}>
          <Box
            sx={
              !isClient()
                ? styles.cashPaymentMethodWrapperSelected
                : styles.cashPaymentMethodWrapper
            }
            boxShadow={1}
            selected={!isClient()}
            onClick={() => handlePaymentType("worker")}
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
                <Typography sx={{ color: "red", fontWeight: "bold" }}>
                  Skilled Worker
                </Typography>
                <Typography>You are looking for a job.</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={
              isClient()
                ? styles.gcashPaymentMethodWrapperSelected
                : styles.gcashPaymentMethodWrapper
            }
            boxShadow={1}
            selected={!isClient()}
            onClick={() => handlePaymentType("client")}
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
                <Typography sx={{ color: "red", fontWeight: "bold" }}>
                  Client
                </Typography>
                <Typography>You are looking for a worker.</Typography>
              </Box>
            </Box>
          </Box>

          {/* <Typography
            sx={{
              background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
              p: '5px 30px',
              color: 'white',
              borderRadius: '20px'
            }}
          >
            Join us {selectedRole}
          </Typography> */}
        </Box>
      ),
    },
    {
      label: "Provide your basic information",
      body: (
        <Box component="form">
          <FormField
            name="first_name"
            label="Firstname"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
          <FormField
            name="last_name"
            label="Lastname"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
          <FormField
            name="address"
            label="Address"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
          <FormField
            name="contact_number"
            label="Contact Number"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
          <FormField
            name="gender"
            label="Gender"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
        </Box>
      ),
    },
    {
      label: "Upload required photos",
      body: (
        <Box component="form">
          <FormField
            name="profile_photo"
            label="Profile Photo"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
          <FormField
            name="valid_id_front"
            label="Valid ID Front"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
          <FormField
            name="valid_id_back"
            label="Valid ID Back"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
          <FormField
            name="brgy_clearance"
            label="Brgy Clearance"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
          <FormField
            name="police_clearance"
            label="Police Clearance"
            variant="standard"
            sx={{ mr: { xs: 0, md: 4 } }}
            required
          />
        </Box>
      ),
    },
    {
      label: "Select and finalize your skills and expertise",
      body: (
        <Box>
          <SelectDropdown
            options={jobInterest}
            size="small"
            label="Job Interest"
            multiple
            value={jobs}
            onChange={handleChangeJobs}
          />
          <SelectDropdown
            options={skillOptions}
            size="small"
            label="Your Skills"
            multiple
            value={skills}
            onChange={handleChangeSkills}
          />
        </Box>
      ),
    },
  ];

  const length = 100 / steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setProgress((prevProgress) => prevProgress + length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setProgress((prevProgress) => prevProgress - length);
  };

  const handlePaymentType = (value) => {
    setSelectedRole(value);
  };

  const handleCheckChange = () => {
    setShowError(false);
    setCheckStatus(!checkStatus);
  };

  return (
    <Box sx={{ maxWidth: 600, m: "60px auto", p: 1 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {step.body}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - You&apos;re now ready!</Typography>
          <Button
            onClick={() => history.push("/profile")}
            sx={{ mt: 1, mr: 1 }}
            variant="contained"
            color="primary"
          >
            Done
          </Button>
        </Paper>
      )}

      <RegistrationProgress progress={progress} />
    </Box>
  );
}
