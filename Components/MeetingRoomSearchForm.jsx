import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function MeetingRoomSearchForm() {
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [floor, setFloor] = useState('');
    const [capacity, setCapacity] = useState('');

    
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
    console.log('Search Submitted:', { startDate, startTime, endDate, endTime, floor, capacity });
    return(
        <div>
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
        </div>
    )
  };
}

export default MeetingRoomSearchForm;
