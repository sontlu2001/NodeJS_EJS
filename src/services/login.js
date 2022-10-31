import db from "../models/index";

let login = async (phoneNumber, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!phoneNumber)
                return reject("Số điện thoại không được để trống !");

            if (!password)
                return reject("Số điện thoại không được để trống !");

            const user = await db.User.findOne({ where: { phoneNumber: phoneNumber } })
            if (!user)
                return reject("Tài khoản không tồn tại trên hệ thống !");
            if (user.password !== password)
                return reject("Tài khoản và mật khẩu chưa chính xác !");
            return resolve("Đăng nhập thành công !");

        } catch (error) {
            reject(error);
        }
    });
};
module.exports = login