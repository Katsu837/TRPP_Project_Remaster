import React, {useEffect, useState} from "react";
const Day = function(props)
{
    let dayName = "daySC " + props.monthFlag

    return(
        <div className={dayName}>
            <a>{props.numDay}</a>
            <div className="events"></div>
        </div>
    )
}

export default Day;