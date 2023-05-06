import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Typography,
  Stack,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import BasicInfo from "../../components/jobs/BasicInfo";
import TypeAndBudget from "../../components/jobs/TypeAndBudget";
import OptionalFields from "../../components/jobs/OptionalFields";
import ReviewAndPost from "../../components/jobs/ReviewAndPost";
import ConfirmationModal from "../../../../components/ConfirmationModal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Reevalidate from "ree-validate-18";

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
    4: <CloudCircleIcon />,
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
  "Basic Info",
  "Type and Budget",
  "Optional Fields",
  "Review and Post",
];

const styles = {
  buttonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    mt: 5,
  },
  back: {
    transition: "0.5s",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  backArrow: {
    mr: 1,
  },
  cancel: {
    mr: 2,
  },
  next: {
    maxWidth: 200,
    background: `linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%)`,
    margin: "0 auto",
    transition: "1s",

    "&:hover": {
      background: `linear-gradient(0deg, rgba(0,3,255,1) 50%, rgba(2,126,251,1) 100%)`,
    },
  },
};



export default function Register() {
  const history = useHistory();
  const [openConfirmDialogue, setConfirmDialogue] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChangeFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };

  const handleMultipleSelect = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newValue = typeof value === "string" ? value.split(",") : value;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCancel = () => {
    setConfirmDialogue(true);
  };
  const handleclose = () => {
    setConfirmDialogue(false);
  };

  const handleConfirm = () => {
    history.goBack();
  };

  return (
    <Stack sx={{ width: "100%", mt: 10 }} spacing={1}>
      <ConfirmationModal
        open={openConfirmDialogue}
        onClose={handleclose}
        message="Are you sure you want to proceed? Changes you made will not be saved!"
        onConfirm={handleConfirm}
        title="Quit Job Posting"
        loading={loading}
      />

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

      <Box>
        <Box sx={{ p: 2, maxWidth: 800, margin: "0 auto" }}>
          <Box sx={{ p: 2 }}>
            <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 600 }}>
              Post a Job
            </Typography>
            <Typography>It takes 2 minutes.</Typography>
            <Typography>
              No payment processing fees. Absolutely no fees for Clients...
              ever.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#EEEEEE",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Typography sx={{ mb: 2 }}>
              Step {activeStep + 1} of {steps.length}
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: { xs: 20, md: 24 } }}>
              {activeStep === 0
                ? "Basic Info"
                : activeStep === 1
                ? "Type and Budget"
                : activeStep === 2
                ? " Optional Fields"
                : "Review and Post"}
            </Typography>
            {activeStep === 0 && (
              <BasicInfo handleChangeFormValues={handleChangeFormValues} />
            )}
            {activeStep === 1 && (
              <TypeAndBudget
                handleMultipleSelect={handleMultipleSelect}
                handleChangeFormValues={handleChangeFormValues}
              />
            )}
            {activeStep === 2 && <OptionalFields />}
            {activeStep === 3 && <ReviewAndPost />}

            <Box sx={styles.buttonWrapper}>
              <Button
                color="primary"
                onClick={handleBack}
                size="small"
                sx={styles.back}
                disabled={activeStep === 0 ? true : false}
                type="text"
              >
                <ArrowBackIcon sx={styles.backArrow} />
                <span>Back</span>
              </Button>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                  size="small"
                  sx={styles.cancel}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  size="small"
                  sx={styles.next}
                >
                  {activeStep + 1 === steps.length
                    ? "Post my job"
                    : "Next Step"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
