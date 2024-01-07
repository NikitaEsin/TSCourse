const numbers = [1, 2, 3, 4]

function getEventNumbers() {
    let result = []
    for (let i =0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i])
        }
    }
    return result
}