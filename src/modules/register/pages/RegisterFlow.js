import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import ChooseUserRole from "./ChooseUserRole";
import BasicForm from "./BasicForm";
import IdentityVerification from "./IdentityVerification";
import Http from "../../../utils/Http";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AccountCircleIcon />,
    2: <InfoIcon />,
    3: <CloudCircleIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Chose Your Role",
  "Provide Basic Information",
  "Identity Verification",
];

export default function RegisterFlow() {
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedRole, setSelectedRole] = React.useState("");
  const [basicInfo, setBasicInfo] = React.useState();
  const [jobs, setJobs] = React.useState();
  const [skills, setSkills] = React.useState();
  const [image, setImage] = React.useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stack sx={{ width: "100%", mt: 10 }} spacing={1}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <ChooseUserRole
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
          activeStep={activeStep}
          handleSetRole={setSelectedRole}
          role={selectedRole}
        />
      )}

      {activeStep === 1 && (
        <BasicForm
          formData={basicInfo}
          setOfJobs={jobs}
          setOfSkills={skills}
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
          activeStep={activeStep}
          handleSetFormValues={setBasicInfo}
          handleSetJobs={setJobs}
          handleSetSkills={setSkills}
        />
      )}

      {activeStep === 2 && (
        <IdentityVerification
          steps={steps}
          handleBack={handleBack}
          handleNext={handleNext}
          activeStep={activeStep}
          handlesetImages={setImage}
          jobs={jobs}
          skills={skills}
          basicInfo={basicInfo}
          selectedRole={selectedRole}
        />
      )}

      {activeStep === steps.length && (
        <Box>
          <Paper
            square
            elevation={0}
            sx={{ p: 3, width: { xs: 300, md: 400 }, margin: "0 auto" }}
          >
            <Typography>
              All steps completed - You&apos;re now ready!
            </Typography>
            <Button
              onClick={() => history.push("/dashboard")}
              sx={{ mt: 1, mr: 1 }}
              variant="contained"
              color="primary"
              size="small"
            >
              Proceed
            </Button>
          </Paper>
        </Box>
      )}
    </Stack>
  );
}
