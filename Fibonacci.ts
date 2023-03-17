
function Fibonacci(No : number) : void
{
    var a : number = 0
    var b: number = 1
    var temp : number = 1
    var i : number = 0

    while(temp <= No)
    {
        console.log(temp)
        temp = a + b
        a = b
        b = temp        
    }
}

var iNo : number = 21

Fibonacci(iNo)