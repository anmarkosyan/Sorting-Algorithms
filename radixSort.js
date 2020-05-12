
//*********************** radixSort ***************************************
//Write a function to sort a list of array using Radix Sort
//radixSort([1345,24,6,523,2789,1000,1,89])//[1,6,24,89,523,1000,1345,2789]
//************************************************************************

//#1 helper function should return digit in num at the given place value
function getDigit(num,index){
    return Math.floor(Math.abs(num) / Math.pow(10,index)) % 10;
}
//console.log(getDigit(12345, 0));//5 => because we starting to count at last digit
//console.log(getDigit(12345, 1));//4 and at last
//console.log(getDigit(12345, 4));//1


//#2 helper function should return the number of digits in num
function digitCount(num){
    if(num === 0)return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
//console.log(digitCount(5));//1 => 1 digit
//console.log(digitCount(56));//2
//console.log(digitCount(890));//3
//console.log(digitCount(7323));//4

//#3 helper function should take given an array of numbers,and return the number
//of digits in the largest numbers in the list
function mostDigits(nums){
    let maxDigit = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigit = Math.max(maxDigit,digitCount(nums[i]));
    }
    return maxDigit;
}
//console.log(mostDigits([567,24,1000]));//4 => the largest digit in the array 4(1000)


//A main radixSort function
function radixSort (nums){
    let maxDigitCount = mostDigits(nums);
    //loop for each digit
    for(let k = 0; k < maxDigitCount; k++) {
        //create 10 empty buckets []
        let digitBucket = Array.from({length: 10}, () => []);
        //loop for each number
        for(let i = 0; i < nums.length; i++){
            //take the digit and put the correct bucket
            let digit = getDigit(nums[i],k);
           digitBucket[digit].push(nums[i]);
        }
        //concat all arrays in one array
    nums = [].concat(...digitBucket);
    }
    return nums;
}
console.log(radixSort([23,1456,2,999,24,6,11356]));//[2,6,23,24,999,1456,11356]



