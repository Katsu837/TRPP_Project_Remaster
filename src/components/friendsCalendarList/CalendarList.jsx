import React from "react";

import MyCalendar from "./friendsCalendarListComponents/MyCalendar";
import FriendList from "./friendsCalendarListComponents/FriendList";
import FriendSearch from './friendsCalendarListComponents/FriendSearch';
import '../../styles/CalendarListStyle.css';

const CalendarList = () => {
      return(
        <div className="Calendarlists">
            <MyCalendar />
            <FriendList />
            <FriendSearch />
        </div>
      )
  };

  export default CalendarList;
