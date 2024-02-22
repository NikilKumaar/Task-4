// Convert all strings to title caps in a string array


    (function (strArr)
    {
        // let strArr = ["my name is Nikil Kumaar"];
        strArr = strArr[0].toLowerCase().split(' ')
        for (let i = 0; i < strArr.length; i++)
        {
            strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
        }
         console.log(strArr.join(' '))

})(['my name is Nikil Kumaar'])