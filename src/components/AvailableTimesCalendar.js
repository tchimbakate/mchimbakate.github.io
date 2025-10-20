import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // custom styling

const AvailableTimesCalendar = ({
  businessId,
  practitionerId,
  appointmentType,
}) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    if (!appointmentType) return;

    const fetchTimes = async () => {
      try {
        const today = new Date();
        const from = today.toISOString().split("T")[0];
        const toDate = new Date();
        toDate.setDate(today.getDate() + 30); // fetch 30 days ahead
        const to = toDate.toISOString().split("T")[0];

        const res = await axios.get(
          `http://localhost:4000/api/businesses/${businessId}/practitioners/${practitionerId}/appointment_types/${appointmentType.id}/available-times`,
          { params: { from, to } }
        );

        setAvailableTimes(res.data.available_times);
      } catch (err) {
        console.error("Error fetching available times:", err);
      }
    };

    fetchTimes();
  }, [businessId, practitionerId, appointmentType]);

  // Filter available times for selected date
  const timesForSelectedDate = availableTimes.filter((t) => {
    const tDate = new Date(t.appointment_start);
    return tDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div className="mt-4">
      <h4>Available Times for {appointmentType.name}</h4>

      <Calendar
        onChange={(date) => {
          setSelectedDate(date);
          setSelectedSlot(null); // reset selected slot when date changes
        }}
        value={selectedDate}
        minDate={new Date()}
      />

      {timesForSelectedDate.length === 0 ? (
        <p className="mt-3">No available times on this day.</p>
      ) : (
        <div className="mt-3">
          <h5>Available slots:</h5>
          <div className="d-flex flex-wrap">
            {timesForSelectedDate.map((t, index) => {
              const slotTime = new Date(t.appointment_start).toLocaleTimeString(
                [],
                { hour: "2-digit", minute: "2-digit" }
              );
              return (
                <button
                  key={index}
                  className={`btn-available m-1 ${
                    selectedSlot === slotTime ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSlot(slotTime)}
                >
                  {slotTime}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableTimesCalendar;
