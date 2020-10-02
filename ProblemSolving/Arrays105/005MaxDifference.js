//Maximum difference between two elements such that larger element appears after the smaller number

let test =[2, 3, 10, 6, 4, 8, 1];
// answer is 8

// given an array consist price of stocks give is the time stamp when we shoul buy the stock so that and sell in future
// so that profit will be maxium note index are time stamp

//Time:-O(n^2) Space:-O(1)
let neiveApproach1=(array)=>{
let result =[];
let max=0;
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[j]-array[i]>max){
            max=array[j]-array[i];
            if(result.length){
                result.pop();
            }
            result.push([array[i],array[j],`${12+i}-buy time ${12+j}-sell Time`]);
        }
    }
}
return result;
}

console.log(neiveApproach1(test));

//Time:-O(n) Space:-O(n)
//first create the diff array then find maximum sum of sub array that sum is the 