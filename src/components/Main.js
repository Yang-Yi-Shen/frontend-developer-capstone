import Hero from './Hero';
import Specials from "./Specials";
import Testimonials from './Testimonials'

import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage'

function Main() {
    return(
        <main>
            <Hero />
            <Specials />
            <Testimonials />

            {/* <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes> */}
        </main>
    )
}

export default Main;