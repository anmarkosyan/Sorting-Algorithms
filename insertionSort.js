//+++++++++++++++++++++++++ insertionSort +++++++++++++++++++++++++++
//write a function for a given random arr return sorted array
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


 const insertionSort = arr => {

 const len = arr.length;
     for(let i = 0; i < len; i++){
         let el = arr[i];
         let j;
         for(j = i -1; j >=0 && arr[j] > el; j--){
             arr[j + 1] = arr[j];
         }
         arr[j + 1] = el;

     }
     return arr;


}

console.log(insertionSort([1,5,2,8,56,24]));//[1,2,5,8,24,56]
console.log(insertionSort([4,1,3,2,13,10]));//[1,2,3,4,10,13]
console.log(insertionSort([4,2,1]))//[1,2,4]





