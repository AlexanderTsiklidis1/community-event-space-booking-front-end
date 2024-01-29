import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Bookings from "./Bookings";
// import BookingForm from "./BookingForm"
const API = import.meta.env.VITE_API_URL

function RoomDetails() {
  const [room, setRoom] = useState({
    name: '',
    capacity: '',
    floor: '',
  });
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API}/room/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      setRoom(responseJSON)
    })
    .catch(error => console.log(error))
  }, [id, API])

//   const handleDelete = () => {
//     deleteMeetingRoom()
//   }

//   const deleteMeetingRoom = () => {
//     const httpOptions = { method: "DELETE" }
//     fetch(`${API}/meetingRooms/${id}`, httpOptions)
//     .then(() => navigate(`/meetingRooms`))
//     .catch(error => console.log(error))
//   }
  return (
    <><h2>{room.name}</h2>
    <p>Capacity: {room.capacity}</p>
    <p>Floor: {room.floor}</p>
    <Bookings /></>
  );
}

export default RoomDetails;
