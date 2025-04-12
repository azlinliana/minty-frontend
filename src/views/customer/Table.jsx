import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Table() {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          // Target the checkbox root
          "& .MuiDataGrid-checkboxInput": {
            color: "#235239",
          },
          // Optional: also apply hover or focus color
          "& .MuiDataGrid-checkboxInput.Mui-checked": {
            color: "#235239",
          },
          "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-checkboxInput": {
            
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "rgb(203, 255, 225, 0.2)", 
          },
          "& .MuiDataGrid-row.Mui-selected:hover": {
            backgroundColor: "rgb(203, 255, 225, 0.3)",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          '& .MuiDataGrid-columnSeparator': {
            color: "#235239",
          },
          '& .MuiDataGrid-columnSeparator:hover': {
            color: "#235239",
          },
          '& .MuiDataGrid-columnSeparator:selected': {
            color: "#235239",
          },
          '& .MuiDataGrid-columnHeader:focus': {
            outline: "none",
          },
          '& .MuiDataGrid-columnHeader:focus-within': {
            outline: "none",
          },
        }}
      />
    </Paper>
  );
}
