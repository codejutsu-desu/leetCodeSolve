let candidate;
let count = 0;

for (let num of nums) {
  if (count === 0) {
    candidate = num;
  }

  count += num === candidate ? 1 : -1;
}

return candidate;

// Summary of the Solution:
// Boyer-Moore Voting Algorithm:

// Initialize candidate and count.
// Iterate through the array:
// If count is zero, set the current element as the candidate.
// If the current element matches the candidate, increment count; otherwise, decrement count.
// The final candidate is a potential majority element.
// Verify the actual count of the candidate in a separate pass.
// Example:

// Given array: [3, 3, 4, 2, 4, 4, 2, 4, 4].
// After the algorithm, the candidate is 4.
// Counting Occurrences:

// Count the occurrences of the candidate in the array to confirm it as the majority element.
// Relevant DSA Concepts:
// Arrays:

// Understanding how to traverse an array and perform operations on its elements.
// Voting Algorithm:

// The Boyer-Moore Voting Algorithm is a specific algorithmic technique for finding a majority element efficiently in a single pass.
// Time and Space Complexity:

// Analyzing the time complexity of the algorithm (linear time) and its space complexity (constant space).
// Divide and Conquer:

// While not explicitly used in this algorithm, the idea of reducing a problem into smaller subproblems is a common strategy in algorithm design.
// Hashing (for alternative approaches):

// Hashing could be used to count occurrences, though it might require additional space.
// Algorithmic Thinking:

// Developing an algorithmic mindset to efficiently solve problems, especially in scenarios where constraints are given.
