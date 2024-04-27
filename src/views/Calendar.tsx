import { useEffect, useState } from "react";
import "./Calendar.css";
import Navbar from "../components/Nav";
import { getCalendarInfo } from "../services";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthName = ({
  monthIndex,
  year,
}: {
  monthIndex: number;
  year: number;
}) => (
  <div
    className="text-center text-3xl font-bold mb-4 text-white bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue"
    style={{ padding: "20px 0", width: "100%" }}
  >
    {monthNames[monthIndex]} {year}
  </div>
);

const Calendar = ({
  month,
  year,
  daysInMonth,
  currentDay,
  completedDays,
}: {
  month: number;
  year: number;
  daysInMonth: number[];
  currentDay: number;
  completedDays: number[];
}) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  let startingOffset = new Date(year, month, 1).getDay();

  return (
    <div className="grid grid-cols-7 gap-4">
      {[...Array(startingOffset)].map((_, index) => (
        <div
          key={`empty-${index}`}
          className="text-center text-xl text-gray-400"
        >
          -{" "}
          {/* Placeholder for empty grid items before the first day of the month */}
        </div>
      ))}
      {[...Array(daysInMonth[month])].map((_, index) => {
        const dayOfMonth = index + 1;
        let dayStyle = "day-number"; // Base styling for day numbers

        if (completedDays.includes(dayOfMonth)) {
          dayStyle += " special-day streak-highlight"; // Additional styling for special days
        }

        if (
          dayOfMonth === currentDay &&
          month === currentMonth &&
          year === currentYear
        ) {
          dayStyle += " current-day"; // Applying current-day style
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

function mapDates(options: { dates: Date[]; month: number; year: number }) {
  const { dates, month, year } = options;
  const days = dates
    .filter((date) => {
      return date.getFullYear() === year && date.getMonth() === month;
    })
    .map((date) => date.getDate());

  return days;
}

const CalendarPage = () => {
  const initialYear = new Date().getFullYear();
  const initialMonth = new Date().getMonth();
  const initialDay = new Date().getDate();

  const [completionDates, setCompletionDates] = useState<Date[]>([]);
  const [userStreak, setUserStreak] = useState(0);
  const [showLogin, setShowLogin] = useState(true);

  const { isLoading, isAuthenticated, getToken } = useKindeAuth();

  const [currentYear, setCurrentYear] = useState(initialYear);
  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      setShowLogin(false);
      getToken().then((token) => {
        if (token !== undefined) {
          getCalendarInfo(token).then((info) => {
            setCompletionDates(info.completion_dates);
            setUserStreak(info.user_streak);
            setCompletedDays(
              mapDates({
                dates: completionDates,
                year: currentYear,
                month: currentMonth,
              })
            );
          });
        }
      });
    }
  }, [isLoading]);

  const daysInMonth = [
    31,
    currentYear % 4 === 0 &&
    (currentYear % 100 !== 0 || currentYear % 400 === 0)
      ? 29
      : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const streakTitle = (
    <div
      className="text-center text-3xl font-bold text-white py-4 w-full rounded-xl bg-gradient-to-br from-kindly-royalBlue to-kindly-lightBlue shadow-md max-w-screen-sm mx-auto"
      style={{ maxWidth: "800px" }}
    >
      Current Streak: {userStreak} Days
    </div>
  );

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className="flex flex-col items-center bg-kindly-offWhite text-black min-h-screen">
      <Navbar showLogin={showLogin} />
      <h1 className="text-3xl font-bold mt-4">{streakTitle}</h1>
      <div className="flex items-center max-w-screen-sm mt-4">
        <button
          onClick={goToPreviousMonth}
          className="carousel-control left-control larger-button text-kindly-blue"
          style={{ marginRight: "8px" }}
        >
          {"<"}
        </button>
        <div className="carousel w-full flex justify-center items-center">
          <div className="carousel-item">
            <div
              className="calendar-container rounded-lg shadow-lg p-4 bg-white"
              style={{ borderRadius: "20px", maxWidth: "800px" }}
            >
              <MonthName monthIndex={currentMonth} year={currentYear} />
              <div className="grid grid-cols-7 gap-4 mb-4">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="text-center font-bold">
                    {day}
                  </div>
                ))}
              </div>
              <Calendar
                month={currentMonth}
                year={currentYear}
                daysInMonth={daysInMonth}
                currentDay={initialDay}
                completedDays={completedDays}
              />
            </div>
          </div>
        </div>
        <button
          onClick={goToNextMonth}
          className="carousel-control right-control larger-button text-kindly-blue"
          style={{ marginLeft: "8px" }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CalendarPage;
