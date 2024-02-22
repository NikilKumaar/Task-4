// return all the palindromes in an array
let isPalindrome = function (str)
{
    let rev = str[0].split('').reverse().join('')
    if (str == rev)
    {
        console.log(str)
        return true
    }
    else
    {
        return false
        }
}
console.log(isPalindrome(['malayalam']))
console.log(isPalindrome(['palindrome']))
    
    
