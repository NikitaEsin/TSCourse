function isPlainObject(a: unknown) {
    return typeof a === 'object' && a !== null && !Array.isArray(a)
}