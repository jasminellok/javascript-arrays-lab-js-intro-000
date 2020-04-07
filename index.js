var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  return [...kitten, name]
}

function prependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  return [name, ...kitten]
}

function removeLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(-1)
}

function removeFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(1)
}
