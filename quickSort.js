
//***************************** quickSort_pivot ************************
//write a function to sort a list of elements using Quick sort,and
//return the index of pivot element,its not matter order ,only matter
//the correct spot of pivot number,anything in the left side should
//be less than pivot element, and the right side greater
//****************************************************************

//quickSort([6,9,4,1,7,8,2,10])//3 => [4,1,2,6,9,7,8,10] 6 is our pivot element,so we
//compare all elements, and if element is less than 6, we swap it
//left side,others put in right side ,there are  greater than 6 ,and
//finally the position of pivot element (6) will be 3.

function pivot(arr, start = 0, end = arr.length - 1){
    function swap(arr,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}
console.log(pivot([6,9,4,1,7,8,2,10]));//3
console.log(pivot([8,4,2,13,24,56,1,5]))//4
function quickSort (arr, left = 0, right = arr.length -1){
    if(left < right) {
        let pivotIdx = pivot(arr, left, right);
        //left side
        quickSort(arr, left, pivotIdx - 1);
        //right side
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}
console.log(quickSort([6,9,4,1,7,8,2,10]));//[1,2,4,6,7,8,9,10]
console.log(quickSort([8,4,2,13,24,56,1,5]))//[1,2,4,5,8,13,24,56]