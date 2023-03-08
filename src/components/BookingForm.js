import React, { useState } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  function handleDateChange(event) {
    setDate(event.target.value);
    props.dispatch({ type: "UPDATE_TIMES", date: event.target.value });
  }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  function handleGuestsChange(event) {
    setGuests(parseInt(event.target.value));
  }

  function handleOccasionChange(event) {
    setOccasion(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.submitForm([date, time, guests, occasion]);
  }

  return (
    <form id="booking-form" onSubmit={handleSubmit}>
      <h1 className="markazi subtitle">Booking Form</h1>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        value={props.selectedDate}
        onChange={props.handleDateChange}
        id="res-date"
      />
      <label htmlFor="res-time">Choose time</label>
      <table>
        <tbody>
          <tr key={time.time}>
            {props.availableTimes.map(time => (
                <td key={time.time} >
                  {time.time}
                </td>
            ))}
          </tr>
        </tbody>
      </table>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
