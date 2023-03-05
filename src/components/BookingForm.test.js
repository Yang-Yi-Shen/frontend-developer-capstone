import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm'

test('checks if title in booking form', () => {
  render(<BookingForm />);
  const title = screen.getByText("Booking form");
  expect(title).toBeInTheDocument();
});
