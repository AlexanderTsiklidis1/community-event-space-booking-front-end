import { useState, useEffect } from "react";
import Booking from "./Booking";
import BookingForm from "./BookingForm";

const API = import.meta.env.VITE_BASE_URL;

function Bookings() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`${API}/bookings`)
      .then(response => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setBookings(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

    // const handleAdd = (newBooking) => {
    //   fetch(`${API}/rooms/${id}/bookings`, {
    //     method: "POST",
    //     body: JSON.stringify(newBooking),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((responseJSON) => {
    //       setBookings([...bookings, responseJSON]);
    //     })
    //     .catch((error) => console.log(error));
    // };
  
    // const handleDelete = (bookingId) => {
    //   fetch(`${API}/rooms/${id}/bookings/${bookingId}`, { method: "DELETE" })
    //     .then((response) => {
    //       const copyBookingArray = [...bookings];
    //       const indexDeletedBooking = copyBookingArray.findIndex(
    //         (booking) => booking.id === bookingId
    //       );
    //       console.log(reviewId, indexDeletedBooking);
    //       copyReviewArray.splice(indexDeletedBooking, 1);
    //       console.log("NEW Bookings", copyBookingArray);
    //       setReviews(copyBookingArray);
    //     })
    //     .catch((error) => console.log(error));
    // };
  
    // const handleEdit = (updatedBooking) => {
    //   fetch(`${API}/rooms/${id}/bookings/${updatedBooking.id}`, {
    //     method: "PUT",
    //     body: JSON.stringify(updatedBooking),
    //     headers: { "Content-Type": "application/json" },
    //   })
    //   .then((response) => response.json())
    //   .then(responseJSON => {
    //       const copyBookingArray = [...bookings]
    //       const indexUpdatedBooking = copyBookingArray.findIndex(booking => {
    //           return booking.id === updatedBooking.id
    //       })
    //       copyBookingArray[indexUpdatedBooking] = responseJSON
    //       setBookings(copyBookingArray)
    //   });
    // };
  return (
    <div className="bookings">
      {bookings.map((booking) => {
        return <Booking key={booking.id} booking={booking}/>
      })}
    </div>
  );
}

export default Bookings;