
//************************* mergeSort ***********************************
//write a function to sort a list of elements using Merge sort
//****************************************************************

//
const merge = (arr1,arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] >= arr1[i]){
            result.push(arr1[i]);
            i++;
        }else{
           result.push(arr2[j]);
           j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}
//console.log(merge([8,2,5],[6,1]));//[6,1,8,2,5]

const mergeSort = arr => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}
console.log(mergeSort([2,1,6,4,57,99,24]))
console.log(mergeSort([1,10,40,2,4,1,99,50]));
console.log(mergeSort([1,10,40]));
console.log(mergeSort([2,4,1,99,50]));
