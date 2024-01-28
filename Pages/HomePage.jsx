import React, { useState } from 'react';
import MeetingRoomSearchForm from '../Components/MeetingRoomSearchForm';

function HomePage() {
  
  const [selectedTab, setSelectedTab] = useState('meetingRooms');

  
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [floor, setFloor] = useState('');
  const [capacity, setCapacity] = useState('');

  
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  
  const handleSearchSubmit = (event) => {
    event.preventDefault();
   
    console.log('Search Submitted:', { startDate, startTime, endDate, endTime, floor, capacity });
  };

  return (
    <div>
      { /* Top Section with Tabs */ }
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div onClick={() => handleTabSelect('meetingRooms')}>Meeting Rooms</div>
        <div onClick={() => handleTabSelect('bookings')}>Bookings</div>
        <div onClick={() => handleTabSelect('newRoom')}>New Room</div>
      </div>
      <MeetingRoomSearchForm/>
    </div>
  );
};

export default HomePage;