var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kitten.push(name)
  return kitten
}

function destructivelyPrependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kitten.unshift(name)
  return kitten
}

function destructivelyRemoveLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kitten.pop()
  return kitten
}

function destructivelyRemoveFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kitten.shift()
  return kitten
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  new_kittens = kittens
  new_kittens.push(name)
  return new_kittens
}

function prependKitten(name) {
  new_kittens = kittens
  new_kittens.unshift(name)
  return new_kittens
}

function removeLastKitten() {
  new_kittens = kittens
  new_kittens.pop()
  return new_kittens
}

function removeFirstKitten() {
  new_kittens = kittens
  new_kittens.shift()
  return new_kittens
}
