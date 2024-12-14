import React, { useState } from "react";

//import "../style/calendar.css";  

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const calendar = [];
    let day = 1;

    for (let i = 0; i < 6; i++) { // 6 rows max for a calendar
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(null); // Empty cells before the 1st of the month
        } else if (day <= daysInMonth) {
          week.push(day);
          day++;
        } else {
          week.push(null); // Empty cells after the last day of the month
        }
      }
      calendar.push(week);
      if (day > daysInMonth) break;
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const calendar = generateCalendar();

  return (
    <div>
      <h2>{currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</h2>
      
      {/* Buttons to switch months */}
      <div>
        <button onClick={handlePrevMonth}>Previous</button>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex} style={{ padding: "10px", textAlign: "center" }}>
                  {day || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
