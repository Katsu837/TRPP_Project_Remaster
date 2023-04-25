import React from "react";
import '../../../styles/ProfileNextEvent.css'

function ProfileNextEvent({ nextEventName, nextEventTime, nextEventLocation}) {
  return (
    <div className="next-event">
      <h3>Ближайшее событие:</h3>
      <div className="next-event-info">
        <div className="next-event-name">{nextEventName}</div>
        <div className="next-event-time-location">{nextEventTime} • {nextEventLocation}</div>
      </div>
    </div>
  );
}

export default ProfileNextEvent;