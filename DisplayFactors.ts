function DisplayFactors(iFactor : number) : void
{
    let i : number = 0

    for(i = 0; i<iFactor; i++)
    {
        if(iFactor % i == 0)
        {
            console.log(i)
        }
    } 
} 

var iFact : number = 20

DisplayFactors(iFact)