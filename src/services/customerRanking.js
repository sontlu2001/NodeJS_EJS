import db from "../models/index";

let customerRanking = async (phoneNumber) => {
    return new Promise(async (resolve, reject) => {
        try {
            const customer = await db.Customer.findOne({ where: { phone: phoneNumber } })
            if (customer) {
                if (customer.cumulative <= 1000)
                    resolve("Khách hàng thành viên")
                if (customer.cumulative < 3000)
                    resolve("Khách hàng xếp hạng mức bạc")
                if (customer.cumulative < 10000)
                    resolve("Khách hàng xếp hạng mức vàng")
                resolve("Khách hàng xếp hạng mức kim cương")
            } else {
                reject("Khách hàng không tồn tại");
            }

        }
        catch (error) {
            reject(error);
        }
    });
};
module.exports = customerRanking

