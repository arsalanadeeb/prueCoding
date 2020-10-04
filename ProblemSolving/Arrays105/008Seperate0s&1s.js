//generate a resultant array whose Os are at left and 1s are at right
let test =[0,0,1,0,1,1,1,0,0,0,0,1];

//Two pointer approch to solve this problem one can replace recursive call to while(left<right)

let seperate0sN1s=(array,left,right)=>{
  if(right<=left){
    return 0;
  }
  if(left<=right){
      while(array[left]===0){
        left++;
      }
      while(array[right]===1){
        right--;
      }
     if(left<right){
        array[left]=0;
        array[right]=1;
     }
      seperate0sN1s(array,left,right);
  }
   return array
}
console.log(seperate0sN1s(test,0,test.length-1));

