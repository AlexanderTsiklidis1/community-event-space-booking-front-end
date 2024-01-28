import React, { useState } from 'react';
import RoomSearchForm from '../Components/RoomSearchForm';
import Rooms from '../Components/Rooms';


function HomePage() {
  return (
    <div>
      <RoomSearchForm/>
      <Rooms/>
    </div>
  );
};

export default HomePage;