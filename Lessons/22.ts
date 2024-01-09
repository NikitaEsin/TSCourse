function getField(number: number) {
    let result = [];
    for (let i = 0; i < number; i++) {
        result.push(Array.from({length: number}, () => null));
    };
}