const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];
function intersect(arr1, arr2, arr3) {
    let smallestArray;
    if((arr1.length <= arr2.length) && (arr1.length <= arr3.length)){
        smallestArray = arr1
    } else if((arr2.length <= arr1.length) && (arr2.length <= arr3.length)) {
        smallestArray = arr2
    }
    else {
        smallestArray=arr3
    }

    let intersectedArray=[];

    for (let i = 0; i < smallestArray.length; i++) {
        if(arr1.includes(smallestArray[i]) && arr2.includes(smallestArray[i]) && arr3.includes(smallestArray[i])) {
            intersectedArray.push(smallestArray[i])
        } 
    }
    
    return intersectedArray
}

module.exports=intersect
