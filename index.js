const cats = [
  "Milo",
  "Otis",
  "Garfield",
];

function destructivelyAppendCat() {
  cats.push("Ralph")
}
function destructivelyPrependCat() {
  cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
  cats.pop("Ralph")
}
function destructivelyRemoveFirstCat() {
  cats.shift("Bob")
}


function appendCat(a) {
  return [...cats, a]
}
function prependCat(a) {
  return [a, ...cats]
}


const copyOfCats = cats

function removeLastCat() {
 return copyOfCats.slice(0, 2)
}
function removeFirstCat() {
  return copyOfCats.slice(1)
}