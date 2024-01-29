import { useState, useEffect } from "react";
import Room from "./Room";
import RoomSearchForm from "./RoomSearchForm";
const API = import.meta.env.VITE_BASE_URL;

function Rooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch(`${API}/rooms`)
      .then(response => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setRooms(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
  return (
    <div className="rooms">
      <RoomSearchForm/>
      {rooms.map((room) => {
        return <Room key={room.id} room={room}/>
      })}
    </div>
  );
}

export default Rooms;
