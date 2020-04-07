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
