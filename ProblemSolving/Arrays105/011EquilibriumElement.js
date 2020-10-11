// Equilibrium index is such an element whose sum till index and after that index till end is equal.

let test=[-7, 1, 5, 2, -4, 3,0 ];

function findEquilibrium (array){
    let leftSum=[];
    let rightSum=[];
    let sumL=0;
    let sumR=0;
    for(let i=0;i<array.length;i++){
      sumL+=array[i];
      leftSum[i]=sumL;
    }
    for(let j=array.length-1;j>0;j--){
      sumR+=array[j];
      rightSum[j]=sumR;
    }
    for(let k=0;k<array.length;k++){
      if(leftSum[k]==rightSum[k+1]){
        return k;
      }
    }
    return "No Equilibriun element found";
}

console.log(findEquilibrium(test));