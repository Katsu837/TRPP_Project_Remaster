import React, {useEffect, useState} from "react";
const Day = function(props)
{
    let dayName = "daySC " + props.monthFlag
    let date = new Date;

    if(props.monthFlag == "n") date.setMonth((props.month == 11) ? 0 : props.month + 1 )
    else if(props.monthFlag == "p") date.setMonth((props.month == 0) ? 11 : props.month - 1)
    else date.setMonth(props.month)

    if(props.monthFlag == "n" && props.month == 11) date.setFullYear(props.year + 1)
    else if (props.monthFlag == "p" && props.month == 0) date.setFullYear(props.year - 1)
    else date.setFullYear(props.year)

    date.setDate(props.numDay);

    const onClick = () => {
        props.chooseDay(date)
        console.log(date)
    }

    return(
        <div className={dayName} onClick={onClick}>
            <a>{props.numDay}</a>
            <div className="events"></div>
        </div>
    )
}

export default Day;