function water_fee_calc(type, amount) {
    m = Math.ceil(amount)
    if (type == "normal") {
        if (m < 0) {
            return -1
        } else if (m <= 10) {
            return 5973 * m
        } else if (m <= 20) {
            return 5973 * 10 + 7052 * (m - 10)
        } else if (m <= 30) {
            return (5973 + 7052) * 10 + 8669 * (m - 20)
        } else {
            return (5973 + 7052 + 8669) * 10 + 15929 * (m - 30)
        }
    } else if (type == "poor") {
        if (m < 0) {
            return -1
        } else if (m <= 10) {
            return 3600 * m
        } else if (m <= 20) {
            return 3600 * 10 + 4500 * (m - 10)
        } else if (m <= 30) {
            return (3600 + 4500) * 10 + 5600 * (m - 20)
        } else {
            return (3600 + 4500 + 5600) * 10 + 6700 * (m - 30)
        }
    }  
    return -1
}

const WaterJS = {
    water_fee_calc,
}

module.exports = WaterJS;