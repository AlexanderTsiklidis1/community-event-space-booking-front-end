import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Bookings from "./Bookings";
import BookingForm from "./BookingForm"
const API = import.meta.env.VITE_BASE_URL

function RoomDetails() {
  const [bookings, setBookings] = useState([]);
  const [room, setRoom] = useState({});
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API}/rooms/${id}/bookings`)
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON)
      setBookings(responseJSON.bookingsByRoom)
      setRoom(responseJSON.room)
    })
    .catch(error => console.log(error))
  }, [id])


//  useEf fect(() => {
//     fetch(`${API}/rooms/${id}`)
//     .then((response) => response.json())
//     .then((responseJSON) => {
//       console.log(responseJSON)
//       setRoom(responseJSON)
//     })
//     .catch(error => console.log(error))
//   }, [id, navigate])

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
              <Link to={`/rooms/${id}/bookings/${booking.id}`}>{
                booking.booking_name
              }
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default RoomDetails;
