import React, { useState } from "react";
import '../../styles/DayView.css'
import iconLeft from "../image/icons8l.png"
import iconRight from "../image/icons8r.png"

const BCDayView = ({viewChoose}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const hours = [...Array(24).keys()]; // создаем массив чисел от 0 до 23

  const tenminuteparts = [...Array(144).keys()]; // создаем массив чисел от 0 до 143


  const handlePrevDay = () => {
    const prevDay = new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000); // вычитаем 1 день из выбранной даты
    setSelectedDate(prevDay);
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000); // добавляем 1 день к выбранной дате
    setSelectedDate(nextDay);
  };

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [result, setResult] = useState(0);

  function handleCalculate() {
    const diffInMinutes = Math.ceil((new Date(`1970-01-01T${endTime}:00.000Z`) - new Date(`1970-01-01T${startTime}:00.000Z`)) / (1000 * 60));
    const diffInTenMinutes = Math.ceil(diffInMinutes / 10);
    setResult(diffInTenMinutes);
  }

  const setRed = (part) => {
    if (part == 45) {
      return <div key={part} className="part-row nothover red borderup"></div>
    }
    else if (part > 45 && part < 50) {
      return <div key={part} className="part-row nothover red"></div>
    }
    else if (part == 50) {
      return <div key={part} className="part-row nothover red borderdown"></div>
    }
    if (part == 57) {
      return <div key={part} className="part-row nothover red borderup"></div>
    }
    else if (part > 57 && part < 87) {
      return <div key={part} className="part-row nothover red"></div>
    }
    else if (part == 87) {
      return <div key={part} className="part-row nothover red borderdown"></div>
    }
    else if (part == 111) {
      return <div key={part} className="part-row nothover red borderup"></div>
    }
    else if (part > 111 && part < 129) {
      return <div key={part} className="part-row nothover red"></div>
    }
    else if (part == 129) {
      return <div key={part} className="part-row nothover red borderdown"></div>
    }
    else if (part == 130) {
      return <div key={part} className="part-row nothover red borderup"></div>
    }
    else if (part > 130 && part < 143) {
      return <div key={part} className="part-row nothover red"></div>
    }
    else if (part == 143) {
      return <div key={part} className="part-row nothover red borderdown"></div>
    }

    else {
      return <div key={part} className="part-row"></div>
    }
  };

  return (
      <div className="mainCalendar-d">
        <div className="firstLineContainer">
          <select className="selectFormat" onChange={(event)=> viewChoose(event.target.value)}>
            <option value="day">
              Day
            </option>
            <option value="week">
              Week
            </option>
            <option value="month">
              Month
            </option>            
          </select>
          <button className="previous" onClick={handlePrevDay}><img src={iconLeft} alt="previous" width="40px" height="40px" /></button>
          <a className="date-header">{selectedDate.toLocaleDateString("ru", { month: "long", day: "numeric", year: "numeric" })}</a>
          <button className="next" onClick={handleNextDay}><img src={iconRight} alt="previous" width="40px" height="40px" /></button>
          <div className="ownerCalendar">Петр Петров</div>
        </div>

        <div className="hour-grid">
          {hours.map((hour) => (
            <div key={hour} className="hour-row">
              <div className="hour-label">{`${hour}:00`}
            </div>
          </div>))}
        </div>

        <div className="sensor-panel">
          {tenminuteparts.map((part) => (

            setRed(part)

          ))}
        </div>
        {/* <div className="eventStudy">Занятия в ВУЗе &#40;Проспект Вернадского, 78&#41;, 9:00-14:10</div>
        <div className="eventTraining">Тренировка &#40;Миклухо-Маклая, 19&#41;, 18:00-21:00</div>
        <div className="eventCinema">Поход в кино &#40;Проспект Андропова, 2&#41;, 21:10-23:50</div>
        <div className="eventHospital">Поход в поликлинику &#40;Мосфильмовская, 15&#41;, 7:00-8:00</div> */}

        <div className="windowContainer">
          <div>Название события:</div>
          <input className="nameOfEvent" type="text"></input>
          <div>Адрес:</div>
          <input className="adressOfEvent" type="text"></input>
          <div>Время начала:</div>
          <input className="inputTime" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <div>Время окончания:</div>
          <input className="inputTime" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          <div className="addEventBtn" onClick={handleCalculate}>Добавить событие</div>
        </div>
      </div>    
      
  );
};

export default BCDayView;
