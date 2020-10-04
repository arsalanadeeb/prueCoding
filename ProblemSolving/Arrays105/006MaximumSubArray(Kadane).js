//Maximum sub array problem is a classic cs problem

let test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function brute(array) {
    // this array will always be of size n(n+1)/2
    let sumOfSubArraysArray=[]  ;
    for(let i=0;i<array.length;i++){
        sumOfSubArraysArray.push(array[i]);
        let localSum=array[i];
        for(let j=i+1;j<array.length;j++){
            localSum+=array[j];
            sumOfSubArraysArray.push(localSum);
        }
    }
   return sumOfSubArraysArray.sort()[sumOfSubArraysArray.length-1];
}
// Majical O(n) Solution.
function kadanesAlgo(array) {
  let negInfinite = -1000000000;
  let maxElementHere = 0;
  let maxElementSoFar = negInfinite;
  for (let i = 0; i < array.length; i++) {
    maxElementHere = maxElementHere + array[i];
    if (maxElementHere < array[i]) {
      maxElementHere = array[i];
    }
    if (maxElementSoFar < maxElementHere) {
      maxElementSoFar = maxElementHere;
    }
  }
  return maxElementSoFar;
}
//console.log(kadanesAlgo(test));
//console.log(brute(test))


module.exports.kadanesAlgo=kadanesAlgo;