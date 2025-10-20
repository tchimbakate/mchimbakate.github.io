import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dropdown.css"; // custom styling

const AppointmentTypeDropdown = ({ practitionerId, onSelect }) => {
  const [types, setTypes] = useState([]);
  const [selectedTypeId, setSelectedTypeId] = useState("");

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/practitioners/${practitionerId}/appointment-types`
        );
        setTypes(res.data.appointment_types);
      } catch (err) {
        console.error("Error fetching appointment types:", err);
      }
    };

    fetchTypes();
  }, [practitionerId]);

  const handleChange = (e) => {
    const id = e.target.value;
    setSelectedTypeId(id);

    const typeObj = types.find((t) => t.id === id);
    if (typeObj && onSelect) {
      // Pass both id and name
      onSelect({ id: typeObj.id, name: typeObj.name });
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor="appointmentType" className="form-label">
        Select Appointment Type
      </label>
      <select
        id="appointmentType"
        className="form-select"
        value={selectedTypeId}
        onChange={handleChange}
      >
        <option value="">-- Choose a type --</option>
        {types.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name} ({type.duration_in_minutes} min)
          </option>
        ))}
      </select>
    </div>
  );
};

export default AppointmentTypeDropdown;
