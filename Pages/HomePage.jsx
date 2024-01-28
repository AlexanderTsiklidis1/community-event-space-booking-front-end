import React, { useState } from 'react';


function HomePage() {
  const [selectedTab, setSelectedTab] = useState('meetingRooms');
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <MeetingRoomSearchForm/>
      <MeetingRooms/>
    </div>
  );
};

export default HomePage;