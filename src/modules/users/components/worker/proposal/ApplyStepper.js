import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Stack,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import PaidIcon from "@mui/icons-material/Paid";
import HelpIcon from "@mui/icons-material/Help";
import EditOffIcon from "@mui/icons-material/EditOff";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ReviewAndSubmit from "./ReviewAndSubmit";
import ProposalForm from "./ProposalForm";
import RateForm from "./RateForm";
import ConfirmationModal from "../../../../../components/ConfirmationModal";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

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
    1: <PaidIcon />,
    2: <HelpIcon />,
    3: <EditOffIcon />,
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

const steps = ["Rate", "Proposal", "Review and Submit"];

const progressVal = 100 / steps.length;

export default function ApplyStepper(props) {
  const {
    handleCancel,
    selectedItem,
    handleClose,
    onHandleSubmit,
    bid,
    onEdit,
  } = props;

  const [openConfirmDialogue, setOpenConfirmDialogue] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [progress, setprogress] = React.useState(progressVal);

  // rate states
  const [rate, setRate] = React.useState({
    values: {
      rate: "",
    },
  });

  //proposal states
  const [proposal, setProposal] = React.useState("");
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    if (bid) {
      const savedRate = bid.rate;
      const savedProposal = bid.proposal;
      const savedImages = bid.images && bid.images;

      setRate((prev) => ({
        ...prev,
        values: {
          rate: savedRate,
        },
      }));
      setProposal(savedProposal);

      if (savedImages) {
        setImages(savedImages);
      }
    }
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setprogress((prev) => prev + progressVal);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setprogress((prev) => prev - progressVal);
  };

  const handleConfirmDialogue = () => {
    setOpenConfirmDialogue(!openConfirmDialogue);
  };

  return (
    <Stack sx={{ width: "100%", mt: 5 }} spacing={1}>
      <ConfirmationModal
        open={openConfirmDialogue}
        onClose={handleConfirmDialogue}
        message="Are you sure you want to proceed? Changes you made will not be saved!"
        onConfirm={handleCancel}
        title="Quit Job Application"
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
          <Box
            sx={{
              backgroundColor: "#EEEEEE",
              p: 2,
              borderRadius: 3,
              boxShadow: 5,
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 3,
                p: 2,
              }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: 20, md: 24 } }}
              >
                {activeStep === 0
                  ? "Rate"
                  : activeStep === 1
                  ? "Proposal"
                  : "Review and Submit"}
              </Typography>
              <Typography sx={{ mb: 2, fontSize: { xs: 12, md: 14 } }}>
                Step {activeStep + 1} of {steps.length}
              </Typography>

              <Box sx={{ width: "100%" }}>
                <LinearProgressWithLabel value={progress} sx={{ height: 10 }} />
              </Box>
            </Box>
            {activeStep === 0 && (
              <RateForm
                steps={steps}
                activeStep={activeStep}
                handleCancel={handleConfirmDialogue}
                handleBack={handleBack}
                handleNext={handleNext}
                rate={rate.values}
                setRate={setRate}
              />
            )}
            {activeStep === 1 && (
              <ProposalForm
                steps={steps}
                activeStep={activeStep}
                handleCancel={handleConfirmDialogue}
                handleNext={handleNext}
                handleBack={handleBack}
                letter={proposal}
                setLetter={setProposal}
                imagesContainer={images}
                setImagesContainer={setImages}
              />
            )}
            {activeStep === 2 && (
              <ReviewAndSubmit
                steps={steps}
                activeStep={activeStep}
                handleCancel={handleConfirmDialogue}
                handleNext={handleNext}
                handleBack={handleBack}
                onHandleSubmit={onHandleSubmit}
                rate={rate}
                proposal={proposal}
                images={images}
                id={onEdit ? bid.id : selectedItem.id}
                onEdit={onEdit}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
