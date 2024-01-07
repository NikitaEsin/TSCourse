function filterAnagrams(a: string, b: string[]) {
  const standard = a.split('').sort().join('');
  return b.filter((item) => item.split('').sort().join('') === standard);
}
