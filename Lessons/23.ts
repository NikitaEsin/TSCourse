function reverse(numbers: readonly number []) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.unshift(numbers[i])
    }
    return result;
}