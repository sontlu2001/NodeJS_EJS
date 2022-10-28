import customerRanking from '../services/customerRanking'

//  name: 'Lê Văn Hoàng',phone: '0354423344'
test('customerRanking', async () => {
    return await customerRanking("0354423344").catch((data) => {
        expect(data).toBe("Khách hàng không tồn tại")
    })
});

// name: 'Trần Trung Quân',phone: '0354421146',cumulative: 0 
test('customerRanking', async () => {
    return await customerRanking("0354421146").then((data) => {
        expect(data).toBe("Khách hàng thành viên")
    })
});

//name: 'Đặng Thị Thu Hà',phone: '0354423234',cumulative: 1000 
test('customerRanking', async () => {
    return await customerRanking("0354423234").then((data) => {
        expect(data).toBe("Khách hàng xếp hạng mức bạc")
    })
});

//name: 'Nguyễn Thị Lan',phone: '0383442323',cumulative: 9999
test('customerRanking', async () => {
    return await customerRanking("0383442323").then((data) => {
        expect(data).toBe("Khách hàng xếp hạng mức vàng")
    })
});
// name: 'Nguyễn Bá Phương',phone: '0358324279',cumulative: 10000
test('customerRanking', async () => {
    return await customerRanking("0358324279").then((data) => {
        expect(data).toBe("Khách hàng xếp hạng mức kim cương")
    })
});