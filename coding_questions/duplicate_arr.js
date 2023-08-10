let arr = [1,2,3,4,5,5,77,77,1,2,9];

//Solution 1
let arr1 = arr.filter((ele, index, arr1) => arr1.indexOf(ele) == index);
console.log(...arr1); // 1 2 3 4 5 77 9

//Solution 2
let arr2 = new Set([...arr])
console.log(...arr2); // 1 2 3 4 5 77 9