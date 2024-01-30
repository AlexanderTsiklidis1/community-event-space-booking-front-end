import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Bookings from "./Bookings";
import BookingForm from "./BookingForm"
const API = import.meta.env.VITE_BASE_URL

function RoomDetails() {
  const [room, setRoom] = useState({
    room_name: '',
    floor: '',
    capacity: '',
  });
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API}/rooms/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      setRoom(responseJSON)
    })
    .catch(error => console.log(error))
  }, [id, navigate])

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
    <><h2>{room.room_name}</h2>
    <p>Capacity: {room.capacity}</p>
    <p>Floor: {room.floor}</p>
    <BookingForm/>
    </>
  );
}

export default RoomDetails;
