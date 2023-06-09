import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import iconLeft from "../image/icons8l.png"
import iconRight from "../image/icons8r.png"
import '../../styles/Calendar.css'

const BCWeekView = ({viewChoose})=> {
    const [date, setDate] = useState(moment());

    const startOfWeek = date.clone().startOf('week');
    const endOfWeek = date.clone().endOf('week');
  
    const days = [];
    let day = startOfWeek;
  
    while (day <= endOfWeek) {
      days.push(day);
      day = day.clone().add(1, 'day');
    }
  
    const goToPreviousWeek = () => {
      setDate(date.clone().subtract(1, 'week'));
    };
  
    const goToNextWeek = () => {
      setDate(date.clone().add(1, 'week'));
    };
  
    return (
      <div className="mainCalendar-w">
        <div className="firstLineContainer">
          <select className="selectFormat" onChange={(event)=> viewChoose(event.target.value)}>
            <option value="week">
              Week
            </option>
            <option value="month">
              Month
            </option>
            
            <option value="day">
              Day
            </option>
          </select>
            <button className="previous" onClick={goToPreviousWeek}><img src={iconLeft} alt="previous" width="40px" height="40px" /></button>
            <a className="calendar__header">{startOfWeek.format('D MMMM YYYY')} - {endOfWeek.format('D MMMM YYYY')}</a>                
            <button className="next" onClick={goToNextWeek}><img src={iconRight} alt="previous" width="40px" height="40px" /></button>
        </div>
        <table className="calendar__table">
          <thead>
            <tr>
              {days.map((day) => (
                <th key={day.format('ddd')} className="calendar__weekday">{day.format('ddd')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 24 }, (_, hour) => (
              <tr key={hour}>
                {days.map((day) => (
                  <td key={day.format('YYYY-MM-DD-HH')} className="calendar__day">
                    {day.clone().hour(hour).format('HH:mm')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BCWeekView;