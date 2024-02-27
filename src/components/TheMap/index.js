import React, { useState } from "react";
import  "../../resources/styles.css";
import TimeUntil from "../featured/timeUntil";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import paris from "../../resources/images/paris.jpg";

const TheMap = () => {
    const [selectedDate, setSelectedDate] = useState("");
  
    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };
  
    return (
      
        <div className="carrousel_image"style={{
              background: `url(${paris})`,
              height: `${window.innerHeight}px`,
            }}>
          <FormControl className="artist_name">
            <InputLabel id="event-date-select-label">SELECT YOUR DATE</InputLabel>
            <Select
              labelId="event-date-select-label"
              id="event-date-select"
              value={selectedDate}
              onChange={handleDateChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="May 9, 2024 00:00:00">Paris, FR - 05/09/24</MenuItem>
              <MenuItem value="May 10, 2024 00:00:00">Paris, FR - 05/10/24</MenuItem>
              <MenuItem value="May 11, 2024 00:00:00">Paris, FR - 05/11/24</MenuItem>
              <MenuItem value="May 12, 2024 00:00:00">Paris, FR - 05/12/24</MenuItem>
            </Select>
          </FormControl>
          {selectedDate && <TimeUntil deadline={selectedDate} />}
        </div>
        
    );
  }
  
  export default TheMap;
  