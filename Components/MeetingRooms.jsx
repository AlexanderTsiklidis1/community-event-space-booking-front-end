import { useState, useEffect } from "react";
import MeetingRoom from "./MeetingRoom";

const API = import.meta.env.VITE_API_URL;

function MeetingRooms() {
  const [meetingRooms, setMeetingRooms] = useState([]);
  useEffect(() => {
    fetch(`${API}/meetingRooms`)
      .then(response => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setMeetingRooms(responseJSON.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
  return (
    <div className="meetingRooms">
      {meetingRooms.map((meetingRoom) => {
        return <MeetingRoom key={meetingRoom.id} meetingRoom={meetingRoom}/>
      })}
    </div>
  );
}

export default MeetingRooms;
