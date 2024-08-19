import React, { useState } from "react";
import Calendar from "react-calendar";
import './calendar.css'
import "react-calendar/dist/Calendar.css";

function Calendars() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}

export default Calendars;
