//IMPORTANT: think HARD about how availableTimes (line 12), updateTimes (line 44), initializeTimes (line 33) and useReducer fit together

import { useState, useReducer } from 'react'

import { Routes, Route } from 'react-router-dom'

import BookingForm from './BookingForm';
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'

export default function Main() {
    const [selectedDate, setSelectedDate] = useState("");
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    function handleDateChange(event) {
        setSelectedDate(event.target.value);
        dispatch({ type: "UPDATE_TIMES", payload: event.target.value });
    }

    return (
        <div className="main">
            <Routes>
                <Route path='/' element={
                    <>
                        <Hero />
                        <Specials />
                        <Testimonials />
                    </>
                } />
                <Route path='/booking' element={
                    <BookingForm
                        selectedDate={selectedDate}
                        availableTimes={availableTimes}
                        handleDateChange={handleDateChange}
                    />
                } />
            </Routes>
        </div>
    );
}

//code from coursera
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
// const submitAPI = function(formData) {
//     return true;
// };
//end of coursera code

export function initializeTimes() {
    const times = fetchAPI(new Date())
    
    const result = times.map((time) => ({
        time: time,
        available: true
    }));

    console.log(result)
    return result;
}

export function updateTimes(state, action) {
    switch (action.type) {
        case "UPDATE_TIMES":
            return initializeTimes();
        default:
            return state;
    }
}