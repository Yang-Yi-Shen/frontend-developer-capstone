import { useState } from 'react'

import { useState } from 'react';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

  const handleGuestsChange = (event) => {
    setGuests(parseInt(event.target.value));
  }

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to send form data to API or perform other actions
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map(time => <option key={time}>{time}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

// function BookingForm() {
//     const [date, setDate] = useState(null);
//     const [time, setTime] = useState(null);
//     const [guests, setGuests] = useState(null);
//     const [occasion, setOccasion] = useState(null);

//     return (
//         <form style="display: grid; max-width: 200px; gap: 20px">
//             <label htmlFor="res-date">Choose date</label>
//             <input type="date" id="res-date" />
//             <label htmlFor="res-time">Choose time</label>
//             <select id="res-time ">
//                 <option>17:00</option>
//                 <option>18:00</option>
//                 <option>19:00</option>
//                 <option>20:00</option>
//                 <option>21:00</option>
//                 <option>22:00</option>
//             </select>
//             <label htmlFor="guests">Number of guests</label>
//             <input type="number" placeholder="1" min="1" max="10" id="guests" />
//             <label htmlFor="occasion">Occasion</label>
//             <select id="occasion">
//                 <option>Birthday</option>
//                 <option>Anniversary</option>
//             </select>
//             <input type="submit" value="Make Your reservation" />
//         </form>
//     )
// }

export default BookingForm;