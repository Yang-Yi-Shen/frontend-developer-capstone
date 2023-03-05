import { updateTimes } from './Main';

describe('availableTimes', () => {
  it('returns the same value that is provided in the state', () => {
    const initialState = [
      { time: "17:00", available: true },
      { time: "18:00", available: true },
      { time: "19:00", available: true },
      { time: "20:00", available: true },
      { time: "21:00", available: true },
      { time: "22:00", available: true },
    ];
    const action = { type: 'UPDATE_TIMES' };

    expect(updateTimes(initialState, action)).toEqual(initialState);
  });
});
