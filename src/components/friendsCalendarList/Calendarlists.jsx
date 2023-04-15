import React from "react";

import MyCalendar from './friendsCalendarListComponent/MyCalendar';
import FriendsList from './friendsCalendarListComponent/FriendList';
import FriendSearch from './friendsCalendarListComponent/FriendSearch';
import '../../styles/CalendarListStyle.css';

const Calendarlists = () => {
      return(
        <div className="Calendarlists">
            <MyCalendar />
            <FriendsList />
            <FriendSearch />
        </div>
      )
  };

  export default Calendarlists;
