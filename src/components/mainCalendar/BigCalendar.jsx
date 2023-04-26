import React, { useState } from "react";
import BCDayView from "./BCDayView";
import BCWeekView from "./BCWeekView";
import BCMonthView from "./BCMonthView";


const BigCalendar = (props) => {
  
  const [view, setView] = useState("month")

  const viewChoose = (view) => {
    setView(view)
    console.log(view)
  }


  return (
    <div className="bigCalendar">
      {view === "month"
        ? <BCMonthView viewChoose={viewChoose} choosenDay={props.choosenDay}/>
        : view === "week"
            ? <BCWeekView viewChoose={viewChoose} choosenDay={props.choosenDay}/>
            : <BCDayView viewChoose={viewChoose} choosenDay={props.choosenDay}/>

      }
      
    </div>
  );
};

export default BigCalendar;
