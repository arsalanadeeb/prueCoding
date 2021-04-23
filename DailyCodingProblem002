
//This problem was asked by Uber.

//Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

//For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].


let array=[1,2,3,4,5];

function mulExceptI(array){
  let mulOfAll=1;
  let result=[];
    for(let i=0;i<array.length;i++){
    mulOfAll*=array[i]; 
    }
    for(let j=0;j<array.length;j++){
    result[j]=mulOfAll/array[j]; 
    }
    return result;
}

 mulExceptI(array);
