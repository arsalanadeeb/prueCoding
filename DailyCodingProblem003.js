
//Problem for day 3

//This problem was asked by Google.

//Given the root to a binary tree, 
//implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.


//contructor function to create node
function node(data, left, right) {
    this.data = data;
    this.left = left ? left : null;
    this.right = right ? right : null;
}
//node creator 
function createNode(data, left, right) {
    return new node(data, left, right);
}
//function to find a parent node for attaching elements from array one by one RECURSIVE
function getParentNodeRef(root, element) {
    if (!root) {
        return;
    }
    if (!root.left && !root.right) {
        return root;
    }
    if (element < root.data) {
        if (!root.left) {
            return root;
        }
        let temp = getParentNodeRef(root.left, element);
        return temp ? temp : root;
    }
    else {
        if (!root.right) {
            return root;
        }
        let temp = getParentNodeRef(root.right, element);
        return temp ? temp : root;
    }

}
//function to create a BST from a given array here one can do array.join() or string.split(',') to convert array to string and Vice a versa
function deserialiseStringToBST(array) {
    let root;
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            root = createNode(array[0]);
        }
        else {
            let parent = getParentNodeRef(root, array[i]);
            if (array[i] < parent.data) {
                parent.left = createNode(array[i]);
            }
            else {
                parent.right = createNode(array[i]);
            }
        }
    }
    return root;
}
//function to create serialize string from a BST.
function serializeBSTToString(bstRoot) {
    let resultString = '';
    function inOrderTraversal(node) {
        if (!node) {
            return;
        }
        resultString = resultString ? `${resultString},${node.data}` : `${node.data}`;
        inOrderTraversal(node.left);
        inOrderTraversal(node.right);
    }
    inOrderTraversal(bstRoot);
    return resultString;
}
//Test data and consoling o/p for testing.
let testArray1 = [8, 3, 1, 6, 4, 7, 10, 14, 13];
let testArray2 = [11, 7, 5, 9, 8, 10, 12, 4, 13];
let bst = deserialiseStringToBST(testArray2);
let bstJSONString = JSON.stringify(bst);
console.log(bstJSONString);
console.log(serializeBSTToString(bst));
//console.log(serializeBSTToString(deserialiseStringToBST('8,3,1,6,4,7,10,14,13')));
