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
  let startingOffset = new Date(2024, month, 1).getDay() - 5;

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
        let dayStyle = {};

        if ([1, 2, 5].includes(dayOfMonth)) {
          dayStyle = {
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#3D7068',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          };
        } else if (dayOfMonth === 6) {
          dayStyle = {
            border: '2px solid #5F5F5F',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#5F5F5F',
            color: '#FFFFFF',
          };
        } else {

          dayStyle = {
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          };
        }

        return (
          <div key={dayOfMonth} className="text-center text-xl" style={dayStyle}>
            {dayOfMonth}
          </div>
        );
      })}
    </div>
  );
};

const CalendarPage: React.FC = () => {
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (
    <div className="flex flex-col gap-y-10 items-center bg-kindly-offWhite text-black">
      {/* Header */}
      <Navbar/>

      <div className="flex flex-col items-center gap-4 pb-10">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="rounded-lg shadow-lg p-4 calendar-container" style={{ backgroundColor: '#D9D9D9', borderRadius: '20px', width: '90%', maxWidth: '800px', padding: '20px' }}>
            <MonthName monthIndex={index} />
            
            <div className="grid grid-cols-7 gap-4 mb-4">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center font-bold">{day}</div>
              ))}
            </div>

            <Calendar month={index} daysInMonth={daysInMonth[index]} />
          </div>
        ))}
      </div>
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