// Remove duplicate element in an array

let arr = ["apple", "mango", "apple", "orange", "mango", "mango","banana"];

function removeDuplicates(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeDuplicates(arr));