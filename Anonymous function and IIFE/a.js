// Print odd numbers in an array

let arr = [1, 2, 4, 5, 8, 11, 15, 18]
let odd_r_even = function (arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 != 0)
        {
            console.log(arr[i]) 
            }
        }
}
odd_r_even(arr)