//given an array and a target sum find all the pairs in the array whose sum is equal to given target
// O(n) solution

let test=[0, -1, 2, -3, 1,-4]

function sumOfPairInArray(array,target){
    let result=[];
    let hashmap={};
    for(let i=0;i<test.length;i++){
        hashmap[test[i]]=1;
        }
        for(let j=0;j<test.length;j++){
            if(hashmap[target-test[j]]){
                target>test[j]? result.push([test[j],target-test[j]]):null;
            }
        }
       return result;
}

console.log(sumOfPairInArray(test,-2));