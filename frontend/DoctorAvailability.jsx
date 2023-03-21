import { useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import PageHeader from "../../components/PageHeader/PageHeader";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { DoctorData } from "./doctorData";

const DoctorAvailability = () => {
  const theme = useTheme();
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Title" },
    { field: "doctorsName", headerName: "Doctor Name", flex: 1 },
	  { field: "unit", headerName: "Common Unit/Dental Unit", flex: 1 },
    { field: "availability", headerName: "Availability", flex: 1 },
    
  ];
  return (
    <BasicLayout
      style={{
        height: "95%",
        "& .MuiDataGrid-columnHeaders": {
          //   backgroundColor: theme.palette.mode === "dark" ? "red" : "yellow",
          background: theme.palette.datagrid.header,
        },
        "& .MuiDataGrid-footerContainer": {
          background: theme.palette.datagrid.header,
        },
      }}
    >
      
      <PageHeader title="DoctorAvailability" />
	  <DataGrid
        rows={DoctorData}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </BasicLayout>
  );
};

export default DoctorAvailability;
