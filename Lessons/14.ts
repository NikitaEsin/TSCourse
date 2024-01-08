function forEach(numbers: number[], callback: (n: number, index?: number)=> number): void {
    numbers.forEach((n, index?) => callback(n, index))
}