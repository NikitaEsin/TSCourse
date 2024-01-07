function getHiddenCard(a: string, b: number = 4) {
  let c = a.slice(-4)
  let result = ""
  for (let i = 0; i < b; i++) {
    result += '*'
  }
  return (result += c)
}

getHiddenCard('1234567812345678', 2) // "**5678"
getHiddenCard('1234567812345678', 3) // "***5678"
getHiddenCard('1234567812345678')    // "5678"
getHiddenCard('2034399002121100', 1) // "*1100"