import addItemOrder from '../services/addItemOrder'

test('TC', () => {
    expect(addItemOrder(
        { itemId: 1111, name: 'Ngọn susu xào tỏi', price: 40000, type: 'vegetable' },
        [
            { itemId: 1111, name: 'Ngọn susu xào tỏi', price: 40000, type: 'vegetable', quatity: 1 },
            { itemId: 2321, name: 'Bia Sài Gòn', price: 30000, type: 'drink', quatity: 2 },
            { itemId: 5423, name: 'Gà nướng ngũ vị:', price: 400000, type: '', quatity: 1 },
        ],
        '2022-10-29'
    )).toBe(540000);
});

test('TC', () => {
    expect(addItemOrder(
        { itemId: 1111, name: 'Ngọn susu xào tỏi', price: 40000, type: 'vegetable' },
        [],
        '2022-10-29'
    )).toBe(40000);
});

test('TC', () => {
    expect(addItemOrder(
        { itemId: 1111, name: 'Ngọn susu xào tỏi', price: 40000, type: 'vegetable' },
        [
            { itemId: 1111, name: 'Ngọn susu xào tỏi', price: 40000, type: 'vegetable', quatity: 1 },
            { itemId: 2321, name: 'Bia Sài Gòn', price: 30000, type: 'drink', quatity: 2 },
            { itemId: 5423, name: 'Gà nướng ngũ vị:', price: 400000, type: '', quatity: 1 },
        ],
        '2022-10-30'
    )).toBe(529000);
});

test('TC', () => {
    expect(addItemOrder(
        { itemId: 1111, name: 'Ngọn susu xào tỏi', price: 40000, type: 'vegetable' },
        [],
        '2022-10-30'
    )).toBe(36000);
});