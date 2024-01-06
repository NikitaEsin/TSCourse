function repeat(string: string, number: number) {
  let result = '';

  for (let i = 0; i < number; i++) {
    result += string;
  }

  return result;
}

repeat('hexlet', 2)
repeat('wo', 3)
