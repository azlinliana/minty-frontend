import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import IndexAktiviti from "../aktiviti/Index";
import "../sahabat.css";
import {
  Stepper,
  Step,
  StepContent,
  StepLabel,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import IndexAktiviti from "./aktiviti/Index";
import IndexTrackingIsiRumah from "./isi-rumah/Index";
import IndexTrackingSahabat from "./sahabat/Index";

const steps = [
  { label: "Langkah 1" },
  { label: "Langkah 2" },
  { label: "Langkah 3" },
];

const Step1 = () => <Typography>Step 1 Content</Typography>;
const Step2 = () => <Typography>Step 2 Content</Typography>;
const Step3 = () => <Typography>Step 3 Content</Typography>;

const getStepContent = (step, mingguId) => {
  switch (step) {
    case 0:
      return <IndexAktiviti />;
    case 1:
      return <IndexTrackingSahabat mingguId={mingguId} />;
    case 2:
      return <IndexTrackingIsiRumah mingguId={mingguId} />;
    default:
      return "Unknown step";
  }
};

const VerticalStepper = ({mingguId}) => {
  const [activeStep, setActiveStep] = useState(0);
const steps = ["Step 1", "Step 2", "Step 3"];

const Step1 = () => <Typography>Step 1 Content</Typography>;
const Step2 = () => <Typography>Step 2 Content</Typography>;
const Step3 = () => <Typography>Step 3 Content</Typography>;

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <IndexAktiviti />;
    case 1:
      return <Step2 />;
    case 2:
      return <IndexIsiRumah />;
    default:
      return "Unknown step";
  }
};

const VerticalStepper = () => {
  const [expandedSteps, setExpandedSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setExpandedSteps((prevExpandedSteps) => [...prevExpandedSteps, activeStep]);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setExpandedSteps((prevExpandedSteps) =>
      prevExpandedSteps.filter((step) => step !== activeStep - 1)
    );
  };

  const handleReset = () => {
    setExpandedSteps([]);
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          ".css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
            color: "#13315C",
          },
          "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
            color: "#13315C",
          },
        }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
          <Step key={step} expanded={expandedSteps.includes(index)}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">
                    Borang tamat di sini
                  </Typography>
                ) : null
              }
            >
              {step}
            </StepLabel>
            <StepContent>
              {index === 0 ? <IndexAktiviti /> : null}
              {index === 1 ? <IndexTrackingSahabat mingguId={mingguId} /> : null}
              {index === 2 ? <IndexTrackingIsiRumah mingguId={mingguId} /> : null}
              {getStepContent(index)}
              <Box sx={{ mb: 2 }}>
                <div>
                  {index === activeStep && index < steps.length - 1 && (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1, backgroundColor: "#13315C" }}
                    >
                      Seterusnya
                    </Button>
                  )}
                  {index === activeStep && index > 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1, color: "#aba7a7" }}
                    >
                      Kembali
                    </Button>
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length - 1 && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            Maklumat tracking minggu ini telah selesai diisi.
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Isi Semula
          </Button>
        </Paper>
      )}
    </Box>
  );
};
};

export default VerticalStepper;

export default VerticalStepper;