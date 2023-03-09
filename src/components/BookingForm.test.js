import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

test('checks if title in booking form', () => {
  render(<BookingForm />);
  const title = screen.getByText("Booking form");
  expect(title).toBeInTheDocument();
});

describe('BookingForm', () => {
  it('date input has correct attributes', () => {
    const handleDateChange = jest.fn();
    const selectedDate = '2023-03-09';
    render(<BookingForm selectedDate={selectedDate} handleDateChange={handleDateChange} />);
    const dateInput = screen.getByLabelText('Choose date');
    expect(dateInput).toHaveAttribute('value', selectedDate);
    userEvent.type(dateInput, '2023-03-10');
    expect(handleDateChange).toHaveBeenCalledTimes(1);
  });

  it('time input has correct attributes', () => {
    const availableTimes = [{ time: '12:00 PM' }, { time: '1:00 PM' }];
    const handleTimeChange = jest.fn();
    const time = '12:00 PM';
    render(<BookingForm availableTimes={availableTimes} handleTimeChange={handleTimeChange} time={time} />);
    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect).toHaveValue(time);
    userEvent.selectOptions(timeSelect, '1:00 PM');
    expect(handleTimeChange).toHaveBeenCalledTimes(1);
  });

  it('guests input has correct attributes', () => {
    const handleGuestsChange = jest.fn();
    const guests = 4;
    render(<BookingForm guests={guests} handleGuestsChange={handleGuestsChange} />);
    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('value', guests.toString());
    expect(handleGuestsChange).toHaveBeenCalledTimes(1);
  });

  it('occasion input has correct attributes', () => {
    const handleOccasionChange = jest.fn();
    const occasion = 'Anniversary';
    render(<BookingForm occasion={occasion} handleOccasionChange={handleOccasionChange} />);
    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toHaveValue(occasion);
    expect(handleOccasionChange).toHaveBeenCalledTimes(1);
  });

  it("submits form with valid inputs", async () => {
    // Set up props and render BookingForm component
    // Use fireEvent to simulate user input in the form fields
    // Use fireEvent to submit the form
    // Use waitFor to wait for the form submission to be complete
    // Assert that the correct values were submitted in the handleSubmit function
  });

  it("does not submit form with invalid inputs", async () => {
    // Set up props and render BookingForm component
    // Use fireEvent to simulate user input in the form fields
    // Use fireEvent to submit the form
    // Assert that the form did not submit and the handleSubmit function was not called
  });
});