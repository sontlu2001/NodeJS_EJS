import login from '../services/login'

test('login', async () => {
    return await login().catch((data) => {
        expect(data).toBe("Số điện thoại không được để trống !")
    })
});

test('login', async () => {
    return await login('043243243').catch((data) => {
        expect(data).toBe("Mật khẩu không được để trống !")
    })
});

test('login', async () => {
    return await login('043243243', '123').catch((data) => {
        expect(data).toBe("Tài khoản và mật khẩu chưa chính xác !")
    })
});


test('login', async () => {
    return await login('0343483482', '123').catch((data) => {
        expect(data).toBe("Đăng nhập thành công !")
    })
});