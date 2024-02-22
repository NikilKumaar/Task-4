// Return median of two sorted arrays of same size

let findMedian = function (arr1, arr2)
{
    if (arr1.length === arr2.length)
    {
        let sortedArr1 = arr1.sort(function (a, b) { return a - b })
        let sortedArr2 = arr2.sort(function (a, b) { return a - b })
        let median = (sortedArr1[sortedArr1.length - 1] + sortedArr2[0]) / 2
        return median
    }
    else
    {
        return false
        }

}
console.log(findMedian([11,2,3,7,10],[4,5,8,6,9]))