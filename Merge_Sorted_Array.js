var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);

//Explanation and theory

// Two-Pointer Approach:

// The use of two pointers (i and j) to iterate through the arrays efficiently.
// The pointers move from the end of the arrays towards the beginning to avoid overwriting elements in nums1 that haven't been processed yet.
// In-Place Modification:

// The solution modifies the nums1 array in-place without using extra space, making it an efficient algorithm in terms of space complexity.
// Looping and Conditional Statements:

// The use of a while loop to iterate through the arrays while certain conditions are met.
// Conditional statements (if and else) are used to compare elements from both arrays and determine the order in which they should be placed in the merged array.
// Variable Declaration (let, var):

// The use of let to declare variables (i, j, and k) in the block scope.
// In modern JavaScript, it's recommended to use let over var for variable declarations to avoid certain scoping issues.
// Function Declaration:

// The problem is solved using a function (merge) that takes parameters and performs the merging operation.
// Array Indexing:

// Manipulating array indices (nums1[i], nums1[k], etc.) to access and modify elements in the arrays.
// Variable Naming:

// Meaningful variable names (i, j, k, nums1, nums2, m, n) that make the code more readable and understandable.
// Console Output:

// Using console.log to output the result and check the correctness of the algorithm.
