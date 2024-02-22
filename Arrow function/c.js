// Sum of all numbers in a array

let sumofArr = (arr) =>
{
    let sum = 0
    for (let i = 0; i < arr.length; i++) 
    {
        sum += arr[i]
    }
    return sum
}
console.log(sumofArr([1,2,3,4,5]))