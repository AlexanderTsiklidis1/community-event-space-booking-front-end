import { Link } from "react-router-dom";

function Room({ room }) {
    return (
        <Link to={`/rooms/${room.id}`}> 
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
                <h3>{room.room_name}</h3>
                <p>Capacity: {room.capacity}</p>
                <p>Floor: {room.floor}</p>
            </div>
        </Link>
    );
}

export default Room;
