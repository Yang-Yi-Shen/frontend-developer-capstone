import { useState } from 'react';

import Hero from './Hero';
import Specials from "./Specials";
import Testimonials from './Testimonials'
import BookingForm from './BookingForm';

function Main() {
    const [availableTimes, setAvailableTimes] = useState([]);

    return(
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            {/* put into /booking page later */}
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </main>
    )
}

export default Main;