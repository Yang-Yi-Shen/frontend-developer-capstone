import React, { useEffect, useState } from "react";
import { useFormik } from 'formik'

function BookingForm(props) {
  // state moved up to Main.js
  // const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(props.selectedDate !== "" && time !== "");
  }, [props.selectedDate, time])

  // state moved up to Main.js
  // function handleDateChange(event) {
  //   setDate(event.target.value);
  //   props.dispatch({ type: "UPDATE_TIMES", date: event.target.value });
  // }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  function handleGuestsChange(event) {
    setGuests(event.target.value);
  }

  function handleOccasionChange(event) {
    setOccasion(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.submitForm([props.selectedDate, time, guests, occasion]);
    console.log(props.selectedDate, time, guests, occasion)
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
        required
      />
      <label htmlFor="res-time">Choose time</label>
      {/* <table>
        <tbody>
          <tr key={time.time}>
            {props.availableTimes.map(time => (
                <td key={time.time} >
                  {time.time}
                </td>
            ))}
          </tr>
        </tbody>
      </table> */}
      <select 
        value={time}
        onChange={handleTimeChange}
        required>
          {props.availableTimes.map(time => (
            <option key={time.time} value={time.time}>
              {time.time}
            </option>
          ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;