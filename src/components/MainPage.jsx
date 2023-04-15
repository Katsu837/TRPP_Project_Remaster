import React, {useState} from "react";
import SmallCalendar from "./smallCalendar/SmallCalendar";
import BigCalendar from "./mainCalendar/BigCalendar";
import Calendarlists from "./friendsCalendarList/Calendarlists";
import "../styles/index.css"


function MainPage()
{
    const[choosenDay, chooseDay] = useState(new Date())

    function func(date)
    {
        chooseDay(date);
    }

    return(
        <div className="MainPage">
            <SmallCalendar chooseDay={func}/>
            <Calendarlists/>
            <BigCalendar/>
        </div>
    )
}
export default MainPage;