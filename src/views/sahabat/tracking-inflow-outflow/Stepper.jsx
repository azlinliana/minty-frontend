// import React, { useState } from "react";
// import {
//   Stepper,
//   Step,
//   StepContent,
//   StepLabel,
//   Button,
//   Typography,
//   Box,
//   Paper,
//   StepConnector
// } from "@mui/material";
// import IndexAktiviti from "./aktiviti/Index";
// import IndexTrackingIsiRumah from "./isi-rumah/Index";
// import IndexTrackingSahabat from "./sahabat/Index";
// import "../../../assets/styles/styles_customers.css";

// const steps = [
//   { label: "Langkah 1" },
//   { label: "Langkah 2" },
//   { label: "Langkah 3" },
// ];

// const VerticalStepper = ({
//   sahabatId,
//   pembiayaanId,
//   mingguId,
//   pembiayaanSahabatsData,
//   aktivitiOptions,
//   displayAktivitis,
//   keteranganAktivitiOptions,
//   displayKeteranganAktivitis,
//   projekAktivitiOptions,
//   displayProjekAktivitis,
//   dimensiOptions,
//   displayDimensis,
//   kodInflowOptions,
//   displayKodInflows,
//   kodOutflowOptions,
//   displayKodOutflows,
//   hubunganOptions,
//   displayHubungans,
// }) => {
//   const [activeStep, setActiveStep] = useState(0);

//   // Expand the stepper when statusPembiayaan is SELESAI
//   const [expandedSteps, setExpandedSteps] = useState(
//     // pembiayaanSahabatsData.statusPembiayaan === "SELESAI"
//     //   ? steps.map((_, index) => index)
//     //   : []
//   );
//   const [aktivitiDataAvailable, setAktivitiDataAvailable] = useState(true);

//   const handleNext = () => {
//     // Check if aktivitiData is available before proceeding
//     if (activeStep === 0 && !aktivitiDataAvailable) {
//       return;
//     }

//     setActiveStep((prevActiveStep) => {
//       setExpandedSteps((prevExpandedSteps) => [
//         ...prevExpandedSteps,
//         prevActiveStep,
//       ]);

//       return prevActiveStep + 1;
//     });
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => {
//       setExpandedSteps((prevExpandedSteps) =>
//         prevExpandedSteps.filter((step) => step !== prevActiveStep - 1)
//       );

//       return Math.max(0, prevActiveStep - 1);
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setExpandedSteps([]);
//   };

//   return (
//     <Box>
//       <Stepper
//         activeStep={activeStep}
//         orientation="vertical"
//         sx={{
//           ".css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
//             color: "#235239",
//           },
//           "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
//             color: "#235239",
//           },
//           paddingLeft: 0,
//           paddingRight: 0,
//           "& .MuiStepConnector-line": {
//             borderLeftWidth: "1px", // Ensure the connector is visible
//             marginLeft: "10px", // Adjust margin to avoid breaking the line
//           },
//         }}
//       >
//         {/* {steps.map((step, index) => ( */}
//           {/* <Step key={index} expanded={expandedSteps.includes(index)}> */}
//           <Step>
//             <StepLabel
//               optional={
//                 // index === steps.length - 1 ? (
//                   <Typography variant="caption">
//                     Borang tamat di sini
//                   </Typography>
//                 // ) : null
//               }
//             >
//               Step Label
//             </StepLabel>

//             <StepContent>
//               {/* {index === 0 ? ( */}
//                 <IndexAktiviti
//                   // sahabatId={sahabatId}
//                   // pembiayaanId={pembiayaanId}
//                   // pembiayaanSahabatsData={pembiayaanSahabatsData}
//                   // onDataAvailableChange={setAktivitiDataAvailable} // Pass the function to IndexAktiviti
//                   // aktivitiOptions={aktivitiOptions}
//                   // displayAktivitis={displayAktivitis}
//                   // keteranganAktivitiOptions={keteranganAktivitiOptions}
//                   // displayKeteranganAktivitis={displayKeteranganAktivitis}
//                   // projekAktivitiOptions={projekAktivitiOptions}
//                   // displayProjekAktivitis={displayProjekAktivitis}
//                   // dimensiOptions={dimensiOptions}
//                   // displayDimensis={displayDimensis}
//                 />
//               {/* ) : null} */}

//               {/* {index === 1 ? ( */}
//                 <IndexTrackingSahabat
//                   // mingguId={mingguId}
//                   // pembiayaanSahabatsData={pembiayaanSahabatsData}
//                   // kodInflowOptions={kodInflowOptions}
//                   // displayKodInflows={displayKodInflows}
//                   // kodOutflowOptions={kodOutflowOptions}
//                   // displayKodOutflows={displayKodOutflows}
//                 />
//               {/* ) : null} */}

//               {/* {index === 2 ? ( */}
//                 <IndexTrackingIsiRumah
//                   // mingguId={mingguId}
//                   // pembiayaanSahabatsData={pembiayaanSahabatsData}
//                   // kodInflowOptions={kodInflowOptions}
//                   // displayKodInflows={displayKodInflows}
//                   // kodOutflowOptions={kodOutflowOptions}
//                   // displayKodOutflows={displayKodOutflows}
//                   // hubunganOptions={hubunganOptions}
//                   // displayHubungans={displayHubungans}
//                 />
//               {/* ) : null} */}

//               <Box sx={{ mb: 2 }}>
//                 {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
//                   <div>
//                     <Button
//                       variant="contained"
//                       onClick={handleNext}
//                       // disabled={index === 0 && !aktivitiDataAvailable} // Disable the button if aktivitiData is not available
//                       sx={{ mt: 1, mr: 1, backgroundColor: "#235239" }}
//                     >
//                       {/* {index === steps.length - 1 ? "Tamat" : "Seterusnya"} */}
//                     </Button>

//                     <Button
//                       // disabled={index === 0}
//                       onClick={handleBack}
//                       sx={{ mt: 1, mr: 1, color: "#2c2c2c" }}
//                     >
//                       Kembali
//                     </Button>
//                   </div>
//                 {/* ) : null} */}
//               </Box>
//             </StepContent>
//           </Step>
//         {/* ))} */}
//       </Stepper>

//       {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" && */}
//         {/* activeStep === steps.length && ( */}
//           <Paper square elevation={0} sx={{ p: 3 }}>
//             <Typography>
//               Maklumat tracking minggu ini telah selesai diisi.
//             </Typography>

//             <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//               Isi Semula
//             </Button>
//           </Paper>
//         {/* )} */}
//     </Box>
//   );
// };

// export default VerticalStepper;

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
import { getHoverColor } from "chart.js/helpers";

const steps = [
  { label: "Step 1", content: <IndexAktiviti /> },
  { label: "Step 2", content: <IndexTrackingSahabat /> },
  { label: "Step 3", content: <IndexTrackingIsiRumah /> },
];

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(0, prevStep - 1));
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              {step.content}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mr: 1, backgroundColor: "#75A589" }}
                  disabled={activeStep === steps.length - 1} // Disable if last step
                >
                  {activeStep === steps.length - 1 ? "Done" : "Next"}
                </Button>
                <Button
                  onClick={handleBack}
                  sx={{
                    color: "#2c2c2c",
                    "&:hover": {
                      backgroundColor: "#F5F5F5",
                    },
                  }}
                  disabled={activeStep === 0} // Disable if first step
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>This week's tracking has been filled.</Typography>
          <Button onClick={handleReset} sx={{ mt: 1 }}>
            Refill this week's tracking.
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalStepper;
