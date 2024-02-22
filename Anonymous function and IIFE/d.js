// Return all the prime numbers in a array

function checkPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
// console.log(checkPrime(101))

let arr = [1, 3, 5, 6, 7, 8, 9, 11, 12, 14, 17, 19]
let primeVal = []
for (let i = 0; i < arr.length; i++)
{
    if (checkPrime(arr[i]))
    {
        primeVal.push(arr[i])
        }
}
    console.log(primeVal.join(' '))

        

    