import React, { useState } from "react";
import '../../styles/DayView.css'
import iconLeft from "../image/icons8l.png"
import iconRight from "../image/icons8r.png"

const DayView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const hours = [...Array(24).keys()]; // создаем массив чисел от 0 до 23

  const handlePrevDay = () => {
    const prevDay = new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000); // вычитаем 1 день из выбранной даты
    setSelectedDate(prevDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000); // добавляем 1 день к выбранной дате
    setSelectedDate(nextDay);
  };

  return (
    <div className="mainCalendar">
      <div className="day-header">
        <button className="previous" onClick={handlePrevDay}><img src={iconLeft} alt="previous" width="40px" height="40px" /></button>
        <a className="date-header">{selectedDate.toLocaleDateString("ru", { month: "long", day: "numeric", year: "numeric" })}</a>
        <button className="next" onClick={handleNextDay}><img src={iconRight} alt="previous" width="40px" height="40px" /></button>
      </div>
      <div className="hour-grid">
        {hours.map((hour) => (
          <div key={hour} className="hour-row">
            <div className="hour-label">{`${hour}:00`}</div>
            <div className="hour-cell"> {/* здесь может быть ваш контент для каждого часа */}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayView;