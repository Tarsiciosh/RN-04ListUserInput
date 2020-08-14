//MAP:

/*
const createContact = () => ({name: "John", lastName:"Appleseed"})

myArray = Array.from({length:3}, createContact)

//value index array (parameters of the map function)
const addKeys = (val, key, all) => ({key, ...val, all})

myArray = myArray.map(addKeys)

console.log(myArray)

//myArray.map()
*/

//REDUCE:

//Syntax:
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
function add (total, currentValue) {return currentValue + total}
x = [1,2,3,4]
console.log(x.reduce(add,0)) //0 the initialValue
// result is: 10
//     currentValue  total  (next total)
// [0]      1     +    0    = 1 
// [1]      2     +    1    = 3
// [2]      3     +    3    = 6
// [3]      4     +    6    = 10



myContacts = ["Agustin", "Ana", "Ines" , "Maria"]
//obj: total (acumulated)
//contact: currentValue
const myReduced =  myContacts.reduce((obj,contact) => {
    const firstLetter = contact[0].toUpperCase()
    valueToReturn = {
        ...obj,
        [firstLetter]: [...(obj[firstLetter] || []),contact]   
    }
    console.log(valueToReturn)
    return valueToReturn
  },{}) 
console.log(myReduced)



testObject = {names: ["Pepe", "Mongo"], age: 20}
console.log(testObject)
newArray = {
    ...testObject,
    ['names']: [...testObject['names'] ,"Raul"] 
    //it overwrites the value of the key "names"      
}
console.log(newArray)




myTestObject = {name: "Jordan", letters: ["A", "B", "C"]}
myNewTestObject = {
    ...myTestObject,
    name: "Pepe" 
}
console.log(myNewTestObject)




myObject = { //this explains how it is overwriten the values!!
    name: "David",
    surename: "Malan",
    name: "Jordan"
}
console.log(myObject)
