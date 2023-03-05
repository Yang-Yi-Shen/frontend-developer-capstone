import { initializeTimes } from './BookingForm'

test('checks that initializeTimes has the correct times', () => {
    expect(initializeTimes()).toBe(
        { time: "17:00", available: true },
        { time: "18:00", available: true },
        { time: "19:00", available: true },
        { time: "20:00", available: true },
        { time: "21:00", available: true },
        { time: "22:00", available: true },
    )
});
