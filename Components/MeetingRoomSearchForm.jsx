import React, { useState } from "react";

function MeetingRoomSearchForm() {
  const [searchData, setSearchData] = useState({
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    floor: '',
    capacity: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setSearchData({ ...searchData, [id]: value });
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Submitted:', searchData);
  };

  return (
    <div>
      <div>
        <h2>Title of Find Available Rooms</h2>
        <form onSubmit={handleSearchSubmit}>
          <div>
            <label>Start:</label>
            <input type="date" id="startDate" value={searchData.startDate} onChange={handleInputChange} />
            <input type="time" id="startTime" value={searchData.startTime} onChange={handleInputChange} />
          </div>
          <div>
            <label>End:</label>
            <input type="date" id="endDate" value={searchData.endDate} onChange={handleInputChange} />
            <input type="time" id="endTime" value={searchData.endTime} onChange={handleInputChange} />
          </div>
          <div>
            <label>Floor:</label>
            <input type="text" id="floor" value={searchData.floor} onChange={handleInputChange} />
          </div>
          <div>
            <label>Capacity:</label>
            <input type="number" id="capacity" value={searchData.capacity} onChange={handleInputChange} />
          </div>
          <button type="submit">Find</button>
        </form>
      </div>
    </div>
  );
}

export default MeetingRoomSearchForm;
