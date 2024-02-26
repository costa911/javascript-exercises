const fibonacci = function (n) {
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) [prev, curr] = [curr, prev + curr];
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
