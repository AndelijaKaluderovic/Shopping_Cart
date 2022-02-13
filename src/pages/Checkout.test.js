import '@testing-library/jest-dom';
import { getTotalPrice } from './Checkout';

const mockCartItems = [{
        "id": 1,
        "name": "Philips hue bulb",
        "brand": "Philips",
        "price": "500",
        "qty": 1,
        "available": true,
        "weight": 0.2,
    },
    {
        "id": 2,
        "name": "Trådfria Lampor",
        "brand": "IKEA",
        "price": "300",
        "qty": 2,
        "available": true,
        "weight": 0.2,
}];

describe('Checkout page', () => {
    test('checks if the total price is correct', () => {
      expect(getTotalPrice(mockCartItems)).toBe(1100);
    });
});