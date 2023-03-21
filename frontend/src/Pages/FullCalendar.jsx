import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interationPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader/PageHeader";
import { BasicLayout } from "../components/layout/BasicLayout";
import { CalendarDeleteModal } from "../components/Modal/CalendarDeleteModal";
import { CalendarAddModal } from "../components/Modal/CalendarAddModal";

const Calendar = () => {
  //to track the selected event
  const [selected, setSelected] = useState([]);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showCalendarAddModal, setShowCalendarAddModal] = useState(false);
  const [title, setTitle] = useState("");
  //save array of events that pul into the calendar
  const [currentEvents, setCurrentEvents] = useState([]);

  //handle event adding process
  const handleDateClick = (selected) => {
    setSelected(selected);
    setShowCalendarAddModal(true);
  };
  //handle event delete process
  const handleEventClick = (selected) => {
    setSelected(selected);
    setShowCalendarModal(true);
  };

  //add event to the calendar
  const addEventHandler = (value) => {
    setShowCalendarAddModal(false);
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (value) {
      calendarApi.addEvent({
        id: `${selected.dataStr} - ${value}`,
        title: value,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
    // console.log(inputfiledRef.current.value);
  };

  return (
    <BasicLayout>
      <PageHeader title="Calendar" subtitle="Mange Events" />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* CALENDAR SIDEBAR */}
        <Box
          sx={{
            /* if there no siblin element it will grow to ful wdith otherwise it takes 20% of available space */
            flex: "1 1 20%" /* grow shrink width */,
            backgroundColor: "primary.main",
            p: "15px",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h5">Events </Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "sidebar.main",
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {/* format the date */}
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interationPlugin,
              listPlugin,
            ]}
            /* how the toolbar look in the header */
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            //saving the event to the crated state variable
            eventsSet={(events) => setCurrentEvents(events)}
            //initila events in the calendar
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2023-02-14",
              },
              {
                id: "5123",
                title: "Time event",
                date: "2023-02-28",
              },
            ]}
          />
        </Box>
      </Box>

      {showCalendarModal && (
        <CalendarDeleteModal
          handleClose={() => setShowCalendarModal(false)}
          setShowCalendarModal={setShowCalendarModal}
          selected={selected}
        />
      )}

      {showCalendarAddModal && (
        <CalendarAddModal
          handleClose={() => setShowCalendarModal(false)}
          value={title}
          setValue={setTitle}
          setShowCalendarAddModal={setShowCalendarAddModal}
          addEventHandler={addEventHandler}
        />
      )}
    </BasicLayout>
  );
};

export default Calendar;
