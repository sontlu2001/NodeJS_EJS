import addItemOrder from '../services/addItemOrder'

test('dsd', () => {
    expect(addItemOrder(
        { itemId: 3, name: 'Tôm hùm nước phô mai', price: 150000, type: 'nhậu' },
        [{
            itemId: 1,
            name: 'Ngọn su su xào tỏi',
            price: 40000,
            type: 'vegetable',
            quatity: 1
        }]
    )).toBe(186000);
});