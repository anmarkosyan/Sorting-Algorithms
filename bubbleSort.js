function numberCompare (arr){
    //approach #2 ES6
    const swap = (arr,num1,num2) => {
        [arr[num1],arr[num2]] = [arr[num2],arr[num1]]

    };
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;


}
console.log(numberCompare([6,7,2,10,5]));
console.log(numberCompare([6,7,2,10,3,60,15,20]));