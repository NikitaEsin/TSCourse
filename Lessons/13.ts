function map(array: number[], callback: (n: number, index?: number)=> number) {
    return array.map((n, index?) => callback(n, index))
}