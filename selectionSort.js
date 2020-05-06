function selectionSort (arr){
    for (let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i+1; j< arr.length;j++){

            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest) {
            let swap = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = swap;
        }

    }
    return arr;

}
console.log(selectionSort([6,5,2]));//[2,5,6]
console.log(selectionSort([6,1,5,8,2,4,10,36,24]));//[1,2,4,5,8,10,24,36]
console.log(selectionSort([0,1,6,5,2]));//[2,5,6]
