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
  StepConnector
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

const VerticalStepper = ({
  sahabatId,
  pembiayaanId,
  mingguId,
  pembiayaanSahabatsData,
  aktivitiOptions,
  displayAktivitis,
  keteranganAktivitiOptions,
  displayKeteranganAktivitis,
  projekAktivitiOptions,
  displayProjekAktivitis,
  dimensiOptions,
  displayDimensis,
  kodInflowOptions,
  displayKodInflows,
  kodOutflowOptions,
  displayKodOutflows,
  hubunganOptions,
  displayHubungans,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  // Expand the stepper when statusPembiayaan is SELESAI
  const [expandedSteps, setExpandedSteps] = useState(
    // pembiayaanSahabatsData.statusPembiayaan === "SELESAI"
    //   ? steps.map((_, index) => index)
    //   : []
  );
  const [aktivitiDataAvailable, setAktivitiDataAvailable] = useState(true);

  const handleNext = () => {
    // Check if aktivitiData is available before proceeding
    if (activeStep === 0 && !aktivitiDataAvailable) {
      return;
    }

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
          paddingLeft: 0,
          paddingRight: 0,
          "& .MuiStepConnector-line": {
            borderLeftWidth: "1px", // Ensure the connector is visible
            marginLeft: "10px", // Adjust margin to avoid breaking the line
          },
        }}
      >
        {/* {steps.map((step, index) => ( */}
          {/* <Step key={index} expanded={expandedSteps.includes(index)}> */}
          <Step>
            <StepLabel
              optional={
                // index === steps.length - 1 ? (
                  <Typography variant="caption">
                    Borang tamat di sini
                  </Typography>
                // ) : null
              }
            >
              Step Label
            </StepLabel>

            <StepContent>
              {/* {index === 0 ? ( */}
                <IndexAktiviti
                  // sahabatId={sahabatId}
                  // pembiayaanId={pembiayaanId}
                  // pembiayaanSahabatsData={pembiayaanSahabatsData}
                  // onDataAvailableChange={setAktivitiDataAvailable} // Pass the function to IndexAktiviti
                  // aktivitiOptions={aktivitiOptions}
                  // displayAktivitis={displayAktivitis}
                  // keteranganAktivitiOptions={keteranganAktivitiOptions}
                  // displayKeteranganAktivitis={displayKeteranganAktivitis}
                  // projekAktivitiOptions={projekAktivitiOptions}
                  // displayProjekAktivitis={displayProjekAktivitis}
                  // dimensiOptions={dimensiOptions}
                  // displayDimensis={displayDimensis}
                />
              {/* ) : null} */}

              {/* {index === 1 ? ( */}
                <IndexTrackingSahabat
                  // mingguId={mingguId}
                  // pembiayaanSahabatsData={pembiayaanSahabatsData}
                  // kodInflowOptions={kodInflowOptions}
                  // displayKodInflows={displayKodInflows}
                  // kodOutflowOptions={kodOutflowOptions}
                  // displayKodOutflows={displayKodOutflows}
                />
              {/* ) : null} */}

              {/* {index === 2 ? ( */}
                <IndexTrackingIsiRumah
                  // mingguId={mingguId}
                  // pembiayaanSahabatsData={pembiayaanSahabatsData}
                  // kodInflowOptions={kodInflowOptions}
                  // displayKodInflows={displayKodInflows}
                  // kodOutflowOptions={kodOutflowOptions}
                  // displayKodOutflows={displayKodOutflows}
                  // hubunganOptions={hubunganOptions}
                  // displayHubungans={displayHubungans}
                />
              {/* ) : null} */}

              <Box sx={{ mb: 2 }}>
                {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      // disabled={index === 0 && !aktivitiDataAvailable} // Disable the button if aktivitiData is not available
                      sx={{ mt: 1, mr: 1, backgroundColor: "#13315C" }}
                    >
                      {/* {index === steps.length - 1 ? "Tamat" : "Seterusnya"} */}
                    </Button>

                    <Button
                      // disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1, color: "#aba7a7" }}
                    >
                      Kembali
                    </Button>
                  </div>
                {/* ) : null} */}
              </Box>
            </StepContent>
          </Step>
        {/* ))} */}
      </Stepper>

      {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" && */}
        {/* activeStep === steps.length && ( */}
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>
              Maklumat tracking minggu ini telah selesai diisi.
            </Typography>

            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Isi Semula
            </Button>
          </Paper>
        {/* )} */}
    </Box>
  );
};

export default VerticalStepper;
