import { useState, useEffect } from "react";
import Booking from "./Booking";

const API = import.meta.env.VITE_API_URL;

function Bookings() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`${API}/setBookings`)
      .then(response => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setBookings(responseJSON.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
  return (
    <div className="bookings">
      {bookings.map((booking) => {
        return <Booking key={booking.id} booking={booking}/>
      })}
    </div>
  );
}

export default Bookings;