const input = await Bun.file('./input.txt').text()
const lines = input.split('\n')

/*
  needed for edge cases like "twone" or "sevenine"
*/
const replaceMap = {
  one: 'o1e',
  two: 't2o',
  three: 't3e',
  four: 'f4r',
  five: 'f5e',
  six: 's6x',
  seven: 's7n',
  eight: 'e8t',
  nine: 'n9e',
}

const results: number[] = []

lines.forEach((line) => {
  Object.entries(replaceMap).forEach(([key, val]) => {
    line = line.replaceAll(key, val)
  })

  const matches = line.match(/\d/g)
  if (matches) {
    const first = matches.at(0)
    const last = matches.at(-1)

    const num = parseInt(`${first}${last}`)
    results.push(num)
  }
})

let total = 0
results.forEach((n) => (total += n))

console.log(total)
