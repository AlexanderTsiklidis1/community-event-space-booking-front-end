import { Link } from "react-router-dom";

function Room({ room }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
            <h3>{room.name}</h3>
            <p>Capacity: {room.capacity}</p>
            <p>Floor: {room.floor}</p>
        </div>
    );
}

export default Room;
