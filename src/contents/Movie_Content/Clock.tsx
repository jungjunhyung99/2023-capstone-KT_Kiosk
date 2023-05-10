import React, { useState, useEffect } from 'react';
import { ClockDiv, DayDiv, MovieLocDiv } from '../../component/kiosk-component/styled_movie';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const formatDay = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleString('ko-KR', { month: 'long'})
    const week =  date.toLocaleString('ko-KR', { weekday: 'long'})

    return `${month} ${day}일 ${week}`;
  };

  return (
    <MovieLocDiv>
        <DayDiv>
            KT씨네마
        </DayDiv>
        <ClockDiv>
            <span style={{fontSize:"1rem"}}>
                {formatDay(time)}
            </span>
            <span>
                {formatTime(time)}
            </span>
        </ClockDiv>
        <DayDiv>
            광운대점
        </DayDiv>
    </MovieLocDiv>
  );
}

export default Clock;