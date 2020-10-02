//Mejority element is a element in the array that is present more than n/2 times


//Approach 1  O(nlogn)
function getMejorityEliment1(array) {
    let sortedArray = array.sort()  //First sort the array (bottle neck)
    let n = sortedArray.length
    
    for (let i = 0; i < n / 2; i++) {
        if (sortedArray[i] === sortedArray[i + parseInt(n / 2)]) {
            return sortedArray[i];
        }
    }
    return "no Majority element found"
}

// Moors voting algorithm for unsorted array O(n) two step process find potential mejority element and then check if that element occured n/2 times or not.

function findPotentialMejorityElement(array){
   if(Array.isArray(array) && array.length){
    let voter=array[0];
    let votes=1;
    for(let i=1;i<array.length;i++){
        if(voter !== array[i] ){
           if(votes>0){
            votes--;
           }
           else{
               voter=array[i];
               votes=1;
           }
        }
        else{
           votes++; 
        }
    }
    return voter;
   }
}

function checkPotentialIsMajor(array,major){

    let count=0;
    for(let i=0 ;i<array.length;i++){
        if(array[i]===major){
            count++;
        }
    }
    return count>parseInt(array.length/2)?true:false;
}
let test =[2, 2, 3, 4, 2, 7, 8, 2, 2];
let pm=findPotentialMejorityElement(test);
let isPMMajor=checkPotentialIsMajor(test,pm);
console.log(pm,isPMMajor)
