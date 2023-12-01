const input = await Bun.file('./input.txt').text()
const lines = input.split('\n')

const results: number[] = []

lines.forEach((line) => {
  const matches = line.match(/\d/g)

  if (matches) {
    const first = matches.at(0)
    const last = matches.at(-1)

    const num = parseInt(`${first}${last}`)
    results.push(num)
  }
})

let total = 0
results.forEach((x) => (total += x))

console.log(total)
