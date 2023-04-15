import React from "react";
import SmallCalendar from "./smallCalendar/SmallCalendar";
import BigCalendar from "./mainCalendar/BigCalendar";
import Calendarlists from "./friendsCalendarList/Calendarlists";
import "../styles/index.css"


function MainPage()
{
    return(
        <div className="MainPage">
            <SmallCalendar/>
            <Calendarlists/>
            <BigCalendar/>
        </div>
    )
}
export default MainPage;