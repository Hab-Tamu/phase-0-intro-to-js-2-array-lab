// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function beforeEach() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}
    function destructivelyAppendCat(name) {
        cats.push(name)
        return cats
    }

    destructivelyAppendCat("Ralph")

    // console.log(destructivelyAppendCat("Ralph"))

    function destructivelyPrependCat(name) {
        cats.unshift(name)
        return cats
    }
    destructivelyPrependCat("Bob")

    function destructivelyRemoveLastCat() {
        cats.pop()
        return cats
    }
    destructivelyRemoveLastCat()

    function  destructivelyRemoveFirstCat(){
        cats.shift()
        return cats
    }
    destructivelyRemoveFirstCat()

    function  appendCat(name){
        const newCats = [...cats, name]
        return newCats
    }
    appendCat("Broom")

    function prependCat(name){
        const preCats = [name, ...cats]
        return preCats
    }
    prependCat("Arnold")

    function removeLastCat() {
        const lastCats = cats.slice(0, cats.length -1)
        return lastCats
        // console.log(lastCats)
    }
    removeLastCat()

    function removeFirstCat(){
        const firstCat = cats.slice(1)
        return firstCat
    }
    removeFirstCat()

beforeEach()
