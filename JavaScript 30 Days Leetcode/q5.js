// 2635. Apply Transform Over Each Element in Array
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

var map = function(arr, fn) {
    let arrRet=[];
    let ind=0;
    for(i of arr){
        arrRet[ind]=fn(i,ind);
        ind++;
    }
    return arrRet;
};