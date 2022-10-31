import paymentBill from '../services/paymentBill'

//Khách mua lẻ không có voucher
test('paymentBill', () => {
    expect(paymentBill(
        null,
        false,
        null,
        3000000,
        3250000
    )).toEqual({ tongTienHD: 3240000, thanhTien: 3240000, tienThua: 10000 });
});

//Khách mua lẻ có voucher nhưng không đủ điều kiện áp dụng
test('paymentBill', () => {
    expect(paymentBill(
        null,
        false,
        { keyCode: '432NDJS', giaTriToiThieu: 5000000, tyle: '10%' },
        3000000,
        3250000
    )).toEqual({ tongTienHD: 3240000, thanhTien: 3240000, tienThua: 10000 });
});

//Khách mua lẻ có voucher đủ điều kiện áp dụng
test('paymentBill', () => {
    expect(paymentBill(
        null,
        false,
        { keyCode: '432NDJS', giaTriToiThieu: 500000, tyle: '10%' },
        600000,
        600000
    )).toEqual({ tongTienHD: 648000, thanhTien: 588000, tienThua: 12000 });
});


//Khách hàng thành viên không sử dụng điểm tích lũy thanh toán
test('paymentBill', () => {
    expect(paymentBill(
        { id: 1111, name: 'Nguyễn Văn Bình', type: 0, cumulativePoint: 998 },
        false,
        null,
        320000,
        350000
    )).toEqual({ tongTienHD: 345600, thanhTien: 345600, tienThua: 4400, kh: { id: 1111, name: 'Nguyễn Văn Bình', type: 0, cumulativePoint: 1001.2 } });
});

//Khách hàng thành viên sử dụng điểm tích lũy thanh toán
test('paymentBill', () => {
    expect(paymentBill(
        { id: 2222, name: 'Đỗ Hoàng Hà', type: 0, cumulativePoint: 600 },
        false,
        null,
        500000,
        0
    )).toEqual({ tongTienHD: 540000, thanhTien: 0, tienThua: 0, kh: { id: 2222, name: 'Đỗ Hoàng Hà', type: 0, cumulativePoint: 65 } });
});

//Khách hàng thành viên sử dụng điểm tích lũy thanh toán có sử dụng thêm tiền mặt
test('paymentBill', () => {
    expect(paymentBill(
        { id: 3243, name: 'Đặng Minh Tuấn', type: 0, cumulativePoint: 400 },
        true,
        null,
        600000,
        300000
    )).toEqual({ tongTienHD: 648000, thanhTien: 248000, tienThua: 52000, kh: { id: 3243, name: 'Đặng Minh Tuấn', type: 0, cumulativePoint: 6 } });
});

//Khách hàng mức bạc không sử dụng điểm tích lũy thanh toán
test('paymentBill', () => {
    expect(paymentBill(
        { id: 2132, name: 'Đỗ Thị Minh Hương', type: 1, cumulativePoint: 2995 },
        false,
        null,
        1252000,
        0
    )).toEqual({ tongTienHD: 1352160, thanhTien: 1352160, tienThua: 0, kh: { id: 2132, name: 'Đỗ Thị Minh Hương', type: 1, cumulativePoint: 3007.52 } });
});

//Khách hàng mức bạc sử dụng điểm tích lũy thanh toán có sử dụng thêm tiền mặt
test('paymentBill', () => {
    expect(paymentBill(
        { id: 5432, name: 'Hoàng Ánh', type: 1, cumulativePoint: 1000 },
        true,
        null,
        12600000,
        11610000,
    )).toEqual({ tongTienHD: 13608000, thanhTien: 11608000, tienThua: 2000, kh: { id: 5432, name: 'Hoàng Ánh', type: 1, cumulativePoint: 126 } });
});