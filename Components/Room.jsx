import { Link } from "react-router-dom";

function Room({ room }) {
    return (
      <Link to={`/rooms/${room.id}`} className="room-card">
        <div className="room-card-container">
          <h3>{room.room_name}</h3>
          <p>Capacity: {room.capacity}</p>
          <p>Floor: {room.floor}</p>
        </div>
      </Link>
    );
  }
  
  export default Room;
