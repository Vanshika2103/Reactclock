import React from "react";
import { useState } from "react";
import "./Time.css";

const Time = () => {
  let time = new Date().toLocaleTimeString();
  const [curTime, setTime] = useState(time);
  const updateTime = () => {
    return setTime(new Date().toLocaleTimeString());
  };

  setTimeout(updateTime, 1000);

  return (
    <>
      <div class="Time-container">
        <div class="time-div">
          <h1>Current Time</h1>
          <br />
          <h2>{curTime}</h2>
          <br />
          <hr />
          <img src="https://images.pexels.com/photos/36351/the-eleventh-hour-disaster-alarm-clock-clock.jpg?cs=srgb&dl=pexels-pixabay-36351.jpg&fm=jpg" />
        </div>
      </div>
    </>
  );
};

export default Time;
