
let paymentBill = (kh, ttDiemTichLuy, voucher, tienHang, tienKhachDua) => {
    let tongTienHD = tienHang + (tienHang * 0.08);
    let giamGia = 0;

    if (!kh) {
        if (voucher && tienHang >= voucher['giaTriToiThieu']) {
            let tyle = + voucher['tyle'].split('%')[0]
            giamGia = tienHang * tyle / 100
            let giaSauGiam = tongTienHD - giamGia
            let tienThua = tienKhachDua - giaSauGiam
            return {
                tongTienHD: tongTienHD,
                thanhTien: giaSauGiam,
                tienThua: tienThua,
            }
        }
        else {
            return {
                tongTienHD: tongTienHD,
                thanhTien: tongTienHD,
                tienThua: tienKhachDua - tongTienHD,
            }
        }
    }
    else if (kh && !ttDiemTichLuy) {
        let updateDiemTL = tienHang / 100000
        kh['cumulativePoint'] = kh['cumulativePoint'] + updateDiemTL
        return {
            tongTienHD: tongTienHD,
            thanhTien: tongTienHD,
            tienThua: tienKhachDua - tongTienHD,
            kh: kh
        }
    }
    else {
        let mucQuyDoi = 0;
        if (kh['type'] === 0) {
            //chưa có hạng
            mucQuyDoi = 1000;
        }

        else if (kh['type'] === 1) {
            //hạng bạc
            mucQuyDoi = 2000;
        }

        else if (kh['type'] === 2) {
            //hạng vàng
            mucQuyDoi = 5000;
        }
        else {
            mucQuyDoi = 10000;
        }

        giamGia = kh['cumulativePoint'] * mucQuyDoi
        if (giamGia > tongTienHD) {
            let updateDiemTL = kh['cumulativePoint'] - (tongTienHD / mucQuyDoi) + (tienHang / 100000)
            kh['cumulativePoint'] = updateDiemTL
            return {
                tongTienHD: tongTienHD,
                thanhTien: 0,
                tienThua: 0,
                kh: kh
            }
        }
        else {
            let updateDiemTL = tienHang / 100000
            kh['cumulativePoint'] = updateDiemTL
            let giaSauGiam = tongTienHD - giamGia
            let tienThua = tienKhachDua - giaSauGiam
            return {
                tongTienHD: tongTienHD,
                thanhTien: tongTienHD - giamGia,
                tienThua: tienThua,
                kh: kh
            }
        }
    }

}

module.exports = paymentBill

