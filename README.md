# javascript-number
javascript中对number的处理

### 现象 ###
0.1 + 0.2 = 0.30000000000000004
1.0 - 0.9 = 0.09999999999999998

### javascript中number加减乘除精度处理 ###
#### 方法
加法：(0.1).add(0.2)
减法：(0.1).sub(0.2)
乘法：(0.1).mul(0.2)
除法：(0.1).div(0.2)

### javascript数值类型判断（整数、小数、自然数...）###


### 参考
之前的在某些条件仍然计算错误，参照number-precision进行了修改。
[number-precision](https://github.com/dt-fe/number-precision)