import React, { useState } from "react";
import BCDayView from "./BCDayView";
import BCWeekView from "./BCWeekView";
import BCMonthView from "./BCMonthView";


const BigCalendar = () => {
  
  const [view, setView] = useState("month")

  const viewChoose = (view) => {
    setView(view)
    console.log(view)
  }


  return (
    <div className="bigCalendar">
      {view === "month"
        ? <BCMonthView viewChoose={viewChoose}/>
        : view === "week"
            ? <BCWeekView viewChoose={viewChoose}/>
            : <BCDayView viewChoose={viewChoose}/>

      }
      
    </div>
  );
};

export default BigCalendar;
