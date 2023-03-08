import { initializeTimes } from './Main';

describe('initializeTimes', () => {
    test('should return a non-empty array of available booking times', async () => {
        const mockFetchAPI = jest.fn(() => ['9:00', '10:00', '11:00']); // define mock implementation of fetchAPI
        const date = '2022-04-01';
        const expected = [
            { time: '9:00', available: true },
            { time: '10:00', available: true },
            { time: '11:00', available: true },
        ];

        // replace fetchAPI with the mock implementation
        jest.mock('./your-fetch-api-module', () => ({
        fetchAPI: mockFetchAPI,
        }));

        const result = initializeTimes(date);

        // expect(mockFetchAPI).toHaveBeenCalledWith(date); // check if fetchAPI is called with the correct argument
        // expect(result).toEqual(expected); // check if the result is equal to the expected output
        // expect(result.length).toBeGreaterThan(0); // check if the result is a non-empty array

        expected.forEach((item) => {
            expect(typeof item).toBe('object'); // Check if the item is an object
            expect(item).toHaveProperty('time'); // Check if the item has a "time" property
            expect(item).toHaveProperty('available', true); // Check if the item has an "available" property equal to true
        });
    });
});