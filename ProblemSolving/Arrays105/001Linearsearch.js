//Search algorithm for unsorted list
//sql select statement and search engine are the examples where we search
// Worst case O(n)

let timer =require("../utilities");
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function linearSerach(array, target) {
    for (let i = 0; i < array.length; i++) {
        timer(i,2)
        if (target == array[i]) {
            return i;
        }
    }
    return -1;
}
console.log(linearSerach(testArray, 5));




