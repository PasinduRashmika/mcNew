import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { BasicLayout } from "../../components/layout/BasicLayout";

import PageHeader from "../../components/PageHeader/PageHeader";

export const StudentData = [
  {
    id: 1,
    title: "Mr.",
    name: "Pasindu Deshan",
    email: "pasinduddeshan123@gmail.com",
    position: "Doctor",
    status: "Active",
    mobile: "07773241566",
    location: "Diyathalawa, Sri Lanka",
  },
  {
    id: 2,
    title: "Mr.",
    name: "Mike Mike",
    email: "mike@gmail.com",
    position: "Nurse",
    status: "Active",
    mobile: "07773241566",
    location: "Diyathalawa, Sri Lanka",
  },
  {
    id: 3,
    title: "Mr.",
    name: "James James",
    email: "james@gmail.com",
    position: "Doctor",
    status: "Active",
    mobile: "07773241566",
    location: "Diyathalawa, Sri Lanka",
  },
  {
    id: 4,
    title: "Mr.",
    name: "James James",
    email: "james@gmail.com",
    position: "Doctor",
    status: "Active",
    mobile: "07773241566",
    location: "Diyathalawa, Sri Lanka",
  },
  {
    id: 5,
    title: "Mr.",
    name: "James James",
    email: "james@gmail.com",
    position: "Doctor",
    status: "Active",
    mobile: "07773241566",
    location: "Diyathalawa, Sri Lanka",
  },
  {
    id: 6,
    title: "Mr.",
    name: "James James",
    email: "james@gmail.com",
    position: "Doctor",
    status: "Active",
    mobile: "07773241566",
    location: "Diyathalawa, Sri Lanka",
  },
];

export const ViewUsers = () => {
  const theme = useTheme();
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Title" }, //flex value determine whether it can grow or not
    { field: "name", headerName: "Full Name", flex: 1 },
    { field: "position", headerName: "Position", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "mobile", headerName: "Mobile Number", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "status", headerName: "Status", flex: 0.5 },
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
      <PageHeader title="View Users" subtitle="View User Details" />
      <DataGrid
        rows={StudentData}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </BasicLayout>
  );
};
