import React from "react";
const Day =  function(props)
{
    let dayName = "day " + props.monthFlag
    return(
        <div className={dayName}>
            <a>{props.numDay}</a>
            <div className="events"></div>
        </div>
    )
}

export default Day;
