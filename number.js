/**
 * 解决javaScript小数在做四则运算时，精度会丢失的问题
 * 如：0.9-0.8=0.09999999999998
 * 调用方法 (number1).fn(number2)
 */
(function () {
    function add(first, second) {
        var r1, r2, m;
        try {
            r1 = first.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = second.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (first * m + second * m) / m;
    }

//加法
    Number.prototype.add = function (number) {
        return add.call(this, this, number);
    };

//减法，等同于加法
    Number.prototype.sub = function (number) {
        return this.add(-number);
    };

    function mul(first, second) {
        var m = 0, s1 = first.toString(), s2 = second.toString();
        try {
            m += s1.split(".")[1].length;
        } catch (e) {
        }
        try {
            m += s2.split(".")[1].length;
        } catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }

//乘法
    Number.prototype.mul = function (number) {
        return mul.call(this, this, number);
    };

    function div(first, second) {
        var t1 = 0, t2 = 0, r1, r2;
        try {
            t1 = first.toString().split(".")[1].length;
        } catch (e) {
        }
        try {
            t2 = second.toString().split(".")[1].length;
        } catch (e) {
        }

        r1 = Number(first.toString().replace(".", ""));
        r2 = Number(second.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    }

//除法
    Number.prototype.div = function (number) {
        return div.call(this, this, number)
    };
})();
