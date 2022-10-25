import addCustomer from '../services/addCustomerService'

test('themMoiKH', async () => {
    return await addCustomer().catch((data) => {
        expect(data).toBe("Tên khách hàng có chiều dài 8-20 kí tự")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đặng Thị T\hu Hà").catch((data) => {
        expect(data).toBe("Tên khách hàng sai định dạng")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đỗ Hùng").catch((data) => {
        expect(data).toBe("Tên khách hàng có chiều dài 8-20 kí tự")
    })
});


test('themMoiKH', async () => {
    return await addCustomer("Đỗ Minh Hương").catch((data) => {
        expect(data).toBe("Số điện thoại không được để trống")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đặng Thị Thu Hà").catch((data) => {
        expect(data).toBe("Số điện thoại không được để trống")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Hoàng Lê Nhật Thùy Trang").catch((data) => {
        expect(data).toBe("Tên khách hàng có chiều dài 8-20 kí tự")
    })
});


test('themMoiKH', async () => {
    return await addCustomer("Đỗ Mi742nh Hương").catch((data) => {
        expect(data).toBe("Tên khách hàng sai định dạng")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đặng Thị Thu Hà", "4324343").catch((data) => {
        expect(data).toBe("Số điện thoại không đúng định dạng")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đặng Thị Thu Hà", "4324343").catch((data) => {
        expect(data).toBe("Số điện thoại không đúng định dạng")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đặng Thị Thu Hà", "0949207970^&*").catch((data) => {
        expect(data).toBe("Số điện thoại không đúng định dạng")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đặng Thị Thu Hà", "0949207ds970").catch((data) => {
        expect(data).toBe("Số điện thoại không đúng định dạng")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đỗ Minh Hương", "0949207ds970").catch((data) => {
        expect(data).toBe("Số điện thoại không đúng định dạng")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đỗ Minh Hương", "0949207922143").catch((data) => {
        expect(data).toBe("Số điện thoại không đúng định dạng")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Đặng Thị Thu Hà", "0354423234").catch((data) => {
        expect(data).toBe("Số điện thoại đã tồn tại trên hệ thống")
    })
});

test('themMoiKH', async () => {
    return await addCustomer("Lê Văn Nguyên", "0354423598").then((data) => {
        expect(data).toBe("Thêm mới khách hàng thành công")
    })
});

