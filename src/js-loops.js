
function forLoop(numbers) {
    var sum = 0;

    for (var i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

function forInLoop(numbers) {
    var sum = 0;

    for (pos in numbers) {
        var number = numbers[pos];
        sum += number;
    }

    return sum;
}

exports.forLoop = forLoop;
exports.forInLoop = forInLoop;