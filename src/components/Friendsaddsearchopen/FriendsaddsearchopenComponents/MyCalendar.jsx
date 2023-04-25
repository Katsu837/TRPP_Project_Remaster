import React from 'react';

function MyCalendar() {
  function showCalendar() {
    // здесь должен быть код, который показывает ваш календарь
    console.log("Календарь отображен!");
  }

  return (
    <button id='textButton' onClick={showCalendar}>
      <h2 className="MyCalendarName">Мой календарь</h2>
    </button>
  );
}

export default MyCalendar;
