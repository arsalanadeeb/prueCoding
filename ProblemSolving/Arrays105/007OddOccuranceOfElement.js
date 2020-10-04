let test=[1,2,3,1,2,3,1,5,6,7,8,9,7,6,5,9,3]

function oddOccuringElement(array){
let hashTable={};
for(let i=0;i<array.length;i++){
    if(hashTable[array[i]]){
    }
    else{
        hashTable[array[i]] =0;
    }
    hashTable[array[i]]++;
}
let result =[];
let hashKeys=Object.keys(hashTable);
for(let j=0;j<hashKeys.length;j++){
    if(hashTable[hashKeys[j]]%2){
        result.push(parseInt(hashKeys[j]))
    }
}
return result;
}

console.log(oddOccuringElement(test));
