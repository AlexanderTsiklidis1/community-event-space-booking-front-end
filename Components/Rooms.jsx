import { useState, useEffect } from "react";
import Room from "./Room";

const API = import.meta.env.VITE_API_URL;

function Rooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch(`${API}/rooms`)
      .then(response => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setRooms(responseJSON.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
  return (
    <div className="rooms">
      {rooms.map((room) => {
        return <Room key={room.id} room={room}/>
      })}
    </div>
  );
}

export default Rooms;
