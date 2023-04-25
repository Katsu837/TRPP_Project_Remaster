import React from "react";

import MyCalendar from "./Friendsaddsearchopen/MyCalendar";
import FriendList from "./Friendsaddsearchopen/FriendList";
import FriendSearch from './Friendsaddsearchopen/FriendSearch';
import '../styles/CalendarListStyle.css';

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
