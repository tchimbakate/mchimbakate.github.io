import React, { useState } from "react";
import AppointmentTypeDropdown from "./AppointmentTypeDropdown";
import AvailableTimesCalendar from "./AvailableTimesCalendar";

const Booking = () => {
  const [selectedType, setSelectedType] = useState(null); // {id, name}
  const [showCalendar, setShowCalendar] = useState(false);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setShowCalendar(false); // hide calendar if user changes type
  };

  const handleNext = () => {
    if (selectedType) setShowCalendar(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Book an Appointment</h1>

      {!showCalendar && (
        <>
          <AppointmentTypeDropdown
            practitionerId="1025345283992592726"
            onSelect={handleTypeSelect}
          />

          {selectedType && (
            <button className="btn btn-primary mt-3" onClick={handleNext}>
              Next
            </button>
          )}
        </>
      )}

      {showCalendar && selectedType && (
        <AvailableTimesCalendar
          businessId="1025345285796144073"
          practitionerId="1025345283992592726"
          appointmentType={selectedType}
        />
      )}
    </div>
  );
};

export default Booking;
