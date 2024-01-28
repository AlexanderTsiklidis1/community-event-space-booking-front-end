import React, { useState } from 'react';
import MeetingRoomSearchForm from '../Components/MeetingRoomSearchForm';
import MeetingRooms from '../Components/MeetingRooms';

function HomePage() {
  const [selectedTab, setSelectedTab] = useState('meetingRooms');
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div onClick={() => handleTabSelect('meetingRooms')}>Meeting Rooms</div>
        <div onClick={() => handleTabSelect('bookings')}>Bookings</div>
        <div onClick={() => handleTabSelect('newRoom')}>New Room</div>
      </div>
      <MeetingRoomSearchForm/>
      <MeetingRooms/>
    </div>
  );
};

export default HomePage;