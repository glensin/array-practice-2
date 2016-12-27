// importing our helper method, helper.test()
var helper = require('./test-helper-functions')


function removeArrayElement(arr1,arr2)  {
var input =arr1
var toBeRemove = arr2
var toBeRemoveLength = toBeRemove.toString().length
// Sample output: [2, 9, 6]

for(var i = 0; i < input.length;  i++)
{
  var num = input[i]
  if(num === toBeRemove)
  input.splice(input.indexOf(num), toBeRemoveLength )
}
return(input)

}
helper.test(removeArrayElement([2, 5, 9, 6],5),[2,9,6])


function nthlargest (arr1, arr2){
var input = arr1
var position = arr2

var output = input[position-1]

return (output)}
helper.test(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4) , 89)

function randomItem(arr){
var input = arr
var random = Math.floor(Math.random()*input.length)
return input[random]
}
helper.test(randomItem(['hello', 'hi', 'bye']), 'hello'||'hi'||'bye')


function arrayRange (arr1,arr2,arr3) {
var output =[]
var numStart = arr1
var numLength = arr2
var numIncre = arr3
for (var i = numStart; i <=numLength ; i = i+ numIncre) {

output.push(i)
}

return (output)
}

helper.test(arrayRange(1,4,1), [1,2,3,4])

// Write your own tests and then write code to pass the tests!
// helper.test(myFunc(intput), expectedOutput)
