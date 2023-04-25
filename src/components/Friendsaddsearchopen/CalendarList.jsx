import React from "react";

import MyCalendar from "./FriendsaddsearchopenComponents/MyCalendar";
import FriendList from "./FriendsaddsearchopenComponents/FriendList";
import FriendSearch from './FriendsaddsearchopenComponents/FriendSearch';
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
