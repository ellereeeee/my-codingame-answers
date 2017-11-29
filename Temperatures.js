/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var positives = [];
var negatives = [];
var temp = "";

for (var i = 0; i < n; i++) {
    var t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526. Math.abs makes all ints positive
    if (t > 0) {
        positives.push(t);
    }
    else {
        negatives.push(t);
    }
}

// positive integer closest to 0
var minP = Math.min.apply(null, positives);
// negative integer closest to 0
var maxN = Math.max.apply(null, negatives);

if (Math.abs(minP) == Math.abs(maxN)) {
    temp = minP;
} else if (Math.abs(minP) < Math.abs(maxN)) {
    temp = minP;
} else {
    temp = maxN;
}

print(n === 0 ? 0 : temp);