import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Dates: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [dateFuncState, setDatFunc] = useState(new Date());
  const [dayOfWeek, setDayOfWeek] = useState<number[]>([]);
  const [days, setDays] = useState<number[]>([]);
  const [currentMonthState, setcurrentMonth] = useState<number>(
    dateFuncState.getMonth()
  );
  const [currentYearState, setCurrentYear] = useState<number>(
    dateFuncState.getFullYear()
  );
  const [incrementCounterState, setIncrementCounter] = useState(
    dateFuncState.getMonth()
  );

  const monthsOfTheYear: Record<number, string> = {
    0: "january",
    1: "february",
    2: "march",
    3: "april",
    4: "may",
    5: "june",
    6: "july",
    7: "august",
    8: "september",
    9: "october",
    10: "november",
    11: "december",
  };

  const setCalender = () => {
    const daysArray = [];
    const beginningOfMonth = new Date(
      dateFuncState.getFullYear(),
      dateFuncState.getMonth()
    );
    const currentMonth = dateFuncState.getMonth();
    const currentYear = dateFuncState.getFullYear();
    const firstDayDate = beginningOfMonth.getDay();
    const firstDayDateArray = [];
    for (let i = 0; i <= firstDayDate; i++) {
      if (firstDayDate === 0) {
        for (let j = 0; j < 6; j++) {
          firstDayDateArray.push(j);
        }
      } else if (firstDayDate !== 0) {
        for (let k = 1; k < firstDayDate; k++) {
          firstDayDateArray.push(k);
        }
        break;
      }
    }
    setcurrentMonth(currentMonth);
    setCurrentYear(currentYear);
    while (beginningOfMonth.getMonth() === currentMonth) {
      daysArray.push(beginningOfMonth.getDate());
      beginningOfMonth.setDate(beginningOfMonth.getDate() + 1);
    }
    setDayOfWeek(firstDayDateArray);
    setDays(daysArray);
  };

  const forwardClick = () => {
    let actualYear = new Date().getFullYear();
    const newDate = new Date(actualYear, incrementCounterState + 1);
    actualYear = newDate.getFullYear();
    setDatFunc(newDate);
    setCurrentYear(newDate.getFullYear());
    setIncrementCounter(incrementCounterState + 1);
  };

  const backwardClick = () => {
    let actualYear = new Date().getFullYear();
    const newDate = new Date(actualYear, incrementCounterState - 1);
    actualYear = newDate.getFullYear();
    setIncrementCounter(incrementCounterState - 1);
    setDatFunc(newDate);
  };

  useEffect(() => {
    setCalender();
  }, [dateFuncState]);

  const MyDate = () => {
    return (
      <div className="flex flex-wrap w-full mt-3 ml-1">
        {dayOfWeek.map((_, index) => (
          <div
            key={index}
            className="capitalize font-inter font-bold text-[13px] mb-2 flex justify-center w-[calc(100%/7)]"
          >
            <p></p>
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className="capitalize font-inter font-bold text-[13px] mb-2 flex justify-center w-[calc(100%/7)]"
          >
            <p>{day}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={` flex flex-col items-center justify-between min-h-[16rem] rounded-md border py-4 ${className}`}
    >
      <div className="flex w-full items-center justify-between px-5">
        <h3 className="capitalize font-black font-inter text-sm text-center m-0">
          {`${monthsOfTheYear[currentMonthState]} ${currentYearState}`}
        </h3>
        <div className="flex gap-4 mr-3">
          <ChevronLeft onClick={backwardClick} className="cursor-pointer" />
          <ChevronRight onClick={forwardClick} className="cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-wrap w-full mt-4">
        {["mon", "tue", "wed", "thur", "fri", "sat", "sun"].map((day) => (
          <div
            key={day}
            className="capitalize font-inter font-bold text-[13px] flex justify-center w-[calc(100%/7)]"
          >
            <p>{day}</p>
          </div>
        ))}
      </div>

      <MyDate />
    </div>
  );
};

export default Dates;
