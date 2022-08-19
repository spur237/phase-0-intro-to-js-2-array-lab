// Write your solution here!

let cats = ['Milo', 'Otis', 'Garfield']
function  destructivelyAppendCat(){
  return cats.push('Ralph')
}
function destructivelyPrependCat(name){
  return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
  return cats.pop()
}
function destructivelyRemoveFirstCat(){
  return cats.shift()
}
function appendCat(name){
  let newCats = cats.slice()
  newCats.push(name) 
  return newCats
}
function  prependCat(name){
  let anyThing = cats.slice()
  anyThing.unshift(name)
  return anyThing
}
function removeLastCat(){
  let someTime = cats.slice()
  someTime.pop(name)
  return someTime
}
function removeFirstCat(){
  let anyTime = cats.slice()
  anyTime.shift()
  return anyTime
}