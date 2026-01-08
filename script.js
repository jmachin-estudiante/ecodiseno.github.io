// external heavy script (non-minified)
function heavyCalc() {
    var total = 0;
    for (var i = 0; i < 10000000; i++) {
        total += Math.pow(i, 0.5);
    }
    console.log('heavyCalc', total);
}
heavyCalc();
