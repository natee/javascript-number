/**
 * 解决javaScript小数在做四则运算时，精度会丢失的问题
 * 如：0.9-0.8=0.09999999999998
 * 调用方法 (number1).fn(number2)
 */
(function() {
    /**
     * 把错误的数据转正
     * strip(0.09999999999999998)=0.1
     */
    function strip(num, precision = 12) {
        return +parseFloat(num.toPrecision(precision));
    }

    /**
     * Return digits length of a number
     * @param {*number} num Input number
     */
    function digitLength(num) {
        // Get digit length of e
        var eSplit = num.toString().split(/[eE]/);
        var len = (eSplit[0].split('.')[1] || '').length - (+(eSplit[1] || 0));
        return len > 0 ? len : 0;
    }

    /**
     * 精确乘法
     */
    function times(num1, num2) {
        var num1Changed = Number(num1.toString().replace('.', ''));
        var num2Changed = Number(num2.toString().replace('.', ''));
        var baseNum = digitLength(num1) + digitLength(num2);
        return num1Changed * num2Changed / Math.pow(10, baseNum);
    }


    /**
     * 精确加法
     */
    function plus(num1, num2) {
        var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
        return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
    }

    /**
     * 精确减法
     */
    function minus(num1, num2) {
        var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
        return (num1 * baseNum - num2 * baseNum) / baseNum;
    }

    /**
     * 精确除法
     */
    function divide(num1, num2) {
        var num1Changed = Number(num1.toString().replace('.', ''));
        var num2Changed = Number(num2.toString().replace('.', ''));
        return times((num1Changed / num2Changed), Math.pow(10, digitLength(num2) - digitLength(num1)));
    }


    //加法
    Number.prototype.add = function(number){
        return plus.call(this, this, number);
    };

    //减法，等同于加法
    Number.prototype.sub = function(number){
        return minus.call(this, this, number);
    };


    //乘法
    Number.prototype.mul = function(number){
        return times.call(this, this, number);
    };


    //除法
    Number.prototype.div = function(number){
        return divide.call(this, this, number);
    };
})();