// Given an array find the a pair whose sum is closest to zero. 



//let test=[0,59,-9,69,-79,84];
let test=[1, 60, -10, 70, -80, 85];

const closestToZero=(array)=>{
    let sortedArray= array.sort();  //Assume Quick Sort
    console.log(sortedArray);
    let INT_MAX=999999;//infinite
    let leftPointer=0;
    let rightPointer=sortedArray.length-1;
    let resultLeft=leftPointer;
    let resultRight=rightPointer;
    let sum= sortedArray[leftPointer]+sortedArray[rightPointer];
    let currentSum=sum;
    while(leftPointer<rightPointer){
        console.log(sortedArray[leftPointer],sortedArray[rightPointer],currentSum,sum);
        currentSum= sortedArray[leftPointer]+sortedArray[rightPointer];
        if(currentSum>0){
            rightPointer--;
        }
        else{
            leftPointer++;
        }
        if(Math.abs(currentSum)<Math.abs(sum)){
            sum=currentSum;
            resultLeft=leftPointer;
            resultRight=rightPointer;
        }
    }
    return sum;
}
console.log(closestToZero(test));