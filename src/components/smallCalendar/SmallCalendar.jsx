import React, {useState} from "react";
import DaysOfTheWeek from "./smallCalendarComponents/DaysOfTheWeek";
import GridOfMonth from "./smallCalendarComponents/GridOfMonth";
import '../../styles/SmallCalendar.css'
import iconRight from '../image/icons8-_-24.png'
import iconLeft from '../image/icons8-_-24 (1).png'

const SmallCalendar = function (props)
{
    let todayMonth = new Date().getMonth();
    let todayYear = new Date().getFullYear();
    const [month, setMonth] = useState(todayMonth);
    const [year, setYear] = useState(todayYear)

    console.log(month)

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let nameMonth = months[month % 12]
    function nextMonth()
    {
        if(month == 11)
        {
            setYear(year + 1)
            setMonth(month - 11)
        }
        else setMonth(month + 1)
    }
    function previousMonth()
    {
        if(month == 0)
        {
            setYear(year - 1)
            setMonth(month + 11)
        }
        else setMonth(month - 1)
    }

    return(
        <div className="smallCalendar">
            <button className="previousSC" onClick={previousMonth}>{<img src={iconLeft} alt="previous" width="20px" height="20px" />}</button>
            <a className="monthYearSC">{nameMonth}, {year}</a>
            <button className="nextSC" onClick={nextMonth}>{<img src={iconRight} alt="previous" width="20px" height="20px" />}</button>
            <DaysOfTheWeek/>
            <GridOfMonth month={month % 12} year={year} сhooseDay={props.chooseDay}/>
        </div>
    )
}

export default SmallCalendar;
