function DisplayFactors(iFactor) {
    var i = 0;
    for (i = 0; i < iFactor; i++) {
        if (iFactor % i == 0) {
            console.log(i);
        }
    }
}
var iFact = 20;
DisplayFactors(iFact);
