var removeElement = function (nums, val) {
  let i = nums.length;

  for (i < nums.length - 1; i >= 0; i--)
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  return nums.length;
};

// Array Manipulation:

// Understanding how to manipulate arrays is fundamental. In this case, you're using the splice method to remove elements from the array.
// Time Complexity Analysis:

// The time complexity of this solution is O(n^2) in the worst case, where n is the length of the array. The splice operation has a time complexity of O(n) in the worst case, and since it's called within a loop, the overall complexity becomes O(n^2). Learning how to analyze and optimize time complexity is a crucial skill in DSA.
// Space Complexity:

// The solution modifies the array in place and doesn't use additional space, resulting in a space complexity of O(1). Understanding space complexity and choosing algorithms that meet specific space constraints is an important aspect of DSA.
// Looping and Iteration:

// The use of a for loop for array iteration is a common technique in DSA. Understanding how loops work, their syntax, and how to effectively use them is a fundamental skill.
// Conditional Statements:

// The if statement is used to check whether the current element is equal to the target value. Conditional statements are fundamental for making decisions in algorithms based on certain conditions.
// In-Place Algorithms:

// The fact that the solution modifies the array in place is a characteristic of in-place algorithms. Learning when to use in-place algorithms versus algorithms that create new data structures is important for optimizing space complexity.
// Understanding Indices and Array Elements:

// Manipulating array indices (i) and elements (nums[i]) is a common task in array-related problems. Understanding how to work with array indices is crucial in DSA.
// Algorithm Optimization:

// While the provided solution is correct, it's not the most efficient for this problem. There are more efficient algorithms with a time complexity of O(n), such as the "two-pointer" approach, where elements are copied without the need for repeated removal operations. Learning to optimize algorithms for better performance is a key skill.
