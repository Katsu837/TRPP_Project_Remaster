import React, {useState} from "react";
import SmallCalendar from "./smallCalendar/SmallCalendar";
import BigCalendar from "./mainCalendar/BigCalendar";
import CalendarList from "./friendsCalendarList/CalendarList";
import "../styles/index.css"
import Profile from "./profile/Profile";


function MainPage()
{

    const[choosenDay, chooseDay] = useState(new Date())

    const func = (date) =>
    {
        chooseDay(date);
    }

    return(
        <div className="MainPage">
            <Profile/>
            <SmallCalendar chooseDay={func}/>
            <CalendarList/>
            {/*<BigCalendar choosenDay={choosenDay}/>*/}
        </div>
    )
}
export default MainPage;