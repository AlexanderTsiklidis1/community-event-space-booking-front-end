import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Bookings from "./Bookings";
import BookingForm from "./BookingForm"
const API = import.meta.env.VITE_API_URL

function MeetingRoomDetails() {
  const [meetingRoom, setMeetingRoom] = useState({
    name: '',
    capacity: '',
    floor: '',
  });
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API}/meetingRoom/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      setBookmark(responseJSON)
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
    <><h2>{meetingRoom.name}</h2>
    <p>Capacity: {meetingRoom.capacity}</p>
    <p>Floor: {meetingRoom.floor}</p>
    <BookingForm />
    <Bookings /></>
  );
}

export default MeetingRoomDetails;
