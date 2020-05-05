function numberCompare (arr){
    //approach #1 ES5
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i -1; j++){
            if(arr[j] > arr[j + 1]){
                //SWAP!
                let swap= arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =swap;
            }
        }
    }
    return arr;


}
console.log(numberCompare([6,7,2,10,5]));
console.log(numberCompare([6,7,2,10,3,60,15,20]));