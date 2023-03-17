function Fibonacci(No) {
    var a = 0;
    var b = 1;
    var temp = 1;
    var i = 0;
    while (temp <= No) {
        console.log(temp);
        temp = a + b;
        a = b;
        b = temp;
    }
}
var iNo = 21;
Fibonacci(iNo);
