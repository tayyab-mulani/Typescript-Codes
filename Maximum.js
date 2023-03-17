function Maximum(No1, No2, No3) {
    if (No1 >= No2 && No1 >= No3) {
        console.log("Largest Number is : " + No1);
    }
    if (No2 >= No1 && No2 >= No3) {
        console.log("Largest Number is : " + No2);
    }
    if (No3 >= No1 && No3 >= No2) {
        console.log("Largest Number is : " + No3);
    }
}
var A = 23;
var B = 89;
var C = 6;
Maximum(A, B, C);
