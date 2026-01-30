// Problem 1: Build Frequency Map

function buildFrequencyMap(arr) {
    const freq = new Map();

    for (let x of arr) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    return freq;
}

// Example usage
const arr = [1, 2, 2, 3, 3, 3, 4];
const result = buildFrequencyMap(arr);

console.log(result);
// Output: Map { 1 => 1, 2 => 2, 3 => 3, 4 => 1 }