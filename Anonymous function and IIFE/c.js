// Sum of all numbers in an array

let arr = [2, 4, 6, 8, 10]
let arrSum =  function(arr)
{
    let sum = 0
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i]
    }
    return sum
}
console.log(arrSum(arr))