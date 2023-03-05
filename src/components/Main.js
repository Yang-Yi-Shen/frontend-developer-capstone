//IMPORTANT: think HARD about how availableTimes (line 12), updateTimes (line 44), initializeTimes (line 33) and useReducer fit together

import { useState, useReducer } from 'react'
import { fetchAPI, submitAPI } from 'fetchData'

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
            <Hero />
            <Specials />
            <Testimonials />
            <BookingForm
                selectedDate={selectedDate}
                availableTimes={availableTimes}
                handleDateChange={handleDateChange}
            />
        </div>
    );
}

export function initializeTimes() {
    return [
        { time: "17:00", available: true },
        { time: "18:00", available: true },
        { time: "19:00", available: true },
        { time: "20:00", available: true },
        { time: "21:00", available: true },
        { time: "22:00", available: true },
    ];
}

export function updateTimes(state, action) {
    switch (action.type) {
        case "UPDATE_TIMES":
            return fetchAPI(new Date());
        default:
            return state;
    }
}