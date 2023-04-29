import React, {useState} from "react";
import SmallCalendar from "./smallCalendar/SmallCalendar";
import BigCalendar from "./mainCalendar/BigCalendar";
import CalendarList from "./friendsCalendarList/CalendarList";
import Profile from "./profile/Profile";
import Settings from "./settings/Settings"
import "../styles/index.css"
import "../styles/FirstLine.css"
import loop from "../components/image/loop.png"


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
            <div className="firstLine">
                <h2 className="nameProject"> Name Project </h2>
                <input type="search" className="search"/>
                <button className="searchButton"><img src={loop} alt="loop" width="20px" height="20px"/></button>
                <Settings/>
            </div>
            {/*<BigCalendar choosenDay={choosenDay}/>*/}
        </div>
    )
}
export default MainPage;