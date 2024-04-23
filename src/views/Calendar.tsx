import React, { useState } from 'react';
import './Calendar.css';
import Navbar from '../components/Nav';

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthName = ({ monthIndex }: { monthIndex: number }) => (
  <div className="text-center text-lg font-bold mb-2 bg-kindly-offWhite text-black" style={{ padding: '8px', borderRadius: '8px' }}>
    {monthNames[monthIndex]}
  </div>
);

const Calendar = ({ month, daysInMonth }: { month: number, daysInMonth: number }) => {
  let startingOffset = new Date(2024, month, 1).getDay() - 1;
  if (startingOffset < 0) startingOffset += 7;

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

        if ([3, 4, 5, 6].includes(dayOfMonth)) {
          dayStyle += ' special-day streak-highlight'; // Use class for special days with streak highlight
        }

        if ([7].includes(dayOfMonth)) {
          dayStyle += 'special-day current-day-highlight'
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
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const daysInMonth = [31, (new Date().getFullYear() % 4 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const goToPreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  return (
    <div className="flex flex-col items-center bg-kindly-offWhite text-black min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Carousel Navigation */}
      <div className="flex items-center  max-w-screen-sm mt-16">
        <button onClick={goToPreviousMonth} className="carousel-control left-control  larger-button rounded-full" style={{ backgroundColor: '#0085FF', marginRight: '-1px' }}>{'<'}</button>
        {/* Carousel for Current Calendar Month */}
        <div className="carousel w-full flex justify-center items-center">
          <div className="carousel-item">
            <div className="calendar-container rounded-lg shadow-lg p-4" style={{ backgroundColor: '#D9D9D9', borderRadius: '20px', maxWidth: '800px' }}>
              <MonthName monthIndex={currentMonth} />
              <div className="grid grid-cols-7 gap-4 mb-4">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="text-center font-bold">{day}</div>
                ))}
              </div>
              <Calendar month={currentMonth} daysInMonth={daysInMonth[currentMonth]} />
            </div>
          </div>
        </div>
        <button onClick={goToNextMonth} className="carousel-control right-control rounded-full larger-button" style={{ backgroundColor: '#0085FF', marginLeft: '-1px' }}>{'>'}</button>
      </div>

      
    </div>
  );
};

export default CalendarPage;
