import React, { useState } from "react";
import Carrousel from "./Carrousel";
import TimeUntil from "./timeUntil";

const Featured = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="featured_container">
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Taylor Swift</div>
      </div>
      
    </div>
  );
};

export default Featured;
