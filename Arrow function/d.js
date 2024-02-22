// Return all the prime numbers in a array

let primeNum = (arr) =>
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 != 0)
        {
            console.log(arr[i])
            }
        }
}
primeNum([3, 4, 6, 7, 10, 12, 13, 15, 17, 19]);