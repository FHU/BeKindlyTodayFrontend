import React from 'react';
import './index.css';
import './Calendar.css';
import { CiCalendar } from 'react-icons/ci';

const CalendarPage: React.FC = () => {
  const daysInMonth = 30;
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const monthName = 'April';
  const firstDayOfMonth = new Date(2024, 3, 1);

  let startingOffset = firstDayOfMonth.getDay() - 5;

  if (startingOffset < 0) {
    startingOffset += 7;
  }

  return (
    <div className="flex flex-col gap-y-10 items-center bg-white text-black">
      {/* Header */}
      <div className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
            <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
            <h1>BeKindly</h1>
            <div className="flex items-center">
                <div className="text-6xl text-black"><CiCalendar /></div>
                <div className="rounded-full bg-slate-100 p-7"></div>
            </div>
        </div>

      <div className="flex flex-col items-center gap-4 pb-10">
        <div className="rounded-lg shadow-lg p-4 calendar-container" style={{ backgroundColor: '#D9D9D9', borderRadius: '20px', width: '90%', maxWidth: '800px', padding: '20px' }}>
          <div className="text-center text-lg font-bold mb-2" style={{ backgroundColor: '#FDF9F9', color: '#000000', padding: '8px', borderRadius: '8px' }}>
            {monthName}
          </div>

          <div className="grid grid-cols-7 gap-4 mb-4">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center font-bold">{day}</div>
            ))}
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
