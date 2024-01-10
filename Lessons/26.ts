function lastIndex(string: string, char: string): number | null {
    const index = string.lastIndexOf(char);
    return index === -1 ? null : index
}