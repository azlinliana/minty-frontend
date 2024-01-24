import React, { useState } from "react";
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
import "../../../assets/styles/styles_sahabat.css";

const steps = [
  { label: "Langkah 1" },
  { label: "Langkah 2" },
  { label: "Langkah 3" },
];

const VerticalStepper = ({ sahabatId, pembiayaanId, mingguId }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedSteps, setExpandedSteps] = useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      setExpandedSteps((prevExpandedSteps) => [
        ...prevExpandedSteps,
        prevActiveStep,
      ]);
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      setExpandedSteps((prevExpandedSteps) =>
        prevExpandedSteps.filter((step) => step !== prevActiveStep - 1)
      );
      return Math.max(0, prevActiveStep - 1);
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setExpandedSteps([]);
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
          <Step key={index} expanded={expandedSteps.includes(index)}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">
                    Borang tamat di sini
                  </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>

            <StepContent>
              {index === 0 ? (
                <IndexAktiviti
                  sahabatId={sahabatId}
                  pembiayaanId={pembiayaanId}
                />
              ) : null}
              {index === 1 ? (
                <IndexTrackingSahabat mingguId={mingguId} />
              ) : null}
              {index === 2 ? (
                <IndexTrackingIsiRumah mingguId={mingguId} />
              ) : null}

              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, backgroundColor: "#13315C" }}
                  >
                    {index === steps.length - 1 ? "Tamat" : "Seterusnya"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, color: "#aba7a7" }}
                  >
                    Kembali
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
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

export default VerticalStepper;
