// 整数
function isInteger(num) {
    return Math.floor(num) === Number(num);
}

// 正整数
function isPositiveInteger(num){
    return num > 0 && Math.floor(num) === Number(num);
}

// 自然数
function isNaturalNumber(num){
    return Number(num) === 0 || isPositiveInteger(num);
}

// 小数
function isDecimalNumber(num){
    return Math.floor(num) !== Number(num);
}
