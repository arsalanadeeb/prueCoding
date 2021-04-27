// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4. Given this implementation of cons:

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
//Implement car and cdr.

//A pair in python is like Pair("a", 1) key value pair like object in JS.
function pair (a,b){
    this.a=a;
    this.b=b;
}

function cons(a,b){
return new pair(a,b);
}
//returns the first element of pair
function car(pair){
return pair[Object.keys(pair)[0]];
}
//return last element of a pair
function cdr(pair){
    return pair[Object.keys(pair)[1]];
    }
console.log(car(cons(3,4)));
console.log(cdr(cons(3,4)));
