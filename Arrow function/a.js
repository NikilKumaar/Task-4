// Print odd numbers in a array

let oddNum = (arr) =>
    {
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 != 0)
        {
            console.log(arr[i])
            }
        }
}
oddNum([1,2,4,5,8,11,15,18])