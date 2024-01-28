import { Link } from "react-router-dom";

function MeetingRoom({ meetingRoom }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
            <h3>{meetingRoom.name}</h3>
            <p>Capacity: {meetingRoom.capacity}</p>
            <p>Floor: {meetingRoom.floor}</p>
        </div>
    );
}

export default MeetingRoom;
