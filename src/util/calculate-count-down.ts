type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const getCountdown = (targetDate: Date): Countdown => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  // If the target date is in the past, return zero values
  // This prevents negative countdown values and ensures the countdown stops at zero
  // we can return null and not render the countdown component
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
