
/* Solution 1:

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return undefined; // No second largest element
  }

  const uniqueNumbers = [...new Set(arr)]; // Filter out duplicates
  uniqueNumbers.sort((a, b) => b - a); // Sort in descending order

  return uniqueNumbers[1];
}

const numbers = [10, 5, 8, 20, 7];
const secondLargest = findSecondLargest(numbers);

console.log("Second largest number:", secondLargest);

*/

// Solution 2:

function findSecondLargest(arr) {
    if (arr.length < 2) {
      return undefined; // No second largest element
    }
  
    const max = Math.max(...arr); // Find the maximum value
  
    let secondLargest = -Infinity;
  
    for (const num of arr) {
      if (num !== max && num > secondLargest) {
        secondLargest = num;
      }
    }
  
    return secondLargest !== -Infinity ? secondLargest : undefined;
  }
  
  const numbers = [10, 5, 8, 20, 7];
  const secondLargest = findSecondLargest(numbers);
  
  console.log("Second largest number:", secondLargest);