import React, { useState } from "react";
import BCDayView from "./BCDayView";
import BCWeekView from "./BCWeekView";
import BCMonthView from "./BCMonthView";


const BigCalendar = function () {
  
  const [view, setView] = useState({
    view: "month"
  })

  console.log(view)

  return (
    <div className="bigCalendar">
      <select className="selectFormat" onChange={event=> setView(event.target.value)}>
        <option value="month">
          Month
        </option>
        <option value="week">
          Week
        </option>
        <option value="day">
          Day
        </option>
      </select>
      {view === "month"
        ? <BCMonthView/>
        : view === "week"
            ? <BCWeekView/>
            : <BCDayView/>

      }
      
    </div>
  );
};

export default BigCalendar;
