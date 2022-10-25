import db from "../models/index";

let addCustomer = async (nameInput, phoneInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!nameInput)
                return reject("Tên khách hàng có chiều dài 8-20 kí tự");

            if (/[\d-!"`'#.%_&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(nameInput))
                return reject("Tên khách hàng sai định dạng");

            const regexName_VI = new RegExp('^[A-Za-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ].{8,20}$');
            if (regexName_VI.test(nameInput) == false)
                return reject("Tên khách hàng có chiều dài 8-20 kí tự");

            if (!phoneInput)
                return reject("Số điện thoại không được để trống");

            if (/^0[0-9]{9}$/.test(phoneInput) == false)
                return reject("Số điện thoại không đúng định dạng");

            const customerDB = await db.Customer.findOne({ where: { phone: phoneInput } });
            if (customerDB)
                return reject("Số điện thoại đã tồn tại trên hệ thống");

            await db.Customer.create({
                name: nameInput,
                phone: phoneInput,
            });
            return resolve("Thêm mới khách hàng thành công");
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = addCustomer