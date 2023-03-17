function ChkPrime(iNo) {
    var i = 0;
    var flag = false;
    if ((iNo == 0) || (iNo == 1)) {
        return flag;
    }
    for (i = 2; i <= iNo / 2; i++) {
        if (iNo % i != 0) {
            flag = true;
            break;
        }
    }
    return flag;
}
var No = 11;
var Num = false;
Num = ChkPrime(No);
if (Num == true) {
    console.log(No + " is a Prime Number");
}
else {
    console.log(No + " is not a Prime Number");
}
