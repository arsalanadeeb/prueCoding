// Binary search can give O(logn) worst time complexity 
// It works for only sorted Array

let test=[1,2,3,4,5,6,7,8,9,10];

// Recursive Version

let recursiveBinarySearch=(array,left,right,target)=>{
    if(right<left || left>right){
        return "Search Array do not contain"+ target;
    }
    else{
        let mid=(left+right)/2;
        mid=parseInt(mid);
        if(array[mid]===target){
            return mid;
        }
        if(target<array[mid]){
            return recursiveBinarySearch(array,left,mid-1,target);
        }
        if(target>array[mid]){
            return recursiveBinarySearch(array,mid+1,right,target);
        }
    }
}

//console.log("Result in on Index",recursiveBinarySearch(test,0,test.length-1,12));


let iterativeBinarySearch=(array,left,right,target)=>{
    
    while(left<right){
        let mid=(left+right)/2;
        mid=parseInt(mid);
        if(target===array[left]){
            return left;
        }
        if(target===array[right]){
            return right;
        }
        if(array[mid]===target){
          return mid;
        }
        if(target<array[mid]){
          right=mid-1;
        }
        if(target>array[mid]){
            left=mid+1;
        }
    }
    return -1;
}

console.log("Result in on Index",iterativeBinarySearch(test,0,test.length-1,10));