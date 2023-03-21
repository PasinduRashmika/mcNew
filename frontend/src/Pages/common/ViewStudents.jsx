import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { StudentData } from "./studentData";
import PageHeader from "../../components/PageHeader/PageHeader";
import { BasicLayout } from "../../components/layout/BasicLayout";

const ViewStudents = () => {
  const theme = useTheme();
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "regNo", headerName: "Index Number", flex: 1 },
    { field: "title", headerName: "Title" }, //flex value determine whether it can grow or not
    { field: "name", headerName: "Full Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "dateOfBirth", headerName: "Date of Birth", flex: 0.5 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "faculty", headerName: "Faculty", flex: 0.5 },
    { field: "gender", headerName: "Gender" },
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
      <PageHeader
        title="Students Details"
        subtitle="View registered students details"
      />
      <DataGrid
        rows={StudentData}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </BasicLayout>
  );
};

export default ViewStudents;
