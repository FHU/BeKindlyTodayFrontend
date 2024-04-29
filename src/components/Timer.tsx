import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Initialize the countdown time to 24 hours from now in UTC
  const targetTime = new Date(Date.now() + 24 * 60 * 60 * 1000).setUTCHours(0, 0, 0, 0);
  
  // State to hold the remaining time
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      const now = Date.now();
      const difference = targetTime - now;
      setTimeLeft(difference);

      // If the countdown finishes, reset to 24 hours
      if (difference < 0) {
        // Set the new target time to the next day in UTC
        const newTargetTime = new Date(now + 24 * 60 * 60 * 1000).setUTCHours(0, 0, 0, 0);
        setTimeLeft(newTargetTime - now);
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetTime, timeLeft]);

  // Convert milliseconds into hours, minutes, and seconds
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Format time for display
  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <div className="countdown-timer my-3 flex gap-x-2 w-96 justify-center text-bold text-black text-4xl">
      <div>{formatTime(hours)}</div>:
      <div>{formatTime(minutes)}</div>:
      <div>{formatTime(seconds)}</div>
    </div>
  );
};

export default CountdownTimer;
