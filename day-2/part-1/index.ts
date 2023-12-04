const input = await Bun.file('./input.txt').text()
const lines = input.trim().split('\n')

type Game = {
  id: number
  red: number
  green: number
  blue: number
}

const games: Game[] = []

lines.forEach((line, i) => {
  // remove leading "Game # :" text
  line = line.substring(line.indexOf(':') + 1).trim()

  const sets = line.split(';')

  const game: Game = {
    id: i + 1,
    red: 0,
    green: 0,
    blue: 0,
  }

  sets.forEach((set) => {
    set = set.trim()

    const cubes = set.split(',')

    cubes.forEach((cube) => {
      cube = cube.trim()

      const split = cube.split(' ')
      const num = parseInt(split[0])
      const color = split[1] as 'red' | 'green' | 'blue'

      if (game[color] < num) {
        game[color] = num
      }
    })
  })

  games.push(game)
})

let possibleTotal = 0
games.forEach((game) => {
  if (game.red <= 12 && game.green <= 13 && game.blue <= 14) {
    possibleTotal += game.id
  }
})

console.log(possibleTotal)
