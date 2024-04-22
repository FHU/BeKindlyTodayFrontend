import React from 'react';
import './Calendar.css';
import Navbar from '../components/Nav';

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const MonthName = ({ monthIndex }: { monthIndex: number }) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return <div className="text-center text-lg font-bold mb-2 bg-kindly-offWhite text-black" style={{padding: '8px', borderRadius: '8px' }}>
    {monthNames[monthIndex]}
  </div>;
};

const Calendar = ({ month, daysInMonth }: { month: number, daysInMonth: number }) => {
  let startingOffset = new Date(2024, month, 1).getDay() - 1;

  if (startingOffset < 0) {
    startingOffset += 7;
  }

  return (
    <div className="grid grid-cols-7 gap-4">
      {[...Array(startingOffset)].map((_, index) => (
        <div key={`empty-${index}`} className="text-center text-xl text-gray-400">
          -
        </div>
      ))}
      {[...Array(daysInMonth)].map((_, index) => {
        const dayOfMonth = index + 1;
        let dayStyle = 'day-number'; // Use class for styling

        if ([1, 2, 5].includes(dayOfMonth)) {
          dayStyle += ' special-day'; // Use class for special days
        }

        return (
          <div key={dayOfMonth} className={dayStyle}>
            {dayOfMonth}
          </div>
        );
      })}
    </div>
  );
};

const CalendarPage: React.FC = () => {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap year
  const year = new Date().getFullYear();
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[1] = 29;
  }

  return (
    <div className="flex flex-col gap-y-10 items-center bg-kindly-offWhite text-black">
      {/* Header */}
      <Navbar/>

      {/* Carousel for Calendars */}
      <div className="carousel w-full">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="carousel-item">
            <div className="calendar-container rounded-lg shadow-lg p-4" style={{ backgroundColor: '#D9D9D9', borderRadius: '20px', maxWidth: '800px' }}>
              <MonthName monthIndex={index} />
              <div className="grid grid-cols-7 gap-4 mb-4">
                {daysOfWeek.map((day) => (
                  <div key={day} className="text-center font-bold">{day}</div>
                ))}
              </div>
              <Calendar month={index} daysInMonth={daysInMonth[index]} />
            </div>
          </div>
        ))}
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default CalendarPage;
