var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  kitten.push(name)
  return kitten
}

function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  kitten.unshift(name)
  return kitten
}

function destructivelyRemoveLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  kitten.pop()
  return kitten
}

function destructivelyRemoveFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  kitten.shift()
  return kitten
}

function appendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  new_kittens = kittens
  new_kittens.push(name)
  return new_kittens
}

function prependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  new_kittens = kittens
  new_kittens.unshift(name)
  return new_kittens
}

function removeLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  new_kittens = kittens
  new_kittens.pop()
  return new_kittens
}

function removeFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  new_kittens = kittens
  new_kittens.shift()
  return new_kittens
}
