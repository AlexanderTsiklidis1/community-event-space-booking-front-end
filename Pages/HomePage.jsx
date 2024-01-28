import React, { useState } from 'react';

function HomePage() {
  
  const [selectedTab, setSelectedTab] = useState('meetingRooms');

  
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [floor, setFloor] = useState('');
  const [capacity, setCapacity] = useState('');

  // Function to handle tab selection
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
    // You may want to fetch data or update the view based on the selected tab.
  };

  // Function to handle search form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform the search based on the form data
    console.log('Search Submitted:', { startDate, startTime, endDate, endTime, floor, capacity });
    // You can make API calls or update the UI based on the search criteria.
  };

  return (
    <div>
      {/* Top Section with Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div onClick={() => handleTabSelect('meetingRooms')}>Meeting Rooms</div>
        <div onClick={() => handleTabSelect('bookings')}>Bookings</div>
        <div onClick={() => handleTabSelect('newRoom')}>New Room</div>
      </div>

      {/* Search Form */}
      {selectedTab === 'meetingRooms' && (
        <div>
          <h2>Title of Find Available Rooms</h2>
          <form onSubmit={handleSearchSubmit}>
            <div>
              <label>Date and Time Start:</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            </div>
            <div>
              <label>Date and Time End:</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </div>
            <div>
              <label>Floor:</label>
              <input type="text" value={floor} onChange={(e) => setFloor(e.target.value)} />
            </div>
            <div>
              <label>Capacity:</label>
              <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            </div>
            <button type="submit">Search</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;