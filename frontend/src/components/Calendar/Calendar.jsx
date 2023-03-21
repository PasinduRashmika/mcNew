import FullCalendar from "@fullcalendar/react";
import { Box } from "@mui/material";
import dayGridPlugin from "@fullcalendar/daygrid";

export const MiniCalendar = () => {
  return (
    <Box sx={{}}>
      <FullCalendar
        height="75vh"
        plugins={[dayGridPlugin]}
        // initialView="dayGridMonth"
      />
    </Box>
  );
};
