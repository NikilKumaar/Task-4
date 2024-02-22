// Convert all strings to title caps in a string array

let titleCaps = (str) =>
{
    str = str[0].toLowerCase().split(' ')
    for (let i = 0; i < str.length; i++)
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    console.log(str.join(' '))
}
titleCaps(['My name is nikil kumaar'])