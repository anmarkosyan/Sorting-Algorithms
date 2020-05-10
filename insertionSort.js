//+++++++++++++++++++++++++ insertionSort +++++++++++++++++++++++++++
//write a function for a given random arr return sorted array
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function insertionSort (arr){
    //loop over the array, stating with second element
    for(let i = 1; i <arr.length; i++){
        let currVal = arr[i];
        //loop for go backward  and comparing  last and -1 element
        for(var j = i - 1; j >= 0 && arr[j] > currVal; j--){
            arr[j+1] = arr[j];
        }
       arr[j+1] = currVal;
    }
     return arr;
}

console.log(insertionSort([1,5,2,8,56,24]));//[1,2,5,8,24,56]
console.log(insertionSort([4,1,3,2,13,10]));//[1,2,3,4,10,13]


/*function insertionSort(arr){
    var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])

 */