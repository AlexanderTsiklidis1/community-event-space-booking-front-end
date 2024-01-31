import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Bookings from "./Bookings";
import BookingForm from "./BookingForm"
const API = import.meta.env.VITE_BASE_URL

function RoomDetails() {
  const [bookings, setBookings] = useState([]);
  const [room, setRoom] = useState({
    room_name: '',
    floor: '',
    capacity: '',
  });
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API}/rooms/${id}/bookings`)
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON)
      setBookings(responseJSON)
    })
    .catch(error => console.log(error))
  }, [id, navigate])


  useEffect(() => {
    fetch(`${API}/rooms/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON)
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
    <ul>
        {bookings.map((booking) => {
          return (
            <li>
              <Link to={`/rooms/${id}/bookings/${booking.id}`}>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default RoomDetails;
