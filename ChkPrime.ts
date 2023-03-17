
function ChkPrime(iNo : number) : boolean
{
    let i : number = 0
    let flag : boolean = false

    if((iNo == 0) || (iNo == 1))
    {
        return flag;
    }

    for(i = 2; i<= iNo/2; i++)
    {
        if(iNo % i != 0)
        {
            flag = true;
            break;
        }
    }
    return flag;
}

var No : number = 11
var Num : boolean = false;

Num = ChkPrime(No)

if(Num == true)
{
    console.log(No+" is a Prime Number")
}
else
{
    console.log(No+" is not a Prime Number")
}