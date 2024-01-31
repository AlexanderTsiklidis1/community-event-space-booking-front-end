import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const API = import.meta.env.VITE_BASE_URL;

const RoomNewForm = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    room_name: '',
    floor: '',
    capacity: '',
  });

  const addRoom = () => {
    fetch(`${API}/rooms`, {
      method: 'POST',
      body: JSON.stringify(room),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => console.error('catch', error));
  };

  const handleTextChange = (event) => {
    setRoom({ ...room, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRoom();
  };

  return (
    <div className="room-new-form-container">
		<h2 className="new-form-title">Create a Room</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='room_name' className="room-new-form-label">Room Name:</label>
        <input
          id='room_name'
          value={room.room_name}
          type='text'
          onChange={handleTextChange}
          className="room-new-form-input"
          placeholder='Room Name'
          required
        />
        <label htmlFor='floor' className="room-new-form-label">Floor:</label>
        <input
          id='floor'
          value={room.floor}
          type='number'
          onChange={handleTextChange}
          className="room-new-form-input"
          placeholder='Floor Number'
          required
        />
        <label htmlFor='capacity' className="room-new-form-label">Capacity:</label>
        <input
          id='capacity'
          value={room.capacity}
          type='number'
          onChange={handleTextChange}
          className="room-new-form-input"
          placeholder='Capacity'
          required
        />
        <br />
        <input type='submit' value='Submit' className="room-new-form-submit" />
      </form>
    </div>
  );
};

export default RoomNewForm;