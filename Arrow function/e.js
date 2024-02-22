// Return all the palindromes in an array

let is_Palindrome = str =>
{
    let rev = str[0].split('').reverse().join('')
    if (str == rev)
    {
        return rev
    }
    else
    {
        return false
        }
}
console.log(is_Palindrome(['malayalam']))
console.log(is_Palindrome(['palindrome']))